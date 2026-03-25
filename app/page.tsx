import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';

// 1. PROJECTS DATA (Updated with specific 'year' fields for the badges)
const PROJECTS_DATA = [
  {
    title: "Trash Sort AI: Eco Incentive Campus System",
    year: "2026", 
    description: "Engineered a YOLOv11 auditing terminal for real-time waste classification, achieving 80% mAP through high-reliability dataset construction.",
    tags: ["YOLOv11", "AI Integration", "Roboflow"],
    link: "https://github.com/cherithbee",
    image: "https://placehold.co/600x400/222/white?text=Trash+Sort+AI" 
  },
  {
    title: "RSU CIMSO Hospitality ERP Hackathon",
    year: "2025", 
    description: "Developed an innovative ERP solution for the hospitality industry in 2025, transforming complex datasets into user-friendly dashboards.",
    tags: ["React.js", "Data Visualization", "ERP"],
    link: "https://github.com/cherithbee",
    image: "https://placehold.co/600x400/222/white?text=ERP+Dashboard"
  }
];

export default function Home() {
  return (
    // bg-white for Light, dark:bg-[#0a0a0a] for Dark
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-500 selection:bg-orange-500/30">
      <Navbar />

      {/* 1. Hero / Home Section */}
      <section id="home" className="scroll-mt-20 md:pl-32">
        <Hero />
      </section>

      {/* 2. About Me Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 md:pl-32 py-24 border-t border-black/5 dark:border-white/5 scroll-mt-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-white italic">About Me</h2>
          <div className="h-[1px] flex-1 bg-black/10 dark:bg-white/10"></div>
        </div>
        <div className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl leading-relaxed">
          <p>
            I am a third-year <span className="text-gray-900 dark:text-white font-semibold">ICT student at Rangsit University</span> 
            with a current <span className="text-orange-500 font-bold">GPA of 3.72</span>. 
            I specialize in <span className="text-gray-900 dark:text-white">Node.js, AI integration, and Docker</span>. 
            Currently seeking a technical internship for August 2026 to contribute to scalable systems.
          </p>
        </div>
      </section>

      {/* 3. Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-6 md:pl-32 py-24 border-t border-black/5 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] scroll-mt-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-white italic">Experience</h2>
          <div className="h-[1px] flex-1 bg-black/10 dark:bg-white/10"></div>
        </div>
        
        <div className="space-y-12">
          <div className="border-l-2 border-orange-500 pl-6 group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Volunteer English Teacher</h3>
            <p className="text-orange-600 dark:text-orange-500/80 text-sm font-medium uppercase tracking-wider">Rāmaññarațtha Buddhist University | 2022-2023</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">
              Designed English curriculum for children aged 10-15. Focused on adaptive leadership and clear communication.
            </p>
          </div>
          {/* ... Add the second experience card with similar color classes ... */}
        </div>
      </section>

      {/* 4. Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 md:pl-32 py-24 border-t border-black/5 dark:border-white/5 scroll-mt-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-white italic">Featured Work</h2>
          <div className="h-[1px] flex-1 bg-black/10 dark:bg-white/10"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {(PROJECTS_DATA ?? []).map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 md:pl-32 py-32 border-t border-black/5 dark:border-white/5 scroll-mt-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 dark:text-white">
            Let's <span className="text-orange-500">Connect.</span>
          </h2>
          {/* ... Update contact cards bg-white/5 to bg-gray-100 dark:bg-white/5 ... */}
        </div>
      </section>

      <footer className="py-12 border-t border-black/5 dark:border-white/5 text-center text-gray-500 text-xs md:text-sm">
        © 2026 PYAE PHYO AUNG (Cherith Bee) 🐝. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}