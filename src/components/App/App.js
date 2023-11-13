import './App.scss';
import React, { useState, useEffect } from 'react';
import { api } from '../../utils/MainApi.js';
import SearchForm from '../SearchForm/SearchForm.js'
import PostsList from '../PostsList/PostsList.js'
import ControlButtons from '../ControlButtons/ControlButtons.js';
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
          setShownPostsNumber(POSTS_S)
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
  }, [shownPostsNumber, filteredPosts])

  const searchPosts = new Search(allPosts) //экземпляр класса для поиска

  //обработчик поиска постов
  function handleSearch(text, statusCheckbox, value) {
    const searchResalt = searchPosts.search(text, statusCheckbox, value)
    setFilteredPosts(searchResalt);
  };

  //обработтчик сохранения постов
  function handlerSaveButtonClick(post) {
    post.saved ? post.saved = !post.saved : post.saved = true;
    setAllPosts((state) => state.map((p) => p.id === post.id ? post : p));
  }

  //обработтчик проверки сохраненных постов
  function handlerCheckSavePost(movie) {
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
            handlerCheckSavePost={handlerCheckSavePost}
          />
          <ControlButtons
            hasNext={shownPosts.length < filteredPosts.length}
            handleNextClick={handleNextClick}
            shownPostsNumber={shownPostsNumber}
            handleButtonSClick={handleButtonSClick}
            handleButtonMClick={handleButtonMClick}
            handleButtonLClick={handleButtonLClick}
            handleButtonXLClick={handleButtonXLClick}
          />
        </main>
      </div>
  );
}

export default App;
