import React from 'react';
import styles from './ContactMarquee.module.scss';
import { icons } from '../../../utils/icons';
import { marqueeText } from '../../../utils/contactData';

const ContactMarquee = () => {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeContent}>
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            <icons.bolt size={16} color="#f59e0b" />
            {marqueeText}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ContactMarquee;
