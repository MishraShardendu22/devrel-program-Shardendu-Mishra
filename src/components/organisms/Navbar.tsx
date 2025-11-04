'use client';


import Menu from './Menu';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Github } from 'lucide-react';
import { ThemeToggle } from '@/components';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="fixed w-full z-30 bg-background/95 backdrop-blur-md transition duration-300 ease-in-out border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="shrink-0">
              <Link href="/">
                <Image
                  src="/keploy-logo.png"
                  alt="Keploy Logo"
                  width={120}
                  height={40}
                  className="w-28 md:w-32 h-auto"
                  priority
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <ThemeToggle />
              <Link
                href="https://github.com/keploy/keploy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-white font-medium rounded-lg border border-primary dark:border-secondary shadow-md transition-all duration-300 hover:bg-primary/90 dark:hover:bg-secondary/90 hover:shadow-lg"
              >
                <Github className="w-4 h-4" />
                <span>Star us on GitHub</span>
              </Link>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-lg border border-primary shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
                aria-label="Open menu"
              >
                <span className="mr-2">Menu</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </nav>

            <div className="flex md:hidden items-center gap-3">
              <ThemeToggle />
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 bg-primary text-white rounded-lg border border-primary shadow-md transition-all duration-300 hover:bg-primary/90"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
