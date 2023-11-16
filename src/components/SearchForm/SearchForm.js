import React, { useState, useEffect } from 'react';
import './SearchForm.scss';

import searchIcon from '../../images/search-icon.svg'

function SearchForm({ allUsers, onSearch, onSort, text, statusCheckbox, name }) {

  const [searchText, setSearchText] = useState(text || ''); //стейт для тескта поиска
  const [checkboxStatus, setCheckboxStatus] = useState(statusCheckbox || false); //стейт для чекбокса поиска
  const [selectedName, setSelectedName] = useState(name || '');
  const [idRevers, setIdRevers] = useState(false);
  const [userRevers, setUserRevers] = useState(false);
  const [titleRevers, setTitleRevers] = useState(false);
  const [savedRevers, setSavedRevers] = useState(false);

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

  //обработтчик поиска постов
  function handleSearchMovieSubmit(e) {
    e.preventDefault();
    onSearch(searchText, checkboxStatus);
  }

  //обработтчик сортировки постов по Id
  function handleSortById() {
    onSort('id');
    setIdRevers(!idRevers);
  }

  //обработтчик сортировки постов по заголовку
  function handleSortByTittle() {
    onSort('title');
    setTitleRevers(!titleRevers);
  }

  //обработтчик сортировки постов по автору
  function handleSortByUser() {
    onSort('userId');
    setUserRevers(!userRevers);
  }

  //обработтчик сортировки постов в избранном
  function handleSortBySaved() {
    onSort('saved');
    setSavedRevers(!savedRevers);
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
            className='search__select'
            onChange={handleSelect}
            checked={selectedName}>
            <option className='search__option' value='' key='user'>- - Все авторы - -</option>
            {allUsers ? allUsers.map((user) => (
              <option className='search__option' value={user.id} key={`user${user.id}`}>{user.username}</option>
            )) : <></>}
          </select>
        </form>
      </div>
      <div className='seporator'></div>
      <div className='sort__container'>
        <h3 className='sort__title'>Сортировать по:</h3>
        <button className='sort__button button' onClick={handleSortById}>
          <p className='sort__button-text'>Списку<div className={`sort__revers ${idRevers ? 'sort__revers_yes' : 'sort__revers_no'}`}/></p>
        </button>
        <button className='sort__button button' onClick={handleSortByTittle}>
          <p className='sort__button-text'>Названию<div className={`sort__revers ${titleRevers ? 'sort__revers_yes' : 'sort__revers_no'}`}/></p>
        </button>
        <button className='sort__button button' onClick={handleSortByUser}>
          <p className='sort__button-text'>Автору<div className={`sort__revers ${userRevers ? 'sort__revers_yes' : 'sort__revers_no'}`}/></p>
        </button>
        <button className='sort__button button' onClick={handleSortBySaved}>
          <p className='sort__button-text'>В избранном<div className={`sort__revers ${savedRevers ? 'sort__revers_yes' : 'sort__revers_no'}`}/></p>
        </button>
      </div>
    </section>
  );
}

export default SearchForm;