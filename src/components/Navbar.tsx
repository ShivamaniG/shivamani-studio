import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', value: 'home' },
    { label: 'PROJECTS', value: 'projects' },
    { label: 'EXPERIENCE', value: 'experience' },
    { label: 'ABOUT', value: 'about' },
  ];

  const handleNavClick = (value: string) => {
    onNavigate(value);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 transition-all duration-500`}
        id="navbar-container"
      >
        <div 
          className="glass-capsule py-2 px-3 sm:px-4 rounded-full flex items-center justify-between transition-all duration-500"
          style={{
            backgroundColor: scrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg-idle)',
            borderColor: scrolled ? 'var(--nav-border-scrolled)' : 'var(--nav-border-idle)',
            boxShadow: scrolled ? '0 12px 40px rgba(0,0,0,0.06)' : 'none',
          }}
        >
          {/* Circular Asterisk Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:opacity-90 active:scale-95 transition-all group focus:outline-none border border-transparent"
            style={{
              backgroundColor: 'var(--nav-pill-bg)',
              borderColor: 'var(--nav-contact-border)',
            }}
            id="logo-button"
            aria-label="Home"
          >
            <Sparkles className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" style={{ color: 'var(--nav-pill-text)' }} />
          </button>

          {/* Desktop Navigation Link Pills */}
          <nav className="hidden md:flex items-center gap-1.5" id="desktop-nav-menu">
            {navItems.map((item) => {
              const isActive = activeSection === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className="relative px-4 py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 focus:outline-none cursor-pointer"
                  style={{
                    color: isActive ? 'var(--nav-pill-text)' : 'var(--nav-text)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--nav-text-hover)';
                      e.currentTarget.style.backgroundColor = 'var(--nav-hover-bg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--nav-text)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                  id={`nav-item-${item.value}`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full shadow-sm"
                      style={{
                        backgroundColor: 'var(--nav-pill-bg)',
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Contact Quick Button */}
          <button
            onClick={() => {
              const el = document.getElementById('footer-contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden md:flex px-4 py-1.5 rounded-full text-[10px] tracking-wider uppercase transition-all cursor-pointer border"
            style={{
              backgroundColor: 'var(--nav-contact-bg)',
              color: 'var(--nav-contact-text)',
              borderColor: 'var(--nav-contact-border)',
            }}
            id="desktop-contact-btn"
          >
            CONTACT
          </button>

          {/* Mobile indicator / hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <span className="text-[9px] tracking-wider font-semibold" style={{ color: 'var(--nav-text)' }}>
              {activeSection.toUpperCase()}
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full transition-colors border border-transparent focus:outline-none"
              style={{ color: 'var(--nav-text)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--nav-text-hover)';
                e.currentTarget.style.backgroundColor = 'var(--nav-hover-bg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--nav-text)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-capsule rounded-3xl p-6 text-left border"
            style={{
              backgroundColor: 'var(--nav-bg-scrolled)',
              borderColor: 'var(--nav-border-scrolled)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
            }}
            id="mobile-drawer-layer"
          >
            <div className="flex flex-col gap-3">
              <span className="text-[9px] uppercase tracking-wider block mb-1 font-semibold" style={{ color: 'var(--nav-text)' }}>
                NAVIGATION
              </span>
              {navItems.map((item, index) => {
                const isActive = activeSection === item.value;
                return (
                  <motion.button
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    key={item.value}
                    onClick={() => handleNavClick(item.value)}
                    className="text-lg font-bold tracking-tight text-left block py-2.5 px-4 rounded-xl transition-all"
                    style={{
                      backgroundColor: isActive ? 'var(--nav-pill-bg)' : 'transparent',
                      color: isActive ? 'var(--nav-pill-text)' : 'var(--nav-text)',
                    }}
                    id={`mobile-nav-item-${item.value}`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>

            <div className="border-t mt-6 pt-5 flex items-center justify-between" style={{ borderColor: 'var(--nav-border-idle)' }}>
              <div className="flex items-center gap-2">
                <span className="text-[9px] uppercase tracking-wider font-semibold" style={{ color: 'var(--nav-text)' }}>
                  SHIVAMANI G.
                </span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById('footer-contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[10px] underline cursor-pointer"
                style={{ color: 'var(--nav-text)' }}
              >
                Send Message
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
