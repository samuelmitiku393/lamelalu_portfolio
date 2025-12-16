import React from 'react';
import { motion } from 'framer-motion';

const FloatingElement = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 5, 0]
      }}
      transition={{ 
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;