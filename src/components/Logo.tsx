import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const wordColor = variant === "light" ? "text-surface" : "text-primary";
  const subColor = variant === "light" ? "text-surface/65" : "text-ink-soft";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <Image
        src="/logo.jpg"
        alt={site.name}
        width={48}
        height={48}
        priority
        className="h-11 w-11 rounded-md shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[15px] font-extrabold tracking-tight ${wordColor}`}>
          Aura Air Engineering
        </span>
        <span className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] ${subColor}`}>
          &amp; Misting Systems
        </span>
      </span>
    </Link>
  );
}
