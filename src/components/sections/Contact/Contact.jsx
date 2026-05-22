import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Contact.module.scss';
import Button from '../../ui/Button/Button';
import { socialLinks } from '../../../utils/nav';

const Contact = () => {
  const navigate = useNavigate();
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h4 className={styles.sectionLabel}>CONTACT</h4>
          <h2 className={styles.sectionTitle}>Let's Work Together</h2>
          <p className={styles.description}>
            Have a project in mind? Let's talk.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.badge}>✉ 함께 할게요</div>
          <h3 className={styles.mainHeading}>함께하길 고대하겠습니다.</h3>
          <p className={styles.subtext}>
            풀스택 웹앱, API 연동부터 제품 전체를 처음부터<br/>
            함께 만들어 드릴 수 있습니다. 언제든지 연락주세요.
          </p>

          <div className={styles.actions}>
            <Button 
              variant="primary" 
              className={styles.emailBtn}
              onClick={() => navigate('/contact')}
            >
              이메일 보내기
            </Button>
            <Button 
              variant="outline" 
              className={styles.socialBtn}
              onClick={() => window.open(socialLinks.notion, '_blank')}
            >
              노션 포트폴리오
            </Button>
            <Button 
              variant="outline" 
              className={styles.socialBtn}
              onClick={() => window.open(socialLinks.github, '_blank')}
            >
              깃허브
            </Button>
          </div>
          
          <div className={styles.contactInfo}>
            <span>github.com/YourID</span>
            <span>notion.so/YourID</span>
            <span>contact@example.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
