import './Post.scss'

function Post({ title, username, body }) {

  return (
    <li className="post">
      <h2 className='post__title'>{title}</h2>
      <h3 className='post__username'>{username}</h3>
      <div className='post__text'>{body}</div>
    </li>
  );
}

export default Post;