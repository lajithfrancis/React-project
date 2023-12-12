import './styles.css'
import { useNavigate } from 'react-router-dom';

export default function Cards() {
  const navigate = useNavigate();
  const handleClick = (page) => {
      navigate(`/${page}`);
  };
  return (
      <>
          <div class="container px-4 py-5" id="featured-3">
              <h2 class="pb-2 border-bottom">My Projects</h2>
              <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                  <div class="feature col">
                      <h3 class="fs-2 text-body-emphasis">ToDo</h3>
                      <p>Daily Todo Application for everyone!</p>
                      <button
                          type="button"
                          className="btn btn-dark"
                          style={{ width: '50%' }}
                          onClick={() => {
                              handleClick('tasks');
                          }}
                      >
                          Go
                      </button>
                  </div>
                  <div class="feature col">
                      <h3 class="fs-2 text-body-emphasis">MOViE</h3>
                      <p>
                          Paragraph of text beneath the heading to explain the
                          heading. We'll add onto it with another sentence and
                          probably just keep going until we run out of words.
                      </p>
                      <button
                          type="button"
                          className="btn btn-dark"
                          style={{ width: '50%' }}
                          onClick={() => {
                              handleClick('movies');
                          }}
                      >
                          Go
                      </button>
                  </div>
                  <div class="feature col">
                      <h3 class="fs-2 text-body-emphasis">Coming soon!</h3>
                      <p>
                          Paragraph of text beneath the heading to explain the
                          heading. We'll add onto it with another sentence and
                          probably just keep going until we run out of words.
                      </p>
                      <a href="#" class="icon-link">
                          Call to action
                      </a>
                  </div>
              </div>
          </div>
      </>
  );
}