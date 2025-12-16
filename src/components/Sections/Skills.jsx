import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../Shared/SectionHeader';
import SkillBar from '../UI/SkillBar';
import { skills } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="My Skills"
          subtitle="Technologies I work with"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillBar skill={skill} />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'GitHub', 'VS Code', 'Postman', 'MongoDB Compass',
              'Firebase', 'AWS', 'Docker', 'Figma', 'Jira'
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;