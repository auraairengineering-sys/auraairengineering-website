import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container, SectionHeading, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { type Vertical, type VerticalSection, type NumberedItem } from "@/lib/verticals/types";

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((p, i) => (
        <p key={i} className="mt-4 text-base leading-relaxed text-ink-soft first:mt-0">
          {p}
        </p>
      ))}
    </>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
      {items.map((b, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
          {b}
        </li>
      ))}
    </ul>
  );
}

function NarrativeSection({ section, index }: { section: VerticalSection; index: number }) {
  return (
    <Reveal>
      <div className={index === 0 ? "" : "mt-14"}>
        <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
          {section.heading}
        </h2>
        <div className="mt-4">
          <Prose paragraphs={section.body} />
          {section.bullets && <BulletList items={section.bullets} />}
        </div>
      </div>
    </Reveal>
  );
}

function NumberedGrid({ items }: { items: NumberedItem[] }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={i} delay={(i % 3) * 70}>
          <div className="flex h-full flex-col rounded-xl border border-line/70 bg-white p-6 shadow-card">
            <span className="font-display text-lg font-extrabold text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-display text-base font-bold text-primary">{item.title}</h3>
            <div className="mt-2 text-sm leading-relaxed text-ink-soft">
              {item.body.map((p, j) => (
                <p key={j} className="mt-2 first:mt-0">
                  {p}
                </p>
              ))}
            </div>
            {item.bullets && (
              <ul className="mt-3 space-y-1.5">
                {item.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-ink-soft">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function VerticalPage({ vertical }: { vertical: Vertical }) {
  const v = vertical;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: v.title,
    description: v.heroSubhead,
    provider: { "@type": "Organization", name: "Aura Air Engineering & Misting Systems" },
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHero
        eyebrow="Industries & Solutions"
        title={v.title}
        intro={v.heroSubhead}
        image={v.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: v.menuLabel },
        ]}
      />

      {/* Intro + narrative sections */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="text-lg leading-relaxed text-ink-soft">
                {v.intro.map((p, i) => (
                  <p key={i} className="mt-5 first:mt-0">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
            <div className="mt-14">
              {v.sections.map((s, i) => (
                <NarrativeSection key={i} section={s} index={i} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Engineering benefits */}
      {v.benefits && v.benefits.length > 0 && (
        <section className="bg-surface/60 py-20">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Engineering Benefits"
                title={`Why ${v.menuLabel} by Aura Air`}
                intro={v.benefitsIntro?.[0]}
              />
            </Reveal>
            <NumberedGrid items={v.benefits} />
          </Container>
        </section>
      )}

      {/* Applications */}
      {v.applications && v.applications.length > 0 && (
        <section className="py-20">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Applications"
                title="Where It's Applied"
                intro={v.applicationsIntro?.[0]}
              />
            </Reveal>
            <NumberedGrid items={v.applications} />
          </Container>
        </section>
      )}

      {/* Child landing pages */}
      {v.children && v.children.length > 0 && (
        <section className="bg-surface/60 py-20">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Explore Further"
                title="Industry-Specific Solutions"
                intro="Dedicated engineering guidance for the sectors we serve most."
              />
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {v.children.map((c, i) => (
                <Reveal key={c.slug} delay={(i % 3) * 60}>
                  <Link
                    href={`/industries/${v.slug}/${c.slug}`}
                    className="group flex h-full items-center justify-between gap-3 rounded-xl border border-line/70 bg-white px-5 py-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-lift"
                  >
                    <span className="text-sm font-semibold text-primary group-hover:text-secondary">
                      {c.title}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-secondary transition-transform group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Why choose */}
      {v.whyChoose && v.whyChoose.length > 0 && (
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-4xl">
              <Reveal>
                <Eyebrow>Why Aura Air Engineering</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-bold text-primary sm:text-3xl">
                  Engineering Precision, Delivered End to End
                </h2>
                <div className="mt-5">
                  <Prose paragraphs={v.whyChoose} />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      )}

      <CtaSection />
      <FaqSection items={v.faqs} title={`${v.menuLabel} — Frequently Asked Questions`} />
    </>
  );
}
