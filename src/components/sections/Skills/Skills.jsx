import React from 'react';
import styles from './Skills.module.scss';
import Card from '../../ui/Card/Card';
import { skillData } from '../../../utils/skillData';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h4 className={styles.sectionLabel}>SKILLS</h4>
          <h2 className={styles.sectionTitle}>My Tech Stack</h2>
          <p className={styles.description}>
            사용자 경험과 데이터의 흐름을 함께 고민하는 개발자 정석현입니다.<br/>
            React와 SCSS를 활용해 직관적이고 세련된 UI를 구현하는 것에 흥미가 있으며...
          </p>
        </div>
        
        <div className={styles.grid}>
          {skillData.map((category, idx) => (
            <Card key={idx} className={styles.categoryCard}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className={styles.skillTags}>
                {category.skills.map((skill, i) => (
                  <span key={i} className={styles.tag}>{skill}</span>
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
