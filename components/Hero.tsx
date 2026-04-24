import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
      
      {/* --- THE PROFILE IMAGE WITH DUAL-LAYER GLOW --- */}
      <div className="relative mb-10 group">
        <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur-xl opacity-40 dark:opacity-30 group-hover:opacity-70 transition duration-700"></div>
        <div className="absolute -inset-1 bg-black/5 dark:bg-white/5 rounded-full blur-sm"></div>
        
        <div className="relative h-44 w-44 md:h-52 md:w-52 rounded-full p-1.5 bg-background/50 backdrop-blur-md border border-foreground/10 shadow-2xl overflow-hidden z-10">
          <Image
            src="/profile.jpg"
            alt="PYAE PHYO AUNG"
            width={208}
            height={208}
            className="rounded-full object-cover h-full w-full border-2 border-foreground/5"
            priority
          />
        </div>
      </div>

      {/* --- NAME AND TITLE --- */}
      <div className="space-y-2 mt-6">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground italic">
          Hello, I'm <span className="text-orange-600">PYAE PHYO AUNG</span>
        </h1>

        <p className="text-foreground opacity-70 text-lg md:text-xl font-medium mt-4 tracking-tight">
          ICT Student @ Rangsit University | <span className="font-bold">GPA: 3.72</span>
        </p>
      </div>

      {/* --- THE INTRO TEXT --- */}
      <div className="mt-8 text-lg text-foreground opacity-80 max-w-2xl leading-relaxed">
        <p className="italic">
          Third-year student specializing in <span className="text-foreground font-black">Node.js, AI Integration, and Docker</span>. 
          Proven experience in <span className="text-orange-600 dark:text-orange-500 font-black">RSU Hackathons</span> and 
          developing intelligent systems like <span className="text-foreground font-black">Trash-Sort-AI</span> (YOLOv11).
        </p>
      </div>

      {/* --- ACTION BUTTONS --- */}
      <div className="flex flex-wrap gap-4 mt-12 justify-center">
        <a 
          href="/resume.pdf" 
          download="Pyae_Phyo_Aung_Resume.pdf"
          className="bg-foreground text-background border-2 border-foreground px-8 py-3 rounded-full font-black hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
        >
          Download Resume
        </a>

        <a 
          href="https://github.com/cherithbee"
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-transparent border-2 border-foreground text-foreground px-8 py-3 rounded-full font-black hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300 flex items-center gap-2 transform hover:scale-105 active:scale-95"
        >
          View GitHub
        </a>
      </div>
    </section>
  );
}