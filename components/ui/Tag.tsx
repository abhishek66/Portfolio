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
        "skill-tag bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.45)]",
        "cursor-default",
        "transition-all duration-200",
        "hover:bg-[rgba(16,185,129,0.22)] hover:border-[rgba(16,185,129,0.70)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
