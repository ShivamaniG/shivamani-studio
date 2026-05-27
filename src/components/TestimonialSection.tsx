import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquareQuote, Plus, X, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIAL_EMAIL_ENDPOINT = import.meta.env.VITE_TESTIMONIAL_EMAIL_ENDPOINT as string | undefined;
const TESTIMONIAL_TO_EMAIL = import.meta.env.VITE_TESTIMONIAL_TO_EMAIL as string | undefined;
const TESTIMONIAL_STORAGE_KEY = 'shivamanig_testimonials_v2';

const SEED_TESTIMONIALS: Testimonial[] = [
  {
    id: 'seed-desikan',
    name: 'Dr. K. E. Srinivasa Desikan',
    role: 'Assistant Professor',
    company: 'IIIT Kurnool',
    text: 'Shivamani exhibits remarkable research caliber in machine learning and deep learning. His work on convolutional neural networks and terrain segmentation highlights rigorous mathematical and technical execution.',
    createdAt: '2025-07-20',
  }
];

export default function TestimonialSection() {
  const [testimonials] = useState<Testimonial[]>(SEED_TESTIMONIALS);
  const [formOpen, setFormOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Form inputs
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    localStorage.removeItem(TESTIMONIAL_STORAGE_KEY);
  }, []);

  const sendTestimonialEmail = async (testimonial: Testimonial) => {
    if (TESTIMONIAL_EMAIL_ENDPOINT) {
      const response = await fetch(TESTIMONIAL_EMAIL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          subject: `New testimonial from ${testimonial.name}`,
          name: testimonial.name,
          role: testimonial.role,
          company: testimonial.company || '',
          testimonial: testimonial.text,
          createdAt: testimonial.createdAt,
        }),
      });

      if (!response.ok) {
        throw new Error('Email service rejected the testimonial submission.');
      }

      return;
    }

    if (TESTIMONIAL_TO_EMAIL) {
      const subject = encodeURIComponent(`New testimonial from ${testimonial.name}`);
      const body = encodeURIComponent(
        [
          `Name: ${testimonial.name}`,
          `Role: ${testimonial.role}`,
          `Company: ${testimonial.company || 'Not provided'}`,
          `Date: ${testimonial.createdAt}`,
          '',
          testimonial.text,
        ].join('\n')
      );

      window.location.href = `mailto:${TESTIMONIAL_TO_EMAIL}?subject=${subject}&body=${body}`;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !role.trim() || !text.trim()) return;
    setSubmitting(true);
    setError('');

    const newTestimonial: Testimonial = {
      id: `test-${Date.now()}`,
      name: name.trim(),
      role: role.trim(),
      company: company.trim() || undefined,
      text: text.trim(),
      createdAt: new Date().toISOString().split('T')[0],
    };

    try {
      await sendTestimonialEmail(newTestimonial);

      // Clear form and display success message
      setName('');
      setRole('');
      setCompany('');
      setText('');
      setFormOpen(false);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (err) {
      setError('Could not send the testimonial right now. Please try again in a moment.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Subtle background light */}
      <div className="absolute top-[20%] right-[10%] w-[380px] h-[380px] bg-white/[0.01] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[8%] w-[320px] h-[320px] bg-white/[0.01] rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 select-none">
          <div className="max-w-xl text-center md:text-left animate-fade-in">
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white select-none lowercase">
              recommendations &amp; <span className="font-serif italic text-glow-premium text-stone-200">testimonials</span>
            </h2>
            <p className="mt-4 text-stone-400 text-sm sm:text-base font-light tracking-wide leading-relaxed">
              Peer and mentor endorsements received during research studies, open contributions, and engine building projects.
            </p>
          </div>

          <button
            onClick={() => setFormOpen(true)}
            className="self-center md:self-end px-5 py-2.5 rounded-full bg-white text-black font-semibold text-[10px] tracking-wider uppercase transition-all duration-300 hover:bg-stone-300 flex items-center gap-2 focus:outline-none cursor-pointer"
            id="open-add-testimonial"
          >
            <Plus className="w-4 h-4 text-black" />
            <span>ADD TESTIMONIAL</span>
          </button>
        </div>

        {/* Success Alert Banner */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-stone-300 text-sm font-sans mx-auto max-w-xl text-left"
              id="submission-success-banner"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0 text-stone-400" />
              <div>
                <span className="font-bold">Submission sent to email.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Write testimonial drawer / modal overlay */}
        <AnimatePresence>
          {formOpen && (
            <div className="fixed inset-0 bg-brand-dark/95 backdrop-blur-md z-50 flex items-center justify-center p-6" id="add-testimonial-modal">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="w-full max-w-xl glass-card rounded-2xl p-6 sm:p-8 text-left shadow-[0_0_50px_rgba(0,0,0,0.9)] relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setFormOpen(false)}
                  className="absolute right-4 top-4 p-2 text-stone-500 hover:text-white hover:bg-white/5 rounded-full transition-colors focus:outline-none"
                  aria-label="Close form"
                  id="close-testimonial-modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2.5 mb-6">
                  <Sparkles className="w-5 h-5 text-stone-400 animate-pulse" />
                  <h3 className="font-display font-medium text-xl text-stone-105 capitalize italic font-serif">Share a recommendation</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" id="testimonial-form">
                  {error && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-xs leading-relaxed">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] text-stone-400 uppercase tracking-wider mb-1.5">Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Aditya Ram"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#121212] border border-white/5 focus:border-white/20 rounded-full text-white font-sans text-xs focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] text-stone-400 uppercase tracking-wider mb-1.5">Role / Designation</label>
                      <input
                        type="text"
                        required
                        placeholder="AI Lead"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#121212] border border-white/5 focus:border-white/20 rounded-full text-white font-sans text-xs focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                     <label className="block text-[9px] text-stone-400 uppercase tracking-wider mb-1.5">Company / University (Optional)</label>
                    <input
                      type="text"
                      placeholder="Antz AI / IIIT Kurnool"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#121212] border border-white/5 focus:border-white/20 rounded-full text-white font-sans text-xs focus:outline-none"
                    />
                  </div>

                  <div>
                     <label className="block text-[9px] text-stone-400 uppercase tracking-wider mb-1.5">Testimonial Entry</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share details of how Shivamani collaborates, his technical design, research quality, or backend performance..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      className="w-full px-4 py-3 bg-[#121212] border border-white/5 focus:border-white/20 rounded-2xl text-white font-sans text-xs focus:outline-none resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 rounded-full bg-white hover:bg-stone-300 disabled:bg-stone-500 disabled:cursor-not-allowed text-black font-semibold text-[10px] tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                    id="submit-testimonial-btn"
                  >
                    <Send className="w-3.5 h-3.5 text-black" />
                    <span>{submitting ? 'Sending...' : 'Submit Testimonial'}</span>
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Testimonials Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="testimonials-grid">
          {testimonials.map((t, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={t.id}
              className="glass-card glass-card-hover p-6 rounded-2xl text-left flex flex-col justify-between relative"
              id={`testimonial-card-${t.id}`}
            >
              <div>
                {/* Quote Icon decorative */}
                <div className="text-stone-500 opacity-40 font-serif text-5xl select-none leading-none absolute top-4 right-6">
                  &ldquo;
                </div>

                {/* Body Text */}
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed italic pr-4 font-light">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                <div>
                  <h4 className="font-display font-medium text-sm text-stone-200">{t.name}</h4>
                  <p className="text-[10px] text-stone-400 mt-1 uppercase tracking-wider leading-none">
                    {t.role} {t.company ? `• ${t.company}` : ''}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="text-[9px] text-stone-550 uppercase tracking-wider leading-none">{t.createdAt}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
