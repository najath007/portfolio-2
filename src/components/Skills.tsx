import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants } from '../hooks/useScrollAnimation';

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
  delay?: number;
  isInView: boolean;
}

function SkillBar({ name, percentage, color, delay = 0, isInView }: SkillBarProps) {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="font-body text-sm font-medium text-brand-text">{name}</span>
        <span className="font-mono text-xs text-brand-muted">{percentage}%</span>
      </div>
      <div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

const frontendSkills = [
  { name: 'JavaScript', percentage: 95 },
  { name: 'React', percentage: 90 },
  { name: 'TypeScript', percentage: 85 },
];

const backendSkills = [
  { name: 'C#', percentage: 85 },
  { name: '.NET', percentage: 80 },
  { name: 'SQL / MySQL', percentage: 80 },
];

const specialties = [
  '3D / Motion UI',
  'Responsive Design',
  'REST APIs',
  'Admin Dashboards',
  'Dark Mode Systems',
  'Component Libraries',
  'Git & GitHub',
  'Vite / Webpack',
  'Agile Mindset',
];

const frontendGradient = 'linear-gradient(90deg, #7c3aed, #a855f7)';
const backendGradient = 'linear-gradient(90deg, #06b6d4, #22d3ee)';

export default function Skills() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="skills" className="section-padding relative">
      {/* Subtle section divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #7c3aed, transparent)' }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          className="font-mono text-brand-cyan text-sm tracking-widest uppercase mb-3 text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          // skills.stack
        </motion.p>
        <motion.h2
          className="font-heading font-black text-4xl sm:text-5xl text-brand-text text-center mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
          custom={1}
        >
          What I Work With
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          {/* Frontend */}
          <motion.div
            className="p-8 rounded-2xl border border-brand-border bg-brand-surface/40"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUpVariants}
            custom={2}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-brand-purple" />
              <span className="font-mono text-sm text-brand-purple tracking-wider uppercase">
                Frontend
              </span>
            </div>
            {frontendSkills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                color={frontendGradient}
                delay={0.2 + i * 0.15}
                isInView={isInView}
              />
            ))}
          </motion.div>

          {/* Backend */}
          <motion.div
            className="p-8 rounded-2xl border border-brand-border bg-brand-surface/40"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUpVariants}
            custom={3}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-brand-cyan" />
              <span className="font-mono text-sm text-brand-cyan tracking-wider uppercase">
                Backend
              </span>
            </div>
            {backendSkills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                color={backendGradient}
                delay={0.2 + i * 0.15}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </div>

        {/* Specialties pill cloud */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
          custom={4}
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan" />
            <span className="font-mono text-sm text-brand-muted tracking-wider uppercase">
              Specialties
            </span>
          </div>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {specialties.map((s, i) => (
              <motion.span
                key={s}
                variants={fadeUpVariants}
                custom={i}
                className="px-4 py-2 rounded-full text-sm font-body font-medium text-brand-muted border border-brand-border bg-brand-surface/40 hover:border-brand-purple hover:text-brand-purple transition-all duration-200 hover:shadow-[0_0_12px_rgba(124,58,237,0.3)]"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
