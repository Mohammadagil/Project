import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createFavoriteRestaurant } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content-title">
        <h3>Restoran Favorite Anda</h3>
    </div>
    <div class="content-main">
        <div class="catalog-restaurant" id="catalogRestaurant"></div>
        <div id="favorite-restaurant-not-found" class="catalog-restaurant-null"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllResto();
    const restaurantsContainer = document.querySelector('#catalogRestaurant');
    const restaurantContainerNull = document.querySelector('.catalog-restaurant-null');

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createFavoriteRestaurant(restaurant);
      });
    } else {
      restaurantContainerNull.innerHTML = '<p id="text-favorite-restaurant-not-found">Tidak ada restaurant yang ditambahkan pada favorite</p> ';
    }
  },
};

export default Favorite;
