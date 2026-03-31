'use client';
import Image from 'next/image';
import styles from './ShowroomSection.module.css';

export default function ShowroomSection() {
  return (
    <section className={styles.showroom} id="showroom">
      <div className={styles.header}>
        <span className={`section-label section-label-light`}>SHOWROOM</span>
      </div>

      <div className={styles.inner}>
        <div className={styles.textLeft}>
          <h2 className={`${styles.heading} reveal`}>
            A place where precision and creativity connect.
          </h2>
        </div>

        <div className={styles.imageCenter}>
          <div className={`${styles.imageWrap} reveal`}>
            <Image
              src="/showroom.png"
              alt="Fluid Glass Showroom"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>

        <div className={`${styles.infoRight} reveal reveal-delay-1`}>
          <div className={styles.addressBlock}>
            <p className={styles.addressLabel}>ADDRESS</p>
            <p className={styles.address}>
              Orbital 25 Business Park, Unit 11<br />
              Watford WD18 9DA, UK
            </p>
          </div>
          <a href="#showroom" className={`btn btn-outline-light btn-arrow ${styles.shopBtn}`}>
            SHOWROOM
          </a>
          <button className={styles.playBtn}>PLAY</button>
        </div>
      </div>
    </section>
  );
}
