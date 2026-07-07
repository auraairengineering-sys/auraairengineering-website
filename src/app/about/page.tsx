import type { Metadata } from "next";
import { Target, Globe2 } from "lucide-react";
import { Container, SectionHeading, Eyebrow, IconBadge } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactForm } from "@/components/ContactForm";
import { aboutFaqs } from "@/lib/faqs";
import { regions } from "@/lib/content";
import { aboutContent } from "@/lib/pages/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Aura Air Engineering & Misting Systems engineers intelligent microclimate solutions through simulation, automation and precision misting — at the convergence of thermodynamics, fluid mechanics and digital control engineering.",
  alternates: { canonical: "/about" },
};

// Long-form sections rendered inline; vision/mission and global capability get
// their own dedicated treatments below, so they're excluded from the article body.
const articleSections = aboutContent.sections.filter(
  (s) => !/vision and mission|global engineering capability/i.test(s.heading),
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Aura Air"
        title="Engineering Intelligent Microclimate Solutions"
        intro={aboutContent.subhead}
        image="/aura-web-pic101.png"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Intro narrative + vision/mission */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <Reveal>
              <div className="space-y-5 text-base leading-relaxed text-ink-soft">
                {aboutContent.intro.slice(0, 4).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-line/70 bg-surface/60 p-8">
                <Eyebrow>Vision &amp; Mission</Eyebrow>
                <div className="mt-5 flex gap-4">
                  <IconBadge icon={Target} />
                  <div>
                    <h3 className="font-display font-bold text-primary">Our Mission</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      Systematic delivery of advanced, reliable, energy-efficient solutions that
                      enhance industrial productivity and environmental quality through rigorous
                      design, precision manufacturing and intelligent control.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <IconBadge icon={Globe2} />
                  <div>
                    <h3 className="font-display font-bold text-primary">Our Vision</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      To establish globally recognized benchmarks in engineering innovation,
                      operational performance and sustainable system design for the next generation
                      of intelligent environmental control.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Long-form engineering narrative */}
      <section className="bg-surface/60 py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How We Engineer"
              title="A Multidisciplinary Engineering Framework"
              intro="Every deployment is built on first-principles engineering — thermodynamics, fluid mechanics, environmental modelling and intelligent automation, working as one system."
            />
          </Reveal>
          <div className="mx-auto mt-12 max-w-4xl">
            {articleSections.map((s, i) => (
              <Reveal key={i}>
                <div className={i === 0 ? "" : "mt-12"}>
                  <h2 className="font-display text-xl font-bold text-primary sm:text-2xl">
                    {s.heading}
                  </h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                  {s.bullets && (
                    <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {s.bullets.map((b, k) => (
                        <li key={k} className="flex items-start gap-2.5 text-sm text-ink">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Global capability */}
      <section className="relative overflow-hidden bg-primary py-20 text-surface">
        <div className="grid-texture absolute inset-0 opacity-60" aria-hidden />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                light
                eyebrow="Global Engineering Capability"
                title="Consistent Execution Across Climates & Regulations"
                intro="Project execution spans six continents, with engineering methodologies adapted to region-specific environmental variables, infrastructure constraints and industrial demands."
              />
            </Reveal>
            <Reveal delay={120}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {regions.map((r) => (
                  <li
                    key={r}
                    className="rounded-lg border border-surface/15 bg-white/5 px-4 py-3 text-sm font-medium text-surface/90"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Start a conversation form */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Start a Conversation"
                title="Discuss Your Environmental Control Requirements"
                intro="Engage with our engineering team for solution evaluation and technical clarity. Our specialists will review your input and provide technically sound guidance aligned with your objectives."
              />
              <p className="mt-6 text-sm text-ink-soft">
                No obligation. Confidential consultation. Our engineering team will respond within 24
                hours with detailed technical guidance.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ContactForm variant="expert" />
            </Reveal>
          </div>
        </Container>
      </section>

      <FaqSection items={aboutFaqs} eyebrow="About — FAQ" title="What Clients Ask Us First" />

      <CtaSection />
    </>
  );
}
