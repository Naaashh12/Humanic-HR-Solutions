# One Touch Solutions - Corporate Website

A modern, visually impressive corporate website for One Touch Solutions, a Saudi Arabian industrial company. Built with Next.js (App Router), Tailwind CSS, and Framer Motion animations.

## Features

✨ **Premium Design**
- Gold (#C8A44D) primary color with industrial green accent (#6FAF8F)
- Clean, engineering-focused aesthetic
- Responsive design optimized for mobile, tablet, and desktop

🎨 **Modern Animations**
- Rotating animated gear icons throughout the site
- Smooth section transitions with Framer Motion
- Parallax scrolling effects
- Interactive hover animations on cards and buttons
- 3D globe animation on location section

🏗️ **Industrial Theme**
- Gear symbols as major design elements
- Industrial-themed section dividers
- Pipeline and mechanical structure illustrations
- Construction-inspired visual elements

📱 **Fully Responsive**
- Mobile-first design approach
- Sticky navigation with hamburger menu
- Optimized for all screen sizes
- Touch-friendly interactions

## Project Structure

```
one-touch-solutions/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── careers/
│   │   └── page.tsx        # Careers page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── AnimatedGear.tsx    # Gear animation components
│   ├── Navigation.tsx      # Sticky navbar
│   ├── Footer.tsx          # Footer component
│   ├── HeroSection.tsx     # Hero banner
│   ├── AboutSection.tsx    # About company
│   ├── MissionSection.tsx  # Mission & Clients
│   ├── ServicesSection.tsx # Services grid
│   ├── EquipmentSection.tsx # Equipment rental
│   └── LocationSection.tsx # Global presence
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Pages

### 1. **Home Page** (`/`)
- Hero section with rotating gears and animated background
- About company information with statistics
- Mission section with industrial visuals
- Client logos display
- Services grid (12 services with hover effects)
- Equipment rental showcase
- Global location section with animated globe

### 2. **Careers Page** (`/careers`)
- Career overview section
- Why work with us benefits
- Open positions list
- Application form with file upload

### 3. **Contact Page** (`/contact`)
- Contact form with validation
- Company address and business hours
- Embedded Google Map
- Quick call-to-action section

## Components

### AnimatedGear
- `AnimatedGear`: SVG gear with rotation animation
- `GearIcon`: Gear SVG icon (non-animated)
- `RotatingGear`: Wrapper for spinning gears

### Navigation
- Sticky responsive navbar
- Mobile hamburger menu
- Company logo with gear design
- Contact phone number display

### Section Components
- HeroSection: Main landing banner
- AboutSection: Company information with rotating gears
- MissionSection: Company mission and clients
- ServicesSection: 12 service cards with hover effects
- EquipmentSection: Equipment rental showcase
- LocationSection: Global presence with 3D globe

### Footer
- Multi-column layout
- Company, Services, Location info
- Contact details
- Copyright year

## Customization

### Colors
Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  gold: '#C8A44D',
  'industrial-green': '#6FAF8F',
  'sand': '#F7F5EF',
  // ... more colors
}
```

### Content
- Update company info in components
- Modify service list in `ServicesSection.tsx`
- Update equipment list in `EquipmentSection.tsx`
- Change career positions in `careers/page.tsx`

### Animations
- Adjust animation durations in component props
- Modify delay values for staggered effects
- Change Framer Motion variants for different styles

## Installation & Setup

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open Browser**
Navigate to `http://localhost:3000`

4. **Build for Production**
```bash
npm run build
npm start
```

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Language**: TypeScript 5
- **Font**: Inter (via Google Fonts)

## SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Mobile viewport optimization
- Fast page load times
- Proper heading hierarchy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images and SVGs
- CSS animations using transforms (GPU-accelerated)
- Lazy loading for sections
- Smooth scrolling behavior
- Minimal JavaScript bundle

## Accessibility

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast colors
- Focus states on interactive elements

## Contact Information

**One Touch Solutions**
- Location: Yanbu Al Bahar, Kingdom of Saudi Arabia
- Postal Code: 46424
- Phone: +966 14 3915068
- Website: one-touch-solutions.com

## License

© 2019 One Touch Solutions. All rights reserved.

## Support

For questions or support, contact:
- Phone: +966 14 3915068
- Email: support@onetouch-solutions.com

---

**Built with ❤️ for One Touch Solutions**
