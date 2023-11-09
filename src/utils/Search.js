import { DURATION_SHORT } from './constants';

class Search {
  constructor(itemsList) {
    this._itemsList = itemsList;
  }

  //проверка на короткометражку
  _isSaved(status, items) {
    return status ? items.filter(item => item.saved === status) : items
  }

  //проверка на короткометражку
  _isSelecteBox(value) {
    return value ? this._itemsList.filter(item => item.userId === Number(value)) : this._itemsList
  }

  /**
     * Обработчик поиска фильмов
     * @param {string} text - тектс поиска.
     * @param {string} statusCheckbox - состояние чекбокса.
     * @returns {object} - отфильтрованный список
     */
  search(text, status, value) {
    const searchText = text.toLowerCase()
    return this._isSaved(status, this._isSelecteBox(value)).filter(item => item.title.toLowerCase().includes(searchText));
  };
}

export default Search