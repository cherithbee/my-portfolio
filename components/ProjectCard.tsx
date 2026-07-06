'use client';
import Image from 'next/image';
import { useState, useRef, useCallback } from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    year: string;
    link: string;
    image: string;
    github?: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glint, setGlint] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: cy * -10, y: cx * 10 });
    setGlint({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="card-3d-tilt relative group rounded-3xl border border-white/10 bg-[#171717]/70 backdrop-blur-lg overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.02 : 1})`,
      }}
    >
      {/* Glint overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl z-10 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glint.x}% ${glint.y}%, rgba(255,255,255,0.07) 0%, transparent 60%)`,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          loading="eager"
          className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105"
          style={{ transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#171717]" />
        <span className="absolute top-4 right-4 z-10 text-[10px] uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full font-bold">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3
          className="text-xl font-black text-white italic mb-3 group-hover:text-orange-400"
          style={{ transition: 'color 0.3s ease' }}
        >
          {project.title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-5 italic">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {(project.tags ?? []).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-orange-400 bg-orange-500/10 border border-orange-500/20 text-[10px] font-black rounded-full uppercase tracking-tighter"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white text-xs font-black rounded-full"
            style={{ transition: 'background-color 0.2s ease' }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-4 py-2 border border-white/20 hover:border-orange-500/50 text-white/80 hover:text-orange-400 text-xs font-black rounded-full"
              style={{ transition: 'border-color 0.2s ease, color 0.2s ease' }}
            >
              <GitBranch className="w-3.5 h-3.5" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}