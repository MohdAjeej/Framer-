import React from 'react';
import '../styles/Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">Lumen</h3>
            <p className="footer-description">
              Smart ambient lighting that adapts to your mood and environment.
            </p>
          </div>

          <nav className="footer-section" aria-label="Footer navigation">
            <h4 className="footer-subheading">Sitemap</h4>
            <ul className="footer-links" role="list">
              <li>
                <a href="#features" className="footer-link">Features</a>
              </li>
              <li>
                <a href="#pricing" className="footer-link">Pricing</a>
              </li>
              <li>
                <a href="#demo" className="footer-link">Demo</a>
              </li>
              <li>
                <a href="#faq" className="footer-link">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="footer-link">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="footer-section">
            <h4 className="footer-subheading">Support</h4>
            <ul className="footer-links" role="list">
              <li>
                <a href="#" className="footer-link">Help Center</a>
              </li>
              <li>
                <a href="#" className="footer-link">Documentation</a>
              </li>
              <li>
                <a href="#" className="footer-link">Warranty</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Connect</h4>
            <div className="footer-social">
              <a
                href="#"
                className="footer-social-link"
                aria-label="Follow us on Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a
                href="#"
                className="footer-social-link"
                aria-label="Follow us on Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/>
                </svg>
              </a>
              <a
                href="#"
                className="footer-social-link"
                aria-label="Follow us on Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <address className="footer-address">
          <p>Lumen Technologies Inc.</p>
          <p>123 Innovation Drive, San Francisco, CA 94105</p>
          <p>
            <a href="mailto:hello@lumen.light" className="footer-link">hello@lumen.light</a>
          </p>
          <p>
            <a href="tel:+1-555-0123" className="footer-link">+1 (555) 012-3456</a>
          </p>
        </address>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Lumen Technologies Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

