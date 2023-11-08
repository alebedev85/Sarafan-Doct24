import './Post.scss'

function Post({ username, post }) {

  function handleCardDelete() {
    console.log('Удали меня');
  }

  return (
    <li className='post'>
      <h2 className='post__title'>{post.title}</h2>
      <h3 className='post__username'>{username}</h3>
      <div className='post__text'>{post.body}</div>
      <div className='post__container'>
        <div className='post__buttons'>
          <button type='button' name='buttonSave' className='post-button post-button__save button'
            onClick={handleCardDelete}></button>
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