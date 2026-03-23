"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [active, setActive] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="w-full max-w-6xl flex justify-between items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
        
        {/* Branding */}
        <div className="text-white font-bold tracking-tighter text-xl">
          CB<span className="text-orange-500">🐝......</span>
        </div>

        {/* Navigation Links with Sliding Transition */}
        <div className="flex gap-1 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`
                relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full
                ${active === link.name ? 'text-white' : 'text-gray-400 hover:text-gray-200'}
              `}
            >
              {/* The Sliding "Liquid" Background */}
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