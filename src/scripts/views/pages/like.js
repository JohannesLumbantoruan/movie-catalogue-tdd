/* eslint-disable no-new */
import FavoriteMovieIdb from '../../data/favorite-movie-idb';
// import { createMovieItemTemplate } from '../templates/template-creator';
import FavoriteMovieView from './liked-movies/favorite-movie-view';
import FavoriteMovieShowPresenter from './liked-movies/favorite-movie-show-presenter';
import FavoriteMovieSearchPresenter from './liked-movies/favorite-movie-search-presenter';

const view = new FavoriteMovieView();

const Like = {
  async render() {
    // return `
    //   <div class="content">
    //     <h2 class="content__heading">Your Liked Movie</h2>
    //     <div id="movies" class="movies">
    //     </div>
    //   </div>
    // `;

    return view.getTemplate();
  },

  async afterRender() {
    // const movies = await FavoriteMovieIdb.getAllMovies();
    // const moviesContainer = document.querySelector('#movies');
    // movies.forEach((movie) => {
    //   moviesContainer.innerHTML += createMovieItemTemplate(movie);
    // });

    new FavoriteMovieShowPresenter({ view, favoriteMovies: FavoriteMovieIdb });
    new FavoriteMovieSearchPresenter({ view, favoriteMovies: FavoriteMovieIdb });
  },
};

export default Like;
