import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
      
      {/* --- THE LARGER PROFILE IMAGE --- */}
      <div className="relative mb-10 group">
        <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur-md opacity-20 group-hover:opacity-40 transition duration-700"></div>
        
        <div className="relative h-44 w-44 md:h-52 md:w-52 rounded-full p-1.5 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="PYAE PHYO AUNG"
            width={208}
            height={208}
            className="rounded-full object-cover h-full w-full border-2 border-white/10"
            priority
          />
        </div>
      </div>

{/* --- YOUR NAME AND TITLE --- */}
      <div className="space-y-2 mt-6">
        {/* Changed text-white to text-foreground */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground whitespace-nowrap">
          Hello, I'm <span className="text-orange-600 dark:text-orange-500">PYAE PHYO AUNG</span>
        </h1>
        {/* Changed text-gray-400 to text-foreground opacity-70 */}
        <p className="text-foreground opacity-70 text-lg md:text-xl font-medium tracking-tight">
          ICT Student @ Rangsit University | <span className="font-bold">GPA: 3.72</span>
        </p>
      </div>

      {/* --- THE INTRO TEXT --- */}
      {/* Changed text-gray-400 to text-foreground opacity-80 */}
      <div className="mt-8 text-lg text-foreground opacity-80 max-w-2xl leading-relaxed">
        <p>
          Third-year student specializing in <span className="text-foreground font-bold">Node.js, AI Integration, and Docker</span>. 
          Proven experience in <span className="text-orange-600 dark:text-orange-500 font-bold">RSU Hackathons</span> and 
          developing intelligent systems like <span className="text-foreground font-bold">Trash-Sort-AI</span> (YOLOv11).
        </p>
      </div>

      {/* --- ACTION BUTTONS --- */}
      <div className="flex flex-wrap gap-4 mt-12 justify-center">
        <a 
          href="/resume.pdf" 
          download="Pyae_Phyo_Aung_Resume.pdf"
          /* Changed bg-white text-black to a dynamic theme-aware button */
          className="bg-foreground text-background px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105"
        >
          Download Resume
        </a>
        <a 
          href="https://github.com/cherithbee"
          target="_blank" 
          rel="noopener noreferrer" 
          /* Changed border-white/10 text-white to border-foreground/20 text-foreground */
          className="bg-foreground/5 border border-foreground/20 text-foreground px-8 py-3 rounded-full font-bold hover:bg-foreground/10 transition-all flex items-center gap-2"
        >
          View GitHub
        </a>
      </div>
    </section>
  );
}