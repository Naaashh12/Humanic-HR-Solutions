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
    title: 'Talent Acquisition Services',
    icon: 'Users',
    shortDescription: 'Qualified talent pipelines for growing organizations',
    fullDescription: 'Access to a pool of screened, qualified professionals ready to support your hiring goals. We provide recruitment support across multiple functions with careful attention to role requirements, candidate fit, and employment compliance.',
    features: [
      'Permanent Recruitment',
      'Contract Staffing Support',
      'Project-Based Hiring Teams',
      'Long-Term Workforce Solutions',
      'Candidate Screening & Assessment',
      'Compliance & Documentation',
    ],
    highlights: [
      'Extensive background checks',
      'Role-specific screening standards',
      'Flexible contract terms',
      'Experienced recruitment consultants',
    ],
    relatedServices: ['civil', 'material-supply'],
    capabilities: [
      'Executive Search',
      'Bulk Hiring Campaigns',
      'Technical & Professional Roles',
      'Supervisor & Manager Hiring',
      'HR Interview Coordination',
      'Candidate Database Management',
    ],
  },
  {
    slug: 'material-supply',
    title: 'Payroll & Benefits Services',
    icon: 'Package',
    shortDescription: 'Reliable payroll, benefits, and employee support',
    fullDescription: 'Strategic payroll and benefits support for organizations that need accurate salary processing, employee records, and benefits coordination. We maintain practical workflows that improve reliability, transparency, and employee confidence.',
    features: [
      'Payroll Processing Support',
      'Benefits Administration',
      'Employee Record Management',
      'Salary Cycle Coordination',
      'Cost Optimization',
      'Vendor Management',
    ],
    highlights: [
      'Established benefits partner network',
      'Competitive administration models',
      'Accurate employee records',
      'Reliable payroll schedules',
    ],
    relatedServices: ['civil', 'mechanical'],
    capabilities: [
      'Salary Processing',
      'Leave & Attendance Inputs',
      'Benefits Enrollment',
      'Employee Query Support',
      'Compliance Reporting',
      'Compensation Data Support',
    ],
  },
  {
    slug: 'electrical-instrumentation',
    title: 'Employee Relations Services',
    icon: 'Lightbulb',
    shortDescription: 'Balanced employee relations and workplace support',
    fullDescription: 'Comprehensive employee relations services that help organizations manage workplace concerns, communication, and case documentation with professionalism. Our experts support fair processes, healthy culture, and confident people decisions.',
    features: [
      'Employee Grievance Support',
      'Workplace Investigation Guidance',
      'Communication Planning',
      'Employee Engagement Support',
      'Conduct Process Guidance',
      'Predictive People Risk Review',
    ],
    highlights: [
      'Experienced HR relations advisors',
      'Clear communication frameworks',
      'Compliance-focused case handling',
      'Minimal workplace disruption',
    ],
    relatedServices: ['mechanical', 'valve-maintenance'],
    capabilities: [
      'Grievance Case Management',
      'Disciplinary Meeting Support',
      'Employee Communication Plans',
      'Engagement Pulse Checks',
      'Manager Coaching',
      'Workplace Mediation Support',
    ],
  },
  {
    slug: 'valve-maintenance',
    title: 'Performance Management',
    icon: 'Settings',
    shortDescription: 'Structured performance reviews and goal alignment',
    fullDescription: 'Dedicated performance management services covering goal setting, review cycles, manager guidance, and improvement plans. We help organizations create fair, useful performance conversations that support growth and accountability.',
    features: [
      'Performance Review Design',
      'Goal Setting Frameworks',
      'Manager Review Training',
      'Improvement Plan Support',
      'Calibration Meeting Guidance',
      'Performance Documentation',
    ],
    highlights: [
      'Experienced performance advisors',
      'Ready-to-use review templates',
      'Quick rollout timelines',
      'Clear performance standards',
    ],
    relatedServices: ['mechanical', 'metering-skid'],
    capabilities: [
      'KPI Library Development',
      'Review Cycle Management',
      '360 Feedback Support',
      'Manager Calibration',
      'Performance Improvement Plans',
      'Promotion Readiness Reviews',
    ],
  },
  {
    slug: 'metering-skid',
    title: 'HR Analytics & Reporting',
    icon: 'Activity',
    shortDescription: 'People metrics, dashboards, and insight reporting',
    fullDescription: 'Complete HR analytics and reporting services for workforce visibility, employee trends, and leadership decision-making. We provide integrated reporting solutions that turn people data into clear, useful insight.',
    features: [
      'Dashboard Design',
      'Report Setup & Automation',
      'Data Quality Review',
      'Monthly HR Reporting',
      'Software Integration',
      'Compliance Reporting Support',
    ],
    highlights: [
      'Leadership-ready reporting packs',
      'Metric definition support',
      'Automated data tracking',
      'Remote reporting capabilities',
    ],
    relatedServices: ['valve-maintenance', 'electrical-instrumentation'],
    capabilities: [
      'Headcount Reporting',
      'Turnover Analysis',
      'Absence & Leave Trends',
      'Compensation Dashboards',
      'Data Acquisition Workflows',
      'Workforce Insight Reports',
    ],
  },
  {
    slug: 'analyzer-shelter',
    title: 'Learning & Development',
    icon: 'Square',
    shortDescription: 'Training programs that build capable teams',
    fullDescription: 'Specialized learning and development services for onboarding, skills growth, leadership training, and employee development pathways. We help organizations create practical learning experiences that strengthen performance.',
    features: [
      'Training Needs Assessment',
      'Onboarding Program Design',
      'Leadership Training Modules',
      'Learning Pathways',
      'Culture & Conduct Training',
      'Full Program Refresh Services',
    ],
    highlights: [
      'Learning design expertise',
      'Role-specific development plans',
      'Compliance-aligned training',
      'Long-term employee growth',
    ],
    relatedServices: ['electrical-instrumentation', 'mechanical'],
    capabilities: [
      'New Hire Onboarding',
      'Manager Development',
      'Compliance Workshops',
      'Skills Matrix Planning',
      'Training Calendar Management',
      'Learning Effectiveness Tracking',
    ],
  },
  {
    slug: 'dewatering',
    title: 'Workforce Planning',
    icon: 'Droplet',
    shortDescription: 'Workforce forecasting and staffing plans',
    fullDescription: 'Comprehensive workforce planning services for hiring forecasts, role mapping, succession planning, and staffing scenarios. We provide efficient people planning solutions with practical business alignment.',
    features: [
      'Workforce Plan Design',
      'Hiring Demand Forecasting',
      'Headcount Monitoring',
      'Budget & Compliance Alignment',
      'Succession Risk Review',
      'Urgent Staffing Plans',
    ],
    highlights: [
      'High-volume workforce planning',
      'Real-time headcount visibility',
      'Compliance-aware recommendations',
      'Rapid planning capability',
    ],
    relatedServices: ['equipment-rental', 'mechanical'],
    capabilities: [
      'Role Demand Mapping',
      'Recruitment Capacity Planning',
      'Succession Pipelines',
      'Attrition Scenario Planning',
      'Headcount Management',
      'Workforce Cost Modeling',
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
