import { Container, SectionHeading } from "./ui";
import { FaqAccordion } from "./FaqAccordion";
import { Reveal } from "./Reveal";
import type { Faq } from "@/lib/faqs";

export function FaqSection({
  items,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  intro,
}: {
  items: Faq[];
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="bg-canvas py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        </Reveal>
        <Reveal className="mt-10">
          <FaqAccordion items={items} />
        </Reveal>
      </Container>
    </section>
  );
}
