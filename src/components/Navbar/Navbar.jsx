import React, { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = ({
  onMouseEnterNavbar,
  onMouseLeaveNavbar,
  onMouseEnterText,
  onMouseLeaveText
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div
      onMouseEnter={onMouseEnterNavbar}
      onMouseLeave={onMouseLeaveNavbar}
      className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <h1 onMouseEnter={onMouseEnterText} onMouseLeave={onMouseLeaveText}>Swostik Mishra.</h1>
      <p onMouseEnter={onMouseEnterText} onMouseLeave={onMouseLeaveText}>Full Stack Developer</p>

      <button className="navbar-toggle" onClick={toggleNavbar}>
        <span className="material-icons">menu</span>
      </button>

      <button
        className="mode-toggle-button"
        onClick={toggleMode}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className="material-icons">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
      </button>

      <ul className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
        <li>
          <AnchorLink href="#home" onMouseEnter={onMouseEnterText} onMouseLeave={onMouseLeaveText}>
            Home
          </AnchorLink>
        </li>
        <li> 
          <AnchorLink href="#about" onMouseEnter={onMouseEnterText} onMouseLeave={onMouseLeaveText}>
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#projects" onMouseEnter={onMouseEnterText} onMouseLeave={onMouseLeaveText}>
            Projects and Services
          </AnchorLink>
        </li>
        <li>
           <AnchorLink href="#contact" onMouseEnter={onMouseEnterText} onMouseLeave={onMouseLeaveText}>
            Contact
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

