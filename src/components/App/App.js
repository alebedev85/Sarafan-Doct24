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
        {allPosts.map((post, index) => (
          <Post
            key={post._id }
            title={post.title}
            username={allUsers.find(user => user.id === post.userId).username}
            body={post.body}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;
