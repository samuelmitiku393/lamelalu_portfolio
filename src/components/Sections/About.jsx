import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiUsers } from 'react-icons/fi';
import SectionHeader from '../Shared/SectionHeader';

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
      </div>
    </section>
  );
};

export default About;