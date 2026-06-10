import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "accent" | "outline" | "ghost";
  className?: string;
  withArrow?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";
  const variants = {
    primary: "bg-secondary text-white hover:bg-secondary-600 hover:shadow-lift",
    accent: "bg-accent text-white hover:bg-accent-600 hover:shadow-lift",
    outline:
      "border border-surface/40 text-surface hover:border-accent hover:bg-white/5",
    ghost: "text-primary hover:text-secondary",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
      <span className="h-px w-6 bg-accent" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-surface" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-surface/80" : "text-ink-soft"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary ring-1 ring-secondary/15">
      <Icon className="h-6 w-6" strokeWidth={1.75} />
    </span>
  );
}
