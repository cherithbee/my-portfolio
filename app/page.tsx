import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';

// 1. DATA DEFINED INSIDE THE FILE (Prevents the .map() undefined error)
const PROJECTS_DATA = [
  {
    title: "Trash Sort AI: Eco Incentive Campus System",
    description: "Engineered a YOLOv11 auditing terminal for real-time waste classification, achieving 80% mAP through high-reliability dataset construction.",
    tags: ["YOLOv11", "AI Integration", "Roboflow"],
    link: "https://github.com/cherithbee",
    image: "https://placehold.co/600x400/222/white?text=Trash+Sort+AI" 
  },
  {
    title: "RSU CIMSO Hospitality ERP Hackathon",
    description: "Developed an innovative ERP solution for the hospitality industry, transforming complex datasets into user-friendly dashboards.",
    tags: ["React", "Data Visualization", "ERP"],
    link: "https://github.com/cherithbee",
    image: "https://placehold.co/600x400/222/white?text=ERP+Dashboard"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-orange-500/30">
      <Navbar />

      {/* 1. Hero / Home Section */}
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      {/* 2. About Me Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5 scroll-mt-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tighter text-white italic">About Me</h2>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>
        <div className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          <p>
            I am a third-year <span className="text-white font-semibold">ICT student at Rangsit University</span> [cite: 8, 11] 
            with a current <span className="text-orange-500 font-bold">GPA of 3.72</span>. 
            I specialize in <span className="text-white">Node.js, AI integration, and Docker</span>[cite: 8, 38]. 
            Currently seeking a technical internship for August 2026 to contribute to scalable systems[cite: 2, 9].
          </p>
        </div>
      </section>

      {/* 3. Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5 bg-white/[0.02] scroll-mt-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tighter text-white italic">Experience</h2>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>
        
        <div className="space-y-12">
          <div className="border-l-2 border-orange-500 pl-6 group">
            <h3 className="text-xl font-bold text-white">Volunteer English Teacher</h3>
            <p className="text-orange-500/80 text-sm font-medium uppercase tracking-wider">Rāmaññarațtha Buddhist University | 2022-2023</p> [cite: 54, 55]
            <p className="text-gray-400 mt-2 max-w-2xl">
              Designed English curriculum for children aged 10-15[cite: 56]. Focused on adaptive leadership 
              and clear communication[cite: 56, 57].
            </p>
          </div>

          <div className="border-l-2 border-white/10 pl-6 group">
            <h3 className="text-xl font-bold text-white">Student Teacher Trainee</h3>
            <p className="text-orange-500/80 text-sm font-medium uppercase tracking-wider">Mawlamyine Education Degree College | 2019-2020</p> [cite: 51]
            <p className="text-gray-400 mt-2 max-w-2xl">
              Managed classroom sessions for groups of 10-15, mastering professional 
              public speaking and organizational skills[cite: 52, 53].
            </p>
          </div>
        </div>
      </section>

      {/* 4. Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5 scroll-mt-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tighter text-white italic">Featured Work</h2>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/5 scroll-mt-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Let's <span className="text-orange-500">Connect.</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 w-full mt-10">
            <a href="mailto:ppaung.work@gmail.com" className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all group">
              <span className="block text-[10px] text-gray-500 mb-2 uppercase tracking-widest">Email</span>
              <span className="text-white font-medium group-hover:text-orange-400 break-all">ppaung.work@gmail.com</span> [cite: 4]
            </a>
            <a href="https://line.me/ti/p/efn1n_OPmh" target="_blank" className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all group">
              <span className="block text-[10px] text-gray-500 mb-2 uppercase tracking-widest">LINE</span>
              <span className="text-white font-medium group-hover:text-orange-400">cherith_bee</span> [cite: 6]
            </a>
            <a href="tel:0993372641" className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all group">
              <span className="block text-[10px] text-gray-500 mb-2 uppercase tracking-widest">Phone</span>
              <span className="text-white font-medium group-hover:text-orange-400">+66 99-337-2641</span> [cite: 5]
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-xs md:text-sm">
        © 2026 PYAE PHYO AUNG (Cherith Bee). Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}