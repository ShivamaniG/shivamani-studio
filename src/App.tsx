/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ShippedSection from './components/ShippedSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import AboutSection from './components/AboutSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

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

  useEffect(() => {
    const sections = ['home', 'shipped', 'projects', 'experience', 'about', 'testimonials'];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
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
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent z-40 pointer-events-none" />
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="flex-grow">
        <HeroSection onNavigate={handleNavigate} />
        <ShippedSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}
