interface ProjectProps {
  project: {
    title: string;
    description: string;
    tags: string[]; // Changed from 'tech' to match your page.tsx data
    year: string;   // Added year to the interface
    link: string;
  };
}

export default function ProjectCard({ project }: any) {
  return (
    <div className="group relative p-8 rounded-2xl bg-foreground/[0.03] border border-foreground/10 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-foreground transition-colors group-hover:text-orange-500">
          {project.title}
        </h3>
        <span className="text-[10px] uppercase tracking-widest text-foreground opacity-50 font-bold">
          {project.year}
        </span>
      </div>
      
      <p className="text-foreground opacity-70 text-sm md:text-base leading-relaxed mb-6">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {(project.tags ?? []).map((t: string) => (
          <span 
            key={t} 
            /* Changed from bg-white/10 to bg-foreground/10 and text-white to text-foreground */
            className="px-3 py-1 bg-foreground/[0.05] text-foreground text-[10px] font-bold rounded-full border border-foreground/10"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}