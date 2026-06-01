import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.graphicArea}>
          <img src="/assets/about.svg" alt="About graphic" className={styles.svgGraphic} />
        </div>
        <div className={styles.textArea}>
          <h4 className={styles.sectionLabel}>ABOUT ME</h4>
          <h2 className={styles.sectionTitle}>Who Am I?</h2>
          
          <p className={styles.description}>
            새로운 기술을 배우고 적용하는 것을 즐기는 신입 프론트엔드 개발자 정석현입니다. React와 SCSS를 활용하여 사용자 친화적이고 직관적인 UI를 구현하는 데 관심이 많으며, 기본기를 탄탄히 다지기 위해 꾸준히 고민하고 학습하고 있습니다. 단순히 코드를 작성하는 것을 넘어, 팀과 함께 성장하며 가치를 만들어내는 개발자가 되고 싶습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
