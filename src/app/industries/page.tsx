import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading, IconBadge } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { solutions } from "@/lib/content";
import { industriesFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Highly specialized environmental control solutions tailored to industrial, commercial and agricultural sectors — from textile and pharma to mining, hospitality, data centers and precision agriculture.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Engineered Environmental Solutions Across Diverse Industries"
        intro="Our systems are not generic installations — they are precision-engineered from a deep technical understanding of process requirements, climatic variables and application-specific performance parameters."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-5 text-center text-base leading-relaxed text-ink-soft">
              <p>
                Humidity, temperature, and airborne particulate control directly influence product
                quality, operational efficiency, equipment longevity, and workforce productivity.
                Whether maintaining fiber flexibility in textile processing, controlling static in
                electronics manufacturing, optimizing crop yield, or ensuring thermal comfort in
                high-temperature outdoor environments — each application demands a carefully
                calibrated solution.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Per-vertical industry lists */}
      <section className="bg-surface/60 py-20">
        <Container>
          <div className="space-y-10">
            {solutions
              .filter((s) => s.industries.length > 4)
              .map((s, i) => (
                <Reveal key={s.slug} delay={(i % 2) * 60}>
                  <div className="rounded-2xl border border-line/70 bg-white p-8 shadow-card">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                      <div className="lg:w-72 lg:shrink-0">
                        <IconBadge icon={s.icon} />
                        <h2 className="mt-4 font-display text-xl font-bold text-primary">
                          {s.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.intro}</p>
                        <Link
                          href={`/solutions/${s.slug}`}
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary"
                        >
                          View solution
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                      <ul className="grid flex-1 gap-2.5 sm:grid-cols-2">
                        {s.industries.map((ind) => (
                          <li
                            key={ind}
                            className="flex items-start gap-2.5 text-sm text-ink"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {ind}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
          </div>
        </Container>
      </section>

      {/* Positioning band */}
      <section className="relative overflow-hidden bg-primary py-20 text-surface">
        <div className="grid-texture absolute inset-0 opacity-60" aria-hidden />
        <Container className="relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeading
              light
              align="center"
              eyebrow="Performance-Critical Industries"
              title="Global-Standard Solutions Where Environment Is a Decisive Factor"
              intro="From high-precision manufacturing facilities and large-scale infrastructure to premium hospitality environments — we deliver scalable, energy-efficient systems aligned with international performance expectations."
            />
          </Reveal>
        </Container>
      </section>

      <FaqSection
        items={industriesFaqs}
        eyebrow="Industries & Applications — FAQ"
        title="Technical Questions, Answered"
      />

      <CtaSection />
    </>
  );
}
