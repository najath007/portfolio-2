import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants, slideInLeftVariants, slideInRightVariants } from '../hooks/useScrollAnimation';

const stats = [
  { label: 'Experience', value: '1+ yr', icon: '⚡' },
  { label: 'Projects Shipped', value: '10+', icon: '🚀' },
  { label: 'Tech Stacks', value: '5+', icon: '🛠️' },
  { label: 'Core Stack', value: 'React + .NET', icon: '💎' },
];

export default function About() {
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="about" className="section-padding relative">
      {/* Section label */}
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="font-mono text-brand-purple text-sm tracking-widest uppercase mb-3 text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          // about.me
        </motion.p>
        <motion.h2
          className="font-heading font-black text-4xl sm:text-5xl text-brand-text text-center mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
          custom={1}
        >
          Who I Am
        </motion.h2>

        <div ref={sectionRef} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Real photo */}
          <motion.div
            className="flex items-center justify-center"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={slideInLeftVariants}
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">
              {/* Animated border ring */}
              <div
                className="absolute -inset-1 rounded-3xl"
                style={{
                  background: 'conic-gradient(from 0deg, #7c3aed, #06b6d4, #7c3aed)',
                  borderRadius: '28px',
                  animation: 'spin 8s linear infinite',
                  padding: '2px',
                }}
              />

              {/* Photo container */}
              <div
                className="relative w-full h-full overflow-hidden"
                style={{ borderRadius: '26px' }}
              >
                <img
                  src="/avatar.jpg"
                  alt="Muhammed Najath"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                {/* Subtle gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,10,15,0.6) 0%, transparent 100%)',
                  }}
                />
                {/* Name tag at bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-heading font-bold text-white text-sm drop-shadow-lg">Muhammed Najath</p>
                  <p className="font-mono text-brand-cyan text-xs drop-shadow-lg">Fullstack Developer</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 bg-brand-surface border border-brand-border rounded-xl px-3 py-1.5 text-xs font-mono text-brand-cyan shadow-lg z-10"
              >
                React ⚛️
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -left-3 bg-brand-surface border border-brand-border rounded-xl px-3 py-1.5 text-xs font-mono text-brand-purple shadow-lg z-10"
              >
                .NET 🔷
              </motion.div>

              {/* Glow behind */}
              <div
                className="absolute -inset-4 -z-10 rounded-3xl opacity-20 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
              />
            </div>

            <style>{`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </motion.div>

          {/* Right: Bio + stats */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={slideInRightVariants}
          >
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-brand-text mb-4">
              Crafting digital experiences,{' '}
              <span className="gradient-text">one commit at a time.</span>
            </h3>
            <p className="font-body text-brand-muted leading-relaxed mb-4">
              I'm a self-taught full-stack developer who went from zero to shipping real products in under 6 months. Starting with HTML in June 2025, I powered through CSS, JavaScript, React, TypeScript, and .NET — building 4 production projects along the way.
            </p>
            <p className="font-body text-brand-muted leading-relaxed mb-10">
              I care deeply about the details — the micro-animations, the clean API responses, the UI that just <em className="text-brand-text not-italic font-medium">feels right</em>. Currently looking for opportunities where I can build, learn fast, and contribute meaningfully.
            </p>

            {/* Stat cards */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerContainerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUpVariants}
                  custom={i}
                  className="p-4 rounded-xl border border-brand-border bg-brand-surface/50 hover:border-brand-purple/50 transition-all duration-300 group"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-heading font-black text-xl text-brand-text group-hover:gradient-text transition-all">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-brand-dim mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
