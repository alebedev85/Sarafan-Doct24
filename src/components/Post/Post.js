import './Post.scss'

function Post({ username, post }) {

  function handleCardDelete() {
    console.log('Удали меня');
  }

  return (
    <li className="post">
      <h2 className='post__title'>{post.title}</h2>
      <h3 className='post__username'>{username}</h3>
      <div className='post__text'>{post.body}</div>
      <div className='post__buttons'>
        <button type="button" name="buttonSave" className="save-button button"
          onClick={handleCardDelete}>Save</button>
        <button type="button" name="buttonComment" className="comment-button button"
          onClick={handleCardDelete}>Comment</button>
        <button type="button" name="buttonEdit" className="edit-button button"
          onClick={handleCardDelete}>Edit</button>
        <button type="button" name="buttonDelete" className="delete-button button"
          onClick={handleCardDelete}>Delete</button>
      </div>
    </li>
  );
}

export default Post;