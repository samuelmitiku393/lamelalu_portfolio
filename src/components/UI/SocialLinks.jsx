import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiInstagram } from 'react-icons/fi';
import { socialLinks } from '../../data/socialLinks';

const SocialLinks = ({ className = '' }) => {
  const iconMap = {
    github: FiGithub,
    linkedin: FiLinkedin,
    email: FiMail,
    twitter: FiTwitter,
    instagram: FiInstagram
  };

  return (
    <div className={`flex gap-3 ${className}`}>
      {socialLinks.map((link, index) => {
        const Icon = iconMap[link.platform];
        return (
          <motion.a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label={link.platform}
          >
            <Icon className="w-5 h-5 md:w-6 md:h-6" />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;