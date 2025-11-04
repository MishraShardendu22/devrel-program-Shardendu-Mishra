'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@/components/ui/switch';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu = ({ isOpen, onClose }: MenuProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-is-open');
    } else {
      document.body.classList.remove('menu-is-open');
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-999 transition-opacity duration-300 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <nav
        className="fixed top-0 w-full max-w-[380px] h-screen bg-card z-1000 overflow-x-hidden transition-[right] duration-500 ease-in-out shadow-2xl border-l border-border"
        style={{
          right: isOpen ? '0' : '-100%',
        }}
      >
        <button
          className="absolute top-5 right-5 text-primary cursor-pointer text-3xl font-light p-1.5 bg-background hover:bg-accent rounded-lg flex items-center justify-center w-10 h-10 transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-md border border-border"
          onClick={onClose}
          aria-label="Close menu"
        >
          <span>×</span>
        </button>

        <div className="pt-20 px-8 pb-8 h-full overflow-y-auto overflow-x-hidden">
          <h3 className="text-primary font-bold mb-5 uppercase text-sm tracking-[0.15rem]">
            Navigation
          </h3>

          <ul className="list-none p-0 m-0 mb-8 space-y-0.5">
            <li>
              <a
                href="#home"
                className="text-foreground no-underline font-medium text-base py-3 px-4 block rounded-lg transition-all duration-200 hover:bg-accent hover:text-primary hover:translate-x-1"
                onClick={onClose}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-foreground no-underline font-medium text-base py-3 px-4 block rounded-lg transition-all duration-200 hover:bg-accent hover:text-primary hover:translate-x-1"
                onClick={onClose}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-foreground no-underline font-medium text-base py-3 px-4 block rounded-lg transition-all duration-200 hover:bg-accent hover:text-primary hover:translate-x-1"
                onClick={onClose}
              >
                Program
              </a>
            </li>
            <li>
              <a
                href="#cohort"
                className="text-foreground no-underline font-medium text-base py-3 px-4 block rounded-lg transition-all duration-200 hover:bg-accent hover:text-primary hover:translate-x-1"
                onClick={onClose}
              >
                Next Cohort
              </a>
            </li>
            <li>
              <a
                href="#join"
                className="text-foreground no-underline font-medium text-base py-3 px-4 block rounded-lg transition-all duration-200 hover:bg-accent hover:text-primary hover:translate-x-1"
                onClick={onClose}
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="https://forms.gle/Fr3TwNUni2RRnZhNA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground no-underline font-medium text-base py-3 px-4 block rounded-lg transition-all duration-200 hover:bg-accent hover:text-primary hover:translate-x-1"
              >
                Join Program
              </a>
            </li>
          </ul>

          <div className="border-t border-border pt-6 mb-6">
            <h3 className="text-primary font-bold mb-4 uppercase text-sm tracking-[0.15rem]">
              Theme
            </h3>

            <div className="flex items-center justify-between bg-background rounded-lg p-3.5 hover:bg-accent transition-all duration-200 border border-border">
              <span className="text-foreground font-medium text-base">Dark Mode</span>
              {mounted && (
                <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                  className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted"
                />
              )}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="text-primary font-bold mb-4 uppercase text-sm tracking-[0.15rem]">
              Connect
            </h3>

            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://keploy.slack.com/join/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg#/shared-invite/email/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 bg-background text-foreground hover:bg-primary hover:text-white rounded-lg transition-all duration-300 hover:scale-105 border border-border"
                aria-label="Slack"
              >
                <i className="fa fa-slack text-lg"></i>
              </a>
              <a
                href="https://x.com/Keployio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 bg-background text-foreground hover:bg-primary hover:text-white rounded-lg transition-all duration-300 hover:scale-105 border border-border"
                aria-label="Twitter"
              >
                <i className="fa fa-twitter text-lg"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 bg-background text-foreground hover:bg-primary hover:text-white rounded-lg transition-all duration-300 hover:scale-105 border border-border"
                aria-label="YouTube"
              >
                <i className="fa fa-youtube-play text-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/keploy/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 bg-background text-foreground hover:bg-primary hover:text-white rounded-lg transition-all duration-300 hover:scale-105 border border-border"
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin text-lg"></i>
              </a>
              <a
                href="https://keploy.io/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 bg-background text-foreground hover:bg-primary hover:text-white rounded-lg transition-all duration-300 hover:scale-105 border border-border"
                aria-label="Blog"
              >
                <i className="fa fa-rss text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
