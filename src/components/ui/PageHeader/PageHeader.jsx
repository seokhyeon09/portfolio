import React from 'react';
import styles from './PageHeader.module.scss';

/**
 * Reusable Page Header component
 * @param {Object} props
 * @param {string|React.ReactNode} props.label - The badge/label text at the top
 * @param {string} props.title - Main title
 * @param {string|string[]} props.descriptions - Description text (can be array of paragraphs)
 * @param {Array<{value: string, label: string}>} [props.stats] - Optional stats array
 */
const PageHeader = ({ label, title, descriptions, stats }) => {
  return (
    <section className={styles.header}>
      {label && <span className={styles.label}>{label}</span>}
      <h1 className={styles.title}>{title}</h1>
      
      <div className={styles.descriptions}>
        {Array.isArray(descriptions) ? (
          descriptions.map((desc, idx) => <p key={idx}>{desc}</p>)
        ) : (
          <p>{descriptions}</p>
        )}
      </div>
      
      {stats && stats.length > 0 && (
        <div className={styles.stats}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PageHeader;
