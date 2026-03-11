# Component API Documentation

## AnimatedGear.tsx

### `AnimatedGear` Component

Renders an SVG gear with rotation animation.

```typescript
<AnimatedGear 
  size={60}           // Size in pixels (default: 60)
  className=""        // Tailwind CSS classes
  speed={20}          // Rotation duration in seconds (default: 20)
  color="#C8A44D"     // Gear color hex code (default: gold)
/>
```

**Features:**
- SVG-based for scalability
- Linear infinite rotation
- Gradient fill with center circle
- 12 gear teeth

**Example:**
```tsx
<AnimatedGear size={100} speed={25} color="#6FAF8F" />
```

---

### `GearIcon` Component

Simple non-animated gear icon using SVG.

```typescript
<GearIcon 
  size={24}              // Icon size in pixels (default: 24)
  className=""           // CSS classes
  color="currentColor"   // Icon color (default: current text color)
/>
```

**Example:**
```tsx
<GearIcon size={32} color="#C8A44D" className="ml-2" />
```

---

### `RotatingGear` Component

Wrapper component that applies continuous rotation animation.

```typescript
<RotatingGear 
  size={100}        // Gear size in pixels (default: 100)
  className=""      // CSS classes
  speed={20}        // Rotation speed in seconds (default: 20)
/>
```

**Example:**
```tsx
<RotatingGear size={150} speed={30} className="absolute top-0 right-0" />
```

---

## Navigation.tsx

### `Navigation` Component

Sticky responsive navigation bar.

```typescript
<Navigation />
```

**Features:**
- Sticky positioning (top: 0, z-index: 50)
- Logo with embedded gear design
- Desktop navigation menu with 6 links
- Mobile hamburger menu
- Company phone number
- Smooth animations
- Auto-responsive layout

**Navigation Links:**
- Home
- About Us
- Our Services
- Careers
- Contact Us
- Download Profile

**Customization:**
Edit `navItems` array in component to modify menu links.

---

## Footer.tsx

### `Footer` Component

Multi-column footer with company information.

```typescript
<Footer />
```

**Features:**
- 4-column layout (desktop), responsive
- Auto-updating copyright year
- Hover animations on all links
- Staggered fade-in animations
- Gold accent text on headings

**Sections:**
1. **Company**: About, Services, Careers, Contact
2. **Services**: Equipment Rental, Manpower Supply, Material Supply
3. **Location**: Address and postal code
4. **Contact**: Phone number and availability

---

## HeroSection.tsx

### `HeroSection` Component

Full-screen hero banner with animated gears.

```typescript
<HeroSection />
```

**Features:**
- Full viewport height
- Rotating background gears (2 different sizes)
- Animated headline and subtext
- Two call-to-action buttons
- Animated gear visualization on right side
- Floating particle animations

**Content:**
- Headline: "Reliable Industrial Solutions Across Saudi Arabia"
- Subheading: Service description
- Buttons: "Get a Quote" and "Explore Services"

---

## AboutSection.tsx

### `AboutSection` Component

About company information with rotating gears.

```typescript
<AboutSection />
```

**Features:**
- Two-column layout on desktop
- Company history and background
- Service list with bullet points
- Triple rotating gears animation
- Statistics cards (3 metrics)
- Scroll-triggered animations

**Statistics Displayed:**
- Years of Experience: 10+
- Industry Projects: 100+
- Expert Team Members: 200+

---

## MissionSection.tsx

### `MissionSection` Component

Company mission statement with industrial SVG.

```typescript
<MissionSection />
```

**Features:**
- Two-column layout
- Mission text content
- Industrial pipeline SVG illustration
- Key values highlighted
- Hover scale effect on visual

---

### `ClientsSection` Component

Client logos and testimonials display.

```typescript
<ClientsSection />
```

**Features:**
- 8 client logo placeholders
- Hover lift animation
- Professional testimonial quote
- Responsive grid layout
- Customizable client count

---

## ServicesSection.tsx

### `ServicesSection` Component

12-service card grid with hover effects.

```typescript
<ServicesSection />
```

**Features:**
- Responsive 3-column grid (1 mobile, 2 tablet, 3 desktop)
- Each card has:
  - Service icon/emoji
  - Title and description
  - Background rotating gear
  - Hover animations
  - "Learn More" link
- Staggered appearance animations
- Scale and shadow effects on hover

**Services:**
1. Mechanical Services
2. Civil Works
3. Equipment Rental Services
4. Manpower Rental Services
5. Electrical & Instrumentation
6. Valve Maintenance
7. Metering Skid Installation
8. Analyzer Shelter Repair
9. Dewatering Systems
10. Pumping Station Maintenance
11. Solar & UPS Maintenance
12. Industrial Support

---

## EquipmentSection.tsx

### `EquipmentSection` Component

Equipment rental showcase with 6 categories.

```typescript
<EquipmentSection />
```

**Features:**
- 3-column responsive grid
- Equipment emoji icons
- Floating vertical animations
- "Request Quote" buttons on each card
- Section CTA button
- Hover lift effects

**Equipment Categories:**
- Excavators
- Cranes
- Forklifts
- Bobcat Loaders
- Dump Trucks
- Construction Equipment

---

## LocationSection.tsx

### `LocationSection` Component

Global presence with animated 3D globe.

```typescript
<LocationSection />
```

**Features:**
- Two-column layout
- Animated rotating globe SVG
- Latitude/longitude grid
- Location marker at Yanbu
- 3 rotating gear icons around globe
- Information cards with:
  - Address details
  - Postal code
  - Phone number (clickable)
- "Open in Google Maps" button
- Professional styling

---

## Page Components

### Home Page (`app/page.tsx`)

Main landing page composition:

```typescript
export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ClientsSection />
      <ServicesSection />
      <EquipmentSection />
      <LocationSection />
      <Footer />
    </>
  );
}
```

---

### Careers Page (`app/careers/page.tsx`)

Recruitment and job listings page.

**Sections:**
- Hero section
- Why Work With Us (6 benefits)
- Open Positions (6 jobs)
- Application Form

**Job Positions:**
- Mechanical Engineer
- Civil Supervisor
- Equipment Operator
- Electrical Technician
- Project Coordinator
- Safety Officer

**Form Fields:**
- Full Name (required)
- Email (required)
- Phone (required)
- Position Dropdown
- Message
- Resume Upload

---

### Contact Page (`app/contact/page.tsx`)

Contact and inquiry page.

**Left Section:**
- Contact Form with fields:
  - Name
  - Email
  - Phone
  - Service Required dropdown
  - Message
  - Submit button

**Right Section:**
- Company Information Card
- Business Hours Card
- Embedded Google Map
- CTA Section

**Contact Form Dropdown Options:**
- Equipment Rental
- Manpower Supply
- Material Supply
- Mechanical Services
- Other

---

## Global Styles (globals.css)

### Utility Classes

**Buttons:**
```css
.btn-primary      /* Gold background button */
.btn-secondary    /* Gold border button */
```

**Effects:**
```css
.text-gradient    /* Gold to green gradient text */
.glass-effect     /* Frosted glass effect */
.card-hover       /* Scale and shadow on hover */
.gear-icon-spin   /* Continuous rotation */
```

**Sections:**
```css
.section-divider  /* Gradient line divider */
.container-custom /* Max-width responsive container */
```

### Custom Animations

```css
@keyframes spin-slow       /* 20s continuous rotation */
@keyframes pulse-glow      /* Opacity pulse effect */
@keyframes float           /* Vertical floating motion */
```

---

## Tailwind Configuration

### Custom Colors

```javascript
gold: '#C8A44D'           // Primary
gold-dark: '#A87F3D'      // Hover state
gold-light: '#D9B76D'     // Light variant
industrial-green: '#6FAF8F'  // Accent
sand: '#F7F5EF'           // Secondary background
dark-bg: '#1A1A1A'        // Dark sections
```

### Custom Animations

```javascript
'spin-slow': 'spin 20s linear infinite'
'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
'float': 'float 6s ease-in-out infinite'
```

---

## Common Patterns

### Staggered Animation

```typescript
{items.map((item, i) => (
  <motion.div
    key={item}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: i * 0.1 }}
    viewport={{ once: true }}
  >
    {item}
  </motion.div>
))}
```

### Hover Scale Effect

```typescript
<motion.div
  whileHover={{ scale: 1.05, y: -10 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

### Scroll Trigger Animation

```typescript
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content appears when scrolled into view
</motion.div>
```

---

## Usage Examples

### Creating a New Animated Section

```typescript
'use client';

import { motion } from 'framer-motion';
import { RotatingGear } from './AnimatedGear';

export const NewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8"
        >
          Section Title
        </motion.h2>

        <RotatingGear size={150} className="mb-8" />

        <p className="text-lg text-gray-700">Content here</p>
      </div>
    </section>
  );
};
```

### Adding New Service Card

```typescript
{
  title: 'New Service',
  description: 'Service description text here',
  icon: '🆕', // Use emoji or icon component
}
```

---

## Performance Tips

1. Use `whileInView` for animations triggered by scroll
2. Set `viewport={{ once: true }}` to prevent re-animation
3. Use `GPU-accelerated` properties (transform, opacity)
4. Avoid animating layout properties
5. Use `className` for static styles, Framer for dynamics

---

## Best Practices

✅ Always use `'use client'` in interactive components  
✅ Import `motion` from 'framer-motion'  
✅ Use semantic HTML elements  
✅ Apply consistent spacing with Tailwind  
✅ Test responsive design at all breakpoints  
✅ Keep animations smooth and purposeful  
✅ Use color tokens from config  
✅ Maintain accessibility standards  

---

**End of Component Documentation**
