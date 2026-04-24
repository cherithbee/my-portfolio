"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isManualScrolling = useRef(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isManualScrolling.current) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-40% 0px -40% 0px' });

    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  const activeIndex = navLinks.findIndex(link => link.href === `#${activeSection}`);
  // STATIC SPACING: 52px button + 4px gap = 56px
  const spacing = isMobile ? 104 : 56; 
  const transformValue = `translate${isMobile ? 'X' : 'Y'}(${activeIndex * spacing}px)`;

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-12 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:bottom-auto z-[100]">
      <div className="flex flex-row md:flex-col items-center bg-white/90 dark:bg-[#0a0a0a]/80 border border-black/[0.1] dark:border-white/10 shadow-2xl p-2 rounded-[3rem] backdrop-blur-2xl">
        
        {/* LOGO */}
        <div className="flex flex-col items-center px-4 md:px-0 md:pt-4 md:pb-2 border-r md:border-r-0 md:border-b border-black/10 dark:border-white/20 mr-2 md:mr-0 shrink-0 h-[60px] md:h-[80px] justify-center">
          <span className="text-orange-600 font-black text-xl md:text-2xl italic leading-none">CB</span>
          <span className="text-xl md:text-2xl mt-1 leading-none">🐝...</span>
        </div>

        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-3 my-2 active:scale-90 transition-transform shrink-0">
          {theme === 'dark' ? <Sun size={18} className="text-orange-400" /> : <Moon size={18} className="text-orange-600" />}
        </button>

        <div className="flex flex-row md:flex-col gap-1 relative overflow-visible">
          {/* THE PILL */}
          <div 
            className="liquid-pill rounded-3xl"
            style={{ 
              width: isMobile ? '100px' : '140px', 
              height: isMobile ? '40px' : '52px',
              transform: transformValue
            }} 
          />

          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <button
                key={link.name}
                onClick={() => {
                  isManualScrolling.current = true;
                  setActiveSection(id);
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => { isManualScrolling.current = false; }, 600); 
                }}
                className={`relative px-4 md:px-6 py-3 md:py-4 text-[11px] h-[40px] md:h-[52px] flex items-center justify-center uppercase tracking-[0.2em] font-black z-10 text-center w-[100px] md:w-[140px] shrink-0 transition-colors duration-300 ${
                  isActive ? 'text-orange-600' : 'text-white/70 dark:text-white/60 hover:text-orange-600'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}