import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav_bar">
      <div className="nav_content">
        <img
          className="nav_logo"
          src="https://userscontent2.emaze.com/images/64a1e94d-034d-4fa7-a734-d3da25aa8c6b/c56f9882ed89b77e02b6d763d15b882a.jpg"
          alt="logo"
        />
        <img
          className="nav_avatar"
          src="https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Navbar;
