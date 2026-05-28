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
            끊임없이 질문하고<br />
            코드로 성장하는 신입 개발자,<br />
            <span className={styles.highlight}>정석현</span>입니다.
          </h1>
          <p className={styles.description}>
            사용자 경험을 고민하며 깔끔한 UI를 만들고,<br />
            탄탄한 기본기를 바탕으로 주어진 문제를 끈질기게 해결해 나갑니다.
          </p>
          <div className={styles.actions}>
            <Button variant="primary" onClick={() => navigate('/projects')}>프로젝트 보기 &rarr;</Button>
            <Button variant="outline" onClick={() => navigate('/about')}>저를 소개합니다</Button>
          </div>
          <div className={styles.socials}>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <div className={styles.iconPlaceholder}>
                {icons.github({ width: 22, height: 22 })}
              </div>
            </a>
            <a href={socialLinks.notion} target="_blank" rel="noreferrer" aria-label="Notion">
              <div className={styles.iconPlaceholder}>
                {icons.notion({ width: 22, height: 22 })}
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
              <p>프론트엔드 개발자</p>
              
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>∞</span>
                  <span className={styles.statLabel}>잠재력</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>8</span>
                  <span className={styles.statLabel}>프로젝트</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>100%</span>
                  <span className={styles.statLabel}>열정</span>
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
