export interface Service {
  slug: string;
  title: string;
  icon: string; // lucide-react icon name or custom SVG identifier
  shortDescription: string;
  fullDescription: string;
  features: string[];
  highlights: string[];
  relatedServices: string[];
  capabilities: string[];
}

export const SERVICES: Service[] = [
  {
    slug: 'mechanical',
    title: 'Mechanical Services',
    icon: 'Wrench',
    shortDescription: 'Expert mechanical solutions for industrial operations',
    fullDescription: 'Comprehensive mechanical services including installation, maintenance, and repair of industrial equipment. Our team specializes in diagnosing and resolving complex mechanical issues with precision and efficiency.',
    features: [
      'Equipment Installation & Commissioning',
      'Preventive Maintenance Programs',
      'Emergency Repair Services',
      'Equipment Troubleshooting',
      'Performance Optimization',
      'Technical Support 24/7',
    ],
    highlights: [
      'Certified technicians with 20+ years experience',
      'State-of-the-art diagnostic equipment',
      'Minimal downtime solutions',
      'Warranty coverage on all repairs',
    ],
    relatedServices: ['electrical-instrumentation', 'equipment-rental'],
    capabilities: [
      'Pump & Compressor Service',
      'Turbine Maintenance',
      'Gearbox Repair',
      'Bearing & Seal Replacement',
      'Vibration Analysis',
      'Mechanical Alignment Services',
    ],
  },
  {
    slug: 'civil',
    title: 'Civil Works',
    icon: 'Hard Hat',
    shortDescription: 'Infrastructure and construction solutions',
    fullDescription: 'Full-spectrum civil engineering and construction services including site preparation, foundation work, structural construction, and facility development. We ensure all projects meet international standards and specifications.',
    features: [
      'Site Preparation & Excavation',
      'Foundation Work',
      'Structural Construction',
      'Concrete Work',
      'Steel Fabrication & Installation',
      'Quality Assurance Testing',
    ],
    highlights: [
      'ISO 9001 certified processes',
      'Advanced surveying technology',
      'Project management expertise',
      'On-schedule, on-budget delivery',
    ],
    relatedServices: ['material-supply', 'manpower-supply'],
    capabilities: [
      'Building Construction',
      'Infrastructure Development',
      'Concrete Pouring & Curing',
      'Structural Steel Work',
      'Pile Installation',
      'Foundation Design & Execution',
    ],
  },
  {
    slug: 'equipment-rental',
    title: 'Equipment Rental Services',
    icon: 'Zap',
    shortDescription: 'Flexible equipment leasing for all industrial needs',
    fullDescription: 'Comprehensive equipment rental solutions with a diverse fleet of well-maintained machinery. We offer flexible rental terms tailored to your project timeline and requirements.',
    features: [
      'Heavy Equipment Rental',
      'Lifting Equipment',
      'Compressors & Power Tools',
      'Safety Equipment Packages',
      'Delivery & Setup Services',
      'Maintenance Included',
    ],
    highlights: [
      'Fleet of 500+ pieces of equipment',
      'Modern, regularly serviced machinery',
      'Competitive pricing models',
      'Rapid mobilization',
    ],
    relatedServices: ['mechanical', 'manpower-supply'],
    capabilities: [
      'Cranes & Lifting Equipment',
      'Excavators & Loaders',
      'Air Compressors',
      'Power Generators',
      'Scaffolding Systems',
      'Safety & Support Equipment',
    ],
  },
  {
    slug: 'manpower-supply',
    title: 'Manpower Supply Services',
    icon: 'Users',
    shortDescription: 'Skilled workforce for industrial projects',
    fullDescription: 'Access to a pool of trained, vetted professionals ready to support your operations. We provide skilled labor across multiple disciplines with full compliance to safety and employment regulations.',
    features: [
      'Skilled & Semi-Skilled Workers',
      'Safety-Trained Personnel',
      'Project-Based Teams',
      'Long-Term Staff Solutions',
      'Training & Development',
      'Compliance & Documentation',
    ],
    highlights: [
      'Extensive background checks',
      'Safety certifications required',
      'Flexible contract terms',
      'Experienced supervisors',
    ],
    relatedServices: ['civil', 'material-supply'],
    capabilities: [
      'Laborers & Helpers',
      'Equipment Operators',
      'Technicians & Specialists',
      'Supervisors & Foremen',
      'Safety Officers',
      'Logistics & Warehouse Staff',
    ],
  },
  {
    slug: 'material-supply',
    title: 'Material Supply Services',
    icon: 'Package',
    shortDescription: 'Industrial materials and supplies procurement',
    fullDescription: 'Strategic sourcing and supply of industrial materials, equipment, and components. We maintain partnerships with leading manufacturers ensuring quality and competitive pricing.',
    features: [
      'Material Sourcing & Procurement',
      'Quality Control Assurance',
      'Inventory Management',
      'Just-in-Time Delivery',
      'Cost Optimization',
      'Vendor Management',
    ],
    highlights: [
      'Established supplier network',
      'Competitive bulk pricing',
      'Certified quality materials',
      'Reliable delivery schedules',
    ],
    relatedServices: ['civil', 'mechanical'],
    capabilities: [
      'Steel & Metal Products',
      'Construction Materials',
      'Industrial Consumables',
      'Safety Equipment',
      'Specialized Components',
      'Custom Fabrication Support',
    ],
  },
  {
    slug: 'electrical-instrumentation',
    title: 'Electrical & Instrumentation Services',
    icon: 'Lightbulb',
    shortDescription: 'Advanced electrical and control system solutions',
    fullDescription: 'Comprehensive electrical installation, maintenance, and instrumentation services. Our experts handle everything from control systems to process automation with precision and safety.',
    features: [
      'Electrical Installation & Wiring',
      'Control Systems Design',
      'Instrumentation & Calibration',
      'Process Automation',
      'Safety System Installation',
      'Predictive Maintenance',
    ],
    highlights: [
      'Licensed electrical engineers',
      'Latest control technology',
      'ISO compliance certified',
      'Minimal operational disruption',
    ],
    relatedServices: ['mechanical', 'valve-maintenance'],
    capabilities: [
      'Low & High Voltage Systems',
      'PLC Programming',
      'SCADA Systems',
      'Sensor Installation & Calibration',
      'Control Loop Tuning',
      'Equipment Commissioning',
    ],
  },
  {
    slug: 'valve-maintenance',
    title: 'Valve Maintenance & Services',
    icon: 'Settings',
    shortDescription: 'Specialized valve service and maintenance',
    fullDescription: 'Dedicated valve maintenance, repair, and replacement services. We ensure optimal flow control and system reliability through expert servicing of all valve types.',
    features: [
      'Preventive Valve Maintenance',
      'Valve Repair & Overhaul',
      'Valve Replacement Services',
      'Leak Detection & Sealing',
      'Pressure Testing',
      'Valve Certification',
    ],
    highlights: [
      'OEM-trained technicians',
      'Original spare parts',
      'Quick turnaround times',
      'Performance guarantees',
    ],
    relatedServices: ['mechanical', 'metering-skid'],
    capabilities: [
      'Gate, Globe, & Check Valves',
      'Ball & Butterfly Valves',
      'Pressure Relief Valves',
      'Control Valves',
      'Specialty Valves',
      'Complete System Testing',
    ],
  },
  {
    slug: 'metering-skid',
    title: 'Metering Skid Installation & Maintenance',
    icon: 'Activity',
    shortDescription: 'Metering systems installation and support',
    fullDescription: 'Complete metering skid installation, calibration, and maintenance services. We provide integrated solutions for accurate flow measurement and custody transfer applications.',
    features: [
      'Skid Design & Fabrication',
      'Installation & Commissioning',
      'Calibration Services',
      'Maintenance & Repair',
      'Software Integration',
      'Regulatory Compliance Support',
    ],
    highlights: [
      'ASME/API certified equipment',
      'Meter uncertainty qualification',
      'Automated data logging',
      'Remote monitoring capabilities',
    ],
    relatedServices: ['valve-maintenance', 'electrical-instrumentation'],
    capabilities: [
      'Turbine Meter Skids',
      'Ultrasonic Meter Installations',
      'Density Meter Integration',
      'Temperature Compensation',
      'Data Acquisition Systems',
      'Custody Transfer Solutions',
    ],
  },
  {
    slug: 'analyzer-shelter',
    title: 'Analyzer Shelter Repair & Maintenance',
    icon: 'Square',
    shortDescription: 'Analytical equipment housing solutions',
    fullDescription: 'Specialized repair, maintenance, and refurbishment of analyzer shelters and analytical equipment housings. We ensure proper environmental control and equipment protection.',
    features: [
      'Shelter Structural Repair',
      'HVAC System Maintenance',
      'Electrical System Upgrades',
      'Environmental Controls',
      'Safety System Installation',
      'Full Refurbishment Services',
    ],
    highlights: [
      'Climate control expertise',
      'Equipment-specific designs',
      'Safety-compliant installations',
      'Extended equipment life',
    ],
    relatedServices: ['electrical-instrumentation', 'mechanical'],
    capabilities: [
      'Thermal Management',
      'Ventilation Solutions',
      'Instrumentation Protection',
      'Access System Upgrades',
      'Cable Management',
      'Environmental Monitoring',
    ],
  },
  {
    slug: 'dewatering',
    title: 'Dewatering Systems & Services',
    icon: 'Droplet',
    shortDescription: 'Water removal and management solutions',
    fullDescription: 'Comprehensive dewatering services for construction, mining, and industrial applications. We provide efficient water removal solutions with environmental responsibility.',
    features: [
      'System Design & Installation',
      'Pump Equipment Supply',
      'Operation & Monitoring',
      'Permits & Compliance',
      'Environmental Protection',
      'Emergency Dewatering',
    ],
    highlights: [
      'High-capacity pump systems',
      'Real-time monitoring',
      'Environmental compliance',
      'Rapid deployment capability',
    ],
    relatedServices: ['equipment-rental', 'mechanical'],
    capabilities: [
      'Well Point Systems',
      'Submersible Pumping',
      'Centrifuge Dewatering',
      'Slurry Handling',
      'Groundwater Management',
      'Water Treatment Solutions',
    ],
  },
  {
    slug: 'pumping-station',
    title: 'Pumping Station Maintenance & Operations',
    icon: 'Gauge',
    shortDescription: 'Operational support for pumping facilities',
    fullDescription: 'Complete maintenance, operation, and optimization services for pumping stations. We ensure reliable, efficient operation of your fluid transfer systems.',
    features: [
      'Station Operation & Monitoring',
      'Pump Maintenance Programs',
      'System Optimization',
      'Emergency Response Support',
      'Training & Documentation',
      'Performance Reporting',
    ],
    highlights: [
      '24/7 operational support',
      'Predictive maintenance',
      'Efficiency optimization',
      'Downtime minimization',
    ],
    relatedServices: ['mechanical', 'valve-maintenance'],
    capabilities: [
      'Centrifugal Pump Service',
      'Positive Displacement Pumps',
      'Pipeline System Management',
      'Discharge Facility Maintenance',
      'Power Equipment Management',
      'Flow Optimization Analysis',
    ],
  },
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(service => service.slug === slug);
}

// Helper function to get all service slugs for static generation
export function getAllServiceSlugs(): string[] {
  return SERVICES.map(service => service.slug);
}

// Helper function to get related services
export function getRelatedServices(slug: string): Service[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  
  return service.relatedServices
    .map(relatedSlug => getServiceBySlug(relatedSlug))
    .filter((s): s is Service => s !== undefined);
}

// Helper function to search services
export function searchServices(query: string): Service[] {
  const lowerQuery = query.toLowerCase();
  return SERVICES.filter(service =>
    service.title.toLowerCase().includes(lowerQuery) ||
    service.shortDescription.toLowerCase().includes(lowerQuery) ||
    service.features.some(f => f.toLowerCase().includes(lowerQuery))
  );
}
