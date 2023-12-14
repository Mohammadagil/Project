import RestaurantSource from '../../data/restaurant-source';
import { createCatalogRestaurant, createLoading } from '../templates/template-creator';

const CatalogRestaurant = {
  async render() {
    return `
    <div id="loading"></div>
    <div class="content-title">
        <h3>Katalog Restoran</h3>
    </div>
    <div class="content-main">
        <div class="catalog-restaurant" id="catalogRestaurant"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#catalogRestaurant');
    const loading = document.querySelector('#loading');

    loading.innerHTML = createLoading();

    try {
      const restaurants = await RestaurantSource.homeRestaurant();

      loading.style.display = 'none';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createCatalogRestaurant(restaurant);
      });
    } catch (error) {
      loading.style.display = 'none';
      const errorMessage = 'Tidak dapat memuat data catalog restoran';
      // eslint-disable-next-line no-alert
      window.alert(errorMessage);
    }
  },
};

export default CatalogRestaurant;
