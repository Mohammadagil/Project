const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Restaurant');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#favorite-restaurant-not-found');
  I.see('Tidak ada restaurant yang ditambahkan pada favorite', '#text-favorite-restaurant-not-found');
});

// eslint-disable-next-line no-undef
Scenario('liking one restaurant and check it displayed in favorite', async ({ I }) => {
  I.see('Tidak ada restaurant yang ditambahkan pada favorite', '#text-favorite-restaurant-not-found');
  I.amOnPage('/');

  I.seeElement('.restaurant a');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.restaurant h2').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  // eslint-disable-next-line no-undef
  I.click(locate('.restaurant a').first());

  I.seeElement('#add-button');
  I.click('#add-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.catalog-restaurant');
  const likedRestaurantName = await I.grabTextFrom('.restaurant h2');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

// eslint-disable-next-line no-undef
Scenario('unliking one restaurant and check it removed in favorite', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant a');
  // eslint-disable-next-line no-undef
  I.click(locate('.restaurant a').first());

  I.seeElement('#add-button');
  I.click('#add-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant a');
  // eslint-disable-next-line no-undef
  I.click(locate('.restaurant a').first());

  I.seeElement('#add-button');
  I.click('#add-button');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant yang ditambahkan pada favorite', '#text-favorite-restaurant-not-found');
});
