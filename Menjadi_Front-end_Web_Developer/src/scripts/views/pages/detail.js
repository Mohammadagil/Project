import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createDetailCatalogRestaurant, createLoading } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="loading"></div>
    <div class="restaurant_detail" id="restaurantDetail"></div>
    <div id="addButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurantDetail');
    const loading = document.querySelector('#loading');

    loading.innerHTML = createLoading();

    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);

      loading.style.display = 'none';
      restaurantContainer.innerHTML = createDetailCatalogRestaurant(restaurant);

      FavoriteButtonInitiator.init({
        addButtonContainer: document.querySelector('#addButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
        },
      });
    } catch (error) {
      loading.style.display = 'none';
      const errorMessage = 'Tidak dapat memuat data detail restoran';
      // eslint-disable-next-line no-alert
      window.alert(errorMessage);
    }
  },
};

export default Detail;
