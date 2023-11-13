import './ControlButtons.scss'
import { POSTS_S, POSTS_M, POSTS_L } from '../../utils/constants.js'

function ControlButtons({
  hasNext,
  handleNextClick,
  shownPostsNumber,
  handleButtonSClick,
  handleButtonMClick,
  handleButtonLClick,
  handleButtonXLClick
}) {

  return (
    <div className='control-buttons'>
      {hasNext &&
        <button className='next-posts-button button' onClick={handleNextClick}>
          <p className='next-posts-button__text'>Ещё {shownPostsNumber}</p>
        </button>}
      <div className='button-conteiner'>
        <button className='number-of-posts-button button' onClick={handleButtonSClick}>
          <p className='number-of-posts-button__text'>Показать {POSTS_S}</p>
        </button>
        <button className='number-of-posts-button button' onClick={handleButtonMClick}>
          <p className='number-of-posts-button__text'>Показать {POSTS_M}</p>
        </button>
        <button className='number-of-posts-button button' onClick={handleButtonLClick}>
          <p className='number-of-posts-button__text'>Показать {POSTS_L}</p>
        </button>
        <button className='number-of-posts-button button' onClick={handleButtonXLClick}>
          <p className='number-of-posts-button__text'>Показать все</p>
        </button>
      </div>
    </div>
  )


}

export default ControlButtons