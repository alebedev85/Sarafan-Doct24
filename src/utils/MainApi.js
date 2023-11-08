const BASE_URL = 'https://jsonplaceholder.typicode.com'

class Api {
  constructor(url) {
    this._url = url;
    this._token = '';
  }


  // Собираем шаблон запроса //

  /**
   * Создаем заголовки для запроса
   * @returns объект с заголовками
   */
  _getHeaders() {
    return {
      "Content-Type": 'application/json'
    };
  }

  /**
   * Распарсинг ответа сервера
   * @returns json
   */
  _getJson(res) {
    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}`)
    }
    return res.json()
  }


  /**
   * Fetch запрос
   * @param {string} url - url для запроса.
   * @param {object} options - объект с  method, headers, body.
   * @returns json
   */
  _request(url, options) {
    return fetch(url, options).then(this._getJson)
  }


  // Запросы //

  /**
   * Получение всех постов
   * @returns json с данными текущего пользователя
   */
  getPosts() {
    return this._request(`${this._url}/posts`, {
      method: 'GET',
      headers: this._getHeaders()
    });
  }

  /**
   * Получение списка пользователей
   * @returns json с данными текущего пользователя
   */
  getUsers() {
    return this._request(`${this._url}/users`, {
      method: 'GET',
      headers: this._getHeaders()
    });
  }
}

export const api = new Api(BASE_URL);

