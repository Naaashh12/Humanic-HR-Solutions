'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { COMPANY_NAME, NAV_LINKS } from '@/lib/constants';
import { SERVICES } from '@/lib/services-data';
import { GlowButton } from '@/components/ui/GlowButton';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <nav className="fixed top-0 left-0 w-full h-14 bg-black/95 backdrop-blur-lg border-b border-[#8c0415] z-50">
      <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-[#bf0614] hover:text-[#ff1a2e] transition-colors font-bebas tracking-widest uppercase"
        >
          {COMPANY_NAME}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div
              key={link.href}
              className="relative group"
              onMouseEnter={() => link.label === 'Services' && setServicesOpen(true)}
              onMouseLeave={() => link.label === 'Services' && setServicesOpen(false)}
            >
              <Link
                href={link.href}
                className="text-[#e6eaed] hover:text-[#bf0614] transition-colors uppercase text-sm font-semibold tracking-widest flex items-center gap-1"
              >
                {link.label}
                {link.label === 'Services' && (
                  <ChevronDown className="w-4 h-4" />
                )}
              </Link>

              {/* Services Mega-Menu */}
              {link.label === 'Services' && servicesOpen && (
                <div className="fixed top-14 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-6xl bg-black border-2 border-[#8c0415] p-8 shadow-2xl shadow-[#8c0415]/50 backdrop-blur-xl z-50 rounded-lg">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="p-4 border border-[#8c0415] hover:border-[#bf0614] bg-black/50 hover:bg-[rgba(140,4,21,0.15)] transition-all duration-300 group/item"
                      >
                        <h4 className="text-sm font-bold text-[#bf0614] group-hover/item:text-[#ff1a2e] transition-colors uppercase">
                          {service.title}
                        </h4>
                        <p className="text-xs text-[#e6eaed]/70 mt-1 line-clamp-2">
                          {service.shortDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button and Mobile Menu */}
        <div className="flex items-center gap-4">
          <GlowButton
            href="/contact"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Get Quote
          </GlowButton>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-[rgba(191,6,20,0.15)] rounded transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#bf0614]" />
            ) : (
              <Menu className="w-6 h-6 text-[#bf0614]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-14 left-0 w-full bg-black border-b border-[#8c0415] animate-slideDown">
          <div className="p-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <button
                  onClick={() => {
                    if (link.label === 'Services') {
                      toggleServices();
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className="w-full text-left p-3 text-[#e6eaed] hover:text-[#bf0614] hover:bg-[rgba(191,6,20,0.15)] transition-colors uppercase text-sm font-semibold tracking-widest flex items-center justify-between"
                >
                  {link.label}
                  {link.label === 'Services' && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Services Submenu */}
                {link.label === 'Services' && servicesOpen && (
                  <div className="pl-4 space-y-1 bg-[rgba(140,4,21,0.08)]">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="block p-2 text-xs text-[#e6eaed]/70 hover:text-[#bf0614] hover:bg-[rgba(191,6,20,0.15)] transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <GlowButton
              href="/contact"
              variant="primary"
              size="sm"
              className="w-full mt-4"
            >
              Get Quote
            </GlowButton>
          </div>
        </div>
      )}
    </nav>
  );
}
