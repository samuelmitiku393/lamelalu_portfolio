import React, { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 24;

const BackgroundEffects = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    // Clear existing particles (important for strict mode)
    container.innerHTML = '';

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = document.createElement('span');

      const size = Math.random() * 6 + 4; // 4px – 10px
      const duration = Math.random() * 20 + 20; // 20s – 40s

      particle.className = 'particle';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${Math.random() * 10}s`;

      container.appendChild(particle);
    }
  }, []);

  return (
    <>
      {/* Floating Particles */}
      <div
        ref={particlesRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      />

      {/* Soft Gradient Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full" />
      </div>
    </>
  );
};

export default BackgroundEffects;
