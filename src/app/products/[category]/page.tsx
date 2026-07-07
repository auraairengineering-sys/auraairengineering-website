import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { productCategories, getProductCategory } from "@/lib/products";
import { getVertical } from "@/lib/verticals";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return productCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const c = getProductCategory(category);
  if (!c) return {};
  return {
    title: c.title,
    description: c.intro,
    alternates: { canonical: `/products/${c.slug}` },
    openGraph: { title: `${c.title} | ${site.shortName}`, description: c.intro },
  };
}

export default async function ProductCategoryRoute({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const c = getProductCategory(category);
  if (!c) notFound();
  const vertical = c.verticalSlug ? getVertical(c.verticalSlug) : undefined;

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={c.title}
        intro={c.intro}
        image={c.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: c.menuLabel },
        ]}
      />

      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Catalog"
              title="Products & Categories"
              intro="Complete engineered systems and components available on request. Share your application and our team will specify the right configuration."
            />
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.items.map((item, i) => (
              <Reveal key={item} delay={(i % 6) * 40}>
                <div className="flex items-center gap-3 rounded-lg border border-line/60 bg-white px-4 py-3.5 text-sm text-ink shadow-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </div>
              </Reveal>
            ))}
          </div>

          {vertical && (
            <Reveal className="mt-12">
              <Link
                href={`/industries/${vertical.slug}`}
                className="group inline-flex items-center gap-2 rounded-xl border border-line/70 bg-surface/60 px-6 py-4 text-sm font-semibold text-primary transition-colors hover:border-secondary/30 hover:text-secondary"
              >
                Explore the {vertical.menuLabel} solution
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          )}
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
