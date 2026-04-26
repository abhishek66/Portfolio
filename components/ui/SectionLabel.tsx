interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * DM Mono eyebrow label — uppercase, widest tracking, muted text.
 * Used above every section heading.
 * Includes a 1px left gold border for visual anchoring.
 */
export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={[
        "font-data text-base font-bold uppercase tracking-widest",
        "text-[var(--text-primary)]",
        "pl-3 border-l-2 border-l-gold",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  );
}
