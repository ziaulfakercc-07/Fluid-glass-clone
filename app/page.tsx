'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CollectionSection from '@/components/CollectionSection';
import ShowroomSection from '@/components/ShowroomSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaFooter from '@/components/CtaFooter';

export default function Home() {
  // Initialize scroll reveal for all .reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <ShowroomSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CtaFooter />
    </main>
  );
}
