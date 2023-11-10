export const BASE_URL = 'https://jsonplaceholder.typicode.com';

//Количество отображаемых карточек с фильмами при разных разрешениях экрана
export const POSTS_S = 10;
export const POSTS_M = 20;
export const POSTS_L = 50;
export const POSTS_XL = 100;

//Именя LocalStorage для общих фильмов
export const moviesLocalStorageNames = {
  localMovies: 'beatfilmMovies',
  moviesResalt: 'moviesResalt',
  moviesSearchText: 'moviesSearchText',
  moviesStatusCheckbox: 'moviesStatusCheckbox'
}

//Именя LocalStorage для сохраненных фильмов
export const savedMoviesLocalStorageNames = {
  localMovies: 'savedMovies',
  moviesResalt: 'savedMoviesResalt',
  moviesSearchText: 'savedMoviesSearchText',
  moviesStatusCheckbox: 'savedMoviesStatusCheckbox'
}