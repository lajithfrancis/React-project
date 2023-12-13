export default function SideBar({ tasks, filterTasks }) {
  function handleOnClick(e, buttonName) {
    filterTasks(buttonName);
  }
  return (
    <>
      <div
        className='d-flex flex-column flex-shrink-0 p-3 text-bg-dark'
        style={{ width: '280px', height: '100vh' }}
      >
        <a
          href='/tasks'
          className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'
        >
          <span className='fs-4'>ToDo</span>
        </a>
        <hr />
        <ul className='nav nav-pills flex-column mb-auto'>
          <li className='nav-item'>
            <a
              href='#'
              className='nav-link active'
              aria-current='page'
              onClick={(e) => handleOnClick(e, 'All')}
            >
              All tasks
            </a>
          </li>
          <li>
            <a
              href='#'
              className='nav-link text-white'
              onClick={(e) => handleOnClick(e, 'Completed')}
            >
              Completed Tasks
            </a>
          </li>
          <li>
            <a
              href='#'
              className='nav-link text-white'
              onClick={(e) => handleOnClick(e, 'Pending')}
            >
              Pending tasks
            </a>
          </li>
          <li>
            <a href='#' className='nav-link text-white'>
              Upcoming
            </a>
          </li>
          <li>
            <a href='#' className='nav-link text-white'>
              others
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
