import React from 'react';
import ModeSwitch from '../ModeSwitch';

const SideNav = ({toggleDarkMode}) => {
  return (
    <nav className="sidenav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li className='mt-96'><ModeSwitch setDarkMode={toggleDarkMode} /></li>
      </ul>
    </nav>
  );
};

export default SideNav;
