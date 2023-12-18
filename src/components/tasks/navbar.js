export default function NavBar() {
  return (
    <>
      <div className='' style={{ height: '0' }}>
        <header className='d-flex justify-content-center py-3'>
          <ul className='nav nav-pills'>
            <li className='nav-item'>
              <a href='#' className='nav-link active' aria-current='page'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                Features
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                Pricing
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                FAQs
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                About
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}
