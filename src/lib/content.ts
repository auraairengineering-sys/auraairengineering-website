import {
  Factory,
  Hotel,
  Wind,
  Tractor,
  Sprout,
  CloudFog,
  Building2,
  Cpu,
  Snowflake,
  Filter,
  type LucideIcon,
} from "lucide-react";

export type Solution = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  intro: string;
  overview: string;
  featured: boolean; // shown on home grid
  industries: string[];
  benefits: string[];
};

export const solutions: Solution[] = [
  {
    slug: "industrial-humidification",
    title: "Industrial Humidification Systems",
    short: "Process-grade humidity control",
    icon: Factory,
    featured: true,
    intro:
      "Engineered humidity regulation systems designed to maintain optimal moisture equilibrium in controlled industrial environments — minimizing static generation, material degradation, and process variability.",
    overview:
      "High-pressure atomization combined with precision-controlled PLC architectures ensures uniform dispersion and micron-level droplet consistency. Suitable for textile, paper, and manufacturing sectors requiring stringent atmospheric stability. Systems are sized through psychrometric optimization to stabilize material properties, reduce electrostatic accumulation, and enhance process reliability in sensitive production environments.",
    benefits: [
      "Uniform humidity within ±2–5% RH tolerance",
      "Static control and reduced material wastage",
      "Micron-level droplet consistency, no surface wetting",
      "Zoned control for multi-area facilities",
    ],
    industries: [
      "Textile Mills & Fabric Processing Units",
      "Jute Mills & Natural Fiber Processing",
      "Paper & Pulp Industries",
      "Printing & Packaging Facilities",
      "Electronics & Semiconductor Manufacturing",
      "Automotive & Component Manufacturing",
      "Pharmaceutical Manufacturing Units",
      "Food Processing & Cold Storage",
      "Woodworking & Furniture Manufacturing",
      "Data Centers & Server Rooms",
      "Battery & Chemical Processing Plants",
      "Warehouses & Distribution Centers",
      "Tobacco Processing & Storage",
      "Leather Processing & Tanning",
    ],
  },
  {
    slug: "resort-hospitality-fogging",
    title: "Resort & Hospitality Fogging Systems",
    short: "Luxury outdoor comfort",
    icon: Hotel,
    featured: true,
    intro:
      "Microclimate modulation systems tailored for luxury outdoor environments — enabling perceptible temperature reduction without surface wetting or visual obstruction.",
    overview:
      "Utilizing ultra-fine droplet generation, these systems enhance thermal comfort while preserving architectural aesthetics and the guest experience. Integrated automation enables adaptive operation based on ambient thermal loads and occupancy dynamics, delivering cooling that is felt but never seen.",
    benefits: [
      "Perceptible cooling with zero surface wetting",
      "Architecturally discreet, ultra-fine fog",
      "Occupancy- and temperature-adaptive operation",
      "Premium guest comfort in extreme heat",
    ],
    industries: [
      "Luxury Resorts & Hotels (UAE, Las Vegas, Miami, Arizona)",
      "Outdoor Dining Areas & Food Streets",
      "Beachfront Cafés & Poolside Lounges",
      "Theme Parks & Amusement Parks",
      "Event Venues & Outdoor Wedding Spaces",
      "Rooftop Restaurants & Bars",
      "Golf Courses & Clubhouses",
      "Spa & Wellness Retreats",
      "Tourist Attractions & Open-Air Plazas",
    ],
  },
  {
    slug: "outdoor-cooling-misting",
    title: "Outdoor Cooling & Misting Systems",
    short: "Large-scale evaporative cooling",
    icon: Wind,
    featured: true,
    intro:
      "Thermodynamically optimized evaporative cooling systems designed for large-scale open and semi-enclosed environments with high heat loads.",
    overview:
      "High-pressure misting arrays facilitate rapid latent heat absorption, significantly reducing ambient temperatures in energy-efficient cycles. Engineered for commercial, industrial, and public infrastructure applications under variable climatic conditions, with temperature reductions of 10–15°C achievable in optimal conditions.",
    benefits: [
      "10–15°C ambient temperature reduction",
      "Energy-efficient phase-change cooling",
      "Heat-stress reduction for outdoor workers",
      "Scalable across large open areas",
    ],
    industries: [
      "Outdoor Restaurants & Street Food Zones",
      "Commercial Complexes & Shopping Malls",
      "Industrial Yards & Worker Zones",
      "Construction Sites (heat stress reduction)",
      "Sports Facilities & Stadiums",
      "Public Parks & Urban Spaces",
      "Airports & Transportation Terminals",
      "Factory Outdoor Workstations",
      "Parking Areas & Queue Lines",
      "High-temperature regions (Las Vegas, Texas, Middle East)",
    ],
  },
  {
    slug: "farm-climate-control",
    title: "Farm Climate Control Systems",
    short: "Livestock & agri microclimates",
    icon: Tractor,
    featured: true,
    intro:
      "Integrated environmental control frameworks developed to regulate temperature, humidity, and air distribution within agricultural ecosystems.",
    overview:
      "These systems support enhanced crop physiology and livestock productivity through precise microclimate stabilization. Sensor-driven automation enables real-time adaptive control aligned with diurnal and seasonal variations — reducing thermal stress and improving biological productivity.",
    benefits: [
      "Reduced livestock thermal stress",
      "Improved productivity and animal health",
      "Sensor-driven adaptive control",
      "Stable microclimates across seasons",
    ],
    industries: [
      "Poultry Farms (Broiler & Layer)",
      "Dairy Farms & Cattle Sheds",
      "Livestock Farms (Goat, Sheep, Pig)",
      "Mushroom Cultivation Units",
      "Hatcheries & Animal Breeding Facilities",
      "Aquaculture & Fish Farming Units",
      "Green Fodder & Hydroponic Feed Systems",
      "Barns & Enclosed Animal Housing",
    ],
  },
  {
    slug: "agricultural-misting",
    title: "Agricultural Misting & Humidification",
    short: "Precision crop environments",
    icon: Sprout,
    featured: true,
    intro:
      "Advanced misting architectures designed to optimize transpiration rates, soil moisture retention, and ambient humidity in precision agriculture.",
    overview:
      "Fine droplet dispersion ensures efficient water utilization while mitigating thermal stress on crops. System configurations support greenhouse cultivation, open-field farming, and high-value crop environments — regulating vapor pressure deficit (VPD) to influence plant physiology and yield.",
    benefits: [
      "Optimized transpiration and VPD control",
      "Efficient water utilization",
      "Higher yield for high-value crops",
      "Greenhouse, open-field & vertical farming",
    ],
    industries: [
      "Greenhouses & Polyhouses",
      "Vertical Farming Systems",
      "Nurseries & Plant Propagation Units",
      "High-Value Crop Cultivation (berries, herbs, flowers)",
      "Vineyard & Orchard Farming",
      "Hydroponic & Aeroponic Farms",
      "Shade Net Farming",
      "Indoor Farming Facilities",
      "Seed Germination & Research Centers",
      "Botanical Gardens & Horticulture Projects",
    ],
  },
  {
    slug: "dust-suppression",
    title: "Dust Suppression Systems",
    short: "Airborne particulate control",
    icon: CloudFog,
    featured: true,
    intro:
      "High-pressure fogging systems engineered to capture and agglomerate airborne particulate matter through controlled droplet-particle interaction dynamics.",
    overview:
      "The technology effectively reduces PM10 and PM2.5 concentrations across material handling, mining, and construction operations. Designed for compliance with stringent environmental and occupational air quality standards in global industrial sectors, using droplet sizing optimized through CFD modeling.",
    benefits: [
      "Effective PM10 / PM2.5 reduction",
      "Improved worker safety & visibility",
      "Environmental & OSHA/EPA compliance",
      "CFD-optimized capture efficiency",
    ],
    industries: [
      "Mining & Quarry Operations",
      "Stone Crushing & Screening Plants",
      "Cement Plants & Bulk Material Handling",
      "Construction & Demolition Sites",
      "Coal Handling Plants & Thermal Power Stations",
      "Ports & Bulk Cargo Terminals",
      "Steel Plants & Foundries",
      "Waste Management & Recycling Facilities",
      "Road Construction & Infrastructure",
      "Industrial Stockyards & Conveyor Systems",
    ],
  },
  {
    slug: "hvac-building-control",
    title: "HVAC & Building Environmental Control",
    short: "Integrated air & humidity",
    icon: Building2,
    featured: false,
    intro:
      "Integrated humidity and air quality solutions for modern infrastructure and controlled environments.",
    overview:
      "Engineered to manage airflow distribution, contaminant removal, and ventilation efficiency through controlled air exchange mechanisms — interoperable with existing HVAC infrastructure, AHUs and Building Management Systems through standardized communication protocols.",
    benefits: [
      "Seamless integration with HVAC / BMS / AHUs",
      "Clean-room and controlled-environment ready",
      "Centralized monitoring & energy efficiency",
      "Mission-critical reliability",
    ],
    industries: [
      "HVAC Systems & Air Handling Units (AHUs)",
      "Clean Rooms & Controlled Environments",
      "Commercial Buildings & Office Spaces",
      "Hospitals & Healthcare Facilities",
      "Laboratories & Research Centers",
      "Data Centers & Mission-Critical Facilities",
      "Airports & Large Infrastructure Projects",
    ],
  },
  {
    slug: "industrial-automation",
    title: "Industrial Automation & Control Systems",
    short: "PLC · SCADA · IIoT",
    icon: Cpu,
    featured: false,
    intro:
      "Intelligent control architectures that convert conventional operations into fully automated, data-driven systems — spanning PLC platforms, SCADA supervisory systems, and microcontroller-based embedded solutions.",
    overview:
      "Each automation system is engineered through rigorous analysis of process logic, operational sequencing, and load characteristics. A key part of our philosophy is full system autonomy: once configured, systems monitor real-time conditions through high-accuracy sensors and respond dynamically through programmed logic, time-based scheduling and parameter-driven triggers — without manual intervention.",
    benefits: [
      "PLC, SCADA & embedded control platforms",
      "Fully autonomous, sensor-driven operation",
      "Remote monitoring & IIoT integration",
      "Fail-safe interlocks & redundancy logic",
    ],
    industries: [
      "Fogging & Humidification Automation (RH/temp sensors)",
      "Dust Suppression & HVAC Automation",
      "Cooling Towers & Chilled Water Systems",
      "STP / ETP & Water Treatment Plants",
      "Textile, Jute, Paper & Process Industries",
      "Pharmaceutical & Chemical Plants",
      "Airports, Power Plants & Smart Infrastructure",
      "CCTV, Access Control, Fire & BMS (Low-Voltage)",
    ],
  },
];

export const featuredSolutions = solutions.filter((s) => s.featured);

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

/* Additional capability areas (referenced on Industries / Solutions overview) */
export const additionalCapabilities = [
  {
    title: "Industrial Cooling & Utility Systems",
    icon: Snowflake,
    points: [
      "Cooling Towers & Heat Rejection Systems",
      "Chilled Water & Centralized Cooling Plants",
      "Power Plants & Energy Facilities",
      "Boiler Rooms & Turbine Areas",
    ],
  },
  {
    title: "Centralized Dust Collection & Air Filtration",
    icon: Filter,
    points: [
      "Centralized Dust Collection Systems",
      "Industrial Air Filtration & Fume Extraction",
      "Welding & Fabrication Units",
      "Wood Dust & CNC Particulate Extraction",
    ],
  },
];

/* Home / about stats */
export const stats = [
  { value: "10+", label: "Years of Applied Engineering" },
  { value: "6", label: "Continents Served" },
  { value: "20+", label: "Industries" },
  { value: "100%", label: "Engineering-Led Delivery" },
];

/* Home value cards */
export const valueProps = [
  {
    title: "Engineered Solutions",
    body: "Application-specific system design grounded in thermodynamics, fluid mechanics and control engineering — not commoditized equipment.",
  },
  {
    title: "Reliable Performance",
    body: "Industrial-grade components, fail-safe logic and rigorous validation deliver consistent results under continuous-duty conditions.",
  },
  {
    title: "Energy Efficient",
    body: "Phase-change cooling and sensor-driven automation cut energy and water consumption while maintaining precise control.",
  },
  {
    title: "Expert Support",
    body: "End-to-end turnkey delivery from design and commissioning to predictive maintenance and 24/7 technical assistance.",
  },
];

/* Certifications / standards */
export const certifications = [
  { code: "ISO 9001", desc: "Quality Management Systems" },
  { code: "ISO 14001", desc: "Environmental Management" },
  { code: "ISO 45001", desc: "Occupational Health & Safety" },
  { code: "CE", desc: "European Safety & Conformity" },
  { code: "ASME / ANSI", desc: "U.S. Engineering Practices" },
  { code: "OSHA", desc: "Workplace Safety (USA)" },
  { code: "EPA", desc: "Environmental Compliance (USA)" },
  { code: "RoHS", desc: "Material Safety Compliance" },
];

export const regions = [
  "North America (USA, Canada, Mexico)",
  "South America",
  "Middle East (UAE & region)",
  "Africa",
  "Asia-Pacific",
  "Australia",
];
