import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { verticals } from "@/lib/verticals";
import { industriesFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Industries & Solutions",
  description:
    "Engineered environmental control across industry: industrial humidification, resort & hospitality fogging, outdoor cooling, farm climate control, agricultural misting, dust suppression, HVAC, automation, AC-condenser fogging and H-plant humidity systems.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries & Solutions"
        title="Engineered Environmental Control Across Every Industry"
        intro="Our systems are not generic installations — each is precision-engineered from a deep technical understanding of process requirements, climatic variables and application-specific performance parameters."
        image="/images/facility-banner.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Solution Verticals"
              title="Ten Engineering Domains, One Standard of Precision"
              intro="From heavy industry and infrastructure to hospitality, agriculture and building services — explore the engineered systems built around your process, climate and compliance requirements."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {verticals.map((v, i) => (
              <Reveal key={v.slug} delay={(i % 3) * 70}>
                <Link
                  href={`/industries/${v.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-line/70 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lift"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-primary/5">
                    {v.image && (
                      <Image
                        src={v.image}
                        alt={v.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/90 text-secondary shadow-sm ring-1 ring-black/5 backdrop-blur">
                      <v.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-lg font-bold text-primary group-hover:text-secondary">
                      {v.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{v.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
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
