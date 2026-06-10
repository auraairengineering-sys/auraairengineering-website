import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Aura Air Engineering & Misting Systems collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
      />
      <section className="py-16">
        <Container className="max-w-3xl">
          <div className="prose-sm space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              This Privacy Policy describes how {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
              handles information you provide through this website. We are committed to protecting
              your privacy and handling your data transparently.
            </p>
            <h2 className="font-display text-xl font-bold text-primary">Information We Collect</h2>
            <p>
              When you submit an inquiry, quote request or consultation form, we collect the
              information you provide — such as your name, company, email, phone number, location and
              project details — solely to respond to your request and provide technical guidance.
            </p>
            <h2 className="font-display text-xl font-bold text-primary">How We Use It</h2>
            <p>
              Submitted information is used to evaluate your requirements, prepare quotations and
              communicate with you about your project. We do not sell your personal information.
            </p>
            <h2 className="font-display text-xl font-bold text-primary">Contact</h2>
            <p>
              For any privacy-related questions, contact us at{" "}
              <a href={`mailto:${site.email}`} className="text-secondary hover:underline">
                {site.email}
              </a>
              .
            </p>
            <p className="text-sm text-ink-soft/80">
              This is a general policy template and should be reviewed by legal counsel before
              launch.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
