import React from 'react';
import { motion } from 'framer-motion';
import { Plan } from '../types/cms';
import '../styles/PricingGrid.css';

interface PricingGridProps {
  plans: Plan[];
}

export const PricingGrid: React.FC<PricingGridProps> = ({ plans }) => {
  const sortedPlans = [...plans].sort((a, b) => a.order - b.order);

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-heading">Choose Your Plan</h2>
        <div className="pricing-grid">
          {sortedPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.highlight && (
                <div className="pricing-badge">Most Popular</div>
              )}
              <h3 className="pricing-name">{plan.name}</h3>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>
                <span className="pricing-amount">{plan.price_monthly}</span>
                <span className="pricing-period">/month</span>
              </div>
              <ul className="pricing-features" role="list">
                {plan.features_list.split('\n').map((feature, i) => (
                  <li key={i} className="pricing-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="pricing-check"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                className="btn btn-primary pricing-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {plan.cta_text}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

