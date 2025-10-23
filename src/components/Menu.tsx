"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

const Menu = ({ isOpen, onClose }: MenuProps) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-is-open')
    } else {
      document.body.classList.remove('menu-is-open')
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            transition: 'opacity 0.3s ease'
          }}
          onClick={onClose}
        />
      )}
      
      <nav 
        className="header-nav"
        style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? '0' : '-100%',
          width: '100%',
          maxWidth: '320px',
          height: '100vh',
          backgroundColor: '#f5e6e8',
          transition: 'right 0.3s ease',
          zIndex: 1000,
          boxShadow: isOpen ? '-2px 0 8px rgba(0, 0, 0, 0.1)' : 'none',
          overflowX: 'hidden'
        }}
      >
      <div 
        className="header-nav__close" 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          color: '#8B0000',
          cursor: 'pointer',
          fontSize: '24px',
          fontWeight: '400',
          padding: '5px',
          backgroundColor: '#d4b5b7',
          borderRadius: '3px',
          width: '35px',
          height: '35px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span>×</span>
      </div>

      <div 
        className="header-nav__content"
        style={{
          padding: '80px 30px 30px',
          height: '100%',
          overflowY: 'hidden',
          overflowX: 'hidden'
        }}
      >
        <h3 style={{
          color: '#8B0000',
          fontSize: '14px',
          fontWeight: '600',
          marginBottom: '30px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap'
        }}>NAVIGATION</h3>

        <ul 
          className="header-nav__list"
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 40px 0'
          }}
        >
          <li style={{ marginBottom: '8px' }}>
            <a 
              href="#home"
              style={{
                color: '#8B0000',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                padding: '8px 0',
                display: 'block',
                transition: 'all 0.2s ease'
              }}
            >Home</a>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <a 
              href="#about"
              style={{
                color: '#8B0000',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                padding: '8px 0',
                display: 'block',
                transition: 'all 0.2s ease'
              }}
            >About</a>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <a 
              href="#program"
              style={{
                color: '#8B0000',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                padding: '8px 0',
                display: 'block',
                transition: 'all 0.2s ease'
              }}
            >Program</a>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <a 
              href="#cohort"
              style={{
                color: '#8B0000',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                padding: '8px 0',
                display: 'block',
                transition: 'all 0.2s ease'
              }}
            >Next Cohort</a>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <a 
              href="#community"
              style={{
                color: '#8B0000',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                padding: '8px 0',
                display: 'block',
                transition: 'all 0.2s ease'
              }}
            >Community</a>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <a 
              href="https://forms.gle/Fr3TwNUni2RRnZhNA" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#8B0000',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                padding: '8px 0',
                display: 'block',
                transition: 'all 0.2s ease'
              }}
            >Join</a>
          </li>
        </ul>

        <div style={{
          borderTop: '1px solid rgba(139, 0, 0, 0.2)',
          paddingTop: '20px',
          marginBottom: '30px'
        }}>
          <h3 style={{
            color: '#8B0000',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '15px',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>THEME</h3>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}>
            {mounted && (
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                className="data-[state=checked]:bg-orange-500"
              />
            )}
            <span style={{
              marginLeft: '12px',
              color: '#8B0000',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Dark Mode
            </span>
          </div>
        </div>

        <ul 
          className="header-nav__social"
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            gap: '15px'
          }}
        >
          <li>
            <a 
              href="https://keploy.slack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#8B0000',
                textDecoration: 'none',
                fontSize: '18px'
              }}
            >
              <i className="fa fa-slack"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://x.com/Keployio" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#8B0000',
                textDecoration: 'none',
                fontSize: '18px'
              }}
            >
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#8B0000',
                textDecoration: 'none',
                fontSize: '18px'
              }}
            >
              <i className="fa fa-youtube-play"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/company/keploy/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#8B0000',
                textDecoration: 'none',
                fontSize: '18px'
              }}
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://keploy.io/blog" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#8B0000',
                textDecoration: 'none',
                fontSize: '18px'
              }}
            >
              <i className="fa fa-rss"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Menu
