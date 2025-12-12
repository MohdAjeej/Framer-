import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '../types/cms';
import '../styles/TestimonialCarousel.css';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevTestimonial();
      } else if (e.key === 'ArrowRight') {
        nextTestimonial();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials" aria-label="Testimonials Carousel">
      <div className="container">
        <h2 className="section-heading">What Our Customers Say</h2>
        <div className="carousel-wrapper">
          <button
            className="carousel-button carousel-button-prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="carousel-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="testimonial-rating">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <span key={i} aria-label="Star">⭐</span>
                  ))}
                </div>
                <blockquote className="testimonial-quote">
                  "{currentTestimonial.quote}"
                </blockquote>
                <div className="testimonial-author">
                  <img
                    src={currentTestimonial.avatar_image}
                    alt={`${currentTestimonial.name} avatar`}
                    className="testimonial-avatar"
                  />
                  <div>
                    <div className="testimonial-name">{currentTestimonial.name}</div>
                    <div className="testimonial-role">{currentTestimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="carousel-button carousel-button-next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

