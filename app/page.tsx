import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';

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
    // Use background and foreground variables for automatic switching
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-orange-500/30">
      <Navbar />

      {/* 1. Hero / Home Section */}
      <section id="home" className="scroll-mt-20 md:pl-32">
        <Hero />
      </section>

      {/* 2. About Me Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 md:pl-32 py-24 border-t border-foreground/10 scroll-mt-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tighter italic">About Me</h2>
          <div className="h-[1px] flex-1 bg-foreground/10"></div>
        </div>
        <div className="text-foreground/70 text-lg max-w-3xl leading-relaxed">
          <p>
            I am a third-year <span className="text-foreground font-semibold">ICT student at Rangsit University</span> 
            with a current <span className="text-orange-500 font-bold">GPA of 3.72</span>. 
            I specialize in <span className="text-foreground">Node.js, AI integration, and Docker</span>. 
            Currently seeking a technical internship for August 2026 to contribute to scalable systems.
          </p>
        </div>
      </section>

      {/* 3. Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-6 md:pl-32 py-24 border-t border-foreground/10 bg-foreground/[0.02] scroll-mt-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tighter italic">Experience</h2>
          <div className="h-[1px] flex-1 bg-foreground/10"></div>
        </div>
        
        <div className="space-y-12">
          <div className="border-l-2 border-orange-500 pl-6 group">
            <h3 className="text-xl font-bold">Volunteer English Teacher</h3>
            <p className="text-orange-600 dark:text-orange-500 text-sm font-medium uppercase tracking-wider">Rāmaññarațtha Buddhist University | 2022-2023</p>
            <p className="text-foreground/70 mt-2 max-w-2xl">
              Designed English curriculum for children aged 10-15. Focused on adaptive leadership and clear communication.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 md:pl-32 py-24 border-t border-foreground/10 scroll-mt-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tighter italic">Featured Work</h2>
          <div className="h-[1px] flex-1 bg-foreground/10"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {(PROJECTS_DATA ?? []).map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

{/* 5. {/* 5. Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 md:pl-32 py-32 border-t border-foreground/10 scroll-mt-20">
        <div className="flex flex-col items-center text-center space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
              Let's <span className="text-orange-500">Connect.</span>
            </h2>
            <p className="text-foreground/60 text-lg max-w-md mx-auto italic">
              Available for August 2026 Internships
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
            
            {/* Email Card */}
            <a 
              href="mailto:ppaung.work@gmail.com" 
              className="flex flex-col items-start p-6 rounded-3xl bg-foreground/[0.03] border border-foreground/10 hover:border-orange-500/50 transition-all group"
            >
              <span className="text-[10px] uppercase tracking-widest text-orange-500 font-bold mb-2">Email</span>
              <span className="text-lg font-bold text-foreground group-hover:text-orange-500 transition-colors">ppaung.work@gmail.com</span>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+66993372641" 
              className="flex flex-col items-start p-6 rounded-3xl bg-foreground/[0.03] border border-foreground/10 hover:border-orange-500/50 transition-all group"
            >
              <span className="text-[10px] uppercase tracking-widest text-orange-500 font-bold mb-2">Phone</span>
              <span className="text-lg font-bold text-foreground group-hover:text-orange-500 transition-colors">+66 99-337-2641</span>
            </a>

            {/* GitHub Card */}
            <a 
              href="https://github.com/cherithbee" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start p-6 rounded-3xl bg-foreground/[0.03] border border-foreground/10 hover:border-orange-500/50 transition-all group"
            >
              <span className="text-[10px] uppercase tracking-widest text-orange-500 font-bold mb-2">GitHub</span>
              <span className="text-lg font-bold text-foreground group-hover:text-orange-500 transition-colors">github.com/cherithbee</span>
            </a>

            {/* LINE ID Card */}
            <a 
              href="https://line.me/ti/p/efn1n_OPmh" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start p-6 rounded-3xl bg-foreground/[0.03] border border-foreground/10 hover:border-orange-500/50 transition-all group"
            >
              <span className="text-[10px] uppercase tracking-widest text-orange-500 font-bold mb-2">LINE ID</span>
              <span className="text-lg font-bold text-foreground group-hover:text-orange-500 transition-colors">cherith_bee</span>
            </a>

          </div>

          {/* Professional Status Tag */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground/[0.03] border border-foreground/10 text-foreground/80 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            ICT Student at Rangsit University 🇹🇭
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-foreground/10 text-center text-foreground/50 text-xs md:text-sm">
        © 2026 PYAE PHYO AUNG (Cherith Bee) 🐝. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}