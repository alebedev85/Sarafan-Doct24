import './PostsList.scss'
import Post from '../Post/Post.js'

function PostsList({ allPosts, allUsers, shownPosts, handlerSaveButtonClick, handlerCheckSaveMovie }) {
  return (
    <ul className='posts-list list'>
      {allPosts && allUsers ? shownPosts.map((post) => (
        <Post
          key={`post${post.id}`}
          username={allUsers.length ? allUsers.find(user => user.id === post.userId).username : ''}
          post={post}
          onSaveClick={handlerSaveButtonClick}
          isSaved={handlerCheckSaveMovie}
        />
      )) : <></>}
    </ul>
  )
}

export default PostsList;