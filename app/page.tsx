import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-orange-500/30">
      <Navbar />

      {/* 1. Hero / Home Section */}
      {/* scroll-mt-20 ensures the Navbar doesn't cover the title when clicking links */}
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      {/* 2. About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5 scroll-mt-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tighter text-white italic">About Me</h2>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>
        <div className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          <p>
            I am a passionate <span className="text-white">Information Technology student at Rangsit University</span> 
            with a focus on building intelligent, scalable applications. My expertise spans across 
            <span className="text-orange-500"> Full-stack Development (Next.js, Node.js)</span> and 
            <span className="text-orange-500"> AI Integration (YOLOv11, Computer Vision)</span>.
          </p>
          <p className="mt-4">
            Currently based in Pathum Thani, I am dedicated to bridging the gap between complex data 
            analytics and user-friendly web interfaces.
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
          {/* Professional Role 1 */}
          <div className="border-l-2 border-orange-500 pl-6 group transition-all">
            <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Student Teacher Trainee</h3>
            <p className="text-orange-500/80 text-sm font-medium uppercase tracking-wider">Mawlamyine Education Degree College</p>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Developed leadership and communication skills while managing educational environments 
              and coordinating with diverse teams.
            </p>
          </div>

          {/* Professional Role 2 */}
          <div className="border-l-2 border-white/10 pl-6 group transition-all hover:border-orange-500/50">
            <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Volunteer English Teacher</h3>
            <p className="text-orange-500/80 text-sm font-medium uppercase tracking-wider">Rāmaññarațtha Buddhist University</p>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Taught foundational English to children aged 10-15, focusing on interactive learning 
              and cross-cultural communication.
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
          {projects.map((p, i) => (
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
          <p className="text-gray-400 text-lg max-w-xl">
            Currently looking for an internship starting **August 2026**. 
            Reach out if you're interested in my work with **YOLOv11** or Full-stack development.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 w-full mt-10">
            {/* Email Link */}
            <a href="mailto:ppaung.work@gmail.com" className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all group">
              <span className="block text-sm text-gray-500 mb-2 uppercase tracking-widest text-[10px]">Email</span>
              <span className="text-white font-medium group-hover:text-orange-400 break-all text-sm md:text-base">ppaung.work@gmail.com</span>
            </a>

            {/* LINE Link */}
            <a href="https://line.me/ti/p/efn1n_OPmh" target="_blank" rel="noopener noreferrer" className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all group">
              <span className="block text-sm text-gray-500 mb-2 uppercase tracking-widest text-[10px]">LINE</span>
              <span className="text-white font-medium group-hover:text-orange-400">cherith_bee</span>
            </a>

            {/* Phone Link */}
            <a href="tel:0993372641" className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all group">
              <span className="block text-sm text-gray-500 mb-2 uppercase tracking-widest text-[10px]">Phone</span>
              <span className="text-white font-medium group-hover:text-orange-400">+66 99-337-2641</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-xs md:text-sm">
        © 2026 PYAE PHYO AUNG (Cherith Bee). Built with Next.js, Framer Motion & Tailwind CSS.
      </footer>

    </main>
  );
}