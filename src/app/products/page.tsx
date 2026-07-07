import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { productCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Aura Air Engineering product catalog — high-pressure pumps, fogging nozzles, control panels, sensors, filtration and complete engineered systems across every solution vertical.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Engineered Components & Complete Systems"
        intro="High-pressure pumps, precision nozzles, control panels, sensors, filtration and turnkey systems — organized by application. Browse a category to see the full product range."
        image="/images/pump-station.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Product Catalogs"
              title="Nine Product Domains, Engineered for Reliability"
              intro="Each catalog spans complete systems, high-pressure pumps, nozzles, automation and spares — specified and sourced by our engineers for your application."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 70}>
                <Link
                  href={`/products/${c.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-line/70 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lift"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-primary/5">
                    {c.image && (
                      <Image
                        src={c.image}
                        alt={c.menuLabel}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/90 text-secondary shadow-sm ring-1 ring-black/5 backdrop-blur">
                      <c.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-base font-bold text-primary group-hover:text-secondary">
                      {c.menuLabel}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{c.intro}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                      View catalog
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-line/60 bg-surface/60 px-6 py-8 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary ring-1 ring-secondary/15">
                <Package className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
                We&apos;re integrating an online catalog with ordering. In the meantime, our team will
                help you specify and source the right components and complete systems for your project.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
