import type { Metadata } from "next";
import { FolderKanban } from "lucide-react";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Real-world Aura Air Engineering deployments across industrial, agricultural, hospitality and infrastructure projects worldwide — case studies coming soon.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <ComingSoon
      eyebrow="Projects & Case Studies"
      title="Proven Performance, Documented"
      intro="A geographically distributed project footprint spanning six continents, executed across diverse regulatory and environmental conditions."
      breadcrumbLabel="Projects"
      icon={FolderKanban}
      note="We're preparing detailed case studies — each documenting the industry, location, system type, problem, engineered solution and measured outcomes. Want a reference relevant to your sector? Reach out."
      points={[
        "Industrial humidification in textile & paper facilities",
        "Outdoor cooling for hospitality & public spaces",
        "Dust suppression in mining & material handling",
        "Farm climate control for poultry & livestock",
        "Automation & SCADA integration across plants",
      ]}
    />
  );
}
