'use client';
import Image from 'next/image';
import styles from './CtaFooter.module.css';

export default function CtaFooter() {
  return (
    <footer className={styles.footer} id="contact">
      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <div className={styles.bgText} aria-hidden>FLUID GLASS</div>
        <div className={styles.ctaInner}>
          <div className={styles.ctaActions}>
            <a href="#approach" className="btn btn-dark btn-arrow">OUR APPROACH</a>
            <a href="#contact" className="btn btn-outline btn-arrow">GET IN TOUCH</a>
          </div>
        </div>
        <div className={styles.bgImageWrap}>
          <Image
            src="/project1.png"
            alt="Featured glazing project"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.bgImageOverlay} />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottomFooter}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLogo}>
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M20 8L30 14V26L20 32L10 26V14L20 8Z" fill="currentColor" fillOpacity="0.3"/>
              <path d="M20 14L26 17.5V24.5L20 28L14 24.5V17.5L20 14Z" fill="currentColor"/>
            </svg>
            <span className={styles.footerLogoText}>FLUID GLASS</span>
          </div>
          <p className={styles.footerTagline}>Exceptional glazing for those who build with vision.</p>
        </div>

        <div className={styles.footerNav}>
          <div className={styles.footerNavCol}>
            <p className={styles.footerNavTitle}>COMPANY</p>
            <a href="#about" className={styles.footerNavLink}>About</a>
            <a href="#collection" className={styles.footerNavLink}>Collection</a>
            <a href="#projects" className={styles.footerNavLink}>Projects</a>
            <a href="#approach" className={styles.footerNavLink}>Approach</a>
          </div>
          <div className={styles.footerNavCol}>
            <p className={styles.footerNavTitle}>CONTACT</p>
            <a href="#showroom" className={styles.footerNavLink}>Showroom</a>
            <a href="#news" className={styles.footerNavLink}>News</a>
            <a href="tel:02081567290" className={styles.footerNavLink}>020 8156 7290</a>
            <a href="mailto:sales@fluid.glass" className={styles.footerNavLink}>sales@fluid.glass</a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>© {new Date().getFullYear()} Fluid Glass Ltd. All rights reserved.</p>
        <div className={styles.footerLegal}>
          <a href="#privacy" className={styles.legalLink}>Privacy Policy</a>
          <a href="#terms" className={styles.legalLink}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
