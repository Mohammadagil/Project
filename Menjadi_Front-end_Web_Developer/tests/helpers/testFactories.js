import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    addButtonContainer: document.querySelector('#addButtonContainer'),
    restaurant,
  });
};

export { createLikeButtonPresenterWithResto };
