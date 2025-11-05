'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Slack, Twitter, Youtube, Linkedin, Rss } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="relative py-16 bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="mb-8">
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wide text-primary">
              Copyright © 2024 Keploy Inc.
            </h3>
            <p className="text-base leading-relaxed max-w-2xl mx-auto text-gray-400">
              Developers experience for e2e testing. Toolkit that creates test-cases and data mocks
              from API calls, DB queries, etc.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-12">
            <h2 className="font-bold text-2xl mb-6 text-white">Sign-up for the newsletter!</h2>
            <form onSubmit={handleSubscribe} className="flex items-center gap-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-slate-800 border-slate-700 text-gray-200 placeholder:text-gray-500 focus:border-primary"
              />
              <Button
                type="submit"
                size="icon"
                className="min-w-12 h-10 bg-primary hover:bg-primary/90"
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
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </form>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wide text-primary">
              Find us on
            </h3>
            <p className="text-base mb-6 text-gray-400">Let's be social</p>
            <ul className="list-none m-0 inline-flex gap-3">
              <li>
                <a
                  href={SOCIAL_LINKS.slack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-slate-700 bg-slate-800 text-white/70 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-110"
                >
                  <Slack className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-slate-700 bg-slate-800 text-white/70 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-slate-700 bg-slate-800 text-white/70 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-110"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-slate-700 bg-slate-800 text-white/70 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-slate-700 bg-slate-800 text-white/70 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-110"
                >
                  <Rss className="w-5 h-5" />
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
