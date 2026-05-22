import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Hero.module.scss';
import Button from '../../ui/Button/Button';
import Card from '../../ui/Card/Card';
import { socialLinks } from '../../../utils/nav';
import { icons } from '../../../utils/icons';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            질문을 던지고<br />
            코드로 답을 찾는 개발자,<br />
            <span className={styles.highlight}>정석현</span>입니다.
          </h1>
          <p className={styles.description}>
            보이는 곳의 깔끔한 디자인(SCSS)부터<br />
            보이지 않는 곳의 효율적인 로직까지, 끈질기게 파고들어 문제를 해결합니다.
          </p>
          <div className={styles.actions}>
            <Button variant="primary" onClick={() => navigate('/projects')}>View Projects &rarr;</Button>
            <Button variant="outline" onClick={() => navigate('/about')}>About Me</Button>
          </div>
          <div className={styles.socials}>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <div className={styles.iconPlaceholder}>
                {icons.github({ width: 22, height: 22 })}
              </div>
            </a>
            <a href={socialLinks.notion} target="_blank" rel="noreferrer" aria-label="Notion">
              <div className={styles.iconPlaceholder}>
                {icons.laptop({ width: 22, height: 22 })}
              </div>
            </a>
            <Link to="/contact" aria-label="Contact">
              <div className={styles.iconPlaceholder}>
                {icons.mail({ width: 22, height: 22 })}
              </div>
            </Link>
          </div>
        </div>
        
        <div className={styles.profileCardWrapper}>
          <Card className={styles.profileCard}>
            <div className={styles.avatarArea}>
              <div className={styles.avatar}>SH</div>
            </div>
            <div className={styles.infoArea}>
              <h2>Jeong Seok Hyeon</h2>
              <p>Frontend Developer & UI Designer</p>
              
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>3+</span>
                  <span className={styles.statLabel}>Years Exp</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>20+</span>
                  <span className={styles.statLabel}>Projects</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>98%</span>
                  <span className={styles.statLabel}>Satisfaction</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
