import { useEffect, useRef, useState } from 'react';

/**
 * Reveal — fades/slides content in once when it enters the viewport.
 * Replaces framer-motion's whileInView with ~40 lines instead of a
 * 30kB dependency. Respects prefers-reduced-motion by rendering
 * immediately without transform.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(16px)',
        transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
