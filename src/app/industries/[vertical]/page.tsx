import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VerticalPage } from "@/components/VerticalPage";
import { verticals, getVertical } from "@/lib/verticals";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return verticals.map((v) => ({ vertical: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string }>;
}): Promise<Metadata> {
  const { vertical } = await params;
  const v = getVertical(vertical);
  if (!v) return {};
  return {
    title: v.title,
    description: v.heroSubhead,
    alternates: { canonical: `/industries/${v.slug}` },
    openGraph: { title: `${v.title} | ${site.shortName}`, description: v.heroSubhead },
  };
}

export default async function VerticalRoute({
  params,
}: {
  params: Promise<{ vertical: string }>;
}) {
  const { vertical } = await params;
  const v = getVertical(vertical);
  if (!v) notFound();
  return <VerticalPage vertical={v} />;
}
