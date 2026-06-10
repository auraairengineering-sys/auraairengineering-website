import Link from "next/link";

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const wordColor = variant === "light" ? "text-surface" : "text-primary";
  const subColor = variant === "light" ? "text-surface/70" : "text-ink-soft";
  const ring = variant === "light" ? "#F5EFDF" : "#122F4D";
  const accent = "#B19F7C";

  return (
    <Link
      href="/"
      aria-label="Aura Air Engineering & Misting Systems — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 48 48"
        fill="none"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="22" stroke={ring} strokeWidth="2" />
        <circle cx="24" cy="24" r="16.5" stroke={accent} strokeWidth="1.25" opacity="0.8" />
        {/* Stylized air-flow / mist arcs */}
        <path
          d="M14 19c4-3 8-3 12 0s8 3 12 0"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14 24c4-3 8-3 12 0s8 3 12 0"
          stroke={ring}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14 29c4-3 8-3 12 0s8 3 12 0"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[15px] font-extrabold tracking-tight ${wordColor}`}>
          AURA AIR
        </span>
        <span className={`text-[9px] font-medium uppercase tracking-[0.18em] ${subColor}`}>
          Engineering &amp; Misting
        </span>
      </span>
    </Link>
  );
}
