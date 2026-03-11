'use client';

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
    <section ref={ref as any} className="relative py-20 md:py-32 bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#bf0614] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#8c0415] rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-2 border border-[#8c0415] bg-[rgba(140,4,21,0.1)] text-[#bf0614] text-xs uppercase font-bold tracking-widest">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-bebas text-[#e6eaed] mb-4">
            Comprehensive Industrial
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf0614] to-[#ff1a2e] block">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-[#e6eaed]/70 max-w-2xl mx-auto">
            Explore our complete range of industrial services designed to meet your operational needs
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
          className="mt-16 p-8 md:p-12 border border-[#8c0415] bg-gradient-to-r from-[rgba(140,4,21,0.15)] to-transparent text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold font-bebas text-[#e6eaed] mb-4">
            Need Custom Solutions?
          </h3>
          <p className="text-[#e6eaed]/70 mb-6 max-w-2xl mx-auto">
            Contact our team to discuss your specific requirements and how we can support your operations
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#bf0614] text-[#bf0614] font-bold uppercase tracking-widest hover:bg-[rgba(191,6,20,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(191,6,20,0.4)]"
          >
            Get a Quote
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
