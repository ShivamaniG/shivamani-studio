import { Award, GraduationCap } from 'lucide-react';

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
    'Co-published Hydro-Net - AI and Satellite Imagery for Precision Canal Building at CISIS 2025.',
    'Solved 160+ problems in DSA and SQL on LeetCode and HackerRank.',
    'Finalist in Volkswagen i.mobilothon 4.0 using Explainable AI.',
    'Top 100 in Amazon ML Challenge for OCR-based entity recognition.',
    'Contributed at Google Agentathon 2025 and HackerRank Orchestrate.',
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-dark">
      <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[8%] w-[350px] h-[350px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        <div className="text-center md:text-left mb-16 max-w-2xl select-none">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white select-none lowercase">
            about <span className="font-serif italic text-glow-premium text-stone-200">me</span>
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base font-light tracking-wide leading-relaxed">
            Where the work comes from, before the resume facts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-8 glass-card p-8 sm:p-10 rounded-2xl text-left">
            <p className="text-stone-200 text-lg sm:text-xl leading-relaxed font-light">
              I grew up in Hyderabad and studied computer science at IIIT Kurnool. I&apos;ve always liked figuring out how things work and then making them work better - that&apos;s true for the systems I build and pretty much everything else I do.
            </p>
            <p className="mt-5 text-stone-400 text-sm sm:text-base leading-relaxed font-light">
              Outside of engineering, I&apos;m into gaming, I lift, and I spend a fair amount of time in hackathons and open-source - less for the competition, more because solving something hard on a deadline keeps me sharp. I care about building things that hold up under real pressure, not just in a demo.
            </p>
          </div>

          <div className="lg:col-span-4 glass-card p-6 rounded-2xl text-left" id="profile-achievements">
            <h3 className="font-display font-medium text-base text-stone-100 mb-5 flex items-center gap-2">
              <Award className="w-4 h-4 text-[var(--accent-copper)]" />
              <span>Achievements</span>
            </h3>
            <ul className="space-y-2.5 text-stone-400 text-xs font-light leading-relaxed">
              {achievements.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-copper)] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl text-left max-w-5xl">
          <h3 className="font-display font-medium text-base text-stone-100 mb-5 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-stone-400" />
            <span>Education Timeline</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {education.map((edu) => (
              <div key={edu.degree} className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.03] text-left">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-[9px] text-stone-400 uppercase tracking-wider">{edu.period}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-copper)]" />
                </div>
                <h4 className="font-display font-medium text-sm text-stone-200 leading-snug">{edu.degree}</h4>
                <p className="text-[10px] text-stone-300 mt-2 uppercase tracking-wider">{edu.institution}</p>
                <p className="text-stone-400 text-xs font-light mt-1.5 leading-relaxed">{edu.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
