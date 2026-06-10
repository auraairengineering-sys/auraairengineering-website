import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Technical articles, engineering insights and resources on misting, humidification, evaporative cooling, dust suppression and industrial automation — coming soon.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <ComingSoon
      eyebrow="Insights"
      title="Engineering Insights & Resources"
      intro="Technical articles and applied engineering knowledge on microclimate control, atomization science, automation and energy efficiency."
      breadcrumbLabel="Insights"
      icon={Newspaper}
      note="Our knowledge hub is in development — expect deep-dive articles, psychrometric guidance, application notes and best-practice resources for engineers and decision-makers."
      points={[
        "Thermodynamics of evaporative cooling explained",
        "Designing for high-humidity environments",
        "Dust suppression & CFD-optimized capture",
        "PLC / SCADA / IIoT automation best practices",
        "Water quality & long-term system maintenance",
      ]}
    />
  );
}
