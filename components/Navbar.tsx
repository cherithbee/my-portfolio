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
      rootMargin: '-30% 0px -60% 0px', // Precise margin for backward scroll detection
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
    // Vertical placement on the left
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-3xl relative">
        
        {/* CB Logo with Bee Emoji 🐝 */}
        <div className="mb-6 flex flex-col items-center gap-1">
          <span className="text-orange-500 font-bold text-2xl tracking-tighter italic">CB</span>
          <span className="text-xl">🐝.....</span>
        </div>

        <div className="flex flex-col gap-3 relative">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative px-3 py-4 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 rounded-xl z-10 ${
                  isActive ? 'text-white' : 'text-gray-500 hover:text-white'
                }`}
              >
                {/* Vertical text orientation */}
                <span className="[writing-mode:vertical-lr] rotate-180">
                  {link.name}
                </span>

                {/* Vertical Liquid Glass Indicator */}
                {isActive && (
                  <div 
                    className="absolute inset-0 bg-orange-500/20 border border-orange-500/40 rounded-xl -z-10 shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-500"
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