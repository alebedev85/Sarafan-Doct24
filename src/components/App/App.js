import './App.scss';
import React, { useState, useEffect } from 'react';
import { api } from '../../utils/MainApi.js';
import SearchForm from '../SearchForm/SearchForm.js'
import Post from '../Post/Post.js'
import Search from '../../utils/Search';
import Preloader from '../Preloader/Preloader.js';
import { POSTS_S, POSTS_M, POSTS_L, POSTS_XL } from '../../utils/constants.js'

function App() {

  const [allPosts, setAllPosts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [shownPostsNumber, setShownPostssNumber] = useState(POSTS_S);
  const [filteredPosts, setFilteredPosts] = useState([]); //стейт для окончательного списка карточек
  const [isPreloader, setIsPreloader] = useState(false);

  //получаем все начальные данные
  useEffect(() => {
    Promise.all([
      api.getPosts()
        .then((res) => {
          setAllPosts(res);
          setFilteredPosts(res);
        })
        .catch((err) => console.log(err)),
      api.getUsers()
        .then((res) => {
          setAllUsers(res);
        })
        .catch((err) => console.log(err))
    ]).then(() => setIsPreloader(true))
  }, [])

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

  return (
    !isPreloader ? <Preloader /> :
      <div className='page'>
        <main className='main'>
          <SearchForm
            allUsers={allUsers}
            onSearch={handleSearch}
            text=''
            statusCheckbox='' />
          <ul className='posts-list list'>
            {allPosts && allUsers ? filteredPosts.slice(0, shownPostsNumber).map((post) => (
              <Post
                key={`post${post.id}`}
                username={allUsers.length ? allUsers.find(user => user.id === post.userId).username : ''}
                post={post}
                onSaveClick={handlerSaveButtonClick}
                isSaved={handlerCheckSaveMovie}
              />
            )) : <></>}
          </ul>
          <button className='next-posts-button button'>
            <p className='next-posts-button__text'>Ещё {shownPostsNumber}</p>
          </button>
          <div className='button-conteiner'>
            <button className='number-of-posts-button button'>
              <p className='number-of-posts-button__text'>Показать 10</p>
            </button>
            <button className='number-of-posts-button button'>
              <p className='number-of-posts-button__text'>Показать 20</p>
            </button>
            <button className='number-of-posts-button button'>
              <p className='number-of-posts-button__text'>Показать 50</p>
            </button>
            <button className='number-of-posts-button button'>
              <p className='number-of-posts-button__text'>Показать все</p>
            </button>
          </div>
        </main>
      </div>
  );
}

export default App;
