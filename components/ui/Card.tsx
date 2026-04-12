interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Suppress the top gold accent line (useful for metric/stat micro-cards) */
  noAccent?: boolean;
  /** Suppress the hover lift + glow */
  noHover?: boolean;
}

/**
 * Surface card shell following the portfolio design spec:
 * - bg-surface background
 * - 1px gold-tinted border (subtle)
 * - 2px gold top-accent line
 * - hover: lifts 4px + border brightens + gold glow shadow
 */
export function Card({
  children,
  className = "",
  noAccent = false,
  noHover = false,
}: CardProps) {
  const base = [
    "bg-[var(--bg-surface)]",
    "border border-[var(--border-subtle)]",
    "rounded-[var(--radius-md)]",
    "shadow-[var(--shadow-card)]",
  ];

  if (!noAccent) {
    base.push("border-t-2 border-t-gold");
  }

  if (!noHover) {
    base.push(
      "transition-all duration-300",
      "hover:bg-[var(--bg-elevated)]",
      "hover:border-[var(--border-strong)]",
      "hover:-translate-y-1",
      "hover:shadow-[var(--shadow-card),var(--shadow-glow)]"
    );
  }

  return (
    <div className={[...base, className].join(" ")}>{children}</div>
  );
}
