import Image from "next/image";
import { Container, Button } from "./ui";
import { Reveal } from "./Reveal";
import { PageHero } from "./PageHero";
import { CtaSection } from "./CtaSection";
import { type LucideIcon } from "lucide-react";

export function ComingSoon({
  eyebrow,
  title,
  intro,
  icon: Icon,
  points,
  breadcrumbLabel,
  note,
  heroImage,
  showcase,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  icon: LucideIcon;
  points: string[];
  breadcrumbLabel: string;
  note?: string;
  heroImage?: string;
  showcase?: { src: string; caption: string }[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        image={heroImage}
        breadcrumb={[{ label: "Home", href: "/" }, { label: breadcrumbLabel }]}
      />
      {showcase && showcase.length > 0 && (
        <section className="pt-20">
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              {showcase.map((item, i) => (
                <Reveal key={item.src} delay={i * 80}>
                  <figure className="overflow-hidden rounded-2xl border border-line/70 bg-white shadow-card">
                    <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                      <Image
                        src={item.src}
                        alt={item.caption}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="px-6 py-4 text-sm font-medium text-ink">
                      {item.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-line/70 bg-white p-10 text-center shadow-card sm:p-14">
            <Reveal>
              <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary ring-1 ring-secondary/15">
                <Icon className="h-8 w-8" strokeWidth={1.5} />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold text-primary">Coming Soon</h2>
              <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink-soft">{note}</p>
              <ul className="mx-auto mt-8 grid max-w-lg gap-3 text-left">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact#quote" variant="accent" withArrow>
                  Request Information
                </Button>
                <Button href="/industries" variant="ghost" withArrow>
                  Explore Solutions
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
