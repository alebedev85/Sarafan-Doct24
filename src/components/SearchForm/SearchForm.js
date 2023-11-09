import React, { useState, useEffect } from 'react';
import './SearchForm.scss';

import searchIcon from '../../images/search-icon.svg'

function SearchForm({ allUsers, onSearch, text, statusCheckbox, name }) {

  const [searchText, setSearchText] = useState(text || '');
  const [checkboxStatus, setCheckboxStatus] = useState(statusCheckbox || false);
  const [selectedName, setSelectedName] = useState(name || '');

  useEffect(() => {
    console.log(selectedName);
    onSearch(searchText, checkboxStatus, selectedName);
  }, [checkboxStatus, selectedName])

  //контроллер текста
  function handleSearchText(e) {
    setSearchText(e.target.value);
  }

  //контроллер чекбокса
  const handleCheckbox = (e) => {
    setCheckboxStatus(e.target.checked);
  }

  //контроллер выпадающего списка
  const handleSelect = (e) => {
    setSelectedName(e.target.value);
  }

  //обработтчик сабмита формы поиска фильмов
  function handleSearchMovieSubmit(e) {
    e.preventDefault();
    onSearch(searchText, checkboxStatus);
  }

  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form' name='searchForm' onSubmit={handleSearchMovieSubmit}>
          <div className='search__input-container'>
            <img
              src={searchIcon}
              className='search__icon'
              alt='Иконка поиска'
            />
            <input
              className='search__input'
              id='search-input'
              placeholder='Название статьи'
              type='text'
              name='searchInput'
              value={searchText}
              onChange={handleSearchText}
            />
            <button
              className='search__button button'
              type='submit' />
          </div>
          <div className='search__checkbox-conteiner'>
            <input
              type='checkbox'
              className='search__checkbox'
              id='search__checkbox'
              value='yes'
              onChange={handleCheckbox}
              checked={checkboxStatus} />
            <label
              className='search__label'
              htmlFor='search__checkbox'>
            </label>
          </div>
          <select
            name="name"
            id="name-select"
            className='select'
            onChange={handleSelect}
            checked={selectedName}>
            <option className='option' value='' key='user'>- - Все авторы - -</option>
            {allUsers ? allUsers.map((user) => (
              <option className='option' value={user.id} key={`user${user.id}`}>{user.username}</option>
            )) : <></>}
          </select>
        </form>
      </div>


    </section>
  );
}

export default SearchForm;