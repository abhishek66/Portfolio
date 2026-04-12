import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "ghost";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

/**
 * Production-grade button with shine sweep animation.
 * Renders as a Next.js Link when `href` is provided, otherwise a <button>.
 * Variants: "primary" (gold gradient) | "ghost" (bordered transparent).
 */
export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
