import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Loader2, Check, AlertCircle } from 'lucide-react';
import { GitHubIcon } from './GitHubIcon';
import { useScrollAnimation, fadeUpVariants } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.15 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/najathniju007@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const result = await response.json();

      if (response.ok && result.success === 'true') {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Revert back to idle after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error: any) {
      console.error('Error sending message:', error);
      
      const isFailedToFetch = error.message && error.message.includes('Failed to fetch');
      
      setStatus('error');
      if (isFailedToFetch) {
        setErrorMessage('Ad-blocker or Brave Shield blocked the background email. Redirecting to mail app...');
        
        // Auto fallback to mailto after 2.5 seconds so the message is never lost!
        setTimeout(() => {
          const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
          const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
          );
          window.location.href = `mailto:najathniju007@gmail.com?subject=${subject}&body=${body}`;
          setStatus('idle');
        }, 2500);
      } else {
        setErrorMessage(error.message || 'Failed to send message. Please try again.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border text-brand-text font-body text-sm placeholder:text-brand-dim focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/30 transition-all duration-200';

  return (
    <section id="contact" className="section-padding relative">
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #06b6d4, transparent)' }}
      />

      <div className="max-w-2xl mx-auto" ref={ref}>
        <motion.p
          className="font-mono text-brand-purple text-sm tracking-widest uppercase mb-3 text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          // contact.init()
        </motion.p>
        <motion.h2
          className="font-heading font-black text-4xl sm:text-5xl text-brand-text text-center mb-4"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
          custom={1}
        >
          Let's build something{' '}
          <span className="gradient-text">great.</span>
        </motion.h2>
        <motion.p
          className="font-body text-brand-muted text-center mb-10"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
          custom={2}
        >
          Whether it's a freelance project, a full-time role, or just a conversation — I'm all ears.
        </motion.p>

        {/* Quick contact pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
          custom={3}
        >
          <a
            id="contact-email-pill"
            href="mailto:najathniju007@gmail.com"
            className="flex items-center gap-2.5 px-6 py-3 rounded-xl border border-brand-border text-brand-text font-body text-sm hover:border-brand-purple hover:text-brand-purple transition-all duration-200 group"
          >
            <Mail size={16} className="group-hover:text-brand-purple transition-colors" />
            najathniju007@gmail.com
          </a>
          <a
            id="contact-github-pill"
            href="https://github.com/najath007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 rounded-xl border border-brand-border text-brand-text font-body text-sm hover:border-brand-purple hover:text-brand-purple transition-all duration-200 group"
          >
            <GitHubIcon size={16} className="group-hover:text-brand-purple transition-colors" />
            github.com/najath007
          </a>
        </motion.div>

        {/* Contact form */}
        <motion.form
          id="contact-form"
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl border border-brand-border bg-brand-surface/40"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
          custom={4}
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="contact-name" className="block font-mono text-xs text-brand-muted mb-2">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block font-mono text-xs text-brand-muted mb-2">
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="contact-message" className="block font-mono text-xs text-brand-muted mb-2">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${inputClass} resize-none`}
            />
          </div>

          <motion.button
            id="contact-submit"
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="w-full py-4 rounded-xl font-body font-semibold text-white flex items-center justify-center gap-2 relative overflow-hidden transition-all duration-300"
            style={{
              background:
                status === 'success'
                  ? 'linear-gradient(135deg, #10b981, #059669)'
                  : status === 'error'
                  ? 'linear-gradient(135deg, #ef4444, #dc2626)'
                  : 'linear-gradient(135deg, #7c3aed, #5b21b6)',
              boxShadow:
                status === 'success'
                  ? '0 0 30px rgba(16,185,129,0.4)'
                  : status === 'error'
                  ? '0 0 30px rgba(239,68,68,0.4)'
                  : '0 0 30px rgba(124,58,237,0.4)',
            }}
            whileHover={
              status === 'success' || status === 'submitting'
                ? {}
                : {
                    scale: 1.01,
                    boxShadow:
                      status === 'error'
                        ? '0 0 50px rgba(239,68,68,0.7)'
                        : '0 0 50px rgba(124,58,237,0.7)',
                  }
            }
            whileTap={status === 'success' || status === 'submitting' ? {} : { scale: 0.98 }}
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending Message...
              </>
            ) : status === 'success' ? (
              <>
                <Check size={18} />
                Message Sent!
              </>
            ) : status === 'error' ? (
              <>
                <AlertCircle size={18} />
                Failed to Send. Try Again?
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}

            {/* Shimmer overlay */}
            <span
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
              }}
            />
          </motion.button>

          {/* Status Message Feedbacks */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 rounded-xl border border-brand-green/30 bg-brand-green/10 text-brand-text text-sm font-body leading-relaxed text-left"
            >
              <div className="flex gap-2">
                <span className="text-brand-green font-bold">✓</span>
                <div>
                  <p className="font-semibold text-brand-green mb-1">Message submitted successfully!</p>
                  <p className="text-xs text-brand-muted">
                    <span className="font-semibold text-brand-cyan">Important:</span> If you haven't received it yet, check your email (<span className="text-brand-text font-mono select-all font-semibold">najathniju007@gmail.com</span>) for an activation email from FormSubmit. Once you click "Activate" in that email, all messages will instantly reach your inbox!
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-brand-text text-sm font-body text-left"
            >
              <div className="flex gap-2 items-center">
                <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                <span className="text-red-400 font-semibold">{errorMessage}</span>
              </div>
            </motion.div>
          )}
        </motion.form>
      </div>

      {/* Footer */}
      <motion.div
        className="text-center mt-20 pt-8 border-t border-brand-border"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUpVariants}
        custom={5}
      >
        <p className="font-mono text-xs text-brand-dim">
          Designed & built by{' '}
          <span className="gradient-text font-semibold">Muhammed Najath</span>
          {' '}· {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  );
}
