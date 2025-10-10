"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const Header = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-fade-id')
            if (id) {
              setVisibleElements(prev => new Set([...prev, id]))
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    const elements = document.querySelectorAll('.fade-up')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="home" className="s-home page-hero target-section">
      <div className="overlay"></div>
      <div className="shadow-overlay"></div>

      <div className="home-content">
        <div className="row home-content__main">
          <h1 
            className={`fade-up ${visibleElements.has('header-title') ? 'visible' : ''}`}
            data-fade-id="header-title"
          >
            Keploy Developer <br />
            Relations Program
          </h1>
          <h3 
            className={`fade-up fade-up-delay-100 ${visibleElements.has('header-subtitle') ? 'visible' : ''}`}
            data-fade-id="header-subtitle"
          >
            Get into the world of DevRels and<br />
            experience of being one for a month
          </h3>

          <div 
            className={`home-content__buttons fade-up fade-up-delay-200 ${visibleElements.has('header-buttons') ? 'visible' : ''}`}
            data-fade-id="header-buttons"
          >
            <Link
              href="https://forms.gle/Fr3TwNUni2RRnZhNA"
              className="btn btn--stroke"
            >
              APPLY
            </Link>
            <Link
              href="https://keploy-program.notion.site/Keploy-DevRel-Program-ddaf87544acb4c84afb9b781016d5e92"
              className="btn btn--stroke"
            >
              KNOW MORE
            </Link>
          </div>
        </div>
      </div>

      <ul 
        className={`home-social fade-up fade-up-delay-300 ${visibleElements.has('header-social') ? 'visible' : ''}`}
        data-fade-id="header-social"
      >
        <li>
          <a href="https://keploy.slack.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-slack"></i>
            <span>Slack</span>
          </a>
        </li>
        <li>
          <a href="https://x.com/Keployio" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-youtube-play"></i>
            <span>YouTube</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/keploy/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://keploy.io/blog" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-rss"></i>
            <span>Blog</span>
          </a>
        </li>
      </ul>

      <div 
        className={`home-content__scroll fade-up fade-up-delay-400 ${visibleElements.has('header-scroll') ? 'visible' : ''}`}
        data-fade-id="header-scroll"
      >
        <a href="#about" className="scroll-link">
          Scroll Down
        </a>
      </div>
    </section>
  )
}

export default Header

