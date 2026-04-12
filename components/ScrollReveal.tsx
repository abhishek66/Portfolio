"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Drop this around any content (including Server Component output) to apply
 * a scroll-triggered fade + slide-up entrance animation.
 * Use `delay` (ms) to stagger sibling elements.
 */
export function ScrollReveal({ children, delay = 0, className = "" }: Props) {
  const ref = useScrollReveal<HTMLDivElement>(delay);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
