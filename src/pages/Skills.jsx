import React from 'react'
import styles from './Skills.module.scss'
import { 
    skillsHeader, 
    skillData, 
    proficiencyLegend, 
    learningSkills, 
    skillsBanner 
} from '../utils/skillData'
import { icons } from '../utils/icons'
import FadeUp from '../components/ui/FadeUp/FadeUp'
import FadeInLeft from '../components/ui/FadeInLeft/FadeInLeft'
import PageHeader from '../components/ui/PageHeader/PageHeader'
import CtaBanner from '../components/ui/CtaBanner/CtaBanner'

const Skills = () => {
  // Helper to convert proficiency to a lowercase class name
  const getProficiencyClass = (level) => {
    return level.toLowerCase()
  }

  return (
    <div className={styles.skillsPage}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <FadeUp delay={0.1}>
          <PageHeader 
            label={skillsHeader.label}
            title={skillsHeader.title}
            descriptions={skillsHeader.desc}
            stats={skillsHeader.stats}
          />
        </FadeUp>

        {/* Main Skills Grid */}
        <FadeUp delay={0.2}>
          <section className={styles.skillsGrid}>
          {skillData.map((category, idx) => {
            const Icon = icons[category.icon]
            return (
              <div key={idx} className={styles.card} style={{ '--card-color': category.color }}>
                <div className={styles.cardHeader}>
                  <div className={styles.titleGroup}>
                    <div className={styles.iconWrapper}>
                      {Icon && <Icon />}
                    </div>
                    <h2>{category.title}</h2>
                  </div>
                </div>
                
                <div className={styles.skillList}>
                  {category.skills.map((skill, sIdx) => (
                    <FadeInLeft key={sIdx} delay={0.2 + (sIdx * 0.1)}>
                      <div className={styles.skillItem}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={`${styles.proficiencyTag} ${styles[getProficiencyClass(skill.proficiency)]}`}>
                          {skill.proficiency}
                        </span>
                      </div>
                    </FadeInLeft>
                  ))}
                </div>
              </div>
            )
          })}
          </section>
        </FadeUp>

        {/* Legend Section */}
        <FadeUp delay={0.2}>
          <section className={styles.legendSection}>
          <h2 className={styles.legendTitle}>숙련도 범례</h2>
          <p className={styles.legendSubtitle}>각 태그가 의미하는 숙련도 수준을 나타냅니다.</p>
          
          <div className={styles.legendGrid}>
            {proficiencyLegend.map((legend, idx) => (
              <div key={idx} className={styles.legendCard}>
                <div className={styles.legendHeader}>
                  <div className={styles.legendColor} style={{ background: legend.color }}></div>
                  <h3 style={{ color: legend.color }}>{legend.level}</h3>
                </div>
                <p>{legend.desc}</p>
              </div>
            ))}
          </div>
          </section>
        </FadeUp>

        {/* Currently Learning Section */}
        <FadeUp delay={0.2}>
          <section className={styles.learningSection}>
          <div className={styles.learningHeader}>
            <span className={styles.learningLabel}>{learningSkills.label}</span>
            <h2 className={styles.learningTitle}>{learningSkills.title}</h2>
            <p className={styles.learningDesc}>{learningSkills.desc}</p>
          </div>
          
          <div className={styles.learningGrid}>
            {learningSkills.items.map((item, idx) => (
              <div key={idx} className={styles.learningCard}>
                <div className={styles.cardTop}>
                  <h3>{item.name}</h3>
                  <span className={styles.badge}>{item.badge}</span>
                </div>
                <p className={styles.desc}>{item.desc}</p>
                <div className={styles.progressMock}>
                  <div className={styles.progressBar} style={{ background: item.color }}></div>
                </div>
              </div>
            ))}
          </div>
          </section>
        </FadeUp>

        {/* CTA Banner */}
        <FadeUp delay={0.3}>
          <CtaBanner 
            badge={skillsBanner.badge}
            title={skillsBanner.title}
            desc={skillsBanner.desc}
            primaryBtn={{ text: '프로젝트 보러가기', path: '/projects' }}
            secondaryBtn={{ text: '협업 문의하기', path: '/contact', icon: icons.mail }}
          />
        </FadeUp>

      </div>
    </div>
  )
}

export default Skills