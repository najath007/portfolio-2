import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const titles = ['Fullstack Developer', 'React Engineer', 'UI Craftsman'];


export default function Hero() {
  const { displayText } = useTypewriter({ words: titles });

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Radial gradient spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Available for work badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-mono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
          </span>
          Available for work
        </motion.div>

        {/* Animated name */}
        <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl leading-none mb-6 flex flex-wrap justify-center gap-x-4">
          {['Muhammed', 'Najath'].map((word, wi) => (
            <span key={wi} className="flex">
              {word.split('').map((letter, li) => (
                <motion.span
                  key={`${wi}-${li}`}
                  className={wi === 1 ? 'gradient-text' : 'text-brand-text'}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + (wi * word.length + li) * 0.04,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Typewriter subtitle */}
        <motion.div
          className="font-mono text-xl sm:text-2xl text-brand-purple mb-6 h-8 flex items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span>{displayText}</span>
          <span className="w-0.5 h-6 bg-brand-purple animate-[pulse_1s_step-end_infinite]" />
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-brand-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 font-body leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          I build fast, beautiful, full-stack web products — from pixel-perfect frontends to
          scalable .NET backends.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <button
            id="hero-view-projects"
            onClick={scrollToProjects}
            className="px-7 py-3.5 rounded-xl font-body font-semibold text-white bg-brand-purple hover:bg-brand-purple-light transition-all duration-200 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] active:scale-95"
          >
            View Projects
          </button>
          <button
            id="hero-contact"
            onClick={scrollToContact}
            className="px-7 py-3.5 rounded-xl font-body font-semibold text-brand-text border border-brand-border hover:border-brand-purple hover:text-brand-purple transition-all duration-200 active:scale-95"
          >
            Contact Me
          </button>
          <a
            id="hero-download-cv"
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-body font-semibold text-brand-muted border border-brand-border hover:border-brand-cyan hover:text-brand-cyan transition-all duration-200 active:scale-95"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
