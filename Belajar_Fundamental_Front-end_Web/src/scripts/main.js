import './components/search-bar';

const main = () => {
  const baseUrl = 'https://api.themoviedb.org/3';
  const apiKey = '43be4fe63618adbcfecfa300771e30ae';
  let action = '';

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  const renderAllMovies = (movies) => {
    const listMovieElement = document.querySelector('#listMovie');
    const movieTitleElement = document.querySelector('#movieTitle');
    movieTitleElement.textContent = 'All Movies';
    listMovieElement.innerHTML = '';

    switch (action) {
      case 'topRated':
        movieTitleElement.textContent = 'Top Rated Movies';
        break;
      case 'upComing':
        movieTitleElement.textContent = 'Upcoming Movies';
        break;
      case 'inputSearch':
        movieTitleElement.textContent = 'Output Search';
        break;
      default:
        break;
    }

    if (movies.length === 0) {
      listMovieElement.innerHTML = `
        <div style="text-align:center; margin-top:20px;">
          <h3>Tidak ada hasil untuk pencarian Anda</h3>
        </div>
      `;
    } else {
      movies.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');
        movieCard.style.marginTop = '12px';
        movieCard.innerHTML = `
          <div class="card">
            <div class="card-body">
              <div class="title-movie">
                <h5 class="fs-semiBold">${movie.title}</h5>
              </div>
              <img src="https://image.tmdb.org/t/p/w400/${movie.poster_path}" alt="${movie.title}" style="max-height: 400px;"/>
            </div>
            <div class="rate">
              <h5>Rating : ${movie.vote_average}<h5>
            </div>
          </div>
        `;
        listMovieElement.appendChild(movieCard);
      });
    }
  };

  const getMovie = () => {
    fetch(`${baseUrl}/discover/movie?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderAllMovies(responseJson.results);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  document.addEventListener('DOMContentLoaded', () => {
    const topRatedButton = document.getElementById('topRated');
    const upComingButton = document.getElementById('upComing');
    const searchButton = document.querySelector('search-bar').shadowRoot.querySelector('#searchButton');

    topRatedButton.addEventListener('click', () => {
      action = 'topRated';
      fetch(`${baseUrl}/movie/top_rated?api_key=${apiKey}`)
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.error) {
            showResponseMessage(responseJson.message);
          } else {
            renderAllMovies(responseJson.results, action);
          }
        })
        .catch((error) => {
          showResponseMessage(error);
        });
    });

    upComingButton.addEventListener('click', () => {
      action = 'upComing';
      fetch(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.error) {
            showResponseMessage(responseJson.message);
          } else {
            renderAllMovies(responseJson.results);
          }
        })
        .catch((error) => {
          showResponseMessage(error);
        });
    });

    const inputSearch = (keyword) => {
      action = 'inputSearch';
      fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${keyword}`)
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.error) {
            showResponseMessage(responseJson.message);
          } else {
            renderAllMovies(responseJson.results, action);
          }
        })
        .catch((error) => {
          showResponseMessage(error);
        });
    };

    if (searchButton) {
      searchButton.addEventListener('click', () => {
        const searchInput = document.querySelector('search-bar').shadowRoot.querySelector('#searchInput').value;
        inputSearch(searchInput);
      });
    }

    getMovie();
  });
};

export default main;
