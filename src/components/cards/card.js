import { useNavigate } from 'react-router-dom';

export default function Card({ title, paragraph, navigateTo }) {
  const navigate = useNavigate();

  return (
    <div className='feature col movie-card'>
      <h3 className='fs-2 text-body-emphasis'>{title}</h3>
      <p>{paragraph}</p>
      <button
        type='button'
        className='btn btn-dark'
        style={{ width: '50%' }}
        onClick={() => {
          navigate(navigateTo);
        }}
      >
        Go
      </button>
    </div>
  );
}
