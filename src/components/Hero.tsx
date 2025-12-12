import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/Hero.css';

interface HeroProps {
  heading: string;
  subheading: string;
  heroImage: string;
  onBuyClick: () => void;
  onDemoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  heading, 
  subheading, 
  heroImage, 
  onBuyClick,
  onDemoClick 
}) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={heroRef} className="hero" id="hero">
      <div className="hero-content">
        <div className="container">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-heading">{heading}</h1>
            <p className="hero-subheading">{subheading}</p>
            <div className="hero-ctas">
              <motion.button
                className="btn btn-primary"
                onClick={onBuyClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy Lumen
              </motion.button>
              <motion.a
                href="#demo"
                className="btn btn-secondary"
                onClick={(e) => {
                  handleSmoothScroll(e);
                  onDemoClick();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="hero-image-wrapper"
        style={{ y, opacity }}
      >
        <img
          src={heroImage}
          alt="Lumen smart lamp on bedside table with soft blue glow"
          className="hero-image"
        />
      </motion.div>
    </section>
  );
};

