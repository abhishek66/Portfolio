interface TagProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Skill / method pill tag.
 * DM Mono 12px, gold-tinted background, hovers to full gold border + text.
 */
export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={[
        "inline-flex items-center",
        "rounded-full",
        "px-4 py-1.5",
        "font-data text-xs font-normal",
        "bg-[rgba(201,168,76,0.06)] border border-[var(--border-subtle)]",
        "text-[var(--text-secondary)]",
        "cursor-default",
        "transition-all duration-200",
        "hover:bg-[rgba(201,168,76,0.12)] hover:border-[var(--border-strong)] hover:text-gold",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
