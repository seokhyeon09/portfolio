import React from 'react';
import styles from './Projects.module.scss';
import Card from '../../ui/Card/Card';
import Mockup from '../../ui/Mockup/Mockup';
import { featuredProjects } from '../../../utils/projectData';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            <h4 className={styles.sectionLabel}>PROJECTS</h4>
            <h2 className={styles.sectionTitle}>My Works</h2>
            <p className={styles.description}>
              지금까지 제가 주도적으로 고민하고 개발한 주요 프로젝트들입니다.<br/>
              문제 해결 과정과 실무에 적용한 다양한 기술 스택의 활용을 중심으로 소개합니다.
            </p>
          </div>
          <div className={styles.moreProjects}>
            <Link to="/projects" className={styles.moreButton}>
              더 많은 프로젝트 보기
            </Link>
          </div>
        </div>
        <div className={styles.grid}>
          {featuredProjects.map((project, idx) => (
            <Card key={project.id || idx} className={styles.projectCard}>
              <div className={styles.imagePlaceholder}>
                <Mockup 
                  type={project.deviceType}
                  imageSrc={project.imageSrc}
                  fallbackIcon={project.fallbackIcon}
                  title={project.fallbackText || project.title}
                />
              </div>
              <div className={styles.content}>
                <h3>
                  <span className={styles.projectNum}>{String(project.id).padStart(2, '0')}.</span> {project.title}
                </h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.demoLink} className={styles.link}>Live Demo</a>
                  <a href={project.codeLink} className={styles.link}>Code</a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
