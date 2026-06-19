import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Github, Linkedin, Briefcase } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-32 pb-16 bg-brand-dark">
      {/* Background Cinematic Video Asset with Starry Cosmic Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-10 dark:opacity-25 brightness-50 dark:brightness-50 filter contrast-125 dark:contrast-125 scale-100"
        >
          <source src="https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4" type="video/mp4" />
        </video>
        {/* Radial Dark Vignette matching reference design */}
        <div 
          className="absolute inset-0 z-1" 
          style={{
            background: 'radial-gradient(circle at center, var(--vignette-start) 0%, var(--vignette-end) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/40 to-brand-dark z-1" />
        {/* Scanline FX */}
        <div className="absolute inset-0 w-full h-full pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,255,255,0.01),rgba(0,0,0,0.03))] bg-[size:100%_4px,100%_100%] z-2 opacity-5 dark:opacity-20" />
      </div>

      {/* Main Celestial Hero Block */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex-grow flex flex-col justify-center items-center">
        
        {/* Centered Editorial Header Block */}
        <div className="text-center max-w-4xl flex flex-col items-center mt-8 select-none" id="hero-centered-editorial">
          
          {/* Master Serif Layout corresponding to "Superintelligence on device" */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8rem] tracking-tight leading-[0.9] text-white whitespace-normal text-heading select-none lowercase"
          >
            <span className="block text-stone-200">shivamani</span>
            <span className="block italic text-glow-premium text-white font-serif mt-2">
              gangarapu
            </span>
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 text-stone-400 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-xl mx-auto leading-relaxed"
          >
            I build AI that actually works. Not demos, not prototypes - production systems running right now. 2+ years building agentic systems in production.
          </motion.p>

          {/* View Projects Pill corresponding to "LAUNCH APP" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10"
            id="hero-launch-control"
          >
            <button
              onClick={() => onNavigate('projects')}
              className="btn-cta-responsive px-8 py-3 rounded-full border text-[11px] sm:text-xs tracking-wider uppercase cursor-pointer shadow-[0_12px_24px_rgba(0,0,0,0.15)] dark:shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
            >
              VIEW SELECT WORK &rarr;
            </button>
          </motion.div>

        </div>

        {/* Bento Board Details Overlay (Fully Customized Bento Cards) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pb-12" id="hero-bento-strip">
          
          {/* Card 1: Academic Track */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-card glass-card-hover p-6 rounded-2xl text-left flex flex-col justify-between group"
            id="hero-metric-edu"
          >
            <div className="flex justify-between items-start">
              <span className="p-2 rounded-xl bg-white/5 border border-white/10 dark:border-white/10 border-stone-200/50">
                <BookOpen className="w-4 h-4 text-stone-650 dark:text-stone-300" />
              </span>
              <span className="text-[9px] text-stone-500 uppercase tracking-wider font-semibold">Education</span>
            </div>
            
            <div className="mt-6">
              <span className="text-[10px] text-stone-450 uppercase tracking-widest font-mono block">Academic Track</span>
              <h3 className="font-display font-medium text-2xl text-stone-800 dark:text-stone-100 italic font-serif mt-1">Undergraduate</h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">IIIT Kurnool &apos;25 // Computer Sci. Focus</p>
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="mt-6 text-[10px] text-stone-600 dark:text-stone-350 group-hover:text-stone-900 dark:group-hover:text-white flex items-center gap-1.5 transition-colors self-start border-b border-dashed border-stone-300 dark:border-white/20 pb-0.5 cursor-pointer"
            >
              Academic Timeline
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* Card 2: GitHub Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card glass-card-hover p-6 rounded-2xl text-left flex flex-col justify-between group relative overflow-hidden"
            id="hero-metric-github"
          >
            <div className="flex justify-between items-start">
              <span className="p-2 rounded-xl bg-white/5 border border-white/10 dark:border-white/10 border-stone-200/50">
                <Github className="w-4 h-4 text-stone-650 dark:text-stone-300" />
              </span>
              <span className="text-[9px] text-emerald-600 dark:text-emerald-450 uppercase tracking-wider font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Repos
              </span>
            </div>

            {/* Custom Visual Mockup of Commit Activity squares */}
            <div className="mt-4">
              <span className="text-[9px] text-stone-450 uppercase tracking-widest font-mono block">Contribution Graph</span>
              
              <div className="grid grid-cols-12 gap-1 mt-2.5 select-none" id="github-commit-chart">
                {[
                  [1, 2, 0, 1, 3, 0, 2, 4, 1, 0, 3, 2],
                  [0, 1, 3, 0, 1, 2, 0, 1, 2, 4, 0, 1],
                  [2, 0, 1, 4, 0, 2, 1, 3, 0, 1, 3, 0],
                  [1, 3, 0, 1, 2, 4, 0, 2, 1, 3, 0, 2],
                  [0, 2, 4, 1, 0, 3, 1, 2, 0, 1, 4, 3]
                ].flatMap((row, rIdx) => 
                  row.map((val, cIdx) => {
                    let bgClass = "bg-stone-150 dark:bg-stone-900/60";
                    if (val === 1) bgClass = "bg-emerald-250/50 dark:bg-emerald-950/40";
                    if (val === 2) bgClass = "bg-emerald-350 dark:bg-emerald-900/60";
                    if (val === 3) bgClass = "bg-emerald-500 dark:bg-emerald-700/70";
                    if (val === 4) bgClass = "bg-emerald-600 dark:bg-emerald-500";
                    return (
                      <div 
                        key={`${rIdx}-${cIdx}`} 
                        className={`w-full aspect-square rounded-[2px] transition-transform duration-200 hover:scale-125 hover:z-20 border-[0.5px] border-stone-200/20 dark:border-stone-800/30 ${bgClass}`}
                        title={`${val} contributions`}
                      />
                    );
                  })
                )}
              </div>

              {/* Technologies strip */}
              <div className="flex gap-2 mt-3 text-[10px] text-stone-450 font-mono">
                <span>Python (68%)</span>
                <span>•</span>
                <span>TS (24%)</span>
              </div>
            </div>

            <a
              href="https://github.com/shivamanig"
              target="_blank"
              rel="noreferrer"
              className="mt-4 text-[10px] text-stone-600 dark:text-stone-350 group-hover:text-stone-900 dark:group-hover:text-white flex items-center gap-1.5 transition-colors self-start border-b border-dashed border-stone-300 dark:border-white/20 pb-0.5 cursor-pointer font-semibold"
            >
              Explore Repositories
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Card 3: LinkedIn Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="glass-card glass-card-hover p-6 rounded-2xl text-left flex flex-col justify-between group relative overflow-hidden"
            id="hero-metric-linkedin"
          >
            <div className="flex justify-between items-start">
              <span className="p-2 rounded-xl bg-white/5 border border-white/10 dark:border-white/10 border-stone-200/50">
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              </span>
              <span className="text-[9px] text-stone-500 uppercase tracking-wider font-semibold">Professional Hub</span>
            </div>

            <div className="mt-4">
              <span className="text-[10px] text-stone-450 uppercase tracking-widest font-mono block">Career Status</span>
              <h4 className="font-display font-medium text-lg text-stone-800 dark:text-stone-100 tracking-tight leading-snug mt-1">AI Engineer @ Antz AI</h4>
              <p className="text-stone-500 dark:text-stone-400 text-xs mt-1 leading-snug font-serif italic">Agentic Workflows and Prod AI Pipelines</p>
              
              <div className="mt-3.5 pt-3 border-t border-stone-200/20 dark:border-stone-800/40 grid grid-cols-2 gap-3">
                <div className="flex flex-col">
                  <span className="text-[10px] text-stone-450">Production focus</span>
                  <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-300">2+ years</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] text-stone-450">Networks & reach</span>
                  <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-300">1,200+ followers</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/shivamani-gangarapu/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 text-[10px] text-stone-600 dark:text-stone-350 group-hover:text-[#0A66C2] dark:group-hover:text-[#4da3ff] flex items-center gap-1.5 transition-colors self-start border-b border-dashed border-stone-300 dark:border-white/20 pb-0.5 cursor-pointer font-semibold"
            >
              View LinkedIn Profile
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Card 4: Involvement & Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass-card glass-card-hover p-6 rounded-2xl text-left flex flex-col justify-between group"
            id="hero-metric-exp"
          >
            <div className="flex justify-between items-start">
              <span className="p-2 rounded-xl bg-white/5 border border-white/10 dark:border-white/10 border-stone-200/50">
                <Briefcase className="w-4 h-4 text-stone-650 dark:text-stone-300" />
              </span>
              <span className="text-[9px] text-stone-500 uppercase tracking-wider font-semibold">Involvement</span>
            </div>

            <div className="mt-4 flex-grow flex flex-col justify-center">
              <div className="flex items-center justify-between text-xs text-stone-700 dark:text-stone-300 border-b border-stone-200/10 dark:border-white/[0.03] pb-1.5">
                <span>AI Engineer</span>
                <span className="text-stone-550 dark:text-stone-400 font-bold font-mono">Antz AI</span>
              </div>
              <div className="flex items-center justify-between text-xs text-stone-700 dark:text-stone-300 mt-1.5 border-b border-stone-200/10 dark:border-white/[0.03] pb-1.5">
                <span>Research Mentor</span>
                <span className="text-stone-550 dark:text-stone-400 font-bold font-mono">NGCN</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('experience')}
              className="mt-6 text-[10px] text-stone-600 dark:text-stone-350 group-hover:text-stone-900 dark:group-hover:text-white flex items-center gap-1.5 transition-colors self-start border-b border-dashed border-stone-300 dark:border-white/20 pb-0.5 cursor-pointer"
            >
              Engineering Timeline
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
