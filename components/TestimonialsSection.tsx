'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    id: 1,
    quote: "Unrivaled customer service, cutting edge design and quality. Fluid Glass is firmly lodged in our list of preferred suppliers of glazing products.",
    name: "Zia ul Faker Khan",
    role: "FOUNDER, NAME ARCHITECTS",
    image: "/zia.jpg",
  },
  {
    id: 2,
    quote: "Working with Fluid Glass was an exceptional experience from start to finish. The precision and attention to detail in every panel is remarkable.",
    name: "Zia ul Faker Khan",
    role: "PRINCIPAL ARCHITECT, SM DESIGN",
    image: "/zia.jpg",
  },
  {
    id: 3,
    quote: "The quality of their structural glazing systems is second to none. Our clients are consistently amazed by the results.",
    name: "Zia ul Faker Khan",
    role: "DIRECTOR, THORNTON BUILD",
    image: "/zia.jpg",
  },
  {
    id: 4,
    quote: "Fluid Glass transformed our project completely. The seamless integration of glass and steel created a breathtaking living space.",
    name: "Zia ul Faker Khan",
    role: "INTERIOR DESIGNER, EP STUDIO",
    image: "/zia.jpg",
  },
  {
    id: 5,
    quote: "Exceptional service, outstanding product quality and a team that genuinely cares about delivering perfection every time.",
    name: "Zia ul Faker Khan",
    role: "FOUNDER, DAVIES HOMES",
    image: "/zia.jpg",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className="section-label">CLIENT STORIES</span>
        </div>
        <div className={styles.counter}>
          <span className={styles.current}>0{current + 1}</span>
          <span className={styles.separator}> / </span>
          <span className={styles.total}>0{testimonials.length}</span>
        </div>
        <div className={styles.controls}>
          <button className={styles.controlBtn} onClick={prev} aria-label="Previous testimonial" id="testimonial-prev">←</button>
          <button className={styles.controlBtn} onClick={next} aria-label="Next testimonial" id="testimonial-next">→</button>
        </div>
      </div>

      <div className={styles.body} key={current}>
        <div className={styles.portrait}>
          <Image
            src={t.image}
            alt={t.name}
            width={160}
            height={160}
            style={{ objectFit: 'cover', objectPosition: 'top center', width: '160px', height: '160px' }}
          />
        </div>

        <div className={styles.quoteWrap}>
          <span className={styles.quoteMark}>"</span>
          <blockquote className={styles.quote}>{t.quote}</blockquote>
          <div className={styles.author}>
            <p className={styles.authorName}>{t.name}</p>
            <p className={styles.authorRole}>{t.role}</p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.googleRating}>
          <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className={styles.ratingText}>GOOGLE REVIEW SCORE: 5.0 OF 5</span>
        </div>
      </div>
    </section>
  );
}
