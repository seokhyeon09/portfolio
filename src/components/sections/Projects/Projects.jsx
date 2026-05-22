import React from 'react';
import styles from './Projects.module.scss';
import Card from '../../ui/Card/Card';

const Projects = () => {
  const projects = [
    {
      title: 'Cooling Spot',
      description: 'Full-stack shopping app with payment integration and inventory management.',
      tags: ['Next.js', 'Prisma'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Cooling Spot',
      description: 'Full-stack shopping app with payment integration and inventory management.',
      tags: ['Next.js', 'Prisma'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Cooling Spot',
      description: 'Full-stack shopping app with payment integration and inventory management.',
      tags: ['Next.js', 'Prisma'],
      demoLink: '#',
      codeLink: '#',
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <Card key={idx} className={styles.projectCard}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.mockup}>
                  <div className={styles.screen}>
                    <span>Movement that<br/>Inspires</span>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <h3>{project.title}</h3>
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
