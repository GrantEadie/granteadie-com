'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const dark = savedTheme !== 'light';
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
    setMounted(true);
  }, []);

  const setTheme = (dark: boolean) => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    setIsDark(dark);
  };

  if (!mounted) return null;

  const activeClass =
    'bg-[#2A09F3] text-[#FFFFFF] dark:bg-[#FFFFFF] dark:text-[#2A09F3]';
  const inactiveClass = 'opacity-50 hover:opacity-100';

  return (
    <div
      className="fixed top-5 right-5 sm:top-6 sm:right-6 z-50 flex font-[family-name:var(--font-dm-sans)] text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase"
      role="group"
      aria-label="Theme"
    >
      <button
        onClick={() => setTheme(false)}
        aria-pressed={!isDark}
        className={`px-3 py-2 sm:py-1.5 transition-all ${
          !isDark ? activeClass : inactiveClass
        }`}
      >
        Light
      </button>
      <button
        onClick={() => setTheme(true)}
        aria-pressed={isDark}
        className={`px-3 py-2 sm:py-1.5 transition-all ${
          isDark ? activeClass : inactiveClass
        }`}
      >
        Dark
      </button>
    </div>
  );
}
