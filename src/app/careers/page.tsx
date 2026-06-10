import type { Metadata } from "next";
import { Mail, Phone, Cpu, Wrench, HardHat, Briefcase } from "lucide-react";
import { Container, SectionHeading, Eyebrow, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { careersFaqs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build a career in environmental control engineering at Aura Air Engineering & Misting Systems — across mechanical design, automation (PLC/SCADA), project execution and technical sales.",
  alternates: { canonical: "/careers" },
};

const whyJoin = [
  {
    title: "Work on Real Engineering Challenges",
    body: "No repetitive, low-impact tasks. Every project involves real-world complexity — from environmental control in industrial plants to automation of large-scale systems.",
  },
  {
    title: "Multi-Disciplinary Engineering",
    body: "Mechanical systems, electrical & control panels, automation (PLC, SCADA, sensors) and environmental engineering — a holistic experience rarely found in conventional roles.",
  },
  {
    title: "Build Systems That Operate Autonomously",
    body: "From sensor-driven logic to time-based automation, our projects are built for fully autonomous operation — advanced control philosophies and real-time system intelligence.",
  },
  {
    title: "Global Application Exposure",
    body: "Solutions engineered for high-temperature regions, process-critical environments and international operational standards.",
  },
  {
    title: "Growth Through Responsibility",
    body: "We believe in ownership over hierarchy. Take initiative, solve problems independently and contribute to design and decision-making.",
  },
  {
    title: "Learning by Building",
    body: "Hands-on exposure to system design, automation logic, sensor integration and industrial project execution — learning embedded within real project work.",
  },
];

const roleGroups = [
  {
    icon: Wrench,
    group: "Engineering & Design",
    roles: ["Mechanical Design Engineers", "HVAC & Environmental Systems Engineers", "Piping & Fluid Systems Engineers"],
  },
  {
    icon: Cpu,
    group: "Electrical & Automation",
    roles: ["PLC Programmers", "SCADA Engineers", "Control Panel Design Engineers", "Embedded Systems Developers"],
  },
  {
    icon: HardHat,
    group: "Project Execution",
    roles: ["Site Engineers", "Commissioning Engineers", "Project Coordinators"],
  },
  {
    icon: Briefcase,
    group: "Technical & Commercial",
    roles: ["Technical Sales Engineers", "Application Engineers", "Proposal & Estimation Specialists"],
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Engineering Excellence, Built by People Who Think Beyond Standards"
        intro="We are not merely executing projects — we are engineering environments that directly influence industrial performance, product quality and human comfort across global sectors."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      {/* Philosophy */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow>Our Engineering Philosophy</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-primary">
                Solving complex problems with precision, reliability and long-term performance in
                mind.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <ul className="space-y-3 text-base text-ink-soft">
                {[
                  "Data-driven design methodologies",
                  "Application-specific system engineering",
                  "Focus on efficiency, durability and scalability",
                  "Commitment to autonomous and intelligent system behavior",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Why join */}
      <section className="bg-surface/60 py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Join Aura Air"
              title="A Place to Do Meaningful Engineering Work"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyJoin.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-xl border border-line/70 bg-white p-7 shadow-card">
                  <span className="font-display text-2xl font-extrabold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-primary">{w.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Roles */}
      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Career Opportunities"
              title="Opening Soon Across Key Domains"
              intro="We are in a phase of structured expansion. While there are no active openings right now, we'll soon be onboarding professionals across the following domains."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {roleGroups.map((g, i) => (
              <Reveal key={g.group} delay={(i % 2) * 80}>
                <div className="h-full rounded-xl border border-line/70 bg-white p-7 shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary ring-1 ring-secondary/15">
                      <g.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-primary">{g.group}</h3>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {g.roles.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-ink">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Submit profile */}
      <section className="relative overflow-hidden bg-primary py-20 text-surface">
        <div className="grid-texture absolute inset-0 opacity-60" aria-hidden />
        <Container className="relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              light
              align="center"
              eyebrow="Submit Your Profile"
              title="We Welcome Proactive Applications"
              intro="Even though we're not actively hiring at the moment, share your profile and we'll reach out when a suitable opportunity aligns with your expertise."
            />
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href={`mailto:${site.salesEmail}?subject=Careers`}
                variant="accent"
                withArrow
              >
                <Mail className="h-4 w-4" /> Email Your Resume
              </Button>
              <a
                href={`tel:${site.phones.usaHref}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-surface hover:text-accent"
              >
                <Phone className="h-4 w-4" /> {site.phones.usa}
              </a>
            </div>
            <p className="mt-5 text-xs text-surface/60">
              Please mention &ldquo;Careers&rdquo; in the subject line. Email:{" "}
              {site.salesEmail}
            </p>
          </Reveal>
        </Container>
      </section>

      <FaqSection items={careersFaqs} eyebrow="Careers — FAQ" title="Questions About Working Here" />
    </>
  );
}
