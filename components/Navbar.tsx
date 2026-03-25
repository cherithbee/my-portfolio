"use client";
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'; // 1. Import the theme hook
import { Sun, Moon } from 'lucide-react'; // 2. Import icons (Make sure to install lucide-react)

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },      // Back in the list!
  { name: 'Education', href: '#education' }, 
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false); // 3. Prevent hydration mismatch
  const { theme, setTheme } = useTheme();

  // 4. Ensure component is mounted before showing theme UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (href: string, index: number) => {
    const id = href.replace('#', '');
    setActiveSection(id);
    setActiveIndex(index);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          const index = navLinks.findIndex(link => link.href === `#${id}`);
          if (index !== -1) setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col items-center bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/10 dark:border-white/5 p-2 rounded-[3rem] relative shadow-2xl transition-all duration-500">
        
        {/* CB Logo 🐝 */}
        <div className="pt-4 pb-2 flex flex-col items-center">
          <span className="text-orange-500 font-black text-2xl italic leading-none">CB</span>
          <span className="text-xl mt-1">🐝...</span>
        </div>

        {/* 5. THE THEME TOGGLE BUTTON */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="my-4 p-3 rounded-full bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/50 transition-all duration-300 group"
          aria-label="Toggle Theme"
        >
          {mounted && (
            theme === 'dark' ? (
              <Sun size={18} className="text-orange-400 group-hover:rotate-45 transition-transform" />
            ) : (
              <Moon size={18} className="text-gray-500 dark:text-gray-400" />
            )
          )}
        </button>

        <div className="flex flex-col gap-1 w-full relative">
          
{/* THE SLIDING LIQUID GLASS PILL */}
<div 
  className="absolute left-0 right-0 h-[52px] bg-orange-500/10 border border-orange-500/30 rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_20px_rgba(249,115,22,0.1)] will-change-transform pointer-events-none"
  style={{ 
    transform: `translateY(${activeIndex * (52 + 4)}px)`,
    top: '0px'
  }}
/>

          {navLinks.map((link, index) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleClick(link.href, index)}
                className={`relative px-6 py-4 text-[11px] h-[52px] flex items-center justify-center uppercase tracking-[0.2em] font-bold transition-colors duration-300 z-10 text-center min-w-[130px] ${
                  isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}