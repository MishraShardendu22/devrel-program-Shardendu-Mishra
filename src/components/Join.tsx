"use client";

import Image from "next/image"
import Link from "next/link"

const Join = () => {
  return (
    <section id="join" className="s-contact">
      <div className="overlay"></div>
      
      <div className="row section-header">
        <div className="col-full">
          <h1 className="display-2 display-2--light">Join Our API Community Today!</h1>
        </div>
      </div>

      <div className="row contact-content">
        <div className="contact-primary">
          <h3 className="h6">Get Involved In The Community Today!</h3>
          <Image 
            src="/slack.png" 
            alt="Slack Image" 
            width={600} 
            height={400}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
            <a 
              href="https://keploy.slack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 32px',
                backgroundColor: '#ef4444',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#dc2626';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(239, 68, 68, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ef4444';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(239, 68, 68, 0.3)';
              }}
            >
              Join Slack
            </a>
          </div>
        </div>

        <div className="contact-secondary">
          <div className="contact-info">
            <div className="cinfo">
              <h2 style={{ color: 'rgb(47 43 40)' }}>
                Meet students, mentors and educators around the world excited about APIs and technology!!
              </h2>
            </div>
            
            <ul className="contact-social">
              <li>
                <Link href="https://keploy.slack.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-slack"></i>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/Keployio" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-youtube"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/keploy/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link href="https://keploy.io/blog" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-rss"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join
