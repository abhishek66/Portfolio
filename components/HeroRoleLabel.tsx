export function HeroRoleLabel() {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {["BUSINESS ANALYST & CONSULTANT", "PRODUCT MANAGER"].map((role) => (
        <div
          key={role}
          className="hero-label inline-flex items-center gap-2.5 rounded-full border border-[var(--border-subtle)] bg-[rgba(201,168,76,0.06)] px-4 py-2"
        >
          <span
            className="h-2 w-2 rounded-full bg-gold flex-shrink-0"
            style={{ animation: "gold-pulse 2s ease-in-out infinite" }}
          />
          <span className="font-data text-xs tracking-widest uppercase text-[var(--text-muted)]">
            {role}
          </span>
        </div>
      ))}
    </div>
  );
}
