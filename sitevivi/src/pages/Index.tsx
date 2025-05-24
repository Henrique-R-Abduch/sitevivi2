
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';
import AudioPlayer from '../components/AudioPlayer';
import { Section } from 'lucide-react';
import SectionFive from '../components/SectionFive';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);

  // Track which section is currently visible
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const newSection = Math.floor(scrollPosition / windowHeight);
      if (newSection !== currentSection) {
        setCurrentSection(newSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <div className="relative w-full h-full">
      {/* Navbar */}
      <Navbar />
      
      
      {/* Sections */}
      <SectionThree />
      <SectionTwo />
      <SectionOne />
      
      
      <SectionFour />
      <SectionFive />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
