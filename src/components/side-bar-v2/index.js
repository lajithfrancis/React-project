import Dashboard from '@mui/icons-material/Dashboard';
import Category from '@mui/icons-material/Category';
import Profile from '@mui/icons-material/Pages';
import Settings from '@mui/icons-material/Settings';
import Menu from '@mui/icons-material/Menu';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';

import './index.css';
import { Button } from '@mui/material';
import { useState } from 'react';

const SideBarV2 = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <div className={`sidebar ${!isOpen ? 'sidebar-close' : ''}`}>
        <div className='logo-details'>
          <span className='logo-name'>Lajith Coding</span>
        </div>
        {/* <Button onClick={() => setIsOpen(!isOpen)}>toggle</Button> */}

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
                <a className='hover-heading' href='#'>
                  Categories
                </a>
              </li>
              <li>
                <a href='#'>My tasks</a>
              </li>
              <li>
                <a href='#'>Completed tasks</a>
              </li>
            </ul>
          </li>
          <li className=''>
            <div className='link'>
              <a href='#'>
                <i className='bx bx-collection'>
                  <Profile />
                </i>
                <span className='link_name'>Profile</span>
              </a>
              <i className='bx bx-collection'>
                <ArrowDropDown />
              </i>
            </div>
            <ul className='sub-menu'>
              <li>
                <a className='hover-heading' href='#'>
                  Profile
                </a>
              </li>
              <li>
                <a href='#'>First</a>
              </li>
              <li>
                <a href='#'>Second</a>
              </li>
            </ul>
          </li>
          <li className=''>
            <a href='#'>
              <i className='bx bx-grid-alt'>
                <Settings />
              </i>
              <span className='link_name'>Settings</span>
            </a>
          </li>
        </ul>
      </div>
      <section className='home-section'>
        <div className='home-content'>
          <i className='bx bx-menu' onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </i>
          <span className='text'>Drop down sidebar</span>
        </div>
      </section>
    </div>
  );
};

export default SideBarV2;
