"use client"

import { useEffect } from "react"

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

const Menu = ({ isOpen, onClose }: MenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-is-open')
    } else {
      document.body.classList.remove('menu-is-open')
    }
  }, [isOpen])

  return (
    <nav className="header-nav">
      <div className="header-nav__close" onClick={onClose}>
        <span>Close</span>
      </div>

      <div className="header-nav__content">
        <h3>Navigation</h3>

        <ul className="header-nav__list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#program">Program</a></li>
          <li><a href="#cohort">Next Cohort</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="https://forms.gle/Fr3TwNUni2RRnZhNA" target="_blank" rel="noopener noreferrer">Join</a></li>
        </ul>

        <ul className="header-nav__social">
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
      </div>
    </nav>
  )
}

export default Menu
