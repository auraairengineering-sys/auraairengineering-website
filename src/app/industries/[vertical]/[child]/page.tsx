import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChildPage } from "@/components/ChildPage";
import { verticals, getChild } from "@/lib/verticals";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return verticals.flatMap((v) =>
    (v.children ?? []).map((c) => ({ vertical: v.slug, child: c.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string; child: string }>;
}): Promise<Metadata> {
  const { vertical, child } = await params;
  const found = getChild(vertical, child);
  if (!found) return {};
  const { child: c } = found;
  return {
    title: c.title,
    description: c.heroSubhead ?? c.intro[0],
    alternates: { canonical: `/industries/${vertical}/${child}` },
    openGraph: { title: `${c.title} | ${site.shortName}`, description: c.heroSubhead ?? c.intro[0] },
  };
}

export default async function ChildRoute({
  params,
}: {
  params: Promise<{ vertical: string; child: string }>;
}) {
  const { vertical, child } = await params;
  const found = getChild(vertical, child);
  if (!found) notFound();
  return <ChildPage vertical={found.vertical} child={found.child} />;
}
