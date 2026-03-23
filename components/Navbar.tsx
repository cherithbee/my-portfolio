"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [active, setActive] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -30% 0px',
      threshold: 0.2,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const formattedName = id.charAt(0).toUpperCase() + id.slice(1);
          setActive(formattedName === "" ? "Home" : formattedName);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="w-full max-w-6xl flex justify-between items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
        
        {/* --- BRANDING (Text Only Now) --- */}
        <div className="flex items-center pl-2">
          <div className="text-white font-bold tracking-tighter text-xl">
            CB <span className="text-orange-400">🐝</span>
          </div>
        </div>

        {/* --- NAV LINKS --- */}
        <div className="flex gap-1 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`
                relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full
                ${active === link.name ? 'text-white' : 'text-gray-400 hover:text-gray-200'}
              `}
            >
              {active === link.name && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}