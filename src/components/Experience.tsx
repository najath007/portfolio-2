import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants } from '../hooks/useScrollAnimation';
import { Briefcase, BookOpen, Database, Code, Sparkles } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    role: 'Full Stack Developer',
    period: 'Jan 2026 – Present',
    type: 'Work',
    color: '#7c3aed',
    description:
      'Currently architecting and developing a production Enterprise Resource Planning (ERP) project. Building performant, responsive React frontends paired with robust .NET/C# backends and SQL Server database schemas. Designing custom reusable component libraries and optimized REST APIs.',
    tags: ['ERP Systems', 'React', 'TypeScript', '.NET Web API', 'C#', 'SQL Server'],
  },
  {
    icon: Database,
    role: 'The Backend & SQL Deep Dive',
    period: 'Nov 2025 – Dec 2025',
    type: 'Learning',
    color: '#f59e0b',
    description:
      'Stepped into server-side engineering by building secure APIs in C# and .NET. Developed strong competency in relational database design, writing complex SQL queries, and utilizing Entity Framework Core to bridge data objects.',
    tags: ['.NET Core', 'C#', 'EF Core', 'SQL Server', 'REST APIs', 'Backend Architecture'],
  },
  {
    icon: Code,
    role: 'Modern React & TypeScript',
    period: 'Sep 2025 – Oct 2025',
    type: 'Learning',
    color: '#06b6d4',
    description:
      'Transitioned to scalable frontend frameworks. Engineered interactive, responsive user interfaces using React and designed clean client-side state models, adopting strict TypeScript static types to eliminate production runtime exceptions.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'State Management'],
  },
  {
    icon: BookOpen,
    role: 'JavaScript Core Logic',
    period: 'Jul 2025 – Aug 2025',
    type: 'Learning',
    color: '#ec4899',
    description:
      'Formed solid programming foundations by studying core JavaScript logic. Deepened knowledge in asynchronous operations (Promises, async/await), working with JSON, invoking external APIs, and manipulating the browser DOM.',
    tags: ['JavaScript ES6', 'Async Programming', 'DOM Manipulation', 'JSON APIs'],
  },
  {
    icon: Sparkles,
    role: 'HTML & CSS Foundations',
    period: 'Jun 2025',
    type: 'Learning',
    color: '#10b981',
    description:
      'The initial spark that ignited my programming journey. Learned layout engineering using Flexbox and CSS Grid, designing responsive styling systems, mastering fluid typography, and translating visual designs into structural HTML code.',
    tags: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Responsive Layouts'],
  },
];

export default function Experience() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.p
          className="font-mono text-brand-purple text-sm tracking-widest uppercase mb-3 text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          // experience.log
        </motion.p>
        <motion.h2
          className="font-heading font-black text-4xl sm:text-5xl text-brand-text text-center mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
          custom={1}
        >
          My Journey
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px overflow-hidden z-0">
            <motion.div
              className="w-full timeline-line"
              initial={{ height: '0%' }}
              animate={isInView ? { height: '100%' } : { height: '0%' }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
              style={{ originY: 0 }}
            />
          </div>

          {/* Entries */}
          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.role}
                  className="relative pl-20"
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={fadeUpVariants}
                  custom={i * 2 + 2}
                >
                  {/* Icon dot */}
                  <div
                    className="absolute left-0 top-0 w-12 h-12 rounded-xl flex items-center justify-center border-2 z-10 transition-all duration-300"
                    style={{
                      borderColor: exp.color,
                      backgroundColor: 'var(--bg)',
                      color: exp.color,
                      boxShadow: `0 0 15px ${exp.color}25`,
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Content card */}
                  <div className="p-6 rounded-2xl border border-brand-border bg-brand-surface/40 hover:border-brand-purple/50 transition-all duration-300 group">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-heading font-bold text-xl text-brand-text group-hover:gradient-text transition-all">
                          {exp.role}
                        </h3>
                        <span
                          className="font-mono text-xs px-2 py-0.5 rounded-full mt-1 inline-block"
                          style={{ color: exp.color, backgroundColor: `${exp.color}18` }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <span className="font-mono text-sm text-brand-muted">{exp.period}</span>
                    </div>

                    <p className="font-body text-brand-muted text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-brand-border text-brand-dim"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
