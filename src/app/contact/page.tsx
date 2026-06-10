import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { Container, SectionHeading, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { ContactForm } from "@/components/ContactForm";
import { contactFaqs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your project with precision engineering. Request a quote, talk to an expert, or reach Aura Air Engineering directly by phone, email or WhatsApp. We respond within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start Your Project with Precision Engineering"
        intro="Engage with our experts for advanced climate control, misting, and automation solutions tailored to your application. Each inquiry is reviewed with a focus on operational parameters, environmental conditions and performance expectations."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Contact methods */}
      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "Call Our Engineers",
                lines: [
                  { text: `${site.phones.usa} (USA)`, href: `tel:${site.phones.usaHref}` },
                  { text: `${site.phones.india} (India)`, href: `tel:${site.phones.indiaHref}` },
                ],
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: [
                  { text: site.email, href: `mailto:${site.email}` },
                  { text: site.salesEmail, href: `mailto:${site.salesEmail}` },
                ],
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                lines: [
                  { text: "Chat with our team", href: `https://wa.me/${site.whatsapp}` },
                  { text: "Mon–Sat, business hours", href: `https://wa.me/${site.whatsapp}` },
                ],
              },
            ].map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <div className="h-full rounded-xl border border-line/70 bg-white p-7 shadow-card">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary ring-1 ring-secondary/15">
                    <m.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-primary">{m.title}</h3>
                  <div className="mt-2 space-y-1">
                    {m.lines.map((l) => (
                      <a
                        key={l.text}
                        href={l.href}
                        className="block text-sm text-ink-soft transition-colors hover:text-secondary"
                      >
                        {l.text}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 rounded-xl border border-line/60 bg-surface/60 px-6 py-4 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-secondary" /> Response within 24 hours
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-secondary" /> No obligation · Confidential
              consultation
            </span>
          </div>
        </Container>
      </section>

      {/* Get a Quote form */}
      <section id="quote" className="scroll-mt-24 bg-surface/60 py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Get a Quote"
                title="Share Your Project Specifications"
                intro="Provide your application, area size and environmental conditions to receive a precise, optimized quotation backed by engineering analysis."
              />
              <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                Include area size, application type, environmental conditions and any specific
                performance requirements. The more detail you provide, the faster and more accurate
                our engineering response.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ContactForm variant="quote" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Talk to an expert form */}
      <section id="expert" className="scroll-mt-24 py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <Reveal>
              <Eyebrow>Talk to an Expert</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-primary">
                Schedule a Technical Discussion
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                Book a consultation with our engineering team for solution evaluation and technical
                clarity. Ideal for conceptual or optimization-phase projects with multiple
                variables.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ContactForm variant="expert" />
            </Reveal>
          </div>
        </Container>
      </section>

      <FaqSection
        items={contactFaqs}
        eyebrow="Contact & Consultation — FAQ"
        title="Before You Reach Out"
      />
    </>
  );
}
