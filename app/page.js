'use client';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Capabilities from './components/Capabilities';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import VisionMission from './components/VisionMission';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'trust', 'capabilities', 'products', 'why', 'vision', 'contact'];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { threshold: 0.4 });
    sections.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 8, behavior: 'smooth' });
  };

  return (
    <>
      <Nav activeSection={activeSection} />
      <Hero onScrollTo={scrollTo} />
      <Trust />
      <Capabilities />
      <Products />
      <WhyUs />
      <VisionMission />
      <Contact />
      <Footer />
    </>
  );
}
