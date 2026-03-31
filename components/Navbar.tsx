'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Floating Bottom Navigation Bar */}
      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo} aria-label="Fluid Glass Home">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" stroke="white" strokeWidth="1.5" fill="none"/>
              <path d="M20 8L30 14V26L20 32L10 26V14L20 8Z" fill="white" fillOpacity="0.3"/>
              <path d="M20 14L26 17.5V24.5L20 28L14 24.5V17.5L20 14Z" fill="white"/>
            </svg>
          </Link>

          <Link href="/" className={styles.navHome}>
            HOME
          </Link>

          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            id="menu-toggle"
          >
            <span className={styles.hamburger}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </nav>

      {/* Full-Screen Menu Overlay */}
      {menuOpen && (
        <div className={styles.menuOverlay} onClick={() => setMenuOpen(false)}>
          <div className={styles.menuPanel} onClick={(e) => e.stopPropagation()}>
            <p className={styles.menuLabel}>MENU</p>

            <nav className={styles.menuLinks}>
              {['About', 'Collection', 'Projects', 'Approach', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={styles.menuLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className={styles.menuFooter}>
              <div className={styles.menuSecondaryLinks}>
                <Link href="#news" className={styles.menuSecondaryLink} onClick={() => setMenuOpen(false)}>News</Link>
                <Link href="#showroom" className={styles.menuSecondaryLink} onClick={() => setMenuOpen(false)}>Showroom</Link>
              </div>
              <div className={styles.menuContact}>
                <a href="tel:02081567290" className={styles.menuContactLink}>020 8156 7290</a>
                <a href="mailto:sales@fluid.glass" className={styles.menuContactLink}>sales@fluid.glass</a>
              </div>
            </div>

            <a href="#contact" className={`btn btn-outline-light btn-arrow ${styles.menuCta}`} onClick={() => setMenuOpen(false)}>
              GET A QUOTE
            </a>
          </div>

          <button
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            id="menu-close"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
