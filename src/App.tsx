/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Navigate to sections via scroll
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = sectionId === 'home' ? 0 : element.offsetTop - 70;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  // Setup Intersection Observer to monitor scroll sections
  useEffect(() => {
    const sections = ['home', 'skills', 'experience', 'about', 'projects', 'testimonials'];
    
    const observerOptions = {
      root: null, // Viewport
      rootMargin: '-30% 0px -60% 0px', // High-precision center viewport triggers
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-gray-100 flex flex-col relative" id="master-app-root">
      {/* Decorative scanline laser flow */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent z-40 pointer-events-none" />

      {/* Floating Blurred Glass Header Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Core Portfolio Content */}
      <main className="flex-grow">
        {/* Cinematic Video Hero */}
        <HeroSection onNavigate={handleNavigate} />

        {/* Skill Matrix */}
        <SkillsSection />

        {/* Chronological Work History & Marquee */}
        <ExperienceSection />

        {/* Learning, Timelines, AWS Badging, Quote */}
        <AboutSection />

        {/* Project Showrooms Archive with Filter Search */}
        <ProjectsSection />

        {/* Testimonial board */}
        <TestimonialSection />
      </main>

      {/* Footer Contact Direct Line Block */}
      <Footer />
    </div>
  );
}
