import './App.scss';
import React, { useState, useEffect } from 'react';
import { api } from '../../utils/MainApi.js';
import SearchForm from '../SearchForm/SearchForm.js'
import Post from '../Post/Post.js'

function App() {

  const [allPosts, setAllPosts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  //получаем все начальные данные
  useEffect(() => {
    api.getPosts()
      .then((res) => {
        setAllPosts(res);
      })
      .catch((err) => console.log(err));
    api.getUsers()
      .then((res) => {
        setAllUsers(res);
      })
      .catch((err) => console.log(err));
  }, [])

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
    <div className='page'>
      <main className='main'>
        <SearchForm
          allUsers={allUsers}
          onSearchMovie=''
          text=''
          statusCheckbox='' />
        <ul className='posts-list list'>
          {allPosts && allUsers ? allPosts.map((post) => (
            <Post
              key={post._id}
              username={allUsers.find(user => user.id === post.userId).username || ''}
              post={post}
              onSaveClick={handlerSaveButtonClick}
              isSaved={handlerCheckSaveMovie}
            />
          )) : <></>}
        </ul>
      </main>
    </div>
  );
}

export default App;
