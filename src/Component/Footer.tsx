"use client";

import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const handleFooterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle footer newsletter subscription
    console.log("Footer subscription:", newsletterEmail);
    setNewsletterEmail("");
  };

  return (
    <>
      {/* Newsletter Section */}
      <section className="s-newsletter">
        <div className="row newsletter-content">
          <div className="column large-12">
            <div className="newsletter-wrap">
              <h2 className="display-1 display-1--light">Sign-up for the newsletter!</h2>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  <i className="fa fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="s-footer">
        <div className="row footer-content">
          <div className="footer-main">
            <div className="footer-col footer-copyright">
              <h3 className="footer-title">Copyright © 2023 Keploy Inc.</h3>
              <p className="footer-desc">
                Developers experience for e2e testing. Toolkit that creates test-cases and data mocks from API calls, DB queries, etc.
              </p>
            </div>

            <div className="footer-col footer-newsletter">
              <h3 className="footer-title">Newsletter</h3>
              <p className="footer-desc">Stay updated with our latest trends</p>
              <form onSubmit={handleFooterSubscribe} className="footer-subscribe-form">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="footer-input"
                />
                <button type="submit" className="footer-subscribe-btn">
                  <i className="fa fa-arrow-right"></i>
                </button>
              </form>
            </div>

            <div className="footer-col footer-social">
              <h3 className="footer-title">Find us on</h3>
              <p className="footer-desc">Let us be social</p>
              <ul className="footer-social-links">
                <li>
                  <a href="https://slack.keploy.io/" target="_blank" rel="noopener noreferrer">
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
    </>
  );
};

export default Footer;
