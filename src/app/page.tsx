import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Gauge,
  Leaf,
  Headset,
  Globe2,
  Cpu,
  Microscope,
  Wrench,
} from "lucide-react";
import { Container, SectionHeading, Button, Eyebrow, IconBadge } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { featuredSolutions, stats, valueProps, certifications } from "@/lib/content";
import { homeFaqs } from "@/lib/faqs";
import { site } from "@/lib/site";

const valueIcons = [ShieldCheck, Gauge, Leaf, Headset];

const pillars = [
  {
    icon: Cpu,
    title: "Integrated Automation Ecosystem",
    body: "PLC-driven control logic interfaced with HMI and SCADA platforms, with IIoT data layers enabling predictive, autonomous environmental control.",
  },
  {
    icon: Globe2,
    title: "Global Project Execution",
    body: "A distributed footprint across North & South America, the Middle East, Africa, Asia-Pacific and Australia — executed across diverse regulatory frameworks.",
  },
  {
    icon: Microscope,
    title: "Advanced R&D",
    body: "Continuous investigation of droplet dynamics, atomization efficiency and fluid–air interaction to maximize evaporative performance and uniformity.",
  },
  {
    icon: Wrench,
    title: "Full Lifecycle Support",
    body: "From design, commissioning and documentation to preventive maintenance — ensuring sustained performance and minimal downtime.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-surface">
        <Image
          src="/images/facility-banner.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover object-center opacity-20"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70"
          aria-hidden
        />
        <div className="grid-texture absolute inset-0 opacity-70" aria-hidden />
        <div
          className="absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-secondary/25 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-48 -left-24 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl"
          aria-hidden
        />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Advanced Microclimate Engineering</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-6xl">
                Engineering Environments.
                <span className="block text-accent">Enhancing Life.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-surface/85">
                Advanced high-pressure fogging and microclimate solutions engineered to control
                temperature, enhance humidity, and improve air quality across industrial,
                commercial, agricultural, and hospitality environments — performing efficiently in
                the most demanding climates.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="/solutions" variant="accent" withArrow>
                  Explore Solutions
                </Button>
                <Button href="/contact#quote" variant="outline">
                  Get a Quote
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Stats band */}
          <Reveal delay={320}>
            <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-surface/15 bg-surface/10 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-primary/40 px-6 py-7 text-center backdrop-blur-sm">
                  <dt className="font-display text-3xl font-extrabold text-accent sm:text-4xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-surface/70">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* VALUE PROPS */}
      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="group h-full rounded-xl border border-line/70 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <IconBadge icon={Icon} />
                    <h3 className="mt-5 font-display text-lg font-bold text-primary">{v.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{v.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* INTRO / OVERVIEW */}
      <section className="bg-surface/60 py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Who We Are</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl">
                Advanced Misting &amp; Environmental Systems
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                Aura Air Engineering operates at the intersection of thermodynamics, fluid
                atomization, and intelligent automation — delivering engineered environments that
                are quantitatively optimized for performance, stability, and compliance.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Equipped with intelligent touchscreen PLC and SCADA-based control, IoT integration
                and fully autonomous operation, our systems ensure reliability, energy efficiency,
                and real-time monitoring — engineered to internationally recognized standards.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/about" withArrow>
                  About Aura Air
                </Button>
                <Button href="/solutions/industrial-automation" variant="ghost" withArrow>
                  Our Automation Capability
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-5 sm:grid-cols-2">
                {pillars.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-xl border border-line/60 bg-white p-6 shadow-card"
                  >
                    <p.icon className="h-7 w-7 text-secondary" strokeWidth={1.75} />
                    <h3 className="mt-4 font-display text-base font-bold text-primary">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Solutions"
              title="Engineered Systems for Every Environment"
              intro="Six core verticals — plus HVAC, industrial cooling and full automation — each precision-engineered around your process, climate and compliance requirements."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredSolutions.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-line/70 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lift"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/90 text-secondary shadow-sm ring-1 ring-black/5 backdrop-blur">
                      <s.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-lg font-bold text-primary group-hover:text-secondary">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">{s.intro}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button href="/solutions" variant="ghost" withArrow>
              View all solutions
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* ENGINEERING INTELLIGENCE — dark band */}
      <section className="relative overflow-hidden bg-primary py-20 text-surface">
        <div className="grid-texture absolute inset-0 opacity-60" aria-hidden />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Why Aura Air"
              title="Engineering Intelligence Behind Every Microclimate"
              intro="Over a decade of applied engineering across diverse climatic and industrial conditions — designing systems that regulate environmental parameters while enhancing process reliability and material integrity at scale."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Engineering Excellence",
              "Innovative Technology Integration",
              "Customized Engineering Solutions",
              "End-to-End Turnkey Capability",
              "Global Standards & Compliance",
              "Sustainable, Energy-Efficient Design",
              "Multi-Industry Expertise",
              "24/7 Technical Support & Service",
            ].map((title, i) => (
              <Reveal key={title} delay={(i % 4) * 70}>
                <div className="h-full rounded-xl border border-surface/15 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-accent/50">
                  <span className="font-display text-2xl font-extrabold text-accent/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold text-surface">{title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Certifications & Standards"
              title="Engineered in Compliance with Global Frameworks"
              intro="Our systems are designed in compliance with internationally recognized standards — ensuring quality, safety, environmental responsibility, and operational reliability across regulated markets."
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
            {certifications.map((c, i) => (
              <Reveal key={c.code} delay={(i % 4) * 60}>
                <div className="flex h-full flex-col items-center justify-center rounded-xl border border-line/70 bg-white px-4 py-6 text-center shadow-card">
                  <span className="font-display text-lg font-extrabold text-primary">{c.code}</span>
                  <span className="mt-1.5 text-xs text-ink-soft">{c.desc}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* INDUSTRIES PREVIEW */}
      <section className="bg-surface/60 py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <Eyebrow>Industries We Serve</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl">
                Solutions Engineered for Performance-Critical Sectors
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                From heavy manufacturing and process industries to hospitality, infrastructure and
                precision agriculture — every project is evaluated through detailed assessment of
                area dynamics, airflow patterns, ambient conditions and process sensitivity.
              </p>
              <div className="mt-8">
                <Button href="/industries" withArrow>
                  Explore industries
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Textile & Jute",
                  "Pharmaceuticals",
                  "Electronics & Semiconductor",
                  "Mining & Quarrying",
                  "Poultry & Livestock",
                  "Greenhouses",
                  "Data Centers",
                  "Hospitality & Resorts",
                  "Cement & Steel",
                  "Food Processing",
                  "Airports & Stadiums",
                  "Power & Energy",
                  "Warehousing",
                  "Construction",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FaqSection
        items={homeFaqs}
        intro={`Engineering answers to the questions we hear most. For application-specific guidance, reach our team at ${site.email}.`}
      />

      <CtaSection />
    </>
  );
}
