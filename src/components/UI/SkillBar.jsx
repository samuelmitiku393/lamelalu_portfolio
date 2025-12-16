import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="text-lg font-semibold">{skill.name}</span>
        </div>
        <span className="text-indigo-300 font-bold">{skill.level}%</span>
      </div>
      
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
};

export default SkillBar;