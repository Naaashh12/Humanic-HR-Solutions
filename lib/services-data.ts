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
    title: 'HR Strategy & Advisory',
    icon: 'Wrench',
    shortDescription: 'Practical HR guidance for stronger people operations',
    fullDescription: 'Comprehensive HR advisory services including workforce strategy, organizational planning, and people-process improvement. Our team helps leadership teams diagnose HR challenges and turn them into clear, actionable priorities.',
    features: [
      'HR Strategy Development',
      'Organizational Structure Review',
      'People Process Improvement',
      'Leadership Advisory Sessions',
      'Workforce Performance Planning',
      'HR Support 24/7',
    ],
    highlights: [
      'Experienced HR consultants with 20+ years experience',
      'Data-informed people diagnostics',
      'Practical solutions with minimal disruption',
      'Clear action plans for every engagement',
    ],
    relatedServices: ['electrical-instrumentation', 'equipment-rental'],
    capabilities: [
      'HR Operating Model Design',
      'Workforce Policy Review',
      'Leadership Team Alignment',
      'Employee Lifecycle Mapping',
      'People Risk Assessment',
      'HR Transformation Roadmaps',
    ],
  },
  {
    slug: 'civil',
    title: 'Policy & Compliance',
    icon: 'Hard Hat',
    shortDescription: 'HR policies and compliance frameworks built for clarity',
    fullDescription: 'Full-spectrum HR policy and compliance services including handbook development, labor regulation alignment, internal controls, and employee documentation. We help organizations create clear standards that support fair, consistent decision-making.',
    features: [
      'Employee Handbook Development',
      'Policy Gap Assessment',
      'Labor Law Alignment',
      'HR Documentation Standards',
      'Disciplinary Process Design',
      'Compliance Review Checks',
    ],
    highlights: [
      'Structured HR governance processes',
      'Clear documentation templates',
      'Experienced compliance guidance',
      'On-schedule, on-budget delivery',
    ],
    relatedServices: ['material-supply', 'manpower-supply'],
    capabilities: [
      'Policy Library Creation',
      'Employment Contract Review',
      'Onboarding Documentation',
      'Employee Relations Protocols',
      'Audit Readiness Support',
      'Compliance Training Materials',
    ],
  },
  {
    slug: 'equipment-rental',
    title: 'HR Technology Enablement',
    icon: 'Zap',
    shortDescription: 'Flexible HR systems support for modern teams',
    fullDescription: 'Comprehensive HR technology enablement with support for HRIS setup, workflow automation, employee records, and reporting tools. We offer flexible implementation support tailored to your organization timeline and requirements.',
    features: [
      'HRIS Setup Support',
      'Employee Database Structuring',
      'Recruitment Workflow Tools',
      'Self-Service Portal Guidance',
      'System Rollout Planning',
      'Ongoing Administration Support',
    ],
    highlights: [
      'Talent database of 500+ profiles',
      'Modern, scalable HR workflows',
      'Flexible pricing models',
      'Rapid implementation support',
    ],
    relatedServices: ['mechanical', 'manpower-supply'],
    capabilities: [
      'HRIS Configuration',
      'Applicant Tracking Setup',
      'Digital Employee Files',
      'Payroll System Coordination',
      'Workflow Automation',
      'HR Dashboard Support',
    ],
  },
  {
    slug: 'manpower-supply',
    title: 'Permanent Recruitment',
    icon: 'Users',
    shortDescription: 'End-to-end hiring support for critical permanent roles',
    fullDescription: 'We help organizations attract, assess, and secure dependable professionals for long-term roles. Our recruitment approach combines market mapping, targeted sourcing, structured interviews, and candidate guidance to support strong, lasting placements.',
    features: [
      'Role profiling and sourcing',
      'Candidate screening and shortlisting',
      'Interview coordination',
      'Offer support and onboarding alignment',
      'Reference checks',
      'Employment compliance guidance',
    ],
    highlights: [
      'Specialized in mid to senior roles',
      'Fast turnaround with quality control',
      'Strong candidate communication',
      'Flexible recruitment models',
    ],
    relatedServices: ['civil', 'equipment-rental'],
    capabilities: [
      'Permanent role hiring',
      'Talent market mapping',
      'Candidate assessment frameworks',
      'Offer negotiation support',
      'Onboarding readiness',
      'Hiring manager advisory',
    ],
  },
  {
    slug: 'material-supply',
    title: 'Contract Staffing',
    icon: 'Package',
    shortDescription: 'Flexible staffing for short-term, project-based, or seasonal workforce needs',
    fullDescription: 'Our contract staffing solution gives organizations rapid access to qualified professionals without the long-term commitment of permanent hiring. We support business continuity, project delivery, and specialized coverage with timely placements.',
    features: [
      'Short-term staffing support',
      'Project-based resource deployment',
      'Rapid candidate sourcing',
      'Role-specific screening',
      'Compliance-ready onboarding',
      'Replacement and backup coverage',
    ],
    highlights: [
      'Flexible engagement durations',
      'Quick deployment turnaround',
      'Experienced candidate pool',
      'Cost-effective workforce agility',
    ],
    relatedServices: ['civil', 'mechanical'],
    capabilities: [
      'Temporary resource deployment',
      'Project staffing coordination',
      'Contract documentation support',
      'Performance monitoring',
      'Workforce scaling support',
      'On-demand role coverage',
    ],
  },
  {
    slug: 'electrical-instrumentation',
    title: 'Executive Search',
    icon: 'Lightbulb',
    shortDescription: 'Confidential leadership hiring for senior and strategic roles',
    fullDescription: 'We manage executive search assignments with discretion, precision, and market insight. From board-level appointments to senior management roles, we identify leaders who can drive transformation, governance, and organizational growth.',
    features: [
      'Confidential search process',
      'Leadership competency mapping',
      'Targeted executive sourcing',
      'Interview and assessment support',
      'Reference and background review',
      'Offer strategy guidance',
    ],
    highlights: [
      'Culturally aligned leadership candidates',
      'Confidential and professional process',
      'Deep talent network',
      'Strong succession outcomes',
    ],
    relatedServices: ['mechanical', 'valve-maintenance'],
    capabilities: [
      'C-suite and senior leadership search',
      'Succession planning support',
      'Board-level hiring advisory',
      'Leadership assessment frameworks',
      'Stakeholder alignment',
      'Negotiation support',
    ],
  },
  {
    slug: 'valve-maintenance',
    title: 'Gulf Recruitment',
    icon: 'Settings',
    shortDescription: 'Recruitment support for businesses operating across Gulf markets',
    fullDescription: 'We support employers seeking qualified talent across Gulf-based operations, with practical guidance on local hiring expectations, market conditions, and candidate screening. Our process is designed for speed, compliance, and regional relevance.',
    features: [
      'Regional candidate sourcing',
      'Market-informed hiring strategy',
      'Interview support',
      'Visa and documentation coordination',
      'Employer branding support',
      'Regional talent mapping',
    ],
    highlights: [
      'Experience across Gulf hiring markets',
      'Cross-border hiring readiness',
      'Strong regional candidate network',
      'Efficient deployment support',
    ],
    relatedServices: ['mechanical', 'metering-skid'],
    capabilities: [
      'Gulf market recruitment',
      'Regional workforce planning',
      'Candidate relocation support',
      'Localization guidance',
      'Compliance coordination',
      'Hiring process advisory',
    ],
  },
  {
    slug: 'metering-skid',
    title: 'Bulk Hiring',
    icon: 'Activity',
    shortDescription: 'High-volume recruitment programs for fast-moving organizations',
    fullDescription: 'For organizations scaling quickly, we deliver high-volume hiring campaigns with structured coordination, candidate pipelines, and reporting. Our approach is built to manage large hiring needs while maintaining quality and turnaround speed.',
    features: [
      'High-volume campaign setup',
      'Candidate pipeline management',
      'Screening and scheduling support',
      'Shift and location coordination',
      'Rapid reporting dashboards',
      'Hiring team enablement',
    ],
    highlights: [
      'Designed for large intake programs',
      'Consistent quality standards',
      'Scalable recruitment operations',
      'Faster time-to-fill',
    ],
    relatedServices: ['valve-maintenance', 'electrical-instrumentation'],
    capabilities: [
      'Mass recruitment campaigns',
      'Campus and volume hiring support',
      'Hiring event coordination',
      'Candidate tracking systems',
      'Operational reporting',
      'Capacity planning',
    ],
  },
  {
    slug: 'analyzer-shelter',
    title: 'Payroll Support',
    icon: 'Square',
    shortDescription: 'Reliable payroll processing support for growing teams',
    fullDescription: 'Our payroll support services help businesses manage salary processing, compliance reporting, and employee pay records with accuracy and consistency. We bring practical process control to reduce errors and improve payroll confidence.',
    features: [
      'Payroll processing assistance',
      'Salary cycle coordination',
      'Employee pay record maintenance',
      'Compliance reporting support',
      'Payroll query handling',
      'Benefits and deductions coordination',
    ],
    highlights: [
      'Accurate and dependable processing',
      'Clear payroll workflows',
      'Supports growing teams',
      'Reduced administrative burden',
    ],
    relatedServices: ['electrical-instrumentation', 'mechanical'],
    capabilities: [
      'Salary processing support',
      'Attendance and leave inputs',
      'Deduction management',
      'Payroll reconciliation',
      'Reporting and audit support',
      'Employee pay record administration',
    ],
  },
  {
    slug: 'dewatering',
    title: 'HR Consulting',
    icon: 'Droplet',
    shortDescription: 'Practical HR advisory for leaders managing change and growth',
    fullDescription: 'Our HR consulting services provide strategic guidance for organizations navigating growth, restructuring, and people challenges. We help leadership teams make confident decisions around structure, processes, and workforce priorities.',
    features: [
      'HR strategy workshops',
      'Organizational design reviews',
      'Policy and process improvement',
      'Change management support',
      'Leadership team advisory',
      'People operations planning',
    ],
    highlights: [
      'Practical recommendations',
      'Tailored to business context',
      'Focused on execution',
      'Experienced consultant-led support',
    ],
    relatedServices: ['equipment-rental', 'mechanical'],
    capabilities: [
      'HR transformation planning',
      'People process redesign',
      'Leadership advisory',
      'Workforce planning support',
      'Operational readiness support',
      'Change management guidance',
    ],
  },
  {
    slug: 'pumping-station',
    title: 'HR Operations Support',
    icon: 'Gauge',
    shortDescription: 'Day-to-day HR support for reliable people operations',
    fullDescription: 'Complete HR operations support covering employee requests, process coordination, documentation, and service delivery. We help keep your people operations reliable, efficient, and easy for employees to navigate.',
    features: [
      'HR Helpdesk Support',
      'Employee Request Management',
      'Process Optimization',
      'Emergency HR Response Support',
      'Training & Documentation',
      'Service Performance Reporting',
    ],
    highlights: [
      '24/7 HR support options',
      'Proactive issue tracking',
      'Efficiency optimization',
      'Employee query delays minimized',
    ],
    relatedServices: ['mechanical', 'valve-maintenance'],
    capabilities: [
      'Employee Helpdesk',
      'HR Case Management',
      'Onboarding Coordination',
      'Offboarding Administration',
      'Employee Records Management',
      'Service Quality Analysis',
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
