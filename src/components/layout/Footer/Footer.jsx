import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="#home">Main</a>
          <a href="#about">About me</a>
          <a href="#skills">Skill</a>
          <a href="#projects">Project</a>
          <a href="#contact">Contact</a>
        </div>
        <p className={styles.copyright}>
          &copy; {currentYear} Jeong Seok Hyeon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
