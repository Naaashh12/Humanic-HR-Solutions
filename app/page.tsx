import { HeroSection } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/About';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ClientsShowcase } from '@/components/sections/ClientsShowcase';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Clients & Achievements */}
      <ClientsShowcase />

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
