import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../UI/SocialLinks';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} MERN Stack Portfolio. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Built with React, Tailwind CSS & Framer Motion
            </p>
          </motion.div>

          <SocialLinks />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            <a href="#hero" className="hover:text-indigo-400 transition-colors">
              Back to Top ↑
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;