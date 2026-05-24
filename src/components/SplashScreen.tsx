import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  isVisible: boolean;
}

export default function SplashScreen({ isVisible }: SplashScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-brand-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-64 h-64 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
              }}
            />
          </div>

          {/* MN initials */}
          <motion.div
            className="relative flex flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
            }}
          >
            <motion.div
              className="text-7xl font-heading font-black gradient-text select-none"
              animate={{
                textShadow: [
                  '0 0 20px rgba(124,58,237,0)',
                  '0 0 40px rgba(124,58,237,0.8)',
                  '0 0 20px rgba(124,58,237,0)',
                ],
              }}
              transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
            >
              MN
            </motion.div>

            {/* Loading bar */}
            <div className="w-32 h-0.5 bg-brand-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-purple to-brand-cyan"
                initial={{ width: '0%' }}
                animate={{ width: '100%', transition: { duration: 1.2, ease: 'easeInOut' } }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
