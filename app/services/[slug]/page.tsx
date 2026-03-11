import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { SERVICES, getServiceBySlug, getRelatedServices, getAllServiceSlugs } from '@/lib/services-data';
import { GlowButton } from '@/components/ui/GlowButton';
import {
  Wrench,
  HardHat,
  Zap,
  Users,
  Package,
  Lightbulb,
  Settings,
  Activity,
  Square,
  Droplet,
  Gauge,
  CheckCircle,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  'Hard Hat': HardHat,
  Zap,
  Users,
  Package,
  Lightbulb,
  Settings,
  Activity,
  Square,
  Droplet,
  Gauge,
};

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all services
export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

// Generate metadata for each service
export async function generateMetadata({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} - Golden Pyramids`,
    description: service.fullDescription,
    keywords: [service.title, ...service.features],
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(params.slug);
  const Icon = iconMap[service.icon] || Wrench;

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header with hero background */}
      <div className="relative py-16 md:py-24 border-b border-[#8c0415] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#bf0614] rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <a
              href="/services"
              className="text-[#bf0614] hover:text-[#ff1a2e] text-sm font-bold uppercase tracking-widest mb-4 inline-block"
            >
              ← Back to Services
            </a>

            {/* Icon */}
            <div className="inline-block p-4 bg-[#8c0415]/20 border border-[#bf0614] mb-6">
              <Icon className="w-12 h-12 text-[#ff1a2e]" />
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold font-bebas text-[#e6eaed] mb-4">
              {service.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-[#e6eaed]/80 max-w-2xl">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2">
            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-bebas text-[#e6eaed] mb-6">
                Key Features
              </h2>
              <div className="space-y-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#bf0614] flex-shrink-0 mt-1" />
                    <p className="text-[#e6eaed]/80 text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            {service.highlights.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold font-bebas text-[#e6eaed] mb-6">
                  Why Choose Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-4 border border-[#8c0415] hover:border-[#bf0614] bg-black/50 transition-all duration-300"
                    >
                      <p className="text-[#e6eaed]">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Capabilities */}
            {service.capabilities.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold font-bebas text-[#e6eaed] mb-6">
                  Our Capabilities
                </h2>
                <div className="space-y-2">
                  {service.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#bf0614] rounded-full" />
                      <p className="text-[#e6eaed]/80">{capability}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Contact */}
            <div className="p-8 border border-[#8c0415] bg-[rgba(140,4,21,0.1)] mb-8 sticky top-20">
              <h3 className="text-2xl font-bold font-bebas text-[#e6eaed] mb-4">
                Get Started
              </h3>
              <p className="text-[#e6eaed]/70 text-sm mb-6">
                Ready to learn more about {service.title}?
              </p>
              <GlowButton
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Request Quote
              </GlowButton>
              <p className="text-xs text-[#e6eaed]/50 mt-4 text-center">
                24-hour response guarantee
              </p>
            </div>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="p-6 border border-[#8c0415] bg-black/50">
                <h4 className="font-bold text-[#bf0614] uppercase tracking-widest text-sm mb-4">
                  Related Services
                </h4>
                <div className="space-y-3">
                  {relatedServices.map((relService) => (
                    <a
                      key={relService.slug}
                      href={`/services/${relService.slug}`}
                      className="block p-3 border border-[#8c0415] hover:border-[#bf0614] bg-black hover:bg-[rgba(140,4,21,0.15)] transition-all duration-300 text-[#e6eaed] hover:text-[#bf0614] text-sm"
                    >
                      {relService.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-custom py-16">
        <div className="p-12 border-2 border-[#bf0614] bg-gradient-to-r from-[rgba(140,4,21,0.2)] to-[rgba(140,4,21,0.05)] text-center">
          <h2 className="text-3xl font-bold font-bebas text-[#e6eaed] mb-4">
            Ready to Collaborate?
          </h2>
          <p className="text-[#e6eaed]/70 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss how {service.title} can support your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowButton
              href="/contact"
              variant="primary"
              size="lg"
            >
              Start Your Project
            </GlowButton>
            <GlowButton
              href="/services"
              variant="secondary"
              size="lg"
            >
              Explore All Services
            </GlowButton>
          </div>
        </div>
      </div>
    </div>
  );
}
