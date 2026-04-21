import Image from 'next/image';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    year: string;
    link: string;
    image: string; // Ensure image is in your interface
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group relative p-4 rounded-3xl bg-foreground/[0.03] border border-foreground/10 hover:border-orange-500/50 transition-all duration-500 backdrop-blur-sm overflow-hidden"
    >
      {/* --- PROJECT IMAGE --- */}
      <div className="relative h-48 w-full mb-6 rounded-2xl overflow-hidden border border-foreground/5">
        <Image 
          src={project.image || "https://placehold.co/600x400/222/white?text=Project+Coming+Soon"} 
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover Overlay: Shows 'View Project' when mouse moves over image */}
        <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
           <span className="bg-white text-black px-5 py-2 rounded-full text-xs font-black shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             VIEW PROJECT →
           </span>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="px-2 pb-2">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-black text-foreground transition-colors group-hover:text-orange-500 italic">
            {project.title}
          </h3>
          <span className="text-[10px] uppercase tracking-widest text-foreground opacity-50 font-black">
            {project.year}
          </span>
        </div>
        
        <p className="text-foreground opacity-70 text-sm leading-relaxed mb-6 italic">
          {project.description}
        </p>
        
        {/* --- TECHNOLOGY TAGS --- */}
        <div className="flex flex-wrap gap-2">
          {(project.tags ?? []).map((t: string) => (
            <span 
              key={t} 
              className="px-3 py-1 bg-foreground/[0.05] text-foreground text-[10px] font-black rounded-full border border-foreground/10 uppercase tracking-tighter"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}