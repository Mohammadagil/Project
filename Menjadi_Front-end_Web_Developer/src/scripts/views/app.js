import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, drawerNav, hero,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._drawerNav = drawerNav;
    this._hero = hero;

    this._appShell();
  }

  _appShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      drawerNav: this._drawerNav,
      hero: this._hero,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    const skipTo = document.querySelector('.skip-to-content');
    skipTo.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
    await page.afterRender();
  }
}

export default App;
