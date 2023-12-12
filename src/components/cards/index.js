import './styles.css'
import { useNavigate } from 'react-router-dom';

export default function Cards() {
  const navigate = useNavigate();
  const handleClick = (page) => {
    navigate(`/${page}`);
  };
  return (
    <div
      className='row'
      style={{ display: 'flex', justifyContent: 'space-evenly' }}
    >
      <div className='column'>
        <div className='card'>
          <h3>ToDo App</h3>
          <p>Tasks</p>
          <p>Happy tasking!</p>
          <button
            onClick={() => {
              handleClick('tasks');
            }}
          >
            Go
          </button>
        </div>
      </div>
      <div className='column'>
        <div className='card'>
          <h3>Movies App</h3>
          <p>Happy movie</p>
          <p>Enjoy!</p>
          <button
            onClick={() => {
              handleClick('movies');
            }}
          >
            Go
          </button>
        </div>
      </div>
      <div className='column'>
        <div className='card'>
          <h3>Coming soon!</h3>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div>
      <div className='column'>
        <div className='card'>
          <h3>Coming soon!</h3>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div>
    </div>
  );
}