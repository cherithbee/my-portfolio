"use client";
import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const handleClick = (href: string) => {
    const id = href.replace('#', '');
    setActiveSection(id);
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
          setActiveSection(entry.target.id);
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
      <div className="flex flex-col items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-[3rem] relative shadow-2xl">
        
        {/* CB Logo 🐝 */}
        <div className="mb-6 flex flex-col items-center">
          <span className="text-orange-500 font-black text-2xl italic leading-none">CB</span>
          <span className="text-xl mt-1">🐝...</span>
        </div>

        <div className="flex flex-col gap-3 w-full relative">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative px-6 py-4 text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-500 rounded-3xl z-10 text-center min-w-[120px] ${
                  isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {link.name}

                {/* The "Liquid Glass" Indicator */}
                {isActive && (
                  <div 
                    className="absolute inset-0 bg-orange-500/10 border border-orange-500/30 rounded-3xl -z-10 shadow-[0_0_25px_rgba(249,115,22,0.15)] animate-in fade-in zoom-in duration-300"
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}