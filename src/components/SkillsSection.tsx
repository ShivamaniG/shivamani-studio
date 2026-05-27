import { motion } from 'motion/react';
import { Brain, Server, Database, Code, ShieldCheck, HeartPulse, Compass } from 'lucide-react';

export default function SkillsSection() {
  const skillGroups = [
    {
      category: 'AI / ML Systems',
      icon: <Brain className="w-4 h-4 text-stone-300" />,
      colorClass: 'border-white/10 bg-white/5 text-stone-300',
      skills: ['NLP (Natural Language Processing)', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'Neural Models', 'Vector Databases'],
    },
    {
      category: 'Backend Development',
      icon: <Server className="w-4 h-4 text-stone-305" />,
      colorClass: 'border-white/10 bg-white/5 text-stone-305',
      skills: ['FastAPI', 'Flask', 'Node.js', 'Express', 'REST API Architecture', 'Microservices'],
    },
    {
      category: 'Frontend Development',
      icon: <Code className="w-4 h-4 text-stone-300" />,
      colorClass: 'border-white/10 bg-white/5 text-stone-300',
      skills: ['React', 'Tailwind CSS', 'TypeScript', 'HTML5 & CSS3', 'Dynamic Contexts', 'Micro-Interactions'],
    },
    {
      category: 'Databases & Engine',
      icon: <Database className="w-4 h-4 text-stone-300" />,
      colorClass: 'border-white/10 bg-white/5 text-stone-300',
      skills: ['MySQL', 'MongoDB', 'Firebase Firestore', 'Relational Schemas', 'Indexing & Speed'],
    },
    {
      category: 'DevOps & Deployment',
      icon: <ShieldCheck className="w-4 h-4 text-stone-300" />,
      colorClass: 'border-white/10 bg-white/5 text-stone-300',
      skills: ['Docker (Containers)', 'Git & Version Control', 'AWS (Amazon Web Services)', 'CI/CD Pipelines'],
    },
    {
      category: 'Core Strengths',
      icon: <HeartPulse className="w-4 h-4 text-stone-300" />,
      colorClass: 'border-white/10 bg-white/5 text-stone-300',
      skills: ['Psychology & Alignment', 'Leadership & Research Mentoring', 'Complex Problem Solving', 'Creative Systems Design'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Decorative background lights */}
      <div className="absolute top-1/4 right-[10%] w-[350px] h-[350px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[300px] h-[300px] rounded-full bg-white/[0.01] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 max-w-2xl select-none">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white select-none lowercase">
            technical <span className="font-serif italic text-glow-premium text-stone-200">strengths</span>
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base tracking-wide leading-relaxed font-light">
            technical expertise built through systems engineering, research modeling, and high-performance applications.
          </p>
        </div>

        {/* Skill Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="skills-grid"
        >
          {skillGroups.map((group, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between text-left"
              id={`skill-category-${index}`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans font-semibold text-sm tracking-wide uppercase text-stone-200">{group.category}</h3>
                  <div className={`p-2 rounded-lg border ${group.colorClass}`}>
                    {group.icon}
                  </div>
                </div>

                {/* Skill Lists */}
                <div className="space-y-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.04] hover:border-white/10 transition-colors"
                      id={`skill-item-${index}-${sIdx}`}
                    >
                      <span className="text-stone-300 font-medium text-xs tracking-wide">{skill}</span>
                      <div className="w-1 h-1 rounded-full bg-white/40" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
