import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiUsers } from 'react-icons/fi';
import SectionHeader from '../Shared/SectionHeader';
import { aboutData } from '../../data/aboutData';

const About = () => {
  const features = [
    {
      icon: <FiCode />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following best practices."
    },
    {
      icon: <FiLayers />,
      title: "Full Stack Development",
      description: "End-to-end development from UI/UX design to backend APIs and database management."
    },
    {
      icon: <FiUsers />,
      title: "Collaborative",
      description: "Experience working in agile teams with Git, code reviews, and collaborative workflows."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="About Me"
          subtitle="Passionate developer crafting digital experiences"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Turning Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                Reality
              </span>
            </h3>
            <p className="text-gray-300 mb-6">
              I'm a MERN Stack Developer with a passion for creating beautiful, functional,
              and user-centered digital experiences. With a strong foundation in both frontend
              and backend technologies, I bring ideas to life through code.
            </p>
            <p className="text-gray-300 mb-8">
              My approach combines technical expertise with creative problem-solving to deliver
              solutions that not only meet requirements but exceed expectations.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-all"
              >
                <div className="text-3xl text-indigo-400 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience & Education Timeline */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">💼</span>
              Work Experience
            </h3>
            <div className="space-y-8 border-l border-gray-700/50 pl-6 ml-4">
              {aboutData.experience.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#020617] border-2 border-indigo-400 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-sm font-semibold text-indigo-400 mb-1 block">{exp.year}</span>
                  <h4 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{exp.role}</h4>
                  <p className="text-md font-medium text-gray-300 mb-2">{exp.company}</p>
                  <p className="text-gray-400 leading-relaxed text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold">🎓</span>
              Education
            </h3>
            <div className="space-y-8 border-l border-gray-700/50 pl-6 ml-4">
              {aboutData.education.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#020617] border-2 border-pink-400 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-sm font-semibold text-pink-400 mb-1 block">{edu.year}</span>
                  <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{edu.degree}</h4>
                  <p className="text-md font-medium text-gray-300 mb-2">{edu.institution}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;