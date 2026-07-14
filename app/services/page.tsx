import Link from 'next/link';
import { SERVICES } from '@/lib/services-data';
import { ServiceCard } from '@/components/ui/ServiceCard';

export const metadata = {
  title: 'Our Services - Humanic HR Solutions',
  description: 'Explore all 11 comprehensive HR services offered by Humanic HR Solutions',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Page Header */}
      <div className="container-custom py-16">
        <h1 className="text-5xl md:text-7xl font-bold font-bebas text-[#1b365d] mb-4">
          All Services
        </h1>
        <p className="text-xl text-[#1b365d]/70 max-w-2xl">
          Explore our complete range of HR services designed to meet your people operations needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
            />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-custom py-16">
        <div className="p-12 border border-[#997a00] bg-gradient-to-r from-[rgba(153, 122, 0,0.15)] to-transparent text-center">
          <h2 className="text-3xl font-bold font-bebas text-[#1b365d] mb-4">
            Don't See What You Need?
          </h2>
          <p className="text-[#1b365d]/70 mb-6">
            Contact our team for custom HR solutions tailored to your specific requirements
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#cca300] text-white font-bold uppercase tracking-widest hover:shadow-[0_0_40px_rgba(204, 163, 0,0.8)] transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
