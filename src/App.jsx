import React from 'react';
import './App.css';
import { BackgroundEffects, CustomCursor, NavigationDots, ScrollIndicator } from './components/Layout';
import { Hero, Projects, Skills, About, Contact, Footer } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f2e] via-[#0f172a] to-[#1e1b4b] text-white font-sans overflow-hidden">
      <BackgroundEffects />
      <CustomCursor />
      <NavigationDots />
      <ScrollIndicator />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;