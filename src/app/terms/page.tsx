import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing the use of the Aura Air Engineering website.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />
      <section className="py-16">
        <Container className="max-w-3xl">
          <div className="space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              By accessing and using this website, you agree to these terms. The content provided by{" "}
              {site.name} is for general informational purposes regarding our engineering solutions
              and services.
            </p>
            <h2 className="font-display text-xl font-bold text-primary">Use of Content</h2>
            <p>
              All content, including technical descriptions, specifications and imagery, is the
              property of {site.name} and provided for reference. System performance figures are
              indicative and subject to application-specific engineering assessment.
            </p>
            <h2 className="font-display text-xl font-bold text-primary">No Warranty</h2>
            <p>
              Information on this site does not constitute a binding engineering commitment. Final
              system specifications, performance guarantees and pricing are confirmed through a
              formal quotation and engineering review.
            </p>
            <h2 className="font-display text-xl font-bold text-primary">Contact</h2>
            <p>
              Questions about these terms? Email{" "}
              <a href={`mailto:${site.email}`} className="text-secondary hover:underline">
                {site.email}
              </a>
              .
            </p>
            <p className="text-sm text-ink-soft/80">
              This is a general template and should be reviewed by legal counsel before launch.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
