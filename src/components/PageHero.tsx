import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Container, Eyebrow } from "./ui";

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
  image,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumb?: { label: string; href?: string }[];
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-surface">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover object-center opacity-25"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70"
            aria-hidden
          />
        </>
      )}
      <div className="grid-texture absolute inset-0 opacity-80" aria-hidden />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-16 sm:py-20">
        {breadcrumb && (
          <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-surface/60">
            {breadcrumb.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3" />}
                {c.href ? (
                  <Link href={c.href} className="hover:text-accent">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-surface/80">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.1] sm:text-5xl">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-surface/80">{intro}</p>}
      </Container>
    </section>
  );
}
