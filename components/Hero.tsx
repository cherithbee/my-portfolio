import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
      
  {/* --- THE LARGER PROFILE IMAGE --- */}
        <div className="relative mb-10 group">
          {/* Slightly stronger orange glow for the bigger size */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur-md opacity-20 group-hover:opacity-40 transition duration-700"></div>
          
          {/* Increased size from 40 to 52 (208px) */}
          <div className="relative h-44 w-44 md:h-52 md:w-52 rounded-full p-1.5 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="PYAE PHYO AUNG"
              width={208} // Matches w-52
              height={208} // Matches h-52
              className="rounded-full object-cover h-full w-full border-2 border-white/10"
              priority
            />
          </div>
        </div>

  {/* --- YOUR NAME AND TITLE (One Line Version) --- */}
        <div className="space-y-2 mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white whitespace-nowrap">
            Hello, I'm <span className="text-orange-500">PYAE PHYO AUNG</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium tracking-tight">
            ICT Student @ Rangsit University
          </p>
        </div>

      {/* --- THE INTRO TEXT --- */}
      <div className="mt-8 text-lg text-gray-400 max-w-2xl leading-relaxed">
        <p>
          Specializing in <span className="text-white font-semibold">Node.js, Next.js, and AI Integration</span>. 
          Currently developing intelligent systems like <span className="text-orange-500 font-bold">Trash-Sort-AI</span> using YOLOv11.
        </p>
      </div>

      {/* --- ACTION BUTTONS --- */}
      <div className="flex flex-wrap gap-4 mt-12 justify-center">
        <a 
          href="/resume.pdf" 
          className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105"
        >
          Download Resume
        </a>
        <a 
          href="https://github.com/cherithbee" 
          className="bg-white/5 border border-white/10 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
        >
          View GitHub
        </a>
      </div>
    </section>
  );
}