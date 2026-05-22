import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import Button from '../../ui/Button/Button';
import { ThemeContext } from '../../../Context/themeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">JSH-DEV</NavLink>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About me</NavLink></li>
            <li><NavLink to="/skills">Skill</NavLink></li>
            <li><NavLink to="/projects">Project</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <Button variant="gradient">Resume</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
