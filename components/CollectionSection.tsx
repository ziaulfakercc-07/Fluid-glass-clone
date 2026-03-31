'use client';
import Image from 'next/image';
import styles from './CollectionSection.module.css';

const products = [
  { name: 'Doors', image: '/doors.png', pos: 'top-right' },
  { name: 'Windows', image: '/windows.png', pos: 'middle-right' },
  { name: 'Structural', image: '/structural.png', pos: 'middle-center' },
  { name: 'Additional', image: '/additional.png', pos: 'bottom-left' },
];

export default function CollectionSection() {
  return (
    <section className={styles.collection} id="collection">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className="section-label">PRODUCT COLLECTION</span>
        </div>
        <div className={styles.headerRight}>
          <a href="#collection" className="btn btn-dark btn-arrow">
            PRODUCT OVERVIEW
          </a>
        </div>
      </div>

      <div className={styles.grid}>
        {/* Top center image (Doors - large) */}
        <div className={`${styles.card} ${styles.cardTopCenter} img-hover reveal`}>
          <Image
            src="/doors.png"
            alt="Glass Doors"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.cardLabel}>Doors</div>
        </div>

        {/* Middle right (Windows) */}
        <div className={`${styles.card} ${styles.cardMiddleRight} img-hover reveal reveal-delay-1`}>
          <Image
            src="/windows.png"
            alt="Glass Windows"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.cardLabel}>Windows</div>
        </div>

        {/* Middle center (Structural) */}
        <div className={`${styles.card} ${styles.cardMiddleCenter} img-hover reveal reveal-delay-2`}>
          <Image
            src="/structural.png"
            alt="Structural Glazing"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.cardLabel}>Structural</div>
        </div>

        {/* Bottom left (Additional) */}
        <div className={`${styles.card} ${styles.cardBottomLeft} img-hover reveal reveal-delay-3`}>
          <Image
            src="/additional.png"
            alt="Additional Products"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.cardLabel}>Additional</div>
        </div>
      </div>
    </section>
  );
}
