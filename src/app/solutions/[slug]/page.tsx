import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { Container, SectionHeading, Button, IconBadge, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { solutions, getSolution } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.intro,
    alternates: { canonical: `/solutions/${s.slug}` },
    openGraph: { title: `${s.title} | ${site.shortName}`, description: s.intro },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();

  const related = solutions.filter((x) => x.slug !== s.slug).slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.intro,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHero
        eyebrow="Solution"
        title={s.title}
        intro={s.intro}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: s.short },
        ]}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
            <Reveal>
              <Eyebrow>Engineering Overview</Eyebrow>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">{s.overview}</p>

              <h2 className="mt-10 font-display text-xl font-bold text-primary">Key Benefits</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {s.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 rounded-lg border border-line/60 bg-white p-4 text-sm text-ink"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Sidebar */}
            <Reveal delay={120}>
              <div className="rounded-2xl border border-line/70 bg-surface/60 p-8">
                <IconBadge icon={s.icon} />
                <h3 className="mt-5 font-display text-lg font-bold text-primary">
                  Request a tailored system
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Share your area size, application and environmental conditions — our team responds
                  within 24 hours with technically sound guidance.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button href="/contact#quote" variant="accent" withArrow>
                    Get a Quote
                  </Button>
                  <Button href="/contact#expert" variant="ghost" withArrow>
                    Talk to an Expert
                  </Button>
                </div>
                <div className="mt-6 border-t border-line/60 pt-5 text-sm text-ink-soft">
                  <p className="font-medium text-ink">Call our engineers</p>
                  <a href={`tel:${site.phones.usaHref}`} className="mt-1 block hover:text-secondary">
                    {site.phones.usa} (USA)
                  </a>
                  <a href={`tel:${site.phones.indiaHref}`} className="block hover:text-secondary">
                    {site.phones.india} (India)
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Applications */}
      <section className="bg-surface/60 py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Where It's Applied"
              title="Industries & Applications"
              intro="Each deployment is engineered around the specific process sensitivities and environmental variability of the application."
            />
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {s.industries.map((ind, i) => (
              <Reveal key={ind} delay={(i % 6) * 50}>
                <div className="flex items-center gap-3 rounded-lg border border-line/60 bg-white px-4 py-3.5 text-sm text-ink shadow-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {ind}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="py-20">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold text-primary">Related Solutions</h2>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary"
            >
              <ArrowLeft className="h-4 w-4" /> All solutions
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/solutions/${r.slug}`}
                className="group rounded-xl border border-line/70 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <IconBadge icon={r.icon} />
                <h3 className="mt-4 font-display font-bold text-primary group-hover:text-secondary">
                  {r.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
