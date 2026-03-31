'use client';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBg}>
        <Image
          src="/hero.png"
          alt="Exceptional architectural glazing - Fluid Glass"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.heroContent}>
        <span className={`section-label ${styles.heroLabel}`}>◆ FLUID GLASS</span>
        <h1 className={styles.heroHeading}>
          Exceptional glazing for those who build with vision.
        </h1>
      </div>

      <div className={styles.heroScroll}>
        <span>SCROLL</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
