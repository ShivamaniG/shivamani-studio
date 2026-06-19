import { useState } from 'react';
import { Mail, Github, Sparkles, Linkedin } from 'lucide-react';

const DiscordIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    viewBox="0 0 127.14 96.36" 
    className={`${className} fill-current`}
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.87-.64,1.72-1.31,2.53-2a75.48,75.48,0,0,0,65.8,0c.81.69,1.66,1.36,2.53,2a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129,54.65,122.92,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText('shivamani.g');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shivamanigangarapu@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <footer id="footer-contact" className="relative pt-24 pb-12 overflow-hidden bg-brand-dark border-t border-white/5 text-left">
      {/* Subtle bottom background highlight */}
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-white/[0.01] rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Logo & Info column - 5 Spans */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4" id="footer-profile-summary">
            <div>
              <span className="font-display font-light text-2xl text-stone-200 lowercase tracking-wide block">
                shivamani <span className="font-serif italic text-glow-premium text-white">gangarapu</span>
              </span>
              <span className="text-[9px] text-stone-500 uppercase tracking-wider block mt-1.5">
                AI Engineer • Systems Innovation
              </span>
            </div>
            
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm mt-2 font-light">
              Building reliable AI products, agent workflows, and backend systems that are useful after the demo.
            </p>

            <div className="flex items-center gap-3 mt-4 text-stone-400">
              <a
                href="https://github.com/shivamanig"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/5 hover:border-white/20 hover:text-white transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/shivamani-gangarapu/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/5 hover:border-white/20 hover:text-white transition-all flex items-center justify-center"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              </a>
              <a
                href="mailto:shivamanigangarapu@gmail.com"
                className="p-2 rounded-full bg-white/5 border border-white/5 hover:border-white/20 hover:text-white transition-all"
                title="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/5 hover:border-white/20 hover:text-white transition-all flex items-center justify-center"
                title="Discord Server"
              >
                <DiscordIcon className="w-4 h-4 text-[#5865F2]" />
              </a>
            </div>
          </div>

          {/* Contact Direct Pipe column - 8 Spans */}
          <div className="lg:col-span-8 flex flex-col items-start lg:items-end w-full" id="footer-contact-panel">
            <span className="text-[9px] text-stone-500 uppercase tracking-wider mb-3">
              DIRECT CHANNELS
            </span>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-start lg:justify-end">
              {/* Mail Box card */}
              <div
                onClick={handleCopyEmail}
                className="glass-card glass-card-hover p-6 rounded-2xl text-left cursor-pointer flex-1 transition-all select-none relative overflow-hidden"
                id="contact-box-email"
              >
                <div className="absolute right-4 top-4 opacity-10">
                  <Mail className="w-12 h-12 text-stone-300" />
                </div>
                <span className="text-[9px] text-stone-450 uppercase tracking-wider block font-sans flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-stone-450" />
                  <span>EMAIL PIPELINE</span>
                </span>
                <span className="font-medium text-lg text-stone-200 block mt-2 break-all font-sans">
                  shivamanigangarapu@gmail.com
                </span>
                <span className="text-[9px] text-stone-500 uppercase tracking-wider block mt-2 font-sans">
                  {emailCopied ? 'COPIED TO CLIPBOARD!' : 'CLICK TO COPY EMAIL'}
                </span>
              </div>

              {/* Discord info Box */}
              <div
                onClick={handleCopyDiscord}
                className="glass-card glass-card-hover p-6 rounded-2xl text-left cursor-pointer flex-1 transition-all select-none relative overflow-hidden"
                id="contact-box-discord"
              >
                <div className="absolute right-4 top-4 opacity-10">
                  <DiscordIcon className="w-12 h-12 text-[#5865F2]" />
                </div>
                <span className="text-[9px] text-stone-450 uppercase tracking-wider block font-sans flex items-center gap-1.5">
                  <DiscordIcon className="w-3.5 h-3.5 text-[#5865F2]" />
                  <span>DISCORD HANDSHAKE</span>
                </span>
                <span className="font-medium text-lg text-stone-200 block mt-2 font-sans">
                  shivamani.g
                </span>
                <span className="text-[9px] text-stone-500 uppercase tracking-wider block mt-2 font-sans">
                  {copied ? 'COPIED TO CLIPBOARD!' : 'CLICK TO COPY USERNAME'}
                </span>
              </div>
            </div>
          </div>

        </div>



      </div>
    </footer>
  );
}
