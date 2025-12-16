import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../Shared/SectionHeader';
import ProjectCard from '../UI/ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-[#020617]/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="My Projects"
          subtitle="Check out some of my recent work"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;