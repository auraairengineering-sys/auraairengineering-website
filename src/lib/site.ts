export const site = {
  name: "Aura Air Engineering & Misting Systems",
  shortName: "Aura Air Engineering",
  tagline: "Engineering Environments. Enhancing Life.",
  description:
    "Aura Air Engineering & Misting Systems delivers advanced high-pressure fogging, humidification, evaporative cooling, dust suppression and intelligent automation solutions for industrial, commercial, agricultural and hospitality environments worldwide.",
  url: "https://www.auraairengineering.com",
  email: "sales@auraairengineering.com",
  altEmail: "auraairengineering@gmail.com",
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
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Industrial Humidification", href: "/industries/industrial-humidification" },
      { label: "Resort & Hospitality Fogging", href: "/industries/resort-hospitality-fogging" },
      { label: "Outdoor Cooling & Misting", href: "/industries/outdoor-cooling-misting" },
      { label: "Farm Climate Control", href: "/industries/farm-climate-control" },
      { label: "Agricultural Misting", href: "/industries/agricultural-misting" },
      { label: "Dust Suppression", href: "/industries/dust-suppression" },
      { label: "HVAC & Building Control", href: "/industries/hvac-building-control" },
      { label: "Industrial Automation", href: "/industries/industrial-automation" },
      { label: "AC-Condenser Fogging", href: "/industries/ac-condenser-fogging" },
      { label: "H-Plant Humidity Systems", href: "/industries/h-plant" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Industrial Humidification", href: "/products/industrial-humidification" },
      { label: "Resort & Hospitality Fogging", href: "/products/resort-hospitality-fogging" },
      { label: "Outdoor Cooling & Misting", href: "/products/outdoor-cooling-misting" },
      { label: "Farm Climate Control", href: "/products/farm-climate-control" },
      { label: "Agricultural Misting", href: "/products/agricultural-misting" },
      { label: "Dust Suppression", href: "/products/dust-suppression" },
      { label: "Industrial HVAC", href: "/products/hvac" },
      { label: "Automation & Control Panels", href: "/products/industrial-automation" },
      { label: "Humidity Plant Systems", href: "/products/h-plant" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
