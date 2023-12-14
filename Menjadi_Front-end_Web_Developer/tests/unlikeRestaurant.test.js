import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

// eslint-disable-next-line no-undef
describe('Unliking A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="addButtonContainer"></div>';
  };

  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.putResto({ id: 1 });
  });

  // eslint-disable-next-line no-undef
  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteResto(1);
  });

  // eslint-disable-next-line no-undef
  it('should show the unlike button when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="hapus dari favorite"]')).toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should not show the like button when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="tambah ke favorite"]')).toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('[aria-label="hapus dari favorite"]').dispatchEvent(new Event('click'));

    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantIdb.getAllResto()).toEqual([]);
  });

  // eslint-disable-next-line no-undef
  it('should not throw error when user click unlike button if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteRestaurantIdb.deleteResto(1);

    document.querySelector('[aria-label="hapus dari favorite"]').dispatchEvent(new Event('click'));

    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantIdb.getAllResto()).toEqual([]);
  });
});
