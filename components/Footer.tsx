'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-gold transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/#services" className="text-gray-400 hover:text-gold transition-colors">HR Strategy</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-gold transition-colors">Talent Acquisition</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-gold transition-colors">Payroll & Benefits</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-gold transition-colors">HR Operations</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gold mb-4">Location</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Yanbu Al Bahar<br />
              Kingdom of Saudi Arabia<br />
              Postal Code: 46424
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">
              <a href="tel:+966143915068" className="hover:text-gold transition-colors">
                +966 14 3915068
              </a>
            </p>
            <p className="text-gray-500 text-xs mt-4">
              Available for consultations and support
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm"
          >
            © {currentYear} Humanic HR Solutions. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
