import React from 'react';
import styles from './Hero.module.scss';
import Button from '../../ui/Button/Button';
import Card from '../../ui/Card/Card';

const Hero = () => {
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
            <Button variant="primary">View Projects &rarr;</Button>
            <Button variant="outline">About Me</Button>
          </div>
          <div className={styles.socials}>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              {/* GitHub Icon placeholder */}
              <div className={styles.iconPlaceholder}>GH</div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <div className={styles.iconPlaceholder}>IN</div>
            </a>
            <a href="mailto:email@example.com" aria-label="Email">
              <div className={styles.iconPlaceholder}>@</div>
            </a>
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
