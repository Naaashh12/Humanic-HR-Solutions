'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_NAME, COMPANY_LOCATION, COMPANY_PHONE, COMPANY_EMAIL, FOOTER_SECTIONS, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#8c0415]">
      {/* Red divider line with animation */}
      <div className="h-1 bg-gradient-to-r from-[#8c0415] via-[#bf0614] to-[#8c0415] animate-pulse" />

      <div className="container-custom py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-[#bf0614] mb-4 uppercase tracking-widest font-bebas">
              {COMPANY_NAME}
            </h3>
            <p className="text-[#e6eaed]/70 text-sm leading-relaxed mb-4">
              Leading provider of industrial solutions and services across Saudi Arabia and the Gulf region.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3 text-[#e6eaed]/70 hover:text-[#bf0614] transition-colors">
                <MapPin className="w-4 h-4 text-[#bf0614]" />
                <span>{COMPANY_LOCATION}</span>
              </div>
              <div className="flex items-center gap-3 text-[#e6eaed]/70 hover:text-[#bf0614] transition-colors">
                <Phone className="w-4 h-4 text-[#bf0614]" />
                <a href={`tel:${COMPANY_PHONE}`}>{COMPANY_PHONE}</a>
              </div>
              <div className="flex items-center gap-3 text-[#e6eaed]/70 hover:text-[#bf0614] transition-colors">
                <Mail className="w-4 h-4 text-[#bf0614]" />
                <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {Object.values(FOOTER_SECTIONS).map((section, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-bold text-[#bf0614] mb-4 uppercase tracking-widest">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-[#e6eaed]/70 hover:text-[#bf0614] transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="text-[#8c0415] group-hover:text-[#bf0614] opacity-0 group-hover:opacity-100 transition-all">▸</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#8c0415]/0 via-[#8c0415]/50 to-[#8c0415]/0 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <div className="text-center md:text-left text-sm text-[#e6eaed]/60">
            <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
            <p className="text-xs mt-1">Designed and developed with precision.</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((social) => {
              const iconProps = { className: 'w-5 h-5' };
              
              let Icon = Linkedin;
              if (social.platform === 'twitter') Icon = Twitter;
              if (social.platform === 'instagram') Icon = Instagram;

              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8c0415] hover:text-[#bf0614] transition-all duration-300 transform hover:scale-125"
                  aria-label={social.platform}
                >
                  <Icon {...iconProps} />
                </a>
              );
            })}
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 text-[#8c0415] hover:text-[#bf0614] border border-[#8c0415] hover:border-[#bf0614] text-xs uppercase font-bold tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(191,6,20,0.4)]"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
