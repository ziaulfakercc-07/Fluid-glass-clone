'use client';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutInner}>
        <span className={`section-label reveal ${styles.label}`}>ABOUT FLUID GLASS</span>
        <h2 className={`${styles.heading} reveal reveal-delay-1`}>
          We bring architecture to life through craft and innovation.And now we are forward-thinking, embracing the future of glass architecture.
        </h2>
        <div className={`${styles.actions} reveal reveal-delay-2`}>
          <a href="#collection" className="btn btn-dark btn-arrow">
            WHO WE ARE
          </a>
        </div>
      </div>
    </section>
  );
}
