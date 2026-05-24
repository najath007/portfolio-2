import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUpVariants, useScrollAnimation } from '../hooks/useScrollAnimation';
import { GitHubIcon } from '../components/GitHubIcon';

const techBadges = ['React', 'Node.js', 'Vercel'];

const sections = [
  {
    id: 'problem',
    label: '// the.problem',
    title: 'The Problem',
    color: '#7c3aed',
    content:
      'A local bike spare parts shop needed a modern online presence. They had no way to showcase their inventory, no way for customers to browse products by category, and no admin control over the store. They were losing potential customers to competitors with online storefronts.',
  },
  {
    id: 'approach',
    label: '// my.approach',
    title: 'My Approach',
    color: '#06b6d4',
    content:
      'Built a full-stack e-commerce platform from scratch. The React frontend delivers a fast, responsive UI with dynamic product filtering by category, price, and availability. I added both dark and light modes for accessibility. On the backend, a Node.js + Express server handles product management, a secure cart system, and a complete admin panel — giving the shop owner full control over their inventory.',
  },
  {
    id: 'tech',
    label: '// tech.decisions',
    title: 'Tech Decisions',
    color: '#7c3aed',
    content: null,
  },
  {
    id: 'learned',
    label: '// what.i.learned',
    title: 'What I Learned',
    color: '#06b6d4',
    content:
      '[Placeholder — I will fill this in with real reflections once the project reaches a stable v1. Topics will cover: building admin dashboards for non-technical users, cart state management, and deploying a full Node.js backend to production.]',
  },
];

function Section({ sec, index }: { sec: typeof sections[0]; index: number }) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="mb-16"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUpVariants}
      custom={index}
    >
      <p className="font-mono text-sm tracking-widest uppercase mb-2" style={{ color: sec.color }}>
        {sec.label}
      </p>
      <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-text mb-5">
        {sec.title}
      </h2>

      {sec.id === 'tech' ? (
        <div className="flex flex-wrap gap-3">
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 rounded-xl text-sm font-mono font-medium text-brand-purple border border-brand-purple/40 bg-brand-purple/10"
            >
              {badge}
            </span>
          ))}
        </div>
      ) : (
        <p className="font-body text-brand-muted leading-relaxed text-base max-w-2xl">
          {sec.content}
        </p>
      )}
    </motion.div>
  );
}

export default function CaseStudy() {
  return (
    <div className="min-h-screen relative">
      {/* Back button */}
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-0">
        <Link
          to="/#projects"
          id="case-study-back"
          className="inline-flex items-center gap-2 text-sm font-body text-brand-muted hover:text-brand-purple transition-colors duration-200 mb-12 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform duration-200"
          />
          Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6">
        {/* Gradient spotlight */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 80%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative z-10 mb-16"
        >
          <span className="font-mono text-xs text-brand-purple tracking-widest uppercase border border-brand-purple/30 px-3 py-1 rounded-full bg-brand-purple/10 mb-6 inline-block">
            Case Study
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-brand-text mb-5 leading-tight">
            KK Spare Parts
            <br />
            <span className="gradient-text">Platform</span>
          </h1>
          <p className="font-body text-brand-muted text-lg max-w-xl">
            A modern full-stack e-commerce platform built for a local bike spare parts shop — product filtering, admin dashboard, and a seamless customer experience.
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mt-8">
            <span className="font-mono text-sm text-brand-dim border border-brand-border px-4 py-2 rounded-xl bg-brand-surface/40">
              📅 2025
            </span>
            <span className="font-mono text-sm text-brand-dim border border-brand-border px-4 py-2 rounded-xl bg-brand-surface/40">
              ⚡ Full Stack
            </span>
            <span className="font-mono text-sm text-brand-dim border border-brand-border px-4 py-2 rounded-xl bg-brand-surface/40">
              🛒 E-Commerce
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="h-px w-full mb-16"
          style={{ background: 'linear-gradient(to right, transparent, #7c3aed, #06b6d4, transparent)' }}
        />

        {/* Sections */}
        {sections.map((sec, i) => (
          <Section key={sec.id} sec={sec} index={i} />
        ))}

        {/* Bottom CTA */}
        <motion.div
          className="flex flex-wrap gap-4 pb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            id="case-study-live"
            href="https://kk-spare.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-body font-semibold text-white bg-brand-purple hover:bg-brand-purple-light transition-all duration-200 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
          >
            <ExternalLink size={16} />
            View Live Site
          </a>
          <a
            id="case-study-github"
            href="https://github.com/najath007/kk-spare"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-body font-semibold text-brand-text border border-brand-border hover:border-brand-purple hover:text-brand-purple transition-all duration-200"
          >
            <GitHubIcon size={16} />
            View GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
}
