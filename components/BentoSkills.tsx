import { Atom, Globe, Server, Palette, Eye, Terminal, Container, Database, Gamepad2, Layers } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

type LucideIcon = React.ComponentType<{ className?: string }>;

const skillGroups: {
  id: string;
  title: string;
  subtitle: string;
  span: string;
  skills: { name: string; icon: LucideIcon }[];
}[] = [
  {
    id: 'frontend',
    title: 'Frontend & Runtime',
    subtitle: 'Full-stack web',
    span: 'md:col-span-2',
    skills: [
      { name: 'React', icon: Atom },
      { name: 'Next.js', icon: Globe },
      { name: 'Node.js', icon: Server },
      { name: 'Tailwind CSS', icon: Palette },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Backend',
    subtitle: 'Computer vision & infra',
    span: 'md:col-span-1',
    skills: [
      { name: 'YOLOv11', icon: Eye },
      { name: 'Python', icon: Terminal },
      { name: 'Docker', icon: Container },
      { name: 'SQL', icon: Database },
    ],
  },
  {
    id: 'creative',
    title: 'Creative Tools',
    subtitle: '3D & interactive media',
    span: 'md:col-span-1',
    skills: [
      { name: 'Unity', icon: Gamepad2 },
      { name: 'Maxon Cinema 4D', icon: Layers },
    ],
  },
];

export default function BentoSkills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 md:pl-48 py-24 border-t border-foreground/10 scroll-mt-20"
    >
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tighter text-foreground italic">Skills</h2>
          <div className="h-[1px] flex-1 bg-foreground/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillGroups.map((group) => {
            const LeadIcon = group.skills[0].icon;
            return (
              <div
                key={group.id}
                className={`${group.span} relative p-6 rounded-3xl border border-white/10 bg-[#171717]/80 backdrop-blur-xl hover:border-orange-500/50 hover:scale-[1.02] cursor-default`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <LeadIcon className="w-4 h-4 text-orange-500" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-orange-500 font-bold">
                    {group.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-black text-white italic mb-5">{group.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map(({ name, icon: SkillIcon }) => (
                    <div
                      key={name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold hover:border-orange-500/40 hover:text-orange-400"
                    >
                      <SkillIcon className="w-3 h-3" />
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Availability card */}
          <div className="md:col-span-2 relative p-6 rounded-3xl border border-orange-500/20 bg-orange-500/5 backdrop-blur-xl hover:border-orange-500/50 hover:scale-[1.02] cursor-default overflow-hidden">
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-green-400 font-bold">
                    Currently Available
                  </span>
                </div>
                <p className="text-white font-black text-2xl italic">Open to Internships</p>
                <p className="text-white/60 text-sm mt-1">
                  Target:{' '}
                  <span className="text-orange-400 font-bold">August 2026</span>
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-black text-sm rounded-full"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
