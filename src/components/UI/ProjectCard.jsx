import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import AnimatedCard from './AnimatedCard';

const ProjectCard = ({ project, index }) => {
  return (
    <AnimatedCard delay={index * 0.1}>
      <div className="p-6">
        {/* Project Image */}
        <div className="h-48 mb-4 rounded-xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* Project Info */}
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-sm text-indigo-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 font-semibold hover:bg-indigo-500/30 transition-all text-center flex items-center justify-center gap-2"
          >
            <FiExternalLink />
            Live Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 rounded-xl border border-gray-700 text-gray-300 font-semibold hover:border-gray-600 hover:text-white transition-all text-center flex items-center justify-center gap-2"
          >
            <FiGithub />
            Code
          </motion.a>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default ProjectCard;