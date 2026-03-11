'use client';

import { motion } from 'framer-motion';
import { useInViewAnimation } from '@/hooks/useScrollAnimation';
import { GlowButton } from '@/components/ui/GlowButton';
import { COMPANY_PHONE, COMPANY_EMAIL } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactCTA() {
  const { ref, isInView } = useInViewAnimation(true);

  const contactMethods = [
    {
      icon: 'phone',
      label: 'Call Us',
      value: COMPANY_PHONE,
      link: `tel:${COMPANY_PHONE}`,
    },
    {
      icon: 'mail',
      label: 'Email',
      value: COMPANY_EMAIL,
      link: `mailto:${COMPANY_EMAIL}`,
    },
    {
      icon: 'location',
      label: 'Location',
      value: 'Yanbu Al Bahar, Saudi Arabia',
      link: '#',
    },
    {
      icon: 'clock',
      label: 'Support',
      value: '24/7 Available',
      link: '#',
    },
  ];

  const ContactIcon = ({ type }: { type: string }) => {
    switch(type) {
      case 'phone': return <Phone className="w-6 h-6 text-[#bf0614] group-hover:text-[#ff1a2e] transition-colors" />;
      case 'mail': return <Mail className="w-6 h-6 text-[#bf0614] group-hover:text-[#ff1a2e] transition-colors" />;
      case 'location': return <MapPin className="w-6 h-6 text-[#bf0614] group-hover:text-[#ff1a2e] transition-colors" />;
      case 'clock': return <Clock className="w-6 h-6 text-[#bf0614] group-hover:text-[#ff1a2e] transition-colors" />;
      default: return null;
    }
  };

  return (
    <section ref={ref as any} className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#bf0614] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-bebas text-[#e6eaed] mb-4">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-[#e6eaed]/70 max-w-2xl mx-auto">
            Let's discuss how Golden Pyramids can support your industrial operations
          </p>
        </motion.div>

        {/* Contact methods grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
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
          {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.link}
                className="p-4 border border-[#8c0415] hover:border-[#bf0614] bg-black/50 hover:bg-[rgba(140,4,21,0.15)] transition-all duration-300 group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="mb-2">
                  <ContactIcon type={method.icon} />
                </div>
                <div className="text-xs font-bold text-[#8c0415] uppercase tracking-widest mb-1">
                  {method.label}
                </div>
                <div className="text-sm text-[#e6eaed] group-hover:text-[#bf0614] transition-colors break-all">
                  {method.value}
                </div>
              </motion.a>
            ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          className="p-8 md:p-12 border-2 border-[#bf0614] bg-gradient-to-r from-[rgba(140,4,21,0.2)] to-[rgba(140,4,21,0.05)] text-center relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glowing animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#bf0614]/0 via-[#bf0614]/10 to-[#bf0614]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold font-bebas text-[#e6eaed] mb-4">
              Get Your Customized Quote Today
            </h3>
            <p className="text-[#e6eaed]/80 mb-8 max-w-2xl mx-auto">
              Our team is ready to understand your specific needs and provide tailored industrial solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                View All Services
              </GlowButton>
            </div>

            {/* Additional info */}
            <p className="text-xs text-[#e6eaed]/60 mt-8 uppercase tracking-widest">
              Response within 24 hours • No obligation • Free consultation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
