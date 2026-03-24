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
    // Keep it on the left side
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 p-3 rounded-[2.5rem] relative">
        
        {/* CB Logo with Bee Emoji 🐝 */}
        <div className="mb-6 flex flex-col items-center">
          <span className="text-orange-500 font-black text-2xl italic leading-none">CB</span>
          <span className="text-xl mt-1">🐝...</span>
        </div>

        <div className="flex flex-col gap-2 w-full">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative px-4 py-3 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 rounded-2xl z-10 text-center min-w-[100px] ${
                  isActive ? 'text-white' : 'text-gray-500 hover:text-white'
                }`}
              >
                {/* Text is now horizontal and readable */}
                {link.name}

                {/* Liquid Glass Indicator */}
                {isActive && (
                  <div 
                    className="absolute inset-0 bg-orange-500/20 border border-orange-500/40 rounded-2xl -z-10 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
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