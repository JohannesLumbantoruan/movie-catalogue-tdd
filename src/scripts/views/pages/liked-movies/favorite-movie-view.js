import { createMovieItemTemplate } from '../../templates/template-creator';

class FavoriteMovieView {
    getTemplate() {
        return `
            <div class="content">
                <input id="query" type="text">
                <h2 class="content__heading">Your Liked Movies</h2>
                <div id="movies" class="movies">
                </div>
            </div>
        `;
    }

    // getFavoriteMovieTemplate() {
    //     return `
    //         <div class="content">
    //             <h2 class="content__heading">Your Liked Movies</h2>
    //             <div id="movies" class="movies">
    //             </div>
    //         </div>
    //     `;
    // }

    /*
    showMovies(movies) {
        let html;

        if (movies.length) {
            html = movies.reduce(
                (carry, movie) => carry.concat(createMovieItemTemplate(movie)),
                ''
            );
        } else {
            html = this._getEmptyMovieTemplate();
        }

        document.querySelector('.movies').innerHTML = html;

        // document
        //     .querySelector('#movie-search-container')
        //     .dispatchEvent(new Event('movies:searched:updated'));

        document.querySelector('#movies').dispatchEvent(new Event('movies:updated'));
    }
    */

    showFavoriteMovies(movies) {
        let html;

        if (movies.length) {
            html = movies.reduce((carry, movie) => carry.concat(createMovieItemTemplate(movie)), '');
        } else {
            html = this._getEmptyMovieTemplate();
        }

        document.querySelector('#movies').innerHTML = html;
        document.querySelector('#movies').dispatchEvent(new Event('movies:updated'));
    }

    _getEmptyMovieTemplate() {
        return '<div class="movie-item__not-found">Tidak ada film untuk ditampilkan</div>';
    }

    runWhenUserIsSearching(callback) {
        document.querySelector('#query').addEventListener('change', (event) => {
            callback(event.target.value);
        });
    }
}

export default FavoriteMovieView;