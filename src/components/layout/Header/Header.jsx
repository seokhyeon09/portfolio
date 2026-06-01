import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import Button from '../../ui/Button/Button';
import { ThemeContext } from '../../../context/themeContext';
import { navItems } from '../../../utils/nav';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">JSH-DEV</NavLink>
        </div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul>
            {navItems.map((item, idx) => (
              <li key={idx}>
                <NavLink to={item.to} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actions}>
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          {/* 
          <div className={styles.desktopResume}>
            <Button variant="gradient">Resume</Button>
          </div>
          */}
          <button className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          <ul>
            {navItems.map((item, idx) => (
              <li key={idx}>
                <NavLink to={item.to} end={item.to === '/'} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* 
          <div className={styles.mobileResume}>
            <Button variant="gradient">Resume</Button>
          </div>
          */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
