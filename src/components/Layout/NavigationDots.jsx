import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

const NavigationDots = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 space-y-4 hidden md:block">
      {sections.map((section) => (
        <motion.a
          key={section.id}
          href={`#${section.id}`}
          className="block relative group"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-gradient-to-r from-indigo-400 to-pink-400 scale-125'
                : 'bg-gray-500 hover:bg-gray-400'
            }`}
            animate={{
              scale: activeSection === section.id ? [1, 1.2, 1] : 1
            }}
            transition={{
              duration: 2,
              repeat: activeSection === section.id ? Infinity : 0
            }}
          />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-sm text-gray-300 transition-opacity duration-300 whitespace-nowrap">
            {section.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default NavigationDots;