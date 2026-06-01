import React from 'react';
import styles from './Skills.module.scss';
import Card from '../../ui/Card/Card';
import { skillData } from '../../../utils/skillData';
import { icons } from '../../../utils/icons';
import FadeInLeft from '../../ui/FadeInLeft/FadeInLeft';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h4 className={styles.sectionLabel}>SKILLS</h4>
          <h2 className={styles.sectionTitle}>My Tech Stack</h2>
          <p className={styles.description}>
            새로운 기술을 배우고 적용하는 것을 즐기는 신입 프론트엔드 개발자 정석현입니다.<br/>
            React와 SCSS를 활용하여 사용자 친화적이고 직관적인 UI를 구현하는 데 관심이 많습니다.
          </p>
        </div>
        
        <div className={styles.grid}>
          {skillData.map((category, idx) => (
            <Card key={idx} className={styles.categoryCard}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>
                  {icons[category.icon] ? icons[category.icon]({ width: 24, height: 24 }) : null}
                </span>
                <h3>{category.title}</h3>
              </div>
              <div className={styles.skillTags}>
                {category.skills.map((skill, i) => (
                  <FadeInLeft key={i} delay={0.2 + (i * 0.1)}>
                    <span className={`${styles.tag} ${styles[`tag_${skill.proficiency}`]}`}>{skill.name}</span>
                  </FadeInLeft>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
