import React from 'react';
import { FeatureCard } from './FeatureCard';
import { Feature } from '../types/cms';
import '../styles/Features.css';

interface FeaturesProps {
  features: Feature[];
}

export const Features: React.FC<FeaturesProps> = ({ features }) => {
  const sortedFeatures = [...features].sort((a, b) => a.order - b.order);

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-heading">Powerful Features</h2>
        <div className="features-grid">
          {sortedFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

