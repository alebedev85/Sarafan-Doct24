import './Post.scss'

function Post({ username, post, onSaveClick, isSaved }) {

  function handleCardDelete() {
    console.log('Удали меня');
  }

  function handlerSaveButton() {
    onSaveClick(post)
  }

  return (
    <li className={`post ${isSaved(post) ? 'post_saved' : ''}`}>
      <h2 className='post__title'>{post.title}</h2>
      <h3 className='post__username'>{username}</h3>
      <div className='post__text'>{post.body}</div>
      <div className='post__container'>
        <div className='post__buttons'>
          <button type='button'
            name='buttonSave'
            className={`post-button post-button__save button ${isSaved(post) ? 'post-button__save-active' : 'post-button__save '}`}
            onClick={handlerSaveButton}></button>
          <button type='button' name='buttonComment' className='post-button post-button__comment button'
            onClick={handleCardDelete}></button>
          <button type='button' name='buttonEdit' className='post-button post-button__edit button'
            onClick={handleCardDelete}></button>
          <button type='button' name='buttonDelete' className='post-button post-button__delete button'
            onClick={handleCardDelete}></button>
        </div>
        <input type='checkbox' value='yes' name='buttonDelete' className='checkbox'
          onClick={handleCardDelete}></input>
      </div>

    </li>
  );
}

export default Post;