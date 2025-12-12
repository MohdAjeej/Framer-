import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Header.css';

interface HeaderProps {
  onDemoClick: () => void;
  onBuyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onDemoClick, onBuyClick }) => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <nav className="header-nav" aria-label="Main navigation">
        <div className="container header-container">
          <a href="/" className="header-logo" aria-label="Lumen home">
            <span className="logo-text">Lumen</span>
          </a>
          
          <ul className="header-nav-list" role="list">
            <li>
              <a 
                href="#features" 
                className="header-nav-link"
                onClick={(e) => handleSmoothScroll(e, 'features')}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#pricing" 
                className="header-nav-link"
                onClick={(e) => handleSmoothScroll(e, 'pricing')}
              >
                Pricing
              </a>
            </li>
            <li>
              <a 
                href="#demo" 
                className="header-nav-link"
                onClick={(e) => handleSmoothScroll(e, 'demo')}
              >
                Demo
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                className="header-nav-link"
                onClick={(e) => handleSmoothScroll(e, 'faq')}
              >
                FAQ
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="header-nav-link"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
          
          <div className="header-ctas">
            <motion.button
              className="btn btn-secondary"
              onClick={onDemoClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See demo
            </motion.button>
            <motion.button
              className="btn btn-primary"
              onClick={onBuyClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy Lumen
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  );
};

