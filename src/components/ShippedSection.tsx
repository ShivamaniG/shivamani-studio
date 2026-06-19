import { motion } from 'motion/react';

export default function ShippedSection() {
  const shipped = [
    'Shipped 13+ AI agents and ML models into production for a healthcare enterprise platform',
    'Built an enterprise search and knowledge graph system spanning 500+ documents',
    'Designed a drag-and-drop voice agent platform from scratch',
    'Co-authored a peer-reviewed paper published by Springer, 2025',
    'Finalist at Google Agentathon 2025 - Ranked 53rd globally at HackerRank Orchestrate',
  ];

  return (
    <section id="shipped" className="py-20 relative overflow-hidden bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        <div className="glass-card p-6 sm:p-8 rounded-2xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 select-none">
              <span className="text-[10px] text-stone-500 uppercase tracking-[0.24em] font-semibold">Proof, not checklist</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white lowercase mt-3">
                what I&apos;ve <span className="font-serif italic text-glow-premium text-stone-200">shipped</span>
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-3">
              {shipped.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="flex items-start gap-3 text-stone-200 text-sm sm:text-base leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-copper)] shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


