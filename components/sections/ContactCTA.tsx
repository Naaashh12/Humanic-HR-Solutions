'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInViewAnimation } from '@/hooks/useScrollAnimation';
import { GlowButton } from '@/components/ui/GlowButton';
import { COMPANY_PHONE, COMPANY_EMAIL } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactCTA() {
  const { ref, isInView } = useInViewAnimation(true);
  const [activeContact, setActiveContact] = useState<string | null>(null);

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
      value: 'Mangalore, Karnataka, India',
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
    switch (type) {
      case 'phone':
        return <Phone className="w-6 h-6 text-[#cca300] group-hover:text-[#ffd700] transition-colors" />;

      case 'mail':
        return <Mail className="w-6 h-6 text-[#cca300] group-hover:text-[#ffd700] transition-colors" />;

      case 'location':
        return <MapPin className="w-6 h-6 text-[#cca300] group-hover:text-[#ffd700] transition-colors" />;

      case 'clock':
        return <Clock className="w-6 h-6 text-[#cca300] group-hover:text-[#ffd700] transition-colors" />;
      default: return null;
    }
  };

  return (
    <section ref={ref as any} className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#2b5a8f] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-bebas text-[#0f172a] mb-4">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Let's discuss how Humanic HR Solutions can support your people operations
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
              onClick={() => setActiveContact(method.label)}
              className={`border border-[#2b5a8f]/20 bg-[#1b365d] p-4 text-white shadow-sm transition-all duration-300 group ${activeContact === method.label ? 'border-[#cca300] bg-[#122844]' : ''}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="mb-2">
                <ContactIcon type={method.icon} />
              </div>
              <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#f5d36a] transition-colors duration-300 group-hover:text-[#f5d36a]">
                {method.label}
              </div>
              <div className="break-all text-sm text-white transition-colors duration-300 group-hover:text-[#f5d36a]">
                {method.value}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          className="p-8 md:p-12 border border-[#2b5a8f] bg-[#1b365d] text-center relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glowing animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a8f]/0 via-[#2b5a8f]/5 to-[#2b5a8f]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold font-bebas text-white mb-4">
              Get Your Customized HR Support Today
            </h3>
            <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
              Our team is ready to understand your specific needs and provide tailored HR solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GlowButton
                href="/contact"
                variant="primary"
                size="lg"
              >
                Start Your HR Request
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
            <p className="text-xs text-[#f5d36a] mt-8 uppercase tracking-widest">
              Response within 24 hours • No obligation • Free HR consultation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
