// Comprehensive mock data for CompAir multi-page website

export const companyInfo = {
  name: "CompAir",
  tagline: "Your compressed air system provider with heart and mind",
  heroTitle: "Reliability & Efficiency without Compromise",
  heroSubtitle: "Over 300 years of engineering excellence in compressed air solutions",
  description: "CompAir is a global provider of compressed air systems, offering a comprehensive range of compressors, air treatment solutions, and aftermarket services to over 100,000+ customers worldwide.",
  email: "info@compair.com",
  phone: "+1-800-COMPAIR",
  address: "CompAir Global Headquarters, United Kingdom",
  founded: "1968",
  countries: "50+",
  employees: "16,000+",
  customers: "100,000+",
  experience: "300+"
};

export const manufacturingFacility = {
  location: "Naroda, Gujarat, Western India",
  currentSize: "47,000 m²",
  currentSizeAcres: "10 Acres",
  expandedSize: "100,000 m²",
  expandedSizeAcres: "25 Acres",
  additionalExpansion: "60,000 m²",
  yearShifted: "2022",
  images: [
    "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHl8ZW58MHx8fHwxNzYyNzUyNTc0fDA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHl8ZW58MHx8fHwxNzYyNzUyNTc0fDA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE3NjI3NTI1ODR8MA&ixlib=rb-4.1.0&q=85"
  ],
  features: [
    "Strategically located in Western India",
    "Designed & constructed as per Seismic Codes",
    "IGBC Green Build compliant",
    "FM Global compliant",
    "Lean process (3P) designed product lines",
    "State-of-the-art Test infrastructure",
    "Roof-top Solar Panels",
    "Rainwater harvesting",
    "Zero Liquid discharge",
    "Efficient compressor and HVAC systems",
    "Building and Energy management system",
    "Green packaging with supply partners"
  ],
  breakdown: [
    { area: "Current Plant", size: "40,000 m²" },
    { area: "AMT & Service", size: "7,000 m²" },
    { area: "Hydrogen", size: "4,000 m²" },
    { area: "New Line", size: "12,000 m²" },
    { area: "Footprint Projects", size: "7,000 m²" },
    { area: "Future Expansion", size: "30,000 m²" }
  ]
};

export const brandsAndBusinesses = [
  { name: "CompAir", description: "Compressed air solutions provider" },
  { name: "iConn", description: "Smart compressor service with real-time monitoring" },
  { name: "Assure", description: "Extended warranty programs (Assure 10, Extend 5)" },
  { name: "PureAir", description: "Oil-free rotary screw air compressors" },
  { name: "ULTIMA", description: "Premium oil-free rotary screw compressors" },
  { name: "Gardner Denver", description: "Global supplier of compressed air technologies" },
  { name: "Champion", description: "Industrial air compressor solutions" },
  { name: "Hydrovane", description: "Sliding vane compressor technology" }
];

export const productCategories = [
  {
    id: 1,
    name: "Reciprocating Compressors",
    shortName: "Reciprocating",
    description: "Durable cast-iron, two-stage design with 175 PSI max operating pressure and 100% continuous duty for tough applications.",
    image: "https://images.unsplash.com/photo-1679303777007-c6c4522beb02?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxyZWNpcHJvY2F0aW5nJTIwYWlyJTIwY29tcHJlc3NvciUyMGluZHVzdHJpYWx8ZW58MHx8fHwxNzYyNzUyNTE4fDA&ixlib=rb-4.1.0&q=85",
    features: [
      "Cast-iron two-stage design",
      "Automatic start/stop control",
      "175 PSI maximum pressure",
      "100% continuous duty"
    ]
  },
  {
    id: 2,
    name: "Oil Lubricated Rotary Screw",
    shortName: "Contact Cooled",
    description: "German engineering with premium efficiency airend, range 3-290 kW in 7-13 barg for fixed & regulated speed with industry-leading warranty.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc2Mjc1MjU1MXww&ixlib=rb-4.1.0&q=85",
    features: [
      "German Engineering & design",
      "Premium efficiency airend",
      "Industry leading warranty",
      "iConn for >45 kW models"
    ]
  },
  {
    id: 3,
    name: "Oil-Free Rotary Screw",
    shortName: "Oil-Free",
    description: "Stainless steel rotors with UltraCoat™ coating, delivering 100% oil-free air with full ISO Class 0 certification for critical applications.",
    image: "https://images.unsplash.com/photo-1701448150058-43d6d199b103?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHw0fHxyb3RhcnklMjBzY3JldyUyMGNvbXByZXNzb3J8ZW58MHx8fHwxNzYyNzUyNTQ2fDA&ixlib=rb-4.1.0&q=85",
    features: [
      "Stainless steel rotors",
      "UltraCoat™ protection",
      "ISO Class 0 certified",
      "100% oil-free air"
    ]
  }
];

// T30 Reciprocating Compressor Models
export const t30Models = [
  { model: "GD2340F", rpm: 1000, pressure: "175 psig", mounting: "F Tank 150L", hp: "3 HP", cfm: "8.65", control: "ASSC", price: "89,900" },
  { model: "GD2475C", rpm: 866, pressure: "175 psig", mounting: "C Tank 225L", hp: "5 HP", cfm: "13.99", control: "ASSC", price: "1,09,300" },
  { model: "GD2475C", rpm: 1100, pressure: "175 psig", mounting: "C Tank 225L", hp: "7.5 HP", cfm: "17.77", control: "ASSC", price: "1,17,700" },
  { model: "GD2545D", rpm: 750, pressure: "175 psig", mounting: "D Tank 300L", hp: "7.5 HP", cfm: "24.18", control: "ASSC", price: "1,47,700" },
  { model: "GD2545E", rpm: 950, pressure: "175 psig", mounting: "E Tank 500L", hp: "10 HP", cfm: "30.00", control: "CSC", price: "1,66,600" },
  { model: "GD7100E", rpm: 1000, pressure: "125 psig", mounting: "E Tank 500L", hp: "15 HP", cfm: "42.78", control: "ASSC", price: "2,43,600" }
];

// Oil Lubricated Rotary Screw Models
export const oilLubricatedModels = [
  { series: "Frame-0", models: "L03B-05B", capacity: "14-27 CFM", power: "3-5 kW" },
  { series: "Frame-1", models: "L07B-11B / L07-11", capacity: "39-66 CFM", power: "7-11 kW" },
  { series: "Frame-2", models: "L15B-22B / L15-22", capacity: "98-129 CFM", power: "15-22 kW" },
  { series: "Frame-2+", models: "L23-29", capacity: "147-195 CFM", power: "23-29 kW" },
  { series: "Frame-3", models: "L30B-45B / L30-45", capacity: "203-283 CFM", power: "30-45 kW" },
  { series: "Frame-4", models: "L55B-75B / L55-75", capacity: "360-520 CFM", power: "55-75 kW" },
  { series: "Frame-5", models: "L132B / L90-132", capacity: "617-890 CFM", power: "90-132 kW" },
  { series: "Frame-6", models: "L160B / L160e-290e", capacity: "1040-1690 CFM", power: "160-290 kW" }
];

// Oil-Free Rotary Screw Models
export const oilFreeModels = [
  { series: "DH15-37", flow: "0.3-6.9 m³/min", power: "15-37 kW", speed: "Fixed/Variable" },
  { series: "D37-75sRS", flow: "2.6-12.3 m³/min", power: "37-75 kW", speed: "Variable" },
  { series: "DS90-150", flow: "14.5-25.6 m³/min", power: "90-160 kW", speed: "Fixed" },
  { series: "DX-Series 200-355", flow: "11.4-53.3 m³/min", power: "200-355 kW", speed: "Fixed" },
  { series: "Ultima U75-160", flow: "6.5-24 m³/min", power: "75-160 kW", speed: "Fixed" }
];

// Air Treatment Products
export const airTreatmentProducts = [
  {
    category: "Compressed Air Filters",
    type: "Dust & Activated Carbon",
    features: ["Low Pressure Drop", "Superior Filtration Technology"]
  },
  {
    category: "Refrigerant Dryer",
    range: "25-6500 CFM",
    features: ["Low Pressure Drop", "Energy Saving", "Remote Connectivity"]
  },
  {
    category: "Desiccant Dryer",
    type: "HOC & Heatless PSA",
    range: "20-1800 CFM",
    features: ["Low Pressure Drop", "Energy Saving", "Remote Connectivity"]
  },
  {
    category: "Air Receivers",
    capacity: "Up to 20 m³ / 10,000 Liters",
    pressure: "12.3 kg/cm²",
    code: "IS2825"
  },
  {
    category: "Drain Valves",
    type: "Zero Loss",
    pressure: "Up to 50 Bar",
    features: ["No Electricity", "Magnetic operated"]
  },
  {
    category: "Aluminum Piping",
    warranty: "10 Years",
    range: "20-158 mm",
    features: ["Quick-Fit System", "Flexible & Quick to install"]
  }
];

export const industries = [
  {
    name: "Automotive",
    description: "Compressed air solutions for assembly lines, paint booths, and pneumatic tools",
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NjI3NTI2MDh8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    name: "Pharmaceutical",
    description: "Oil-free air for critical pharmaceutical manufacturing and packaging",
    image: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg"
  },
  {
    name: "Food & Beverage",
    description: "Clean, oil-free compressed air for food processing and packaging",
    image: "https://images.unsplash.com/photo-1652211955967-99c892925469?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvY2Vzc2luZ3xlbnwwfHx8fDE3NjI3NTI2MjN8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    name: "General Manufacturing",
    description: "Reliable compressed air for diverse manufacturing applications",
    image: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NjI3NTI2MDh8MA&ixlib=rb-4.1.0&q=85"
  },
  { name: "Aerospace" },
  { name: "Chemicals & Plastics" },
  { name: "Electronics & Semiconductor" },
  { name: "Oil & Gas" },
  { name: "Mining & Construction" },
  { name: "Power Generation" },
  { name: "Cement" },
  { name: "Steel" },
  { name: "Marine" },
  { name: "Pulp & Paper" }
];

export const aftermarketServices = [
  {
    title: "Trained Technicians",
    description: "Factory certified and trained to the highest safety standards",
    icon: "UserCheck"
  },
  {
    title: "Genuine Parts",
    description: "Maximum reliability and optimal performance, eliminates unnecessary wear and tear",
    icon: "Package"
  },
  {
    title: "Predictive Diagnostics",
    description: "Utilizing iConn technology and big data analytics for proactive diagnostic reports",
    icon: "Activity"
  },
  {
    title: "Extended Warranty",
    description: "Assure 10: Up to 44,000 hours / 10 years on airend | Extend 5: Up to 40,000 hours / 5 years complete compressor",
    icon: "Shield"
  },
  {
    title: "Annual Maintenance Contracts",
    description: "Regular maintenance to ensure peak performance and efficiency",
    icon: "Calendar"
  },
  {
    title: "24/7 Breakdown Assistance",
    description: "Round-the-clock support to minimize downtime",
    icon: "Phone"
  }
];

export const lifeCycleCost = {
  capital: { percentage: 10, label: "Capital Cost" },
  maintenance: { percentage: 15, label: "Maintenance" },
  power: { percentage: 75, label: "Power Consumption" },
  note: "Based on 8000 hours of operation with 80% load and 20% unload cycle"
};

export const compairNetwork = {
  manufacturing: 24,
  distributionCenters: 2,
  orderManagement: 2,
  countries: "50+",
  employees: "16,000+",
  customers: "100,000+"
};

export const timeline = [
  { year: "1859", event: "Invented first speed control device for steam engines" },
  { year: "1968", event: "CompAir founded in the United Kingdom" },
  { year: "1994", event: "Went public on NYSE" },
  { year: "2017", event: "Merger with Ingersoll Rand Industrial Group" },
  { year: "2022", event: "Expanded manufacturing to 47,000 m² facility in Naroda" },
  { year: "Today", event: "Serving 100,000+ customers in 50+ countries" }
];

export const downloads = [
  {
    id: 1,
    title: "L45-L132 V4 Rotary Screw Compressors Catalogue",
    description: "Complete technical specifications and features for our L-Series fixed and regulated speed compressors.",
    fileSize: "2.4 MB",
    pages: "8 pages",
    type: "Product Catalog",
    url: "https://customer-assets.emergentagent.com/job_afaeefd7-9c9f-4df0-af93-c4afcb72c5d8/artifacts/dkt9pl3v_60652_4_10_24_L45_L132_V4_ROTARY_SCREW_COMPRESSORS_CATALOGUE_8_PAGE_2024_09_A_INDIA_%282%29%5B1%5D.pdf"
  },
  {
    id: 2,
    title: "CompAir Corporate Presentation",
    description: "Discover CompAir's history, product range, services, and our commitment to excellence in compressed air solutions.",
    fileSize: "5.8 MB",
    pages: "34 pages",
    type: "Corporate Overview",
    url: "https://customer-assets.emergentagent.com/job_afaeefd7-9c9f-4df0-af93-c4afcb72c5d8/artifacts/ywbe2i8m_CompAir_CorporatePPT%5B1%5D.pdf"
  },
  {
    id: 3,
    title: "CAIN WG T30 Warranty Guide",
    description: "Comprehensive warranty information and terms for CompAir compressed air systems.",
    fileSize: "1.2 MB",
    pages: "12 pages",
    type: "Warranty Guide",
    url: "https://customer-assets.emergentagent.com/job_afaeefd7-9c9f-4df0-af93-c4afcb72c5d8/artifacts/cy7fmnua_59560_3_1_25_CAIN_WG_T30_R0_2025_R0%5B1%5D.pdf"
  }
];
