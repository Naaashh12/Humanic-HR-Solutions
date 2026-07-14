'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/services-data';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { useInViewAnimation } from '@/hooks/useScrollAnimation';

export function ServicesGrid() {
  const { ref, isInView } = useInViewAnimation(true);

  // Get the first 3 services as featured (larger cards)
  const featuredServices = SERVICES.slice(0, 3);
  const regularServices = SERVICES.slice(3);

  return (
    <section ref={ref as any} className="relative py-20 md:py-32 bg-[#ffffff]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#cbd5e1] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#2b5a8f] rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-2 border border-[#2b5a8f]/30 bg-[rgba(43,90,143,0.05)] text-[#2b5a8f] text-xs uppercase font-bold tracking-widest">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-bebas text-[#0f172a] mb-4">
            Comprehensive HR
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b365d] to-[#2b5a8f] block">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our complete range of HR services designed to meet your people operations needs
          </p>
        </motion.div>

        {/* Featured Services Grid (3 large cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              featured={true}
              features={service.features.slice(0, 3)}
            />
          ))}
        </div>

        {/* Regular Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {regularServices.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 p-8 md:p-12 border border-[#2b5a8f]/30 bg-gradient-to-r from-[rgba(43,90,143,0.06)] to-transparent text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold font-bebas text-[#0f172a] mb-4">
            Need Custom HR Solutions?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Contact our team to discuss your specific requirements and how we can support your workforce
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#2b5a8f] text-[#2b5a8f] font-bold uppercase tracking-widest hover:bg-[rgba(43,90,143,0.08)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(43,90,143,0.15)]"
          >
            Request Support
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
