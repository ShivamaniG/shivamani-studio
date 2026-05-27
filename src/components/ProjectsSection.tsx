import { motion } from 'motion/react';
import { ExternalLink, Github, BookOpen, Bookmark } from 'lucide-react';
import { Project } from '../types';

export default function ProjectsSection() {
  const githubProfile = 'https://github.com/shivamanig';

  const projects: Project[] = [
    {
      id: 'proj-live-predictor',
      title: 'IPL 2026 Live Predictor',
      description: 'Real-time IPL tournament prediction system featuring dynamic in-game predictions and multi-model ensemble analytics.',
      highlights: [
        'Built a real-time IPL prediction system using 17 years of ball-by-ball IPL data (2008–2025) with live match updates and dynamic prediction recalibration.',
        'Implemented an ensemble of 5 ML models (XGBoost, LightGBM, Random Forest, ExtraTrees, Neural Network) with Bayesian weighting for evolving season predictions.',
        'Developed a Streamlit dashboard for live match insights, playoff simulations, and tournament winner probabilities.',
        'Designed an automated ETL + feature engineering pipeline with 31 cricket-specific features and API-based live score integration.'
      ],
      tags: ['XGBoost', 'LightGBM', 'Ensemble ML', 'Streamlit', 'ETL Pipeline', 'Python'],
      repoLink: 'https://github.com/shivamanig',
      demoLink: 'https://github.com/shivamanig',
    },
    {
      id: 'proj-support-triage',
      title: 'Multi-Domain Support Triage Agent',
      description: 'High-accuracy RAG-based classification and triage agent engineered for structured enterprise datasets.',
      highlights: [
        'Developed a RAG-based AI triage agent for HackerRank, Claude, and Visa support datasets using Gemini embeddings and Gemini 2.5 Flash.',
        'Implemented hierarchical retrieval, confidence gating, and rule-based safety checks to generate grounded JSON support decisions with audit trails.',
        'Built a deterministic retrieval pipeline with heading-aware chunking, cosine similarity search, and structured Pydantic outputs.',
        'Achieved 100% accuracy on labeled samples for status and request type classification with multilingual prompt-injection resistance.'
      ],
      tags: ['Gemini 2.5 Flash', 'RAG Agent', 'Pydantic', 'Semantic Search', 'JSON Output'],
      repoLink: 'https://github.com/shivamanig',
      demoLink: 'https://github.com/shivamanig',
    },
    {
      id: 'proj-connect-kit',
      title: 'Agent Connect Kit',
      description: 'Open-source unified connector gateway for linking autonomous AI copilots to developer and collaboration APIs.',
      highlights: [
        'Built an open-source connector gateway for AI agents and copilots with REST and MCP-compatible interfaces.',
        'Implemented reusable integrations for GitHub and Discord with OAuth handling, encrypted token storage, retry logic, and audit logging.',
        'Designed a unified connector runtime supporting 37+ actions including repositories, pull requests, issues, messages, and notifications.',
        'Enabled developers to integrate AI assistants with external tools without rebuilding authentication and infrastructure layers.'
      ],
      tags: ['MCP Protocol', 'OAuth 2.0', 'Express.js', 'TypeScript', 'Node.js'],
      repoLink: 'https://github.com/shivamanig',
      demoLink: 'https://github.com/shivamanig',
    },
    {
      id: 'proj-1',
      title: 'Hydro-Net: Integrating AI and Satellite Imagery for Precision Canal Building',
      description: 'This research introduces Hydro-Net, an integrated deep learning framework designed to segment multi-spectral Sentinel-2 radar tile datasets for optimal canal infrastructure planning. By pairing customized convolutional U-Net architectures with heuristic optimization algorithms, the system maps high-precision irrigation pathways directly on remote terrains, bypassing traditional geographical limits and offering an energy-optimal routing alternative.',
      tags: ['Python', 'U-Net', 'AI Research', 'Computer Vision'],
      repoLink: 'https://github.com/shivamanig',
      demoLink: 'https://link.springer.com/chapter/10.1007/978-3-031-96099-4_7',
      isPublication: true,
      publicationMetadata: {
        doi: '10.1007/978-3-031-96099-4_7',
        publisher: 'Springer, Cham',
        authors: 'Shivamani Gangarapu, G. Sai Surya Teja, K. E. Srinivasa Desikan',
        journal: 'Complex, Intelligent and Software Intensive Systems (pp. 70-81) • July 2025',
        abstract: ''
      }
    },
    {
      id: 'proj-2',
      title: 'Policy SIM',
      description: 'An advanced simulation engine customized for policy forecasting, alignment analysis, and impact calculation across deep network agents.',
      highlights: [
        'Engineered synthetic alignment testing runs across dozens of concurrent LLM agent nodes.',
        'Monitored policy drift dynamics and designed custom real-time status telemetry.'
      ],
      tags: ['Google Hackathon', 'LLMs', 'Simulation', 'Python'],
      repoLink: 'https://github.com/shivamanig',
      demoLink: 'https://github.com/shivamanig',
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-brand-dark/95">
      {/* Decorative vector meshes */}
      <div className="absolute top-[20%] left-[8%] w-[380px] h-[380px] bg-white/[0.01] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[320px] h-[320px] bg-white/[0.01] rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 max-w-2xl select-none animate-fade-in">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white select-none lowercase">
            selected <span className="font-serif italic text-glow-premium text-stone-200">builds</span>
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base font-light tracking-wide leading-relaxed font-sans">
            Archive of completed systems engineering, semantic AI integrations, and open source code contributions.
          </p>
          
          {/* GitHub Header Box */}
          <div className="mt-6 flex items-center justify-start gap-2.5 text-[9px] uppercase tracking-wider text-stone-500">
            <span className="text-stone-500">Repository Link:</span>
            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-full bg-white/5 border border-white/5 hover:border-white/20 hover:text-white text-stone-300 transition-all flex items-center gap-1.5 text-[9px]"
            >
              <Github className="w-3 h-3" />
              <span>github.com/shivamanig</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl" id="projects-gallery-grid">
          {projects.map((project) => {
            const isPub = !!project.isPublication;
            
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl flex flex-col justify-between text-left relative group-container h-full"
                id={`project-card-${project.id}`}
              >
                <div>
                  {isPub && (
                    <div className="flex items-center justify-between gap-2 mb-3.5 text-[9px] font-mono tracking-widest text-stone-400 dark:text-stone-400 uppercase font-semibold">
                      <span className="flex items-center gap-1">
                        <Bookmark className="w-3.5 h-3.5 text-stone-400 animate-pulse" />
                        Peer-Reviewed Publication
                      </span>
                      <span className="border border-stone-200/50 dark:border-white/10 px-1.5 py-0.5 rounded text-[8px] bg-white/5">Springer Nature</span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="font-display font-medium text-xl sm:text-2xl text-stone-200 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {isPub && project.publicationMetadata && (
                    <span className="text-[10px] text-stone-455 font-mono block mt-1.5 leading-relaxed">
                      {project.publicationMetadata.journal}
                    </span>
                  )}

                  {/* Description */}
                  <p className="mt-3 text-stone-300 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Static styled journal details for Academic Publications */}
                  {isPub && project.publicationMetadata && (
                    <div className="mt-4 px-3.5 py-3 rounded-xl bg-stone-100/5 dark:bg-stone-900/40 border border-stone-200/10 dark:border-white/[0.03] space-y-2 text-xs font-sans">
                      <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1 sm:gap-4">
                        <span className="text-stone-450 text-[10px] uppercase font-mono tracking-wider">Authors:</span>
                        <span className="text-stone-350 font-medium text-left text-[11px] font-serif">{project.publicationMetadata.authors}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1 sm:gap-4 border-t border-stone-200/10 dark:border-white/[0.02] pt-1.5">
                        <span className="text-stone-450 text-[10px] uppercase font-mono tracking-wider">DOI Identifier:</span>
                        <span className="font-mono text-stone-300 font-semibold text-[10px] select-all">{project.publicationMetadata.doi}</span>
                      </div>
                    </div>
                  )}

                  {/* Bullet Highlights for Non-Publications */}
                  {!isPub && project.highlights && (
                    <ul className="mt-5 space-y-2.5 text-stone-400 text-[12px] sm:text-xs font-light tracking-wide list-none pl-0">
                      {project.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-left">
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-500 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tags block */}
                  <div className="flex flex-wrap gap-1.5 mt-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] text-stone-300 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Link Footer bar */}
                <div className="mt-6 pt-5 border-t border-white/[0.04] flex gap-4 items-center justify-between">
                  <div className="flex items-center gap-4">
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] tracking-wider uppercase text-stone-400 hover:text-white flex items-center gap-1 transition-colors"
                        id={`repo-link-${project.id}`}
                      >
                        <Github className="w-3 h-3" />
                        <span>Repo</span>
                      </a>
                    )}
                    
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] tracking-wider uppercase text-stone-200 hover:text-white flex items-center gap-1 transition-colors"
                        id={`deployment-link-${project.id}`}
                      >
                        {isPub ? <BookOpen className="w-3.5 h-3.5 text-stone-400" /> : <ExternalLink className="w-3 h-3 text-stone-400" />}
                        <span>
                          {isPub ? 'Springer Pub' : 'View Build'}
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA block */}
        <div className="mt-16 text-center select-none" id="projects-cta-footer">
          <span className="text-[9px] text-stone-500 uppercase tracking-wider block font-sans">Collab Inquiry</span>
          <h3 className="font-serif italic text-stone-200 text-lg sm:text-xl font-light mt-1">
            Interested in collaboration? Outlining and building robust codebases.
          </h3>
          <button
            onClick={() => {
              const el = document.getElementById('footer-contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-4 inline-flex items-center gap-2 text-[9px] tracking-wider uppercase text-stone-300 hover:text-white border-b border-stone-600 hover:border-white py-1 cursor-pointer transition-all duration-300"
          >
            <span>Reach out directly</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>

      </div>
    </section>
  );
}
