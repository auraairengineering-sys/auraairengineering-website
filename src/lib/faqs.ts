export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    q: "What is a high-pressure misting system and what are the governing physical principles?",
    a: "A high-pressure misting system atomizes water into micro-scale droplets (typically 5–20 microns) using pressures of 70–100 bar (1000–1500 PSI). It operates on evaporative cooling driven by the latent heat of vaporization — each gram of water absorbs ~2260 kJ/kg during phase transition. The ultra-fine droplet size ensures a high surface-area-to-volume ratio, enabling near-instantaneous evaporation, adiabatic cooling, and minimal surface wetting.",
  },
  {
    q: "What real-world cooling performance can misting systems achieve?",
    a: "Cooling performance is governed by wet-bulb depression and psychrometric limits. Under optimal conditions (low relative humidity, high dry-bulb temperature), systems can achieve temperature reductions of 10–15°C. The theoretical efficiency approaches the wet-bulb temperature limit, making it far more energy-efficient than conventional vapor-compression refrigeration.",
  },
  {
    q: "How are misting systems optimized for high-humidity environments?",
    a: "In humid environments the evaporative potential is reduced. By integrating a water chiller to deliver pre-cooled water, the system enhances sensible cooling even when latent cooling is constrained. Combining misting with forced ventilation, desiccant dehumidification, or hybrid HVAC further improves performance in humid regions.",
  },
  {
    q: "What are the primary industrial and commercial applications?",
    a: "High-pressure misting systems are deployed across precision manufacturing, agro-climatic control (poultry, livestock, greenhouses, mushroom cultivation), pharmaceuticals (cleanroom humidity control), mining and bulk material handling (dust suppression), construction, warehousing, and food processing — for temperature regulation, humidity control, ESD mitigation and particulate suppression.",
  },
  {
    q: "How does dust suppression work in high-pressure fogging systems?",
    a: "Dust suppression relies on particle-droplet interaction dynamics — interception, inertial impaction and Brownian diffusion. High-pressure atomization produces droplets in the optimal size range to collide with PM10 and PM2.5 particles, increasing their mass and promoting gravitational settling. Advanced systems are designed using CFD modeling to maximize capture efficiency.",
  },
  {
    q: "What differentiates high-pressure from low-pressure misting at an engineering level?",
    a: "High-pressure systems (≥70 bar) produce ultra-fine droplets that remain suspended and evaporate rapidly, enabling true evaporative cooling without wetting. Low-pressure systems (<20 bar) generate larger droplets (>50 microns), resulting in incomplete evaporation, surface wetting and lower thermodynamic efficiency.",
  },
  {
    q: "How energy-efficient are misting systems compared to conventional HVAC?",
    a: "Misting systems rely on phase-change cooling rather than compressor-based refrigeration. Energy consumption is largely limited to pump operation — significantly lower than chillers or AC units. With smart controls and environmental sensors, they achieve optimal cooling with minimal energy input.",
  },
  {
    q: "Can misting systems contribute to air quality and environmental compliance?",
    a: "Yes. By reducing concentrations of dust, allergens and industrial pollutants, they help maintain compliance with PM10/PM2.5 limits and can be integrated with odor control or chemical dosing systems for specialized applications.",
  },
  {
    q: "What maintenance is required for long-term performance?",
    a: "Sustained performance requires preventive maintenance: high-efficiency multi-stage filtration (down to 5 microns), periodic nozzle inspection, pump pressure calibration and pipeline checks. Water quality management (TDS control, anti-scaling) is critical. Advanced systems include IoT-based predictive maintenance.",
  },
  {
    q: "How are modern systems integrated with automation and Industry 4.0?",
    a: "Contemporary systems are fully compatible with PLC, HMI and SCADA architectures, with sensors for temperature, humidity, particulate matter and pressure enabling adaptive operation. IoT integration facilitates remote monitoring, analytics, predictive maintenance and energy optimization.",
  },
];

export const aboutFaqs: Faq[] = [
  {
    q: "What fundamentally differentiates you from conventional misting providers?",
    a: "We are an engineering-led solution provider, not an equipment supplier. We adopt a first-principles approach grounded in thermodynamics, fluid mechanics and system engineering, designing solutions through rigorous parameter optimization — droplet size distribution, pressure stability, evaporation kinetics and spatial dispersion — to deliver quantifiable, engineering-validated results.",
  },
  {
    q: "What industries and application domains do you specialize in?",
    a: "Agro-environmental systems (poultry, livestock, greenhouses, mushroom cultivation), industrial environments (manufacturing and heavy engineering), mining/construction/bulk material handling (dust suppression), warehousing and logistics, and pharmaceutical/controlled environments. Each deployment is engineered around process sensitivities and operational load conditions.",
  },
  {
    q: "Do you provide turnkey engineering solutions or only supply equipment?",
    a: "We deliver fully integrated turnkey solutions — conceptual design and feasibility, detailed engineering and system architecture, precision equipment selection, installation, commissioning, calibration, automation integration and performance optimization. This end-to-end responsibility ensures complete process accountability.",
  },
  {
    q: "What core engineering expertise underpins your solutions?",
    a: "A multidisciplinary framework integrating thermodynamics (evaporative cooling, latent heat, psychrometrics), fluid mechanics (high-pressure flow, atomization), hydraulic system design, atomization science, and automation/control engineering (PLC, SCADA, IoT).",
  },
  {
    q: "What is your methodology for designing customized systems?",
    a: "A data-driven, analytical process: site-specific environmental analysis, psychrometric modeling to determine achievable limits, hydraulic and nozzle-network design, spatial layout optimization, and performance simulation and validation before implementation.",
  },
  {
    q: "Do you provide after-sales support and long-term maintenance?",
    a: "Yes — preventive and predictive maintenance programs, periodic performance audits and recalibration, technical troubleshooting and remote support, plus high-quality spare components and upgrades. We emphasize water quality, filtration integrity and nozzle performance consistency.",
  },
  {
    q: "Do you handle installation and commissioning with performance validation?",
    a: "Absolutely. Installation and commissioning are engineering-critical phases: precision installation per hydraulic and spatial design, pressure testing and flow calibration, nozzle alignment and spray-pattern verification, system balancing, and comprehensive performance validation under actual operating conditions.",
  },
];

export const industriesFaqs: Faq[] = [
  {
    q: "How do humidity and temperature influence industrial process stability?",
    a: "Relative humidity and ambient temperature determine material behavior, electrostatic conditions, dimensional stability and process efficiency. In textiles, paper and jute, inadequate humidity causes fiber brittleness, breakage and static buildup. In electronics and pharma, minor deviations can compromise product integrity and compliance.",
  },
  {
    q: "What differentiates a standard misting system from an engineered high-pressure fogging solution?",
    a: "Standard systems focus on basic atomization without precise control of droplet size, distribution or pressure. Engineered high-pressure systems (often 50–200 bar) produce ultra-fine droplets that evaporate rapidly — enabling effective cooling, humidification or dust suppression without surface wetting — through nozzle selection, pump calibration, zoning logic and environmental integration.",
  },
  {
    q: "How is system design customized for different industries?",
    a: "Each system is designed from a detailed evaluation of psychrometric conditions, process sensitivity, airflow dynamics, spatial geometry and operational requirements. Area volume, heat load, air-exchange rate and required precision determine nozzle density, pump capacity, control logic and sensor placement.",
  },
  {
    q: "Can systems operate autonomously without continuous human intervention?",
    a: "Yes. Once configured, systems receive real-time input from integrated sensors (humidity, temperature, pressure, flow) and execute predefined control logic. Time-based scheduling, parameter thresholds and feedback loops enable independent operation without manual supervision.",
  },
  {
    q: "What role do PLC and SCADA systems play?",
    a: "PLC systems execute real-time logic based on sensor inputs and programmed sequences. SCADA provides a higher-level interface for monitoring, data visualization, alarm management and remote control. Together they enable precise control, system transparency and data-driven decision-making.",
  },
  {
    q: "How do you ensure uniform humidity distribution in large spaces?",
    a: "Through airflow analysis, strategic nozzle layouts, independent zoning and pressure balancing for consistent output across all nozzles. Integration with HVAC or air-circulation systems enhances uniformity and prevents localized over- or under-humidification.",
  },
  {
    q: "What level of control accuracy is achievable?",
    a: "With high-quality sensors and calibrated controls, humidity can typically be maintained within ±2–5% RH. Temperature modulation through evaporative cooling is highly responsive, and feedback loops continuously adjust output to maintain stable, precise conditions.",
  },
  {
    q: "Can systems be scaled for multi-zone facilities and infrastructure?",
    a: "Yes. Zoning allows different areas to be controlled independently. This modular approach lets the system expand or adapt as operational needs evolve, without compromising performance.",
  },
  {
    q: "How do automation systems improve energy efficiency?",
    a: "Automation ensures equipment runs only when required and at the appropriate capacity. Sensor-driven logic adjusts output dynamically, and VFD integration regulates motor speeds — yielding significant energy savings and lower operational costs.",
  },
  {
    q: "Can systems be monitored and controlled remotely?",
    a: "Yes. Integration with SCADA and IoT platforms allows operators to access real-time data, adjust parameters and receive alerts from any location — enabling proactive, flexible system management.",
  },
  {
    q: "What safety mechanisms are integrated?",
    a: "Dry-run protection, pressure cut-off switches, overload protection, alarm systems and interlock logic ensure the system operates within safe limits, protecting both equipment and personnel.",
  },
  {
    q: "What is the typical lifecycle and ROI of these systems?",
    a: "Designed for long operational lifespans with proper maintenance. ROI comes from reduced material wastage, improved product quality, enhanced productivity and lower energy consumption — benefits that significantly outweigh the initial investment over time.",
  },
];

export const careersFaqs: Faq[] = [
  {
    q: "What kind of career opportunities does Aura Air Engineering offer?",
    a: "Opportunities across mechanical systems, industrial automation, HVAC, environmental control and project execution. As operations expand, roles will open in design engineering, control systems, site execution and technical sales — providing well-rounded exposure to real-world industrial applications.",
  },
  {
    q: "Are there any current job openings?",
    a: "At present we are not actively hiring, but we are in a phase of structured growth and will open positions soon across technical and operational roles. We encourage interested candidates to share their profiles for future consideration.",
  },
  {
    q: "Can I apply even if there are no active openings?",
    a: "Yes. We welcome proactive applications from candidates aligned with our domain and engineering approach. All submitted profiles are reviewed and shortlisted for upcoming opportunities.",
  },
  {
    q: "What qualifications are preferred for engineering roles?",
    a: "Typically a background in Mechanical Engineering, Electrical & Electronics Engineering, or Industrial Automation. A strong understanding of fundamentals combined with practical exposure to industrial systems is highly valued.",
  },
  {
    q: "Do you offer opportunities in automation and control systems?",
    a: "Yes — automation is a core part of our operations. We work extensively with PLC systems, SCADA platforms, sensor integration and control-panel design. Candidates with interest or experience in industrial automation will find significant growth opportunities.",
  },
  {
    q: "Is prior industry experience mandatory?",
    a: "Not always. While experience is advantageous, we also consider candidates with strong technical fundamentals, a problem-solving mindset and a willingness to learn in real-world project environments.",
  },
  {
    q: "Do you provide training or learning opportunities?",
    a: "Learning is largely driven through practical exposure — hands-on experience in system design, automation logic, site execution and troubleshooting enables continuous technical development.",
  },
  {
    q: "What kind of work environment can I expect?",
    a: "A professional, engineering-focused culture emphasizing precision, accountability and continuous improvement, where team members take ownership and contribute actively to project outcomes.",
  },
  {
    q: "Are there opportunities for site-based or field work?",
    a: "Yes. Many projects involve on-site execution and commissioning, providing valuable exposure to real operating conditions, system behavior and practical problem-solving.",
  },
  {
    q: "How can I apply for future opportunities?",
    a: 'Email your resume to sales@auraairengineering.com with the subject line "Careers". Our team will review your profile and contact you when a suitable role becomes available.',
  },
];

export const contactFaqs: Faq[] = [
  {
    q: "What level of project information enables an accurate engineering assessment?",
    a: "Application type (cooling, dust suppression, humidification), spatial dimensions (area/volume), environmental conditions (temperature, RH, airflow) and process-specific constraints. Architectural layouts, site imagery or process-flow details allow high-resolution modeling including droplet dispersion analysis, hydraulic load estimation and spatial optimization.",
  },
  {
    q: "How does your team evaluate and validate project requirements?",
    a: "Through a structured, multi-layered framework: psychrometric and thermodynamic analysis, fluid-dynamic assessment of atomization and dispersion, hydraulic modeling for pressure stability and flow uniformity, and application-specific performance mapping — ensuring every recommendation is derived from quantitative modeling.",
  },
  {
    q: "Should I request a quotation or a technical consultation?",
    a: "A quotation suits clearly-defined projects with known inputs (area, application, performance expectations). A technical consultation is recommended for conceptual or optimization-phase projects with multiple variables, complex conditions, or integration with existing infrastructure.",
  },
  {
    q: "What is the expected response time?",
    a: "All inquiries undergo a priority-based technical review, with an initial response typically within 24 hours. Detailed submissions may receive targeted follow-up queries to ensure subsequent recommendations are comprehensive and accurate.",
  },
  {
    q: "Do you support international projects with varying regulations?",
    a: "Yes. We support global deployments across diverse climatic zones and regulatory frameworks, incorporating region-specific environmental variability, compliance requirements and operational constraints aligned with internationally recognized standards.",
  },
  {
    q: "Can your team contribute to early-stage conceptualization and feasibility?",
    a: "We strongly advocate early-stage engagement — feasibility assessments based on thermodynamic limits, preliminary system architecture, performance benchmarking and integration pathways — reducing downstream inefficiencies, design revisions and cost escalations.",
  },
  {
    q: "What technical depth is included in your quotations?",
    a: "Our quotations are engineering-backed technical documents: system configuration and component-selection rationale, hydraulic parameters (pressure and flow), estimated coverage efficiency and performance benchmarks, and recommended layout strategy — execution-ready and transparent.",
  },
  {
    q: "How do you ensure consistent real-world performance?",
    a: "All designs derive from validated engineering principles and empirical methodologies, integrating thermodynamic modeling, fluid-behavior analysis and application-specific criteria, while accounting for dynamic environmental variables and operational load fluctuations.",
  },
];
