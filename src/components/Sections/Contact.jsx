import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import SectionHeader from '../Shared/SectionHeader';
import SocialLinks from '../UI/SocialLinks';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "Samuelmitiku393@gmail.com",
      link: "Samuelmitiku393@gmail.com"
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      value: "+251953333287",
      link: "tel: +251953333287"
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#020617] to-[#1e1b4b]">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's work together on your next project"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all text-center"
            >
              <div className="text-3xl text-indigo-400 mb-4 mx-auto w-fit">
                {info.icon}
              </div>
              <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
              <p className="text-gray-400">{info.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 max-w-2xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="Abebe Damtew"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="AbeDamte@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 focus:border-indigo-500 focus:outline-none transition-colors"
              placeholder="Project Inquiry"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all font-semibold text-lg"
          >
            Send Message
          </motion.button>
        </motion.form>

        <div className="mt-12 text-center">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Contact;