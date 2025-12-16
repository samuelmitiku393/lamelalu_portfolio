import React, { useEffect } from 'react';

const BackgroundEffects = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particlesContainer.appendChild(particle);
    }
  }, []);

  return (
    <>
      <div id="particles" className="fixed inset-0 pointer-events-none z-0" />
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/10 via-transparent to-purple-900/10" />
    </>
  );
};

export default BackgroundEffects;