import React from 'react';
import { motion } from 'framer-motion';

const TechBadge = ({ icon, label, color = '#ffffff' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
    >
      <div style={{ color }} className="text-xl">
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </motion.div>
  );
};

export default TechBadge;