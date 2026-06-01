import React, { useState } from 'react'
import styles from './Projects.module.scss'
import FadeUp from '../components/ui/FadeUp/FadeUp'
import FadeInLeft from '../components/ui/FadeInLeft/FadeInLeft'
import Mockup from '../components/ui/Mockup/Mockup'
import PageHeader from '../components/ui/PageHeader/PageHeader'
import CtaBanner from '../components/ui/CtaBanner/CtaBanner'
import { icons } from '../utils/icons'
import {
    projectsHeader,
    projectFilters,
    allProjects,
    projectsBanner
} from '../utils/projectData'

const Projects = () => {
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
          <PageHeader 
            label={projectsHeader.label}
            title={projectsHeader.title}
            descriptions={projectsHeader.desc}
            stats={projectsHeader.stats}
          />
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
          <CtaBanner 
            badge={projectsBanner.badge}
            title={projectsBanner.title}
            desc={projectsBanner.desc}
            primaryBtn={{ text: '지금 바로 연락하기', path: 'mailto:example@gmail.com', external: true, icon: icons.mail }}
            secondaryBtn={{ text: '홈으로 돌아가기', path: '/', icon: icons.layout }}
          />
        </FadeUp>

      </div>
    </div>
  )
}

export default Projects
