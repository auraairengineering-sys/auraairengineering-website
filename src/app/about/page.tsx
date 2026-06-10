import type { Metadata } from "next";
import { Target, Compass, Cog, Microscope, Workflow, Leaf, Users, Globe2 } from "lucide-react";
import { Container, SectionHeading, Eyebrow, IconBadge } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactForm } from "@/components/ContactForm";
import { aboutFaqs } from "@/lib/faqs";
import { regions } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Aura Air Engineering & Misting Systems is a globally oriented engineering organization specializing in climate control, high-pressure misting, air management and intelligent automation — at the convergence of thermodynamics, fluid mechanics and digital control engineering.",
  alternates: { canonical: "/about" },
};

const philosophy = [
  {
    icon: Compass,
    title: "Core Engineering Philosophy",
    body: "Anchored in precision-driven design, computational rigor and adaptive system intelligence. Solutions are established through thermodynamic modeling, fluid dynamic analysis and control system engineering — delivering deterministic performance under variable conditions.",
  },
  {
    icon: Cog,
    title: "Advanced Technology Integration",
    body: "High-pressure fluid systems, environmental control engineering and intelligent automation converge into a cohesive architecture enabling synchronized control of temperature, humidity, particulate concentration and air quality.",
  },
  {
    icon: Workflow,
    title: "Automation, Control & Digital Intelligence",
    body: "Deterministic PLC control logic, intuitive HMI, supervisory SCADA and IIoT data acquisition transform conventional systems into autonomous, self-regulating infrastructures with predictive maintenance and anomaly detection.",
  },
  {
    icon: Microscope,
    title: "Research, Development & Innovation",
    body: "A continuous, data-driven process grounded in experimental validation and computational modeling — refining nozzle geometries, pressure regimes and flow characteristics to maximize evaporative efficiency.",
  },
  {
    icon: Leaf,
    title: "Sustainability & Efficiency",
    body: "Sustainability is a core engineering parameter — reducing energy intensity, optimizing water utilization and enhancing air quality through thermodynamic efficiency modeling and intelligent control.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    body: "Transparent technical communication, detailed requirement analysis and customized system configurations — delivered as collaborative engineering partnerships with continuous optimization.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Aura Air"
        title="Engineering Advanced Microclimate Solutions for a Demanding World"
        intro="A globally oriented engineering organization specializing in advanced climate control, high-pressure misting, air management and intelligent automation systems."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Intro narrative */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <Reveal>
              <div className="space-y-5 text-base leading-relaxed text-ink-soft">
                <p>
                  Aura Air Engineering &amp; Misting Systems operates at the convergence of
                  thermodynamics, fluid mechanics, and digital control engineering, delivering
                  high-performance environmental solutions designed to optimize temperature,
                  humidity, and air quality across diverse industrial and commercial applications.
                </p>
                <p>
                  With over a decade of applied engineering expertise, we design and deploy systems
                  that perform reliably under complex and variable conditions. Our solutions are not
                  merely functional installations — they are engineered ecosystems developed to
                  enhance process stability, protect material integrity, improve human comfort, and
                  ensure regulatory compliance.
                </p>
                <p>
                  Reliability and technical integrity are embedded within every stage of our
                  engineering and execution processes. Each system is designed through rigorous
                  validation protocols, using high-quality components and proven engineering
                  standards to ensure long-term operational stability and minimal downtime.
                </p>
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

      {/* Philosophy grid */}
      <section className="bg-surface/60 py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How We Engineer"
              title="A Multidisciplinary Engineering Framework"
              intro="Every deployment is built on first-principles engineering — not empirical approximation."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-xl border border-line/70 bg-white p-7 shadow-card">
                  <IconBadge icon={p.icon} />
                  <h3 className="mt-5 font-display text-lg font-bold text-primary">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{p.body}</p>
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
