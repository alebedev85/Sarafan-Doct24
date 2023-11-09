import React, { useState, useEffect } from 'react';
import './SearchForm.scss';

import searchIcon from '../../images/search-icon.svg'

function SearchForm({ allUsers, onSearch, text, statusCheckbox }) {

  const [searchText, setSearchText] = useState(text || '');
  const [checkboxStatus, setCheckboxStatus] = useState(statusCheckbox || false);

  useEffect(() => {
    onSearch(searchText, checkboxStatus);
  }, [checkboxStatus])

  //контроллер текста
  function handleSearchText(e) {
    setSearchText(e.target.value);
  }

  //контроллер чекбокса
  const handleCheckbox = (e) => {
    setCheckboxStatus(e.target.checked);
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
          <select name="name" id="name-select" className='select'>
            <option className='option' value="" key='0'>-- Автор статьи --</option>
            {allUsers ? allUsers.map((user) => (
            <option className='option' value={user.username} key={user._id}>{user.username}</option>
          )) : <></>}
          </select>
        </form>
      </div>


    </section>
  );
}

export default SearchForm;