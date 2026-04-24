import Image from 'next/image';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    year: string;
    link: string;
    image: string;
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
      {/* --- BROWSER WINDOW UI --- */}
      <div className="relative h-56 w-full mb-6 rounded-2xl overflow-hidden border border-foreground/10 bg-black/20">
        {/* Browser Top Bar with Dots */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-foreground/5 border-b border-foreground/10 flex items-center px-3 gap-1.5 z-20 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-red-500/40" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
          <div className="w-2 h-2 rounded-full bg-green-500/40" />
          <div className="ml-2 h-3 w-24 bg-foreground/5 rounded-sm" /> {/* Fake URL Bar */}
        </div>

        <Image 
          src={project.image || "https://placehold.co/600x400/222/white?text=Project+Preview"} 
          alt={project.title}
          fill
          className="object-cover pt-7 transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover Overlay: "Visit Site" button */}
        <div className="absolute inset-0 bg-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pt-7">
           <div className="bg-white text-black px-4 py-2 rounded-full text-[10px] font-black shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
             VISIT HACKATHON SITE <span className="text-lg">↗</span>
           </div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="px-2 pb-2">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl md:text-2xl font-black text-foreground transition-colors group-hover:text-orange-500 italic">
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