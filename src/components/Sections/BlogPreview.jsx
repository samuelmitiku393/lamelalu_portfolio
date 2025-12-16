import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock } from 'react-icons/fi';
import SectionHeader from '../Shared/SectionHeader';

export default function BlogPreview() {
  const articles = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn how to structure large-scale React applications for maintainability and performance.",
      readTime: "8 min read",
      date: "Mar 15, 2024",
      tags: ["React", "Performance", "Architecture"]
    },
    // ... more articles
  ];

  return (
    <section id="blog" className="py-24 px-4 md:px-8 bg-gradient-to-b from-transparent to-[#020617]/50">
      <SectionHeader
        title="Latest Articles"
        subtitle="Thoughts on technology and development"
      />
      
      <div className="max-w-4xl mx-auto">
        {articles.map((article, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group mb-8 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 
              hover:border-indigo-500/50 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
              <div className="flex items-center gap-1">
                <FiCalendar />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiClock />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-300 transition-colors">
              {article.title}
            </h3>
            
            <p className="text-gray-300 mb-4">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-indigo-500/10 rounded-full text-sm text-indigo-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
        
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          href="https://blog.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 
            transition-colors font-semibold mt-8"
        >
          View all articles
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </motion.a>
      </div>
    </section>
  );
}