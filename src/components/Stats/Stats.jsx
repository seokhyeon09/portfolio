import React from 'react';
import styles from './Stats.module.scss';

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={styles.stat}>
        <span className={styles.value}>3+</span>
        <span className={styles.label}>Years Exp</span>
      </div>
      <div className={styles.sep} />
      <div className={styles.stat}>
        <span className={styles.value}>20+</span>
        <span className={styles.label}>Projects</span>
      </div>
      <div className={styles.sep} />
      <div className={styles.stat}>
        <span className={styles.value}>98%</span>
        <span className={styles.label}>Satisfaction</span>
      </div>
    </div>
  );
};

export default Stats;