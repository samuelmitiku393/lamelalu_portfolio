import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si';
import TechBadge from '../UI/TechBadge';
import SocialLinks from '../UI/SocialLinks';
import me from '../../assets/DSC06735.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-8 relative">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 z-10"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl font-bold leading-tight"
            >
              Hi, I'm a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                MERN Stack Developer
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            Building exceptional digital experiences with modern technologies. 
            I create fast, responsive, and user-friendly web applications.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <TechBadge icon={<SiReact />} label="React" color="#61DAFB" />
            <TechBadge icon={<SiNodedotjs />} label="Node.js" color="#339933" />
            <TechBadge icon={<SiExpress />} label="Express" color="#ffffff" />
            <TechBadge icon={<SiMongodb />} label="MongoDB" color="#47A248" />
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
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all font-semibold shadow-lg shadow-indigo-500/30 flex items-center gap-2"
            >
              View Projects
              <FiExternalLink />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 rounded-xl border-2 border-indigo-400 hover:bg-indigo-400 hover:text-black transition-all font-semibold"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <SocialLinks />
        </motion.div>

        {/* Right Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center md:justify-end relative"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-80 md:w-80 md:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl animate-gradient-xy p-1">
                <div className="w-full h-full rounded-3xl bg-[#020617] overflow-hidden">
                  <img
                    src={me}
                    alt="Profile"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;