
import { Helmet } from 'react-helmet-async';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Demo } from './components/Demo';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { PricingGrid } from './components/PricingGrid';
import { FAQAccordion } from './components/FAQAccordion';
import { Footer } from './components/Footer';
import { StructuredData } from './components/StructuredData';
import { pageData, features, testimonials, plans, faqs } from './data/cms';
import './styles/theme.css';
import './styles/Button.css';

function App() {
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
        <title>{pageData.meta_title}</title>
        <meta name="description" content={pageData.meta_description} />
        <link rel="canonical" href="https://lumen.light" />
        <meta property="og:title" content={pageData.meta_title} />
        <meta property="og:description" content={pageData.meta_description} />
        <meta property="og:image" content="https://lumen.light/og-image.jpg" />
        <meta property="og:url" content="https://lumen.light" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.meta_title} />
        <meta name="twitter:description" content={pageData.meta_description} />
        <meta name="twitter:image" content="https://lumen.light/og-image.jpg" />
      </Helmet>
      <StructuredData />
      
      <Header onDemoClick={handleDemoClick} onBuyClick={handleBuyClick} />
      
      <main>
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
}

export default App;

