import type { Metadata } from "next";
import { Package } from "lucide-react";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Aura Air Engineering product catalog — high-pressure pumps, precision nozzles, control panels, sensors and spares. Online catalog with Zoho Commerce integration coming soon.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <ComingSoon
      eyebrow="Products"
      title="Engineered Components & Systems"
      intro="High-pressure pumps, precision nozzles, control panels, sensors and spare components — engineered for reliability and available on request."
      breadcrumbLabel="Products"
      icon={Package}
      heroImage="/images/pump-station.jpg"
      showcase={[
        {
          src: "/images/product-pump-unit.jpg",
          caption:
            "High-efficiency high-pressure pump unit — tri-plex plunger manifold, sealed control terminal box and anti-vibration mounting.",
        },
        {
          src: "/images/pump-station.jpg",
          caption:
            "Multi-pump high-pressure pumping station engineered for large-area misting and humidification networks.",
        },
      ]}
      note="We're integrating Zoho Commerce to enable product display and online ordering. In the meantime, our team will help you specify and source the right components for your system."
      points={[
        "High-pressure pumps & pumping stations",
        "Precision atomization nozzles & nozzle networks",
        "PLC control panels (MCC, PCC) & HMI",
        "RH, temperature, pressure & flow sensors",
        "Multi-stage filtration & water treatment units",
        "Spare parts & system upgrade kits",
      ]}
    />
  );
}
