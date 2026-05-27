import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Projects.module.scss'
import FadeUp from '../components/ui/FadeUp/FadeUp'
import FadeInLeft from '../components/ui/FadeInLeft/FadeInLeft'
import Mockup from '../components/ui/Mockup/Mockup'
import { icons } from '../utils/icons'
import {
    projectsHeader,
    projectFilters,
    allProjects,
    projectsBanner
} from '../utils/projectData'

const Projects = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('all')

  // Filter projects based on the active tab
  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.type === activeFilter)

  return (
    <div className={styles.projectsPage}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <FadeUp delay={0.1}>
          <section className={styles.header}>
            <span className={styles.label}>{projectsHeader.label}</span>
            <h1 className={styles.title}>{projectsHeader.title}</h1>
            <p className={styles.desc}>{projectsHeader.desc}</p>
            
            <div className={styles.stats}>
              {projectsHeader.stats.map((stat, idx) => (
                <div key={idx} className={styles.statItem}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* Filters Section */}
        <FadeUp delay={0.2}>
          <section className={styles.filters}>
            {projectFilters.map(filter => (
              <button
                key={filter.id}
                className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.active : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </section>
        </FadeUp>

        {/* Projects Grid Section */}
        <FadeUp delay={0.3}>
          <section className={styles.grid}>
            {filteredProjects.map((project, idx) => (
              <FadeInLeft key={project.id} delay={0.1 * idx}>
                <div className={styles.projectCard}>
                  
                  {/* Mockup Image Area */}
                  <div className={styles.imagePlaceholder}>
                    <Mockup 
                      type={project.deviceType}
                      imageSrc={project.imageSrc}
                      fallbackIcon={project.fallbackIcon}
                      title={project.fallbackText || project.title}
                    />
                  </div>

                  {/* Card Content Area */}
                  <div className={styles.content}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.tags}>
                      {project.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                    <div className={styles.links}>
                      <a href={project.demoLink} className={styles.link} target="_blank" rel="noopener noreferrer">
                        <icons.external size={16} /> Live Demo
                      </a>
                      <a href={project.codeLink} className={styles.link} target="_blank" rel="noopener noreferrer">
                        <icons.github size={16} /> Code
                      </a>
                    </div>
                  </div>
                </div>
              </FadeInLeft>
            ))}
          </section>
        </FadeUp>

        {/* CTA Banner */}
        <FadeUp delay={0.4}>
          <section className={styles.banner}>
            <span className={styles.badge}><icons.rocket size={16} style={{marginRight: '6px', marginBottom: '-2px'}} />{projectsBanner.badge}</span>
            <h2>{projectsBanner.title}</h2>
            <p>{projectsBanner.desc}</p>
            <div className={styles.actions}>
              <button className={styles.primaryBtn} onClick={() => window.open('mailto:example@gmail.com', '_blank')}>
                <icons.mail size={18} style={{ marginRight: '8px' }} /> 지금 바로 연락하기
              </button>
              <button className={styles.secondaryBtn} onClick={() => navigate('/')}>
                <icons.layout size={18} /> 홈으로 돌아가기
              </button>
            </div>
          </section>
        </FadeUp>

      </div>
    </div>
  )
}

export default Projects
