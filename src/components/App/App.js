import './App.scss';
import React, { useState, useEffect } from 'react';
import { api } from '../../utils/MainApi.js';
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

  return (
    <main className="page">
      <ul className='posts-list list'>
        {allPosts && allUsers ? allPosts.map((post) => (
          <Post
            key={post._id }
            username={allUsers.find(user => user.id === post.userId).username || ''}
            post={post}
          />
        )): <></> }
      </ul>
    </main>
  );
}

export default App;
