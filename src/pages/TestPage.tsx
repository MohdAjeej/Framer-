import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Demo } from '../components/Demo';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { PricingGrid } from '../components/PricingGrid';
import { FAQAccordion } from '../components/FAQAccordion';
import { Footer } from '../components/Footer';
import { pageData, features, testimonials, plans, faqs } from '../data/cms';
import '../styles/theme.css';
import '../styles/Button.css';

export const TestPage: React.FC = () => {
  const handleBuyClick = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDemoClick = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Component Test Page — Lumen</title>
      </Helmet>
      
      <Header onDemoClick={handleDemoClick} onBuyClick={handleBuyClick} />
      
      <main>
        <section style={{ padding: '2rem 0', background: '#f9fafb', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              Component Test Page
            </h1>
            <p style={{ color: '#6b7280' }}>
              This page displays all components with sample CMS data for QA testing.
            </p>
          </div>
        </section>
        
        <Hero
          heading={pageData.hero_heading}
          subheading={pageData.hero_subheading}
          heroImage={pageData.hero_image}
          onBuyClick={handleBuyClick}
          onDemoClick={handleDemoClick}
        />
        
        <Features features={features} />
        
        <Demo />
        
        <TestimonialCarousel testimonials={testimonials} />
        
        <PricingGrid plans={plans} />
        
        <FAQAccordion faqs={faqs} />
      </main>
      
      <Footer />
    </>
  );
};

