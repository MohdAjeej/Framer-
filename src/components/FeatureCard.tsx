import React from 'react';
import { motion } from 'framer-motion';
import { Feature } from '../types/cms';
import '../styles/FeatureCard.css';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <motion.article
      className="feature-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="feature-icon" dangerouslySetInnerHTML={{ __html: feature.icon_svg }} />
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-description">{feature.short_description}</p>
      <div className="feature-image-wrapper">
        <img
          src={feature.image}
          alt={`${feature.title} feature demonstration`}
          className="feature-image"
        />
      </div>
    </motion.article>
  );
};

