import './App.scss';
import React, { useState, useEffect } from 'react';
import { api } from '../../utils/MainApi.js';
import SearchForm from '../SearchForm/SearchForm.js'
import PostsList from '../PostsList/PostsList.js'
import Search from '../../utils/Search';
import Preloader from '../Preloader/Preloader.js';
import { POSTS_S, POSTS_M, POSTS_L, POSTS_XL } from '../../utils/constants.js'

function App() {

  const [allPosts, setAllPosts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [shownPostsNumber, setShownPostsNumber] = useState(POSTS_S);
  const [filteredPosts, setFilteredPosts] = useState([]); //стейт для окончательного списка карточек
  const [isPreloader, setIsPreloader] = useState(false);
  const [shownPosts, setShownPosts] = useState([]);


  //получаем все начальные данные
  useEffect(() => {
    Promise.all([
      api.getPosts()
        .then((res) => {
          setAllPosts(res);
          setFilteredPosts(res);
          setShownPosts(filteredPosts.slice(0, shownPostsNumber))
        })
        .catch((err) => console.log(err)),
      api.getUsers()
        .then((res) => {
          setAllUsers(res);
        })
        .catch((err) => console.log(err))
    ]).then(() => setIsPreloader(true))
  }, [])

  useEffect(() => {
    setShownPosts(filteredPosts.slice(0, shownPostsNumber))
  }, [shownPostsNumber])

  const searchPosts = new Search(allPosts) //экземпляр класса для поиска

  //обработчик поиска фильмов
  function handleSearch(text, statusCheckbox, value) {
    const searchResalt = searchPosts.search(text, statusCheckbox, value)
    setFilteredPosts(searchResalt);
  };

  //обработтчик сохранения фильмов
  function handlerSaveButtonClick(post) {
    post.saved ? post.saved = !post.saved : post.saved = true;
    setAllPosts((state) => state.map((p) => p.id === post.id ? post : p));
  }

  //обработтчик проверки сохраненных фильмов
  function handlerCheckSaveMovie(movie) {
    return movie.saved === true
  }

  function handleButtonSClick() {
    setShownPostsNumber(POSTS_S)
  };

  function handleButtonMClick() {
    setShownPostsNumber(POSTS_M)
  };

  function handleButtonLClick() {
    setShownPostsNumber(POSTS_L)
  };

  function handleButtonXLClick() {
    setShownPostsNumber(POSTS_XL)
  };

  //обработчик нажатия кнопки ещё
  function handleNextClick() {
    setShownPosts(filteredPosts.slice(0, shownPosts.length + shownPostsNumber))
  };

  return (
    !isPreloader ? <Preloader /> :
      <div className='page'>
        <main className='main'>
          <SearchForm
            allUsers={allUsers}
            onSearch={handleSearch}
            text=''
            statusCheckbox='' />
          <PostsList
            allPosts={allPosts}
            allUsers={allUsers}
            shownPosts={shownPosts}
            handlerSaveButtonClick={handlerSaveButtonClick}
            handlerCheckSaveMovie={handlerCheckSaveMovie}
          />
          {shownPosts.length < filteredPosts.length &&
            <button className='next-posts-button button' onClick={handleNextClick}>
              <p className='next-posts-button__text'>Ещё {shownPostsNumber}</p>
            </button>}
          <div className='button-conteiner'>
            <button className='number-of-posts-button button' onClick={handleButtonSClick}>
              <p className='number-of-posts-button__text'>Показать {POSTS_S}</p>
            </button>
            <button className='number-of-posts-button button' onClick={handleButtonMClick}>
              <p className='number-of-posts-button__text'>Показать {POSTS_M}</p>
            </button>
            <button className='number-of-posts-button button' onClick={handleButtonLClick}>
              <p className='number-of-posts-button__text'>Показать {POSTS_L}</p>
            </button>
            <button className='number-of-posts-button button' onClick={handleButtonXLClick}>
              <p className='number-of-posts-button__text'>Показать все</p>
            </button>
          </div>
        </main>
      </div>
  );
}

export default App;
