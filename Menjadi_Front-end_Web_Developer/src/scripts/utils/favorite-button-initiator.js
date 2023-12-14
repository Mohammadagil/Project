import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createAddButtonTemplate, createAddedButtonTemplate } from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
  async init({ addButtonContainer, restaurant }) {
    this._addButtonContainer = addButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestoExist(id)) {
      this._renderAdded();
    } else {
      this._renderAdd();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestaurantIdb.getResto(id);
    return !!resto;
  },

  _renderAdd() {
    this._addButtonContainer.innerHTML = createAddButtonTemplate();

    const addButton = document.querySelector('#add-button');
    addButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putResto(this._restaurant);
      this._renderButton();
    });
  },

  _renderAdded() {
    this._addButtonContainer.innerHTML = createAddedButtonTemplate();

    const addButton = document.querySelector('#add-button');
    addButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteResto(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
