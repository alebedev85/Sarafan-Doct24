import { DURATION_SHORT } from './constants';

class Search {
  constructor(itemsList) {
    this._itemsList = itemsList;
  }

  //проверка на короткометражку
  _isShort(status, items) {
    return status ? items.filter(item => item.duration <= DURATION_SHORT) : items
  }

  /**
     * Обработчик поиска фильмов
     * @param {string} text - тектс поиска.
     * @param {string} statusCheckbox - состояние чекбокса.
     * @returns {object} - отфильтрованный список
     */
  search(text, statusCheckbox) {
    const searchText = text.toLowerCase()
    return this._isShort(statusCheckbox, this._itemsList).filter(movie => Object.values(movie)
      .some(value => typeof value === "string" ? value.toLowerCase().includes(searchText) : value === searchText));
  };
}

export default Search