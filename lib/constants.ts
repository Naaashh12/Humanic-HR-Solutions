// Company Information
export const COMPANY_NAME = 'Golden Pyramids';
export const COMPANY_TAGLINE = 'Industrial Excellence Through Innovation';
export const COMPANY_LOCATION = 'Yanbu Al Bahar, Saudi Arabia';
export const COMPANY_POSTAL = '46424';
export const COMPANY_PHONE = '+966 14 3915068';
export const COMPANY_EMAIL = 'info@onetouchsolutions.com';

// Brand Colors
export const COLORS = {
  redDark: '#8c0415',
  redLight: '#bf0614',
  redNeon: '#ff1a2e',
  black: '#000000',
  blackAlt: '#0a0a0a',
  grayLight: '#e6eaed',
  ultraDarkRed: '#5c0010',
} as const;

// Color with transparency
export const COLOR_RGBA = {
  redDarkAlpha: 'rgba(140, 4, 21, 0.15)',
  redLightAlpha: 'rgba(191, 6, 20, 0.08)',
} as const;

// Animation timings
export const ANIMATION_DURATIONS = {
  fast: '0.2s',
  default: '0.3s',
  medium: '0.6s',
  slow: '0.8s',
  verySlow: '2s',
  hyperslow: '4s',
} as const;

// Breakpoints
export const BREAKPOINTS = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-index layers
export const Z_INDEX = {
  hide: '-1',
  base: '0',
  dropdown: '1000',
  sticky: '1020',
  fixed: '1030',
  backdrop: '1040',
  offcanvas: '1050',
  modal: '1060',
  popover: '1070',
  tooltip: '1080',
  notification: '2000',
  lasers: '40',
  scanlines: '9998',
  cursor: '9999',
} as const;

// Service categories for navigation
export const SERVICE_CATEGORIES = [
  'mechanical',
  'civil',
  'equipment-rental',
  'manpower-supply',
  'material-supply',
  'electrical-instrumentation',
  'valve-maintenance',
  'metering-skid',
  'analyzer-shelter',
  'dewatering',
  'pumping-station',
] as const;

// Navigation links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
] as const;

// Social media links
export const SOCIAL_LINKS = [
  { platform: 'linkedin', url: 'https://linkedin.com' },
  { platform: 'twitter', url: 'https://twitter.com' },
  { platform: 'instagram', url: 'https://instagram.com' },
] as const;

// Footer sections
export const FOOTER_SECTIONS = {
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  services: {
    title: 'Services',
    links: [
      { label: 'Mechanical Services', href: '/services/mechanical' },
      { label: 'Civil Works', href: '/services/civil' },
      { label: 'Equipment Rental', href: '/services/equipment-rental' },
    ],
  },
  contact: {
    title: 'Contact',
    links: [
      { label: 'Phone', href: `tel:${COMPANY_PHONE}` },
      { label: 'Email', href: `mailto:${COMPANY_EMAIL}` },
      { label: 'Location', href: '#' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
} as const;
