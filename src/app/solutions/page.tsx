import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading, IconBadge } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { solutions, additionalCapabilities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Engineered environmental control solutions: industrial humidification, resort & hospitality fogging, outdoor cooling, farm climate control, agricultural misting, dust suppression, HVAC and industrial automation.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Engineered Environmental Control, End to End"
        intro="We do not offer one-size-fits-all systems. Every solution is developed through rigorous engineering — analyzing psychrometric conditions, airflow behavior, heat load, spatial geometry and process tolerances."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 80}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-line/70 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lift"
                >
                  <div className="relative aspect-[2/1] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/90 text-secondary shadow-sm ring-1 ring-black/5 backdrop-blur">
                      <s.icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h2 className="font-display text-xl font-bold text-primary group-hover:text-secondary">
                      {s.title}
                    </h2>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{s.intro}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.benefits.slice(0, 3).map((b) => (
                        <span
                          key={b}
                          className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                      Explore solution
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Additional capabilities */}
      <section className="bg-surface/60 py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Extended Capability"
              title="Beyond the Core Verticals"
              intro="Specialized engineering for cooling utilities and centralized air filtration across heavy industry."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {additionalCapabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="h-full rounded-xl border border-line/70 bg-white p-8 shadow-card">
                  <IconBadge icon={c.icon} />
                  <h3 className="mt-5 font-display text-lg font-bold text-primary">{c.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-ink-soft">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
