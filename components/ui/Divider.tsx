interface DividerProps {
  className?: string;
}

/**
 * Gradient gold section separator — replaces all <hr> and border-t uses.
 * Fades from transparent → gold → transparent across full width.
 */
export function Divider({ className = "" }: DividerProps) {
  return (
    <div
      className={["section-divider", className].filter(Boolean).join(" ")}
      role="separator"
      aria-hidden="true"
    />
  );
}
