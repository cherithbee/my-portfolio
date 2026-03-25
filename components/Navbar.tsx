"use client";
import React, { useState, useEffect } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
// Inside your Navbar return statement, update the container and the pill style:

<nav className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-4 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-50 w-[95%] md:w-auto">
  <div className="flex flex-row md:flex-col items-center bg-white/10 dark:bg-black/40 backdrop-blur-2xl border border-white/20 p-1 md:p-2 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl transition-all duration-500">
    
    {/* CB Logo 🐝 */}
    <div className="flex flex-col items-center px-4 md:px-0 md:pt-4 md:pb-2 border-r md:border-r-0 md:border-b border-white/10 mr-2 md:mr-0 shrink-0">
      <span className="text-orange-500 font-black text-xl md:text-2xl italic leading-none">CB</span>
      <span className="text-lg md:text-xl mt-1">🐝...</span>
    </div>

    {/* Theme Toggle */}
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 md:my-4 md:p-3 rounded-full bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/50 transition-all duration-300 group shrink-0"
    >
      {mounted && (
        theme === 'dark' ? <Sun size={18} className="text-orange-400" /> : <Moon size={18} className="text-gray-400" />
      )}
    </button>

    {/* Links Wrapper - Ensure no height restriction here */}
    <div className="flex flex-row md:flex-col gap-1 w-full relative overflow-x-auto no-scrollbar md:overflow-visible">
      
      {/* THE SLIDING LIQUID GLASS PILL - THE FIX IS HERE */}
      <div 
        className="absolute bg-orange-500/10 border border-orange-500/30 rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform pointer-events-none"
        style={{ 
          width: isMobile ? '90px' : '100%', 
          height: isMobile ? '40px' : '52px',
          // Updated spacing math for 6 links (52px height + 4px gap)
          transform: isMobile 
            ? `translateX(${activeIndex * (90 + 4)}px)` 
            : `translateY(${activeIndex * (52 + 4)}px)`,
          top: isMobile ? '2px' : '0px',
          left: '0px'
        }}
      />

      {navLinks.map((link, index) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => handleClick(link.href, index)}
          // Standardizing link height to 52px for the math to stay consistent
          className="relative px-4 md:px-6 py-3 md:py-4 text-[9px] md:text-[11px] h-[40px] md:h-[52px] flex items-center justify-center uppercase tracking-[0.2em] font-bold transition-colors duration-300 z-10 text-center min-w-[90px] md:min-w-[140px] shrink-0"
        >
          {link.name}
        </a>
      ))}
    </div>
  </div>
</nav>
  );
}