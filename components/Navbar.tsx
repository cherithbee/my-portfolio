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

  // Handle manual clicks to move the "liquid glass" immediately
  const handleClick = (href: string) => {
    const id = href.replace('#', '');
    setActiveSection(id);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjusted for better backward scrolling detection
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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-white/5 backdrop-blur-lg border border-white/10 p-1.5 rounded-2xl relative">
        {navLinks.map((link) => {
          const id = link.href.replace('#', '');
          const isActive = activeSection === id;

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-xl z-10 ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              {/* This is the Liquid Glass Background */}
              {isActive && (
                <div 
                  className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl -z-10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  style={{ layoutId: "active-pill" } as any} // Helpful if using Framer Motion
                />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}