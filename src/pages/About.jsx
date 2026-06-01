import React from 'react'
import styles from './About.module.scss'
import { 
    aboutHeader, 
    aboutMeInfo, 
    coreValues, 
    timelineInfo, 
    educationInfo, 
    aboutBanner 
} from '../utils/aboutContent'
import { icons } from '../utils/icons'
import FadeUp from '../components/ui/FadeUp/FadeUp'
import PageHeader from '../components/ui/PageHeader/PageHeader'
import CtaBanner from '../components/ui/CtaBanner/CtaBanner'

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <FadeUp delay={0.1}>
          <PageHeader 
            label={aboutHeader.label}
            title={aboutHeader.title}
            descriptions={aboutHeader.descriptions}
          />
        </FadeUp>

        {/* Grid Layout Section */}
        <FadeUp delay={0.2}>
          <section className={styles.grid}>
          
          {/* Left Column */}
          <div className={styles.column}>
            {/* About Me Card */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <aboutMeInfo.icon />
                </div>
                <div className={styles.cardTitleWrapper}>
                  <h2>{aboutMeInfo.title}</h2>
                  <span>{aboutMeInfo.subText}</span>
                </div>
              </div>
              <p className={styles.aboutDesc}>{aboutMeInfo.desc}</p>
            </div>

            {/* Core Values Card */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={`${styles.iconWrapper} ${styles.purple}`}>
                  <coreValues.icon />
                </div>
                <div className={styles.cardTitleWrapper}>
                  <h2>{coreValues.title}</h2>
                </div>
              </div>
              
              <div className={styles.coreValuesGrid}>
                {coreValues.items.map((val, idx) => (
                  <div key={idx} className={styles.valueItem}>
                    <div className={styles.valueHeader}>
                      <span className={styles.valueIcon}>
                        <val.Icon />
                      </span>
                      {val.title}
                    </div>
                    <p>{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.column}>
            {/* Timeline Card */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={`${styles.iconWrapper} ${styles.warning}`}>
                  <timelineInfo.icon />
                </div>
                <div className={styles.cardTitleWrapper}>
                  <h2>{timelineInfo.title}</h2>
                </div>
              </div>

              <div className={styles.timeline}>
                {timelineInfo.items.map((item, idx) => (
                  <div key={idx} className={styles.timelineItem}>
                    <div className={styles.dot} style={{ background: item.dot }}></div>
                    <span className={styles.range}>{item.range}</span>
                    <h3>{item.title}</h3>
                    <div className={styles.company} style={{ color: item.companyColor }}>
                      {item.company}
                    </div>
                    <p className={styles.desc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={`${styles.iconWrapper} ${styles.success}`}>
                  <educationInfo.icon />
                </div>
                <div className={styles.cardTitleWrapper}>
                  <h2>{educationInfo.title}</h2>
                </div>
              </div>
              
              <div className={styles.education}>
                <div className={styles.schoolInfo}>
                  <h3>{educationInfo.school}</h3>
                  <p>{educationInfo.major}</p>
                </div>
                <span className={styles.badge}>{educationInfo.range}</span>
              </div>
            </div>
          </div>
          
          </section>
        </FadeUp>

        {/* CTA Banner */}
        <FadeUp delay={0.3}>
          <CtaBanner 
            badge={aboutBanner.badge}
            title={aboutBanner.title}
            desc={aboutBanner.desc}
            primaryBtn={{ text: '기술 보러가기', path: '/skills' }}
            secondaryBtn={{ text: '협업 문의하기', path: '/contact', icon: icons.mail }}
          />
        </FadeUp>

      </div>
    </div>
  )
}

export default About