"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Menu from "./Menu"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header className="s-header">
        <div className="header-logo">
          <Link href="/">
            <Image
              src="/keploy-logo.png"
              alt="Keploy Logo"
              width={300}
              height={300}
              style={{
                width: '150px',
                height: 'auto',
                maxWidth: 'none'
              }}
            />
          </Link>
        </div>

        <div
          className={`header-menu-toggle ${menuOpen ? 'is-clicked' : ''}`}
          onClick={toggleMenu}
          style={{
            backgroundColor: '#ef4444',
            padding: '12px 20px',
            borderRadius: '8px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#dc2626';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(239, 68, 68, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ef4444';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(239, 68, 68, 0.3)';
          }}
        >
          <span className="header-menu-icon"></span>
        </div>
      </header>

      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Navbar
