interface ProjectProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    link: string;
  };
}

export default function ProjectCard({ project }: any) {
  return (
    <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
          {project.title}
        </h3>
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
          2026
        </span>
      </div>
      
      <p className="text-gray-400 mb-6 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {(project.tech ??[]).map((t: string) => (
          <span key={t} className="px-3 py-1 bg-white/10 text-white text-[10px] font-medium rounded-full border border-white/5">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}