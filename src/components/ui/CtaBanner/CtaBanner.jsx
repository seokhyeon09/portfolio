import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CtaBanner.module.scss';
import { icons } from '../../../utils/icons';

/**
 * Reusable CTA Banner component
 * @param {Object} props
 * @param {string} props.badge - Text for the badge (with rocket icon)
 * @param {string} props.title - Banner title
 * @param {string} props.desc - Banner description
 * @param {Object} props.primaryBtn - { text, path, external, icon }
 * @param {Object} props.secondaryBtn - { text, path, external, icon }
 */
const CtaBanner = ({ badge, title, desc, primaryBtn, secondaryBtn }) => {
  const navigate = useNavigate();

  const handleBtnClick = (btn) => {
    if (!btn) return;
    if (btn.external) {
      window.open(btn.path, '_blank');
    } else {
      navigate(btn.path);
    }
  };

  return (
    <section className={styles.banner}>
      {badge && (
        <span className={styles.badge}>
          <icons.rocket size={16} style={{ marginRight: '6px', marginBottom: '-2px' }} />
          {badge}
        </span>
      )}
      <h2>{title}</h2>
      <p>{desc}</p>
      
      <div className={styles.actions}>
        {primaryBtn && (
          <button className={styles.primaryBtn} onClick={() => handleBtnClick(primaryBtn)}>
            {primaryBtn.icon && <primaryBtn.icon size={18} style={{ marginRight: '8px' }} />}
            {primaryBtn.text}
          </button>
        )}
        
        {secondaryBtn && (
          <button className={styles.secondaryBtn} onClick={() => handleBtnClick(secondaryBtn)}>
            {secondaryBtn.icon && <secondaryBtn.icon size={18} style={{ marginRight: '8px' }} />}
            {secondaryBtn.text}
          </button>
        )}
      </div>
    </section>
  );
};

export default CtaBanner;
