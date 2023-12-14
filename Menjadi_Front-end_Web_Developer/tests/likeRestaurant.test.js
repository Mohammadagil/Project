import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

// eslint-disable-next-line no-undef
describe('Liking A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="addButtonContainer"></div>';
  };

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  // eslint-disable-next-line no-undef
  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="tambah ke favorite"]')).toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="hapus dari favorite"]')).toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#add-button').dispatchEvent(new Event('click'));

    const resto = await FavoriteRestaurantIdb.getResto(1);
    // eslint-disable-next-line no-undef
    expect(resto).toEqual({ id: 1 });

    await FavoriteRestaurantIdb.deleteResto(1);
  });

  // eslint-disable-next-line no-undef
  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteRestaurantIdb.putResto({ id: 1 });
    document.querySelector('#add-button').dispatchEvent(new Event('click'));

    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantIdb.getAllResto()).toEqual([{ id: 1 }]);

    await FavoriteRestaurantIdb.deleteResto(1);
  });

  // eslint-disable-next-line no-undef
  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector('#add-button').dispatchEvent(new Event('click'));

    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantIdb.getAllResto()).toEqual([]);
  });
});
