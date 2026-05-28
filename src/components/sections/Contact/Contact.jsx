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
            협업을 원하시나요? 언제든 환영합니다.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.badge}>✉ 함께 할게요</div>
          <h3 className={styles.mainHeading}>함께하길 고대하겠습니다.</h3>
          <p className={styles.subtext}>
            좋은 시너지를 낼 수 있는 팀을 찾고 있습니다.<br/>
            언제든지 편하게 연락주세요!
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
            <span>github.com/seokhyeon09</span>
            <span></span>
            <span>ring4392@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
