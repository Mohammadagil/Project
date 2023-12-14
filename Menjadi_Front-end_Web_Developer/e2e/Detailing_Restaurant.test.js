// eslint-disable-next-line no-undef
Feature('Detailing Restaurant');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/');
});

// eslint-disable-next-line no-undef
Scenario('Click img restaurant to see detail of restaurant', ({ I }) => {
  I.seeElement('.restaurant a');

  // eslint-disable-next-line no-undef
  I.click(locate('.restaurant a').first());

  I.seeElement('.restaurant_detail');
  I.seeElement('.restaurant_name');
  I.seeElement('.restaurant_img');

  I.see('INFORMATION', 'h3');

  I.seeElement('.restaurant_info_tempat');
  I.seeElement('.restaurant_info_menu');

  I.see('Customer Reviews', '.restaurant_detail_content h4');

  I.seeElement('.detail_reviews');
  I.seeElement('.restaurant_overview');
});
