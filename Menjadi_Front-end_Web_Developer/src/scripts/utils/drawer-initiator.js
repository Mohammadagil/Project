const DrawerInitiator = {
  init({
    button, drawer, content, drawerNav, hero,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, drawerNav);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawerByContent(event, drawer, drawerNav);
    });

    hero.addEventListener('click', (event) => {
      this._closeDrawerByHero(event, drawer, drawerNav);
    });
  },

  _toggleDrawer(event, drawer, drawerNav) {
    event.stopPropagation();
    drawer.classList.toggle('show');
    drawerNav.classList.toggle('show');
  },

  _closeDrawerByContent(event, drawer, drawerNav) {
    event.stopPropagation();
    drawer.classList.remove('show');
    drawerNav.classList.remove('show');
  },

  _closeDrawerByHero(event, drawer, drawerNav) {
    event.stopPropagation();
    drawer.classList.remove('show');
    drawerNav.classList.remove('show');
  },
};

export default DrawerInitiator;
