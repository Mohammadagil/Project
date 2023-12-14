import CatalogRestaurant from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': CatalogRestaurant,
  '/home': CatalogRestaurant,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
