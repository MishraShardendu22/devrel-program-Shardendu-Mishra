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
              width={80}
              height={80}
            />
          </Link>
        </div>

        <div
          className={`header-menu-toggle ${menuOpen ? 'is-clicked' : ''}`}
          onClick={toggleMenu}
        >
          <span className="header-menu-text">Menu</span>
          <span className="header-menu-icon"></span>
        </div>
      </header>

      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Navbar
