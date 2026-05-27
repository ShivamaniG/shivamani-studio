import { motion } from 'motion/react';
import { Calendar, Briefcase, Award, Milestone } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      id: 'exp-1',
      role: 'AI Engineer',
      company: 'Antz AI',
      period: 'July 2025 - Present',
      description: 'Architecting cutting-edge AI systems, microservice deployments, and high-scale pipeline infrastructures.',
      tags: ['Systems Architecture', 'AI Systems', 'Infrastructure Scaling'],
    },
    {
      id: 'exp-2',
      role: 'AI Intern',
      company: 'Antz AI',
      period: 'Jun 2025 - Aug 2025',
      description: 'Developed highly optimized inference workflows and integrated LLM architectures for high-concurrency production environments.',
      tags: ['Pipeline Optimization', 'LLMs', 'Model Optimization'],
    },
    {
      id: 'exp-3',
      role: 'Research Mentor',
      company: 'Next Gen Computing and Networking (NGCN)',
      period: 'Apr 2025 - Jul 2025',
      description: 'Guided peer-led research initiatives targeting intelligent distributed nodes and AI-integrated operations.',
      tags: ['Leadership', 'AI Systems', 'Distributed Systems'],
    },
    {
      id: 'exp-4',
      role: 'AI Researcher',
      company: 'Next Gen Computing and Networking (NGCN)',
      period: 'Jun 2024 - Apr 2025',
      description: 'Spearheaded and co-published research detailing convolutional computer vision segmentations to optimize infrastructure building.',
      tags: ['Spatial Analysis', 'Deep Learning', 'Satellite Imagery'],
    },
    {
      id: 'exp-5',
      role: 'Back End Developer Intern',
      company: 'Spaarks',
      period: 'March 2025',
      description: 'Engineered backend microservices focusing heavily on event-driven queues and micro-second data synchronization.',
      tags: ['Microservices', 'Real-time Data', 'Concurrency APIs'],
    },
  ];

  const collaborations = [
    'Zyter TruCare',
    'Agno',
    'Second Brain Labs',
    'Spaarks',
    'Hyderabad Central University',
    'Antz AI',
    'Birla',
  ];

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
      {/* Visual background textures */}
      <div className="absolute top-[10%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-[10%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 max-w-2xl select-none">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white select-none lowercase">
            professional <span className="font-serif italic text-glow-premium text-stone-200" id="experience-serif-header">experience</span>
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base font-light tracking-wide leading-relaxed">
            A chronological trace of growth, mentoring, and software deployment, collaborating with labs and startups.
          </p>
        </div>

        {/* Master Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work History (Left Col - 8 Spans) */}
          <div className="lg:col-span-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6 relative before:absolute before:left-[21px] before:top-4 before:bottom-4 before:w-0.5 before:bg-timeline-line"
              id="experience-timeline"
            >
              {experiences.map((exp) => (
                <motion.div
                  variants={itemVariants}
                  key={exp.id}
                  className="relative pl-12 group text-left"
                  id={`experience-${exp.id}`}
                >
                  {/* Timeline bullet */}
                  <div className="absolute left-[10px] top-1.5 w-6 h-6 rounded-full bg-timeline-bg border-2 border-timeline-border group-hover:border-timeline-inner-active flex items-center justify-center transition-all duration-300 z-10 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_0_8px_rgba(0,0,0,0.8)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-timeline-inner group-hover:bg-timeline-inner-active transition-all" />
                  </div>

                  {/* Card Content */}
                  <div className="glass-card glass-card-hover p-6 rounded-2xl text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-display font-medium text-xl text-stone-100 group-hover:text-white transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 rounded-full px-3 py-1 text-[9px] text-stone-400 self-start sm:self-auto shrink-0 uppercase tracking-wider leading-none">
                        <Calendar className="w-3.5 h-3.5 text-stone-550" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-stone-300 text-sm leading-relaxed font-light mt-3">
                      {exp.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/[0.04]">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] text-stone-300 uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column Details (Sidebar - 4 Spans) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Specialization overview */}
            <div className="glass-card p-6 rounded-2xl text-left border-l-4 border-l-stone-500" id="experience-specializations">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-stone-200 mb-4">
                <span>SPECIALIZATIONS</span>
              </h3>
              <p className="text-stone-400 text-sm font-light leading-relaxed mb-4">
                Core focus lies at the intersection of modeling intelligence and optimizing underlying platforms.
              </p>
              <ul className="space-y-2.5 text-[10px] text-stone-300 uppercase tracking-wider">
                <li className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.01] border border-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                  <span>AI Infrastructure Deployment</span>
                </li>
                <li className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.01] border border-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                  <span>Systems Architecture Design</span>
                </li>
                <li className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.01] border border-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-500" />
                  <span>Full Stack Application Delivery</span>
                </li>
              </ul>
            </div>

            {/* Availability details */}
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

        {/* Sliding Marquee of Collaborations */}
        <div className="mt-16 pt-12 border-t border-white/5 overflow-hidden" id="marquee-collaboration-panel">
          <span className="block text-center text-[9px] text-stone-500 tracking-wider uppercase mb-8">
            CLIENTS &amp; COLLABORATIONS
          </span>
          
          <div className="relative w-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />
            
            <div className="flex w-[200%] animate-marquee gap-8 py-2">
              {/* First half */}
              <div className="flex justify-around items-center min-w-full gap-8 shrink-0">
                {collaborations.map((collab, index) => (
                  <span
                    key={`collab-1-${index}`}
                    className="font-serif text-lg sm:text-2xl font-light italic tracking-tight text-stone-600 hover:text-stone-300 transition-colors select-none"
                  >
                    {collab}
                  </span>
                ))}
              </div>
              {/* Second half for seamless loop */}
              <div className="flex justify-around items-center min-w-full gap-8 shrink-0">
                {collaborations.map((collab, index) => (
                  <span
                    key={`collab-2-${index}`}
                    className="font-serif text-lg sm:text-2xl font-light italic tracking-tight text-stone-600 hover:text-stone-300 transition-colors select-none"
                  >
                    {collab}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
