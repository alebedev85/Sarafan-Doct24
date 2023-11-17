import React, { useState, useEffect } from 'react';
import './Sorting.scss';

function Sorting({onSort}) {

  const [idRevers, setIdRevers] = useState(false); //стейт для id revers
  const [userRevers, setUserRevers] = useState(false); //стейт для user revers
  const [titleRevers, setTitleRevers] = useState(false); //стейт для title revers
  const [savedRevers, setSavedRevers] = useState(false); //стейт для save revers

  //обработтчик сортировки постов по Id
  function handleSortById() {
    onSort('id', idRevers);
    setIdRevers(!idRevers);
  }

  //обработтчик сортировки постов по заголовку
  function handleSortByTittle() {
    onSort('title', titleRevers);
    setTitleRevers(!titleRevers);
  }

  //обработтчик сортировки постов по автору
  function handleSortByUser() {
    onSort('userId', titleRevers);
    setUserRevers(!userRevers);
  }

  //обработтчик сортировки постов в избранном
  function handleSortBySaved() {
    onSort('saved', titleRevers);
    setSavedRevers(!savedRevers);
  }
  return (
    <section className='sort'>
      <h3 className='sort__title'>Сортировать по:</h3>
      <button className='sort__button button' onClick={handleSortById}>
        <p className='sort__button-text'>Списку<div className={`sort__revers ${idRevers ? 'sort__revers_yes' : 'sort__revers_no'}`} /></p>
      </button>
      <button className='sort__button button' onClick={handleSortByTittle}>
        <p className='sort__button-text'>Названию<div className={`sort__revers ${titleRevers ? 'sort__revers_yes' : 'sort__revers_no'}`} /></p>
      </button>
      <button className='sort__button button' onClick={handleSortByUser}>
        <p className='sort__button-text'>Автору<div className={`sort__revers ${userRevers ? 'sort__revers_yes' : 'sort__revers_no'}`} /></p>
      </button>
      <button className='sort__button button' onClick={handleSortBySaved}>
        <p className='sort__button-text'>В избранном<div className={`sort__revers ${savedRevers ? 'sort__revers_yes' : 'sort__revers_no'}`} /></p>
      </button>
    </section>
  )
}

export default Sorting