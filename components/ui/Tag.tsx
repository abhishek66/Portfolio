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
        "skill-tag bg-[rgba(245,197,24,0.15)] border border-[rgba(245,197,24,0.50)]",
        "text-white",
        "cursor-default",
        "transition-all duration-200",
        "hover:bg-[rgba(245,197,24,0.22)] hover:border-[rgba(245,197,24,0.70)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
