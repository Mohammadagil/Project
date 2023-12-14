class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this.clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchInput').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            .form-control{
                border-radius: 3px;
                border:1px solid;
                padding:3px;
            }
            .btn{
                background-color:rgb(100, 194, 100);
                border:1px solid;
                border-radius: 3px;
                padding:2px;
                box-shadow: 1px 1px 3px 0.3px rgba(20, 19, 19);
            }
        </style>
        <form>
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" id="searchInput">
            <button class="btn" type="button" id="searchButton">Search</button>
        </form>
       `;

    this.shadowDOM.querySelector('#searchButton').addEventListener('click', this.clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
