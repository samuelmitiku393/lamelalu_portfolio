// Portfolio.jsx
import React, { useEffect, useState, useRef } from "react";
import me from "./DSC06735.jpg";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from "react-icons/fi";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

export default function Portfolio() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const heroRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce with cart, payments, and admin dashboard",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management with real-time updates",
      tags: ["React", "Socket.io", "Express", "JWT"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics and insights",
      tags: ["React", "Chart.js", "Node.js", "REST API"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80"
    }
  ];

  const skills = [
    { name: "React", icon: "⚛️", level: 95 },
    { name: "Node.js", icon: "🟢", level: 90 },
    { name: "Express", icon: "🚀", level: 85 },
    { name: "MongoDB", icon: "🍃", level: 88 },
    { name: "JavaScript", icon: "📜", level: 95 },
    { name: "TypeScript", icon: "📘", level: 80 },
    { name: "Tailwind CSS", icon: "🎨", level: 92 },
    { name: "Git", icon: "📦", level: 90 },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Floating particles effect
  useEffect(() => {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particlesContainer.appendChild(particle);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f2e] via-[#0f172a] to-[#1e1b4b] text-white font-sans overflow-hidden">
      {/* Animated Background */}
      <div id="particles" className="fixed inset-0 pointer-events-none" />
      
      {/* Custom Cursor Effect */}
      <div 
        className="fixed w-8 h-8 border-2 border-indigo-400 rounded-full pointer-events-none z-50 transition-transform duration-100 mix-blend-difference"
        style={{
          left: cursorPosition.x - 16,
          top: cursorPosition.y - 16,
          transform: `scale(${activeSection === 'home' ? 1 : 0.5})`,
        }}
      />
      
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        {['home', 'projects', 'skills', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="block group"
          >
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section 
                ? 'bg-indigo-400 scale-125' 
                : 'bg-gray-500 hover:bg-indigo-300'
            }`} />
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 text-sm transition-opacity duration-300">
              {section}
            </span>
          </a>
        ))}
      </div>

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8 relative" ref={heroRef}>
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            {/* Animated greeting */}
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-extrabold leading-tight"
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 animate-gradient">
                  SAMUEL MITIKU 
                </span>
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 text-lg md:text-xl leading-relaxed"
            >
              <span className="text-indigo-300 font-semibold">A MERN Stack Developer </span> I craft immersive digital experiences with cutting-edge technologies. From pixel-perfect UIs to scalable backends, I bridge design and functionality.
            </motion.p>

            {/* Tech stack icons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 items-center pt-4"
            >
              <SiReact className="w-10 h-10 text-[#61DAFB] animate-pulse" />
              <SiNodedotjs className="w-10 h-10 text-[#339933]" />
              <SiExpress className="w-10 h-10 text-gray-300" />
              <SiMongodb className="w-10 h-10 text-[#47A248]" />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 pt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg shadow-indigo-500/30 flex items-center gap-2 group"
              >
                <span>Explore My Work</span>
                <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 rounded-xl border-2 border-indigo-400 hover:bg-indigo-400 hover:text-black transition-all duration-300 font-semibold hover:border-transparent"
              >
                Let's Connect
              </motion.a>

              {/* Social Links */}
              <div className="flex gap-3 pt-4 w-full">
                <motion.a 
                  whileHover={{ scale: 1.2, y: -5 }}
                  href="https://github.com/samuelmitiku393" 
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, y: -5 }}
                  href="https://linkedin.com" 
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, y: -5 }}
                  href="mailto:Samuelmitiku393@gmail.com" 
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <FiMail className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT PHOTO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-end relative"
          >
            <div className="relative">
              {/* Floating container */}
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-80 h-96"
              >
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl animate-gradient-xy p-1">
                  <div className="w-full h-full rounded-3xl bg-[#020617] overflow-hidden relative">
                    <img
                      src={me}
                      alt="My photo"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent" />
                  </div>
                </div>
                
                {/* Floating badges */}
                <motion.div 
                  animate={{ y: [0, -30, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full shadow-lg"
                >
                  <span className="text-sm font-bold">MERN Stack</span>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 30, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 rounded-full shadow-lg"
                >
                  <span className="text-sm font-bold">Full Stack</span>
                </motion.div>
              </motion.div>
              
              {/* Background decorative elements */}
              <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute -z-10 bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-4 md:px-8 relative">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent works that showcase my skills and passion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Card */}
                <div className="rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 overflow-hidden transition-all duration-500 hover:border-indigo-500/50 group-hover:shadow-2xl group-hover:shadow-indigo-500/20">
                  {/* Image container */}
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-sm text-indigo-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* View button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 font-semibold hover:bg-indigo-500/30 transition-all duration-300"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                Technical Skills
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-xl font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-indigo-300 font-bold">{skill.level}%</span>
                </div>
                
                {/* Animated progress bar */}
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech stack visualization */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50"
          >
            <div className="flex flex-wrap justify-center gap-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border-4 border-dashed border-indigo-500/30 rounded-full flex items-center justify-center"
              >
                <SiReact className="w-16 h-16 text-[#61DAFB]" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="self-center"
              >
                <SiNodedotjs className="w-20 h-20 text-[#339933]" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border-2 border-purple-500/30 rounded-full flex items-center justify-center"
              >
                <SiExpress className="w-16 h-16 text-gray-300" />
              </motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="self-center"
              >
                <SiMongodb className="w-20 h-20 text-[#47A248]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-4 md:px-8 bg-gradient-to-br from-[#020617] to-[#1e1b4b] relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                Let's Create Together
              </span>
            </h2>
            
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:Samuelmitiku393@gmail.com"
                className="px-10 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-xl shadow-indigo-500/30 flex items-center gap-3 group"
              >
                <FiMail />
                <span>Send me an Email</span>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/samuelmitiku393"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-2xl border-2 border-indigo-400 hover:bg-indigo-400 hover:text-black transition-all duration-300 font-semibold text-lg flex items-center gap-3 group"
              >
                <FiGithub />
                <span>View GitHub</span>
              </motion.a>
            </motion.div>
            
            {/* Contact info cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid md:grid-cols-3 gap-6 pt-16"
            >
              {[
                { icon: "📧", title: "Email", value: "samuelmitiku393@gmail.com", link: "samuelmitiku393@gmail.com" },
                { icon: "💼", title: "LinkedIn", value: "linkedin.com/in/you", link: "https://linkedin.com" },
                { icon: "🔗", title: "GitHub", value: "github.com/samuelmitiku393", link: "https://github.com/samuelmitiku393" }
              ].map((item, index) => (
                <motion.a
                  key={item.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.value}</p>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl" />
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex justify-center gap-6 mb-4">
              <motion.div whileHover={{ scale: 1.2 }}><FiGithub className="w-6 h-6 cursor-pointer hover:text-indigo-400" /></motion.div>
              <motion.div whileHover={{ scale: 1.2 }}><FiLinkedin className="w-6 h-6 cursor-pointer hover:text-indigo-400" /></motion.div>
              <motion.div whileHover={{ scale: 1.2 }}><FiMail className="w-6 h-6 cursor-pointer hover:text-indigo-400" /></motion.div>
            </div>
            
            <p className="text-gray-500">
              © {new Date().getFullYear()} • Built with ❤️ using React, Tailwind CSS & Framer Motion
            </p>
            
            <p className="text-gray-600 text-sm">
              Designed with passion for beautiful, functional experiences
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}