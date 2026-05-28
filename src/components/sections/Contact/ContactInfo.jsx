import React from 'react';
import styles from './ContactInfo.module.scss';
import { icons } from '../../../utils/icons';
import { socialLinks, currentStatus } from '../../../utils/contactData';

const ContactInfo = () => {
  return (
    <div className={styles.infoContainer}>
      {/* Social Links */}
      <div>
        <h3 className={styles.sectionTitle}>소셜 링크</h3>
        <div className={styles.socialCard}>
          {socialLinks.map((social) => {
            const SocialIcon = icons[social.icon];
            return (
              <div key={social.id}>
                <a href={social.url} target="_blank" rel="noreferrer" className={styles.socialItem}>
                  <div className={styles.socialIcon}>
                    {SocialIcon && <SocialIcon size={24} />}
                  </div>
                  <div className={styles.socialText}>
                    <div className={styles.title}>{social.title}</div>
                    <div className={styles.desc}>{social.desc}</div>
                  </div>
                  <icons.external size={16} className={styles.arrowIcon} />
                </a>
                
                {/* Optional Stats for GitHub */}
                {social.stats && (
                  <div className={styles.socialStats}>
                    {social.stats.map((stat, idx) => {
                      const StatIcon = icons[stat.icon];
                      return (
                        <div key={idx} className={styles.stat}>
                          {StatIcon && <StatIcon size={14} className={styles.icon} />}
                          <span>{stat.value}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                {/* Optional Badge for Email */}
                {(social.badge || social.location) && (
                  <div className={styles.badgeInfo}>
                    {social.badge && (
                      <div className={styles.badge}>
                        <icons.layout size={14} />
                        {social.badge}
                      </div>
                    )}
                    {social.location && (
                      <div className={styles.location}>
                        <icons.mapPin size={14} />
                        {social.location}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Current Status */}
      <div>
        <div className={styles.statusCard}>
          <div className={styles.statusHeader}>
            <div className={styles.titleWrap}>
              <div className={styles.title}>현재 상태</div>
              <div className={styles.desc}>협업 가능 여부</div>
            </div>
            {currentStatus.isAvailable && (
              <div className={styles.availabilityBadge}>
                <div className={styles.dot}></div>
                Available
              </div>
            )}
          </div>
          
          <div className={styles.statusList}>
            {currentStatus.items.map((item, idx) => {
              const ItemIcon = icons[item.icon];
              return (
                <div key={idx} className={styles.statusItem}>
                  <div className={styles.iconWrap}>
                    {ItemIcon && <ItemIcon size={20} />}
                  </div>
                  <div className={styles.itemText}>
                    <div className={styles.itemTitle}>{item.title}</div>
                    <div className={styles.itemDesc}>{item.desc}</div>
                  </div>
                  {item.active && <icons.check size={18} className={styles.checkIcon} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
