import React from 'react';
import styles from './ContactHeader.module.scss';
import { icons } from '../../../utils/icons';
import { contactHeader } from '../../../utils/contactData';

const ContactHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.label}>
        <icons.mail size={14} />
        {contactHeader.badge}
      </div>
      <h1 className={styles.title}>{contactHeader.title}</h1>
      <p className={styles.desc}>{contactHeader.desc}</p>
      
      <div className={styles.stats}>
        {contactHeader.stats.map((stat, index) => {
          const IconComponent = icons[stat.icon];
          return (
            <React.Fragment key={index}>
              <div className={styles.statItem}>
                <div className={styles.statHeader}>
                  {IconComponent && <IconComponent size={24} className={styles.statIcon} />}
                  <span className={styles.statValue}>{stat.value}</span>
                </div>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
              {index < contactHeader.stats.length - 1 && <div className={styles.statDivider} />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ContactHeader;
