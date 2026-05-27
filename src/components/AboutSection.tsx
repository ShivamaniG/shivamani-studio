import { motion } from 'motion/react';
import { Award, GraduationCap, Quote } from 'lucide-react';

export default function AboutSection() {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'IIIT Kurnool',
      period: '2021 - 2025',
      note: 'Specializing in Intelligent Systems and Distributed Architecture.',
    },
    {
      degree: 'Intermediate (XII)',
      institution: 'Narayana Junior College',
      period: '2019 - 2021',
      note: 'Mathematics, Physics, Chemistry (MPC) Stream.',
    },
    {
      degree: 'ICSE Class X',
      institution: 'Johnson Grammar School',
      period: '2019',
      note: 'Foundational secondary education with distinction.',
    },
  ];

  const achievements = [
    {
      title: 'Publications, Competitive Programming & Hackathons',
      desc: '1. Research Publication: Co-published "Hydro-Net – AI and Satellite Imagery for Precision Canal Building" at CISIS 2025.\n2. Algorithm Specialist: Solved 160+ problems in DSA and SQL on LeetCode & HackerRank.\n3. Technical Milestones: Finalist in Volkswagen i.mobilothon 4.0 using Explainable AI, Top 100 in Amazon ML Challenge for advanced OCR-based entity recognition, and contributions at Google Agentathon 2025 and HackerRank Orchestrate.',
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Subtle organic light indicators */}
      <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[8%] w-[350px] h-[350px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 max-w-2xl select-none">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white select-none lowercase">
            about <span className="font-serif italic text-glow-premium text-stone-200">me</span>
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base font-light tracking-wide leading-relaxed">
            Where curiosity met growth. Combining analytical depth with reliable full-stack deployment, tracing career focus.
          </p>
        </div>

        {/* Identity & Career Focus Metrics */}
        <div className="grid grid-cols-1 gap-8 items-start mb-16">
          {/* Education Timeline (Full Width) */}
          <div className="glass-card p-8 rounded-2xl text-left">
            <h3 className="font-display font-medium text-lg text-stone-100 mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-stone-400" />
              <span>EDUCATION TIMELINE</span>
            </h3>

            <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-white/5">
              {education.map((edu, eIdx) => (
                <div key={eIdx} className="relative pl-8 group">
                  <div className="absolute left-[9px] top-1.5 w-[7px] h-[7px] rounded-full bg-white/10 group-hover:bg-white transition-colors" />
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-display font-medium text-base text-stone-200 group-hover:text-white transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider">{edu.period}</span>
                    </div>
                    <p className="text-xs text-stone-300 mt-1 uppercase tracking-wider">{edu.institution}</p>
                    <p className="text-stone-400 text-sm font-light mt-1.5">{edu.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements row (Full Width) */}
        <div className="mb-16">
          {/* Academic & Competition Achievements */}
          <div className="glass-card p-8 rounded-2xl text-left" id="profile-achievements">
            <h3 className="font-display font-medium text-lg text-stone-100 mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-stone-400" />
              <span>ACHIEVEMENTS</span>
            </h3>

            <div className="space-y-4">
              {achievements.map((ach, aIdx) => (
                <div
                  key={aIdx}
                  className="p-6 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:border-white/10 transition-all text-left"
                >
                  <h4 className="font-display font-medium text-base text-stone-200 group-hover:text-stone-300 transition-colors">
                    {ach.title}
                  </h4>
                  <p className="text-stone-400 text-sm font-light mt-3 leading-relaxed whitespace-pre-line">
                    {ach.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Large Core Belief Typography Section */}
        <div className="relative mt-8 py-16 px-6 sm:px-12 rounded-3xl overflow-hidden glass-card text-center select-none" id="core-belief-card">
          <Quote className="w-10 h-10 text-stone-500 mx-auto opacity-35 mb-6" />
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-stone-200 max-w-4xl mx-auto leading-relaxed italic">
            &ldquo;The objective is not to build better tools, but to redefine what humanity can achieve with those tools at their disposal.&rdquo;
          </p>
          <div className="h-0.5 w-12 bg-stone-500 mx-auto mt-6" />
          <span className="block text-[9px] tracking-wider text-stone-450 uppercase mt-4">CORE PHILOSOPHY</span>
        </div>

      </div>
    </section>
  );
}
