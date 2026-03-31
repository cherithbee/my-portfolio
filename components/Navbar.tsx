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
  const pillRef = useRef<HTMLDivElement>(null);
  const isManualScrolling = useRef(false); // THE LOCK: Prevents jumping
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

const movePill = (index: number, speed: 'fast' | 'slow' = 'slow') => {
    if (!pillRef.current) return;
    const duration = speed === 'fast' ? 0.4 : 0.6;
    
    // ADJUST THIS LINE:
    // On mobile, the width is 100px (min-w) + 4px (gap) = 104px
    // On desktop, the height is 52px + 4px (gap) = 56px
    const spacing = isMobile ? (100 + 4) : (52 + 4); 
    
    const axis = isMobile ? 'X' : 'Y';
    
    pillRef.current.style.transition = `transform ${duration}s cubic-bezier(0.23, 1, 0.32, 1)`;
    pillRef.current.style.transform = `translate${axis}(${index * spacing}px)`;
  };

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // ONLY move if we aren't currently clicking a link (Manual Mode)
        if (entry.isIntersecting && !isManualScrolling.current) {
          const id = entry.target.id;
          const index = navLinks.findIndex(link => link.href === `#${id}`);
          if (index !== -1) {
            setActiveSection(id);
            movePill(index, 'slow');
          }
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isMobile]);

  if (!mounted) return null;

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-12 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:bottom-auto z-[100] w-[95%] md:w-auto h-auto">
      <div className="flex flex-row md:flex-col items-center bg-white/40 dark:bg-black/40 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/30 dark:border-white/10 p-2 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl transition-all duration-500 min-h-fit overflow-visible">
        
        <div className="flex flex-col items-center px-4 md:px-0 md:pt-4 md:pb-2 border-r md:border-r-0 md:border-b border-white/20 mr-2 md:mr-0 shrink-0">
          <span className="text-orange-500 font-black text-xl md:text-2xl italic leading-none">CB</span>
          <span className="text-lg md:text-xl mt-1">🐝...</span>
        </div>

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 md:my-4 md:p-3 rounded-full bg-white/10 hover:bg-orange-500/20 border border-white/20 transition-all shrink-0"
        >
{theme === 'dark' ? <Sun size={18} className="text-orange-400" /> : <Moon size={18} className="text-gray-400" />}        </button>

        <div className="flex flex-row md:flex-col gap-1 w-full relative no-scrollbar md:overflow-visible overflow-x-auto h-auto">
          <div 
            ref={pillRef}
            className="absolute bg-white/20 dark:bg-orange-500/20 border border-white/40 dark:border-orange-500/40 rounded-3xl z-0 will-change-transform"
            style={{ 
              width: isMobile ? '90px' : '100%', 
              height: isMobile ? '40px' : '52px',
              top: 0,
              left: 0,
            }}
          />

{navLinks.map((link, index) => {
  const id = link.href.replace('#', '');
  return (
    <button
      key={link.name}
      onClick={() => {
        isManualScrolling.current = true;
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
        movePill(index, 'fast');
        setTimeout(() => { isManualScrolling.current = false; }, 800); 
      }}
      /* UPDATE THIS CLASSNAME BELOW */
      className={`relative px-4 md:px-6 py-3 md:py-4 text-[10px] md:text-[11px] 
        h-[40px] md:h-[52px] flex items-center justify-center uppercase 
        tracking-[0.2em] font-bold z-10 text-center w-[100px] md:w-[140px] 
        shrink-0 outline-none transition-all duration-300 
        hover:scale-110 active:scale-95 
        ${activeSection === id 
          ? 'text-orange-600 dark:text-orange-500' // Orange when selected
          : 'text-foreground opacity-70 dark:opacity-40' // Black in Light, Gray in Dark
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