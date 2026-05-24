import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10">
        {/* 404 number */}
        <motion.div
          className="font-heading font-black gradient-text select-none"
          style={{ fontSize: 'clamp(6rem, 20vw, 14rem)', lineHeight: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        >
          404
        </motion.div>

        <motion.h1
          className="font-heading font-bold text-2xl sm:text-3xl text-brand-text mt-4 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Looks like you've wandered off the map.
        </motion.h1>

        <motion.p
          className="font-body text-brand-muted text-base mb-10 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          The page you're looking for doesn't exist — or maybe it was moved, renamed, or deleted.
        </motion.p>

        <motion.button
          id="not-found-home"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-body font-semibold text-white bg-brand-purple hover:bg-brand-purple-light transition-all duration-200 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <Home size={18} />
          Go Home
        </motion.button>
      </div>

      {/* Floating code snippets */}
      {['<Error />', 'throw 404', '!found'].map((text, i) => (
        <motion.span
          key={text}
          className="absolute font-mono text-brand-dim text-sm pointer-events-none select-none"
          style={{
            top: `${20 + i * 25}%`,
            left: i % 2 === 0 ? `${8 + i * 5}%` : undefined,
            right: i % 2 !== 0 ? `${8 + i * 4}%` : undefined,
          }}
          animate={{ opacity: [0.2, 0.5, 0.2], y: [0, -10, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
        >
          {text}
        </motion.span>
      ))}
    </div>
  );
}
