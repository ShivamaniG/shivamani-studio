import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      id: 'exp-agentic-systems',
      role: 'Engineer, Agentic Systems',
      company: 'Antz AI',
      period: 'Jun 2025 - Present',
      description: 'Building production AI agents across insurance and mortgage workflows for enterprise clients. Owned design end to end, from architecture through deployment.',
      bullets: [
        'Built and shipped agents handling insurance and mortgage workflow automation and document reasoning, now live in production',
        'Designed an enterprise knowledge search system spanning 500+ documents and a 10,000-node knowledge graph',
        'Built a voice agent platform that turns weeks of integration work into a drag-and-drop setup',
      ],
      tags: ['Production Agents', 'Document Reasoning', 'Knowledge Graphs'],
      present: true,
    },
    {
      id: 'exp-ml-researcher',
      role: 'AI/ML Researcher',
      company: 'NGCN, IIIT Kurnool',
      period: 'Jun 2024 - Apr 2025',
      description: '',
      bullets: [
        'Proposed and built Hydro-Net, a new deep learning architecture for satellite image segmentation, published at CISIS 2025 (Springer)',
        'Extended the model across three datasets, improving accuracy 5-6% over baseline',
        'Mentored peer researchers on applied deep learning methods',
      ],
      tags: ['Hydro-Net', 'Deep Learning', 'Mentoring'],
      present: false,
    },
  ];

  const collaborations = ['Zyter TruCare', 'Agno', 'Second Brain Labs', 'Spaarks', 'Hyderabad Central University', 'Antz AI', 'Birla'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-brand-dark/95">
      <div className="absolute top-[10%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-[10%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        <div className="text-center md:text-left mb-16 max-w-2xl select-none">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white select-none lowercase">
            professional <span className="font-serif italic text-glow-premium text-stone-200" id="experience-serif-header">experience</span>
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base font-light tracking-wide leading-relaxed">
            Two focused roles across production agent systems and applied ML research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6"
              id="experience-role-list"
            >
              {experiences.map((exp) => (
                <motion.div variants={itemVariants} key={exp.id} className="group text-left" id={`experience-${exp.id}`}>
                  <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-display font-medium text-xl sm:text-2xl text-stone-100 group-hover:text-white transition-colors">{exp.role}</h3>
                        <p className="text-sm text-stone-400 mt-1 uppercase tracking-wider">{exp.company}</p>
                      </div>
                      <div className={`flex items-center gap-1.5 border rounded-full px-3 py-1 text-[9px] self-start sm:self-auto shrink-0 uppercase tracking-wider leading-none ${exp.present ? 'bg-[var(--accent-signal)]/10 border-[var(--accent-signal)]/30 text-[var(--accent-signal)]' : 'bg-white/5 border-white/5 text-stone-400'}`}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {exp.description && <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light mt-3">{exp.description}</p>}

                    <ul className="mt-5 space-y-2.5 text-stone-400 text-sm font-light tracking-wide list-none pl-0">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-left">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-copper)] mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/[0.04]">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-stone-300 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="glass-card p-6 rounded-2xl text-left border-l-4 border-l-[var(--accent-copper)]" id="experience-specializations">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-stone-200 mb-4"><span>SPECIALIZATIONS</span></h3>
              <p className="text-stone-400 text-sm font-light leading-relaxed mb-4">
                Core focus lies at the intersection of modeling intelligence and optimizing underlying platforms.
              </p>
              <ul className="space-y-2.5 text-[10px] text-stone-300 uppercase tracking-wider">
                {['AI Infrastructure Deployment', 'Systems Architecture Design', 'Full Stack Application Delivery'].map((item) => (
                  <li key={item} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.01] border border-white/[0.03]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-copper)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl text-left flex flex-col justify-between" id="experience-availability">
              <div>
                <h3 className="font-display font-medium text-lg text-stone-250 mt-1 capitalize italic font-serif">Open for collaborations</h3>
                <p className="mt-2 text-stone-400 text-sm font-light leading-relaxed">
                  Pragmatic about building robust AI platforms. Currently open for high-impact collaborations and architectural challenges.
                </p>
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById('footer-contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-6 w-full py-2.5 text-center rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black text-[10px] tracking-wider uppercase transition-all duration-300 font-bold cursor-pointer"
              >
                Connect with me
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/5 overflow-hidden" id="marquee-collaboration-panel">
          <span className="block text-center text-[9px] text-stone-500 tracking-wider uppercase mb-8">CLIENTS &amp; COLLABORATIONS</span>
          <div className="relative w-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />
            <div className="flex w-[200%] animate-marquee gap-8 py-2">
              {[0, 1].map((loop) => (
                <div key={loop} className="flex justify-around items-center min-w-full gap-8 shrink-0">
                  {collaborations.map((collab) => (
                    <span key={`${loop}-${collab}`} className="font-serif text-lg sm:text-2xl font-light italic tracking-tight text-stone-600 hover:text-stone-300 transition-colors select-none">
                      {collab}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
