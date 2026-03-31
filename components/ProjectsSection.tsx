'use client';
import Image from 'next/image';
import styles from './ProjectsSection.module.css';

const projects = [
  {
    id: 1,
    title: 'Berkeley Road',
    tags: ['FLUID X SLIDING DOOR', 'FLUID SLIDING DOOR'],
    images: ['/project1.png', '/showroom.png'],
  },
  {
    id: 2,
    title: 'Bodiam Walk',
    tags: ['STRUCTURAL GLAZING', 'FRAMELESS GLASS'],
    images: ['/structural.png', '/windows.png'],
  },
];

export default function ProjectsSection() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className="section-label">FEATURED PROJECTS</span>
        </div>
        <div className={styles.headerRight}>
          <a href="#projects" className="btn btn-dark btn-arrow">
            VIEW PROJECTS
          </a>
        </div>
      </div>

      <div className={`${styles.intro} reveal`}>
        <h2 className={styles.introHeading}>
          Each project tells its own story of collaboration and precision.
        </h2>
      </div>

      {projects.map((project) => (
        <div key={project.id} className={styles.projectItem}>
          <div className={styles.projectMeta}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <div className={styles.projectTags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.projectTag}>{tag}</span>
              ))}
            </div>
            <a href="#projects" className={styles.projectArrow}>↗</a>
          </div>
          <div className={styles.projectDivider} />
          <div className={styles.projectImages}>
            {project.images.map((src, i) => (
              <div key={i} className={`${styles.projectImg} img-hover reveal`}>
                <Image
                  src={src}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
