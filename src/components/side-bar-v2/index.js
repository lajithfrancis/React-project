import Dashboard from '@mui/icons-material/Dashboard';
import Category from '@mui/icons-material/Category';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';

import './index.css';

const SideBarV2 = () => {
  return (
    <div className='sidebar'>
      <div className='logo-details'>
        <span className='logo-name'>Lajith Coding</span>
      </div>
      <ul className='nav-links'>
        <li className=''>
          <a href='#'>
            <i className='bx bx-grid-alt'>
              <Dashboard />
            </i>
            <span className='link_name'>Dashboard</span>
          </a>
        </li>
        <li className=''>
          <div className='iocn-link'>
            <a href='#'>
              <i className='bx bx-collection'>
                <Category />
              </i>
              <span className='link_name'>Categories</span>
            </a>
            <i className='bx bx-collection'>
              <ArrowDropDown />
            </i>
          </div>
          <ul className='sub-menu'>
            <li>
              <a href='#'>My tasks</a>
            </li>
            <li>
              <a href='#'>Completed tasks</a>
            </li>
          </ul>
        </li>
        <li className=''>
          <div className='iocn-link'>
            <a href='#'>
              <i className='bx bx-collection'>
                <Category />
              </i>
              <span className='link_name'>Categories</span>
            </a>
            <i className='bx bx-collection'>
              <ArrowDropDown />
            </i>
          </div>
          <ul className='sub-menu'>
            <li>
              <a href='#'>First</a>
            </li>
            <li>
              <a href='#'>Second</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideBarV2;
