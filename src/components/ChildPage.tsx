import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { type Vertical, type ChildPage as ChildPageData } from "@/lib/verticals/types";

export function ChildPage({ vertical, child }: { vertical: Vertical; child: ChildPageData }) {
  return (
    <>
      <PageHero
        eyebrow={vertical.menuLabel}
        title={child.title}
        intro={child.heroSubhead}
        image={vertical.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: vertical.menuLabel, href: `/industries/${vertical.slug}` },
          { label: child.title },
        ]}
      />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="text-lg leading-relaxed text-ink-soft">
                {child.intro.map((p, i) => (
                  <p key={i} className="mt-5 first:mt-0">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            {child.sections && child.sections.length > 0 && (
              <div className="mt-14">
                {child.sections.map((s, i) => (
                  <Reveal key={i}>
                    <div className={i === 0 ? "" : "mt-14"}>
                      <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                        {s.heading}
                      </h2>
                      <div className="mt-4">
                        {s.body.map((p, j) => (
                          <p key={j} className="mt-4 text-base leading-relaxed text-ink-soft first:mt-0">
                            {p}
                          </p>
                        ))}
                        {s.bullets && (
                          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                            {s.bullets.map((b, k) => (
                              <li key={k} className="flex items-start gap-2.5 text-sm text-ink">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            <Reveal className="mt-14">
              <div className="rounded-2xl border border-line/60 bg-surface/60 p-8">
                <Eyebrow>Part of</Eyebrow>
                <h2 className="mt-3 font-display text-lg font-bold text-primary">
                  {vertical.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{vertical.short}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection />
      {child.faqs && child.faqs.length > 0 && (
        <FaqSection items={child.faqs} title={`${child.title} — FAQ`} />
      )}
    </>
  );
}
