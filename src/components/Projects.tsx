import { motion } from 'framer-motion';
import { ExternalLink, Code2, Lock, ArrowRight } from 'lucide-react';
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { GitHubIcon } from './GitHubIcon';

interface Project {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  caseStudy?: string;
  featured?: boolean;
  comingSoon?: boolean;
}

const projects: Project[] = [
  {
    name: 'KK Spare Parts Platform',
    description:
      'Full-stack e-commerce platform for a local bike spare parts shop. Features dynamic product filtering, a secure cart system, dark/light mode, and a complete admin dashboard.',
    tags: ['React', 'Node.js', 'Express', 'Vercel'],
    github: 'https://github.com/najath007/kk-spare',
    live: 'https://kk-spare.vercel.app/',
    caseStudy: '/case-study/kk-spare',
    featured: true,
  },
  {
    name: 'CleanCuts Premium Apparel',
    description:
      'Premium clothing e-commerce site with MongoDB backend, user authentication, cart management, and a polished storefront experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/najath007/CLEAN-CUTS-og',
    live: 'https://clean-cuts-og-one.vercel.app/',
  },
  {
    name: 'Modern HRMS',
    description:
      'Human Resource Management System with employee records, attendance tracking, leave management, and a responsive dashboard UI.',
    tags: ['React', 'Vite', 'TypeScript'],
    github: 'https://github.com/najath007/HRMS',
  },
  {
    name: 'Cloth Mart',
    description:
      'E-commerce storefront for clothing with category browsing, product cards, and a clean shopping cart experience.',
    tags: ['React'],
    github: 'https://github.com/najath007/Cloth-Mart',
  },
  {
    name: 'SaaS Dashboard',
    description:
      'A next-level SaaS analytics dashboard — currently in design and development. Coming soon.',
    tags: ['React', 'TypeScript', '.NET', 'AI'],
    comingSoon: true,
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  if (project.comingSoon) {
    return (
      <motion.div
        variants={fadeUpVariants}
        custom={index}
        className="relative p-6 rounded-2xl border border-dashed border-brand-border bg-brand-surface/20 flex flex-col items-center justify-center text-center min-h-[280px] overflow-hidden"
      >
        <div className="absolute inset-0 backdrop-blur-[1px]" />
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-brand-border flex items-center justify-center mx-auto mb-4">
            <Lock size={20} className="text-brand-dim" />
          </div>
          <h3 className="font-heading font-bold text-xl text-brand-text mb-2">{project.name}</h3>
          <p className="font-body text-sm text-brand-muted mb-4">{project.description}</p>
          <span className="inline-block px-3 py-1 rounded-full bg-brand-purple/20 text-brand-purple text-xs font-mono">
            Coming Soon
          </span>
        </div>
      </motion.div>
    );
  }

  const hasLive = !!project.live;
  const hasGithub = !!project.github;

  return (
    <motion.div
      variants={fadeUpVariants}
      custom={index}
      className={`group relative p-6 rounded-2xl border transition-all duration-300 flex flex-col ${
        project.featured
          ? 'border-brand-purple/40 bg-brand-surface/60 hover:border-brand-purple'
          : 'border-brand-border bg-brand-surface/40 hover:border-brand-purple/50'
      }`}
      style={{ willChange: 'transform' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {project.featured && (
        <span className="absolute top-4 right-4 px-2.5 py-0.5 text-xs font-mono text-brand-purple bg-brand-purple/15 rounded-full border border-brand-purple/30">
          Featured
        </span>
      )}

      <div className="flex-1">
        <div className="mb-4">
          <Code2 size={22} className="text-brand-purple mb-3" />
          <h3 className="font-heading font-bold text-xl text-brand-text group-hover:gradient-text transition-all mb-2">
            {project.name}
          </h3>
          <p className="font-body text-sm text-brand-muted leading-relaxed">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono rounded-lg bg-brand-border text-brand-dim"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 flex-wrap">
        {hasLive ? (
          <>
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-body text-brand-muted border border-brand-border hover:border-brand-purple hover:text-brand-purple transition-all duration-200"
                aria-label={`GitHub repo for ${project.name}`}
              >
                <GitHubIcon size={15} />
                GitHub
              </a>
            )}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-body text-white bg-brand-purple hover:bg-brand-purple-light transition-all duration-200"
              aria-label={`Live site for ${project.name}`}
            >
              <ExternalLink size={15} />
              Live Site
            </a>
          </>
        ) : (
          hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-body text-brand-muted border border-brand-border hover:border-brand-purple hover:text-brand-purple transition-all duration-200"
              aria-label={`View code for ${project.name}`}
            >
              <GitHubIcon size={15} />
              View Code
            </a>
          )
        )}

        {project.caseStudy && (
          <Link
            to={project.caseStudy}
            className="flex items-center gap-1.5 text-sm font-body text-brand-cyan hover:text-brand-cyan-light transition-colors duration-200 ml-auto"
          >
            Read case study
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          className="font-mono text-brand-cyan text-sm tracking-widest uppercase mb-3 text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          // projects.showcase
        </motion.p>
        <motion.h2
          className="font-heading font-black text-4xl sm:text-5xl text-brand-text text-center mb-4"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
          custom={1}
        >
          Things I've Built
        </motion.h2>
        <motion.p
          className="font-body text-brand-muted text-center mb-14 max-w-xl mx-auto"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
          custom={2}
        >
          4 real-world projects shipped in under a year. Every one of them started as a problem worth solving.
        </motion.p>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
