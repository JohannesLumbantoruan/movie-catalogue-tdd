class FavoriteMovieShowPresenter {
    constructor({ view, favoriteMovies }) {
        this._view = view;
        this._favoriteMovies = favoriteMovies;

        this._showFavoriteMovies();
    }

    _displayMovies(movies) {
        this._view.showFavoriteMovies(movies);
    }

    async _showFavoriteMovies() {
        const movies = await this._favoriteMovies.getAllMovies();

        this._displayMovies(movies);
    }
}

export default FavoriteMovieShowPresenter;