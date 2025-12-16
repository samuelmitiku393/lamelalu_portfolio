import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import SectionHeader from '../Shared/SectionHeader';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Samuel delivered exceptional work on our project. His attention to detail and problem-solving skills are outstanding.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    // ... more testimonials
  ];

  return (
    <section id="testimonials" className="py-24 px-4 md:px-8">
      <SectionHeader
        title="Client Testimonials"
        subtitle="What people say about working with me"
      />
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            <FaQuoteLeft className="absolute -top-4 -left-4 text-4xl text-indigo-500/20" />
            <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}