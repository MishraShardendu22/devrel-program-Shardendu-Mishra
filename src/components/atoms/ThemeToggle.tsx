'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative inline-flex h-9 w-16 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
        <div className="h-7 w-7" />
      </div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'relative inline-flex h-9 w-16 items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
        isDark ? 'bg-slate-700 focus:ring-slate-500' : 'bg-[#FF914D] focus:ring-[#FF914D]'
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      role="switch"
      aria-checked={isDark}
    >
      <span
        className={cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out',
          isDark ? 'translate-x-8' : 'translate-x-1'
        )}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-slate-700" aria-hidden="true" />
        ) : (
          <Sun className="h-4 w-4 text-[#FF914D]" aria-hidden="true" />
        )}
      </span>

      <span
        className={cn(
          'absolute left-2 transition-opacity duration-300',
          isDark ? 'opacity-0' : 'opacity-100'
        )}
      >
        <Sun className="h-4 w-4 text-white" aria-hidden="true" />
      </span>
      <span
        className={cn(
          'absolute right-2 transition-opacity duration-300',
          isDark ? 'opacity-100' : 'opacity-0'
        )}
      >
        <Moon className="h-4 w-4 text-white" aria-hidden="true" />
      </span>
    </button>
  );
}
