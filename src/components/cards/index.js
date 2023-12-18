import './styles.css'
import { useNavigate } from 'react-router-dom';

export default function Cards() {
  const navigate = useNavigate();
  const handleClick = (page) => {
      navigate(`/${page}`);
  };
  return (
    <>
      <div className='container px-4 py-5' id='featured-3'>
        <h2 className='pb-2 border-bottom'>My Projects</h2>
        <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
          <div className='feature col movie-card'>
            <h3 className='fs-2 text-body-emphasis'>ToDo</h3>
            <p>Daily Todo Application for everyone!</p>
            <button
              type='button'
              className='btn btn-dark'
              style={{ width: '50%' }}
              onClick={() => {
                handleClick('tasks');
              }}
            >
              Go
            </button>
          </div>
          <div className='feature col movie-card'>
            <h3 className='fs-2 text-body-emphasis'>MOViE</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <button
              type='button'
              className='btn btn-dark'
              style={{ width: '50%' }}
              onClick={() => {
                handleClick('movies');
              }}
            >
              Go
            </button>
          </div>
          <div className='feature col movie-card'>
            <h3 className='fs-2 text-body-emphasis'>Youtube</h3>
            <p>Youtube UI experiment</p>
            <button
              type='button'
              className='btn btn-dark'
              style={{ width: '50%' }}
              onClick={() => {
                handleClick('youtube');
              }}
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </>
  );
}