import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      // Dot snaps instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      // Ring follows with a faster, snappier lag (0.24 instead of 0.12)
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.24;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.24;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onMouseEnterInteractive = () => {
      const ringCircle = ringRef.current?.querySelector('.ring-circle');
      ringCircle?.classList.add('scale-150', 'border-brand-cyan');
      dotRef.current?.classList.add('opacity-0');
    };

    const onMouseLeaveInteractive = () => {
      const ringCircle = ringRef.current?.querySelector('.ring-circle');
      ringCircle?.classList.remove('scale-150', 'border-brand-cyan');
      dotRef.current?.classList.remove('opacity-0');
    };

    const addListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(animate);
    addListeners();

    // Re-scan interactives on DOM changes
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Ring Wrapper (handles positioning without CSS transform transitions) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ willChange: 'transform' }}
      >
        {/* Ring Circle (handles hover styling transition) */}
        <div
          className="ring-circle w-9 h-9 rounded-full border-2 border-brand-purple transition-all duration-300 ease-out"
        />
      </div>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-purple pointer-events-none z-[9999] transition-opacity duration-200"
        style={{ willChange: 'transform', boxShadow: '0 0 6px 2px rgba(124,58,237,0.7)' }}
      />
    </>
  );
}
