import Config from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createCatalogRestaurant = (restaurant) => `  
  <div>      
    <div class="restaurant">
      <div class="rating_city">
        <p>Rating : ${restaurant.rating}</p>
        <p>${restaurant.city}</p>
      </div>
      <h2>${restaurant.name}</h2>
      <a href="/#/detail/${restaurant.id}"><img class="lazyload" alt="${restaurant.name}" data-src="${Config.BASE_IMAGE_URL + restaurant.pictureId}"></a>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createFavoriteRestaurant = (restaurant) => `  
  <div>      
    <div class="restaurant">
      <div class="rating_city">
        <p>Rating : ${restaurant.rating}</p>
        <p>${restaurant.city}</p>
      </div>
      <h2>${restaurant.name}</h2>
      <a href="/#/detail/${restaurant.id}"><img class="lazyload" alt="${restaurant.name}" src="${Config.BASE_IMAGE_URL + restaurant.pictureId}"></a>
    </div>
  </div>
`;

const createDetailCatalogRestaurant = (restaurant) => `
<div>
  <h2 class="restaurant_name">Restaurant : <span>${restaurant.name}</span></h2>
  <img class="restaurant_img" alt="${restaurant.name}" src="${Config.BASE_IMAGE_URL + restaurant.pictureId}" />
</div>
<div>
  <h3>INFORMATION</h3>
  <div class="restaurant_detail_content">
    <div class="restaurant_info_tempat">
      <div>
        <h4>Alamat</h4>
        <p>${restaurant.address}</p>
      </div>
      <div>
        <h4>Kota</h4>
        <p>${restaurant.city}</p>
      </div>
    </div>
    <div class="restaurant_info_menu">
      <div>
        <h4>Menu Makanan</h4>
        <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
      </div>
      <div>
        <h4>Menu Minuman</h4>
        <p>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
      </div>
    </div>

    <h4>Customer Reviews</h4>
    ${restaurant.customerReviews
    .map(
      (review) => `
    <div class="detail_reviews">
      <p>Review : <span>"${review.review}"</span></p>
      <p>${review.name} -${review.date}</p>
    </div>
    `,
    )
    .join('')}
  </div>
</div>
<div class="restaurant_overview">
  <h3>Description</h3>
  <p>${restaurant.description}</p>
</div>
`;

const createAddButtonTemplate = () => `
<button aria-label="tambah ke favorite" id="add-button" class="addButton">
  <i class="fa fa-plus-circle" aria-hidden="true"></i>
</button>
`;

const createAddedButtonTemplate = () => `
<button aria-label="hapus dari favorite" id="add-button" class="addButton">
  <i class="fa fa-check-circle" aria-hidden="true"></i>
</button>
`;

const createLoading = () => `
<div class="loading">
  <img src="images/loading-gif.webp" alt="loading"/>
</div>
`;

export {
  createCatalogRestaurant,
  createFavoriteRestaurant,
  createDetailCatalogRestaurant,
  createAddButtonTemplate,
  createAddedButtonTemplate,
  createLoading,
};
