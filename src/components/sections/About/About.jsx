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
            사용자 경험과 데이터의 흐름을 함께 고민하는 개발자 정석현입니다.<br/><br/>
            React와 SCSS를 활용해 직관적이고 세련된 UI를 구현하는 것에 흥미가 있으며,<br/>
            Java를 기반으로 안정적인 로직을 설계하는 과정을 학습하고 있습니다.<br/><br/>
            배운 것을 단순히 머리에 남기지 않고, 실제 서비스로 구현하며 부딪히고 성장하는 것을 즐깁니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
