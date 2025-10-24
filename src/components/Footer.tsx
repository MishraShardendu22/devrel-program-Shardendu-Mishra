"use client";

import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    // console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
      <footer className="s-footer">
        <div className="row footer-content">
          <div className="footer-main">
            <div className="footer-col footer-copyright">
              <h3 className="footer-title">Copyright © 2023 Keploy Inc.</h3>
              <p className="footer-desc">
                Developers experience for e2e testing. Toolkit that creates test-cases and data mocks from API calls, DB queries, etc.
              </p>
            </div>

            <div className="newsletter-wrap">
              <h2 className="display-1 display-1--light">Sign-up for the newsletter!</h2>
              <form onSubmit={handleSubscribe} style={{ display: 'flex', alignItems: 'center', gap: '12px', maxWidth: '400px', margin: '0 auto' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                  className="newsletter-input"
                  style={{
                    flex: 1,
                    padding: '14px 18px',
                    fontSize: '16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#ffffff',
                    color: '#374151'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#ef4444';
                    e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <button 
                  type="submit" 
                  style={{
                    padding: '14px 18px',
                    backgroundColor: '#ef4444',
                    border: 'none',
                    borderRadius: '12px',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '52px',
                    height: '52px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#dc2626';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(239, 68, 68, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ef4444';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>
            </div>
            

            <div className="footer-col footer-social">
              <h3 className="footer-title">Find us on</h3>
              <p className="footer-desc">Let us be social</p>
              <ul className="footer-social-links">
                <li>
                  <a href="https://keploy.slack.com/join/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg#/shared-invite/email" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-slack"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/keployio" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@keploy" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/keploy/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://keploy.io/blog" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-rss"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

  );
};

export default Footer;
