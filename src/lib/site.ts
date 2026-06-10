export const site = {
  name: "Aura Air Engineering & Misting Systems",
  shortName: "Aura Air Engineering",
  tagline: "Engineering Environments. Enhancing Life.",
  description:
    "Aura Air Engineering & Misting Systems delivers advanced high-pressure fogging, humidification, evaporative cooling, dust suppression and intelligent automation solutions for industrial, commercial, agricultural and hospitality environments worldwide.",
  url: "https://www.auraairengineering.com",
  email: "info@auraairengineering.com",
  salesEmail: "sales@auraairengineering.com",
  phones: {
    india: "+91 94470 16649",
    indiaHref: "+919447016649",
    usa: "+1 858-208-9805",
    usaHref: "+18582089805",
  },
  whatsapp: "919447016649",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
  // Web3Forms access key — set NEXT_PUBLIC_WEB3FORMS_KEY in env for production.
  formAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Industrial Humidification", href: "/solutions/industrial-humidification" },
      { label: "Resort & Hospitality Fogging", href: "/solutions/resort-hospitality-fogging" },
      { label: "Outdoor Cooling & Misting", href: "/solutions/outdoor-cooling-misting" },
      { label: "Farm Climate Control", href: "/solutions/farm-climate-control" },
      { label: "Agricultural Misting", href: "/solutions/agricultural-misting" },
      { label: "Dust Suppression", href: "/solutions/dust-suppression" },
      { label: "HVAC & Building Control", href: "/solutions/hvac-building-control" },
      { label: "Industrial Automation & Control", href: "/solutions/industrial-automation" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
