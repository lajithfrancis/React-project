export default function SideBar() {
  return (
    <>
      <div
        class='d-flex flex-column flex-shrink-0 p-3 text-bg-dark'
        style={{ width: '280px', height: '100vh' }}
      >
        <a
          href='/tasks'
          class='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'
        >
          <span class='fs-4'>ToDo</span>
        </a>
        <hr />
        <ul class='nav nav-pills flex-column mb-auto'>
          <li class='nav-item'>
            <a href='#' class='nav-link active' aria-current='page'>
              All tasks
            </a>
          </li>
          <li>
            <a href='#' class='nav-link text-white'>
              Completed Tasks
            </a>
          </li>
          <li>
            <a href='#' class='nav-link text-white'>
              Pending tasks
            </a>
          </li>
          <li>
            <a href='#' class='nav-link text-white'>
              Upcoming
            </a>
          </li>
          <li>
            <a href='#' class='nav-link text-white'>
              others
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
