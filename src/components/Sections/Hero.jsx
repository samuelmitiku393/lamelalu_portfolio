import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
  FiDownload,
} from 'react-icons/fi';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';

import TechBadge from '../UI/TechBadge';
import SocialLinks from '../UI/SocialLinks';
import me from '../../assets/DSC06735.jpg';

const roles = [
  'MERN Stack Developer',
  'Full-Stack Engineer',
  'Problem Solver',
];

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const fadeLeft = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="space-y-8 z-10"
        >
          {/* Heading */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: reduceMotion ? 0 : 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-bold leading-tight"
            >
              Hi, I’m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                Samuel M.
              </span>
            </motion.h1>
          </div>

          {/* Animated Roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-8 overflow-hidden text-indigo-400 font-semibold text-lg"
          >
            <motion.div
              animate={{ y: reduceMotion ? 0 : ['0%', '-100%', '-200%', '0%'] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {roles.map((role, i) => (
                <div key={i} className="h-8">
                  {role}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            I build fast, scalable, and user-focused web applications using modern
            technologies. Passionate about clean code, performance, and great UX.
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
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 pt-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              aria-label="View Projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all font-semibold shadow-lg shadow-indigo-500/30 flex items-center gap-2"
            >
              View Projects <FiExternalLink />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Samuel-M-CV.pdf"
              download
              aria-label="Download CV"
              className="px-6 py-3 rounded-xl bg-indigo-400/10 border border-indigo-400 hover:bg-indigo-400 hover:text-black transition-all font-semibold flex items-center gap-2"
            >
              Download CV <FiDownload />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <SocialLinks />
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            animate={
              reduceMotion ? {} : { y: [0, -20, 0] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-64 h-80 md:w-80 md:h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-1">
              <div className="w-full h-full rounded-3xl bg-[#020617] overflow-hidden">
                <img
                  src={me}
                  alt="Portrait of Samuel M, MERN Stack Developer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
