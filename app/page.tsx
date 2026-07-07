'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/About';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ClientsShowcase } from '@/components/sections/ClientsShowcase';
import { ContactCTA } from '@/components/sections/ContactCTA';
import {
  BadgeDollarSign,
  Building2,
  Car,
  Cpu,
  Factory,
  GraduationCap,
  HardHat,
  Landmark,
  Monitor,
  ShieldCheck,
  Users,
  Wrench,
  BriefcaseBusiness,
  Globe2,
} from 'lucide-react';

const industries = [
  { name: 'Construction', icon: Building2 },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Engineering', icon: Wrench },
  { name: 'Oil & Gas', icon: ShieldCheck },
  { name: 'Information Technology', icon: Cpu },
  { name: 'Healthcare', icon: ShieldCheck },
  { name: 'Hospitality', icon: BriefcaseBusiness },
  { name: 'Logistics & Warehousing', icon: Globe2 },
  { name: 'Retail', icon: Building2 },
  { name: 'Facility Management', icon: HardHat },
  { name: 'Automobile', icon: Car },
  { name: 'Infrastructure', icon: Landmark },
  { name: 'FMCG', icon: Factory },
  { name: 'Education', icon: GraduationCap },
  { name: 'Aviation & Airports', icon: Building2 },
];

const popularPositions = [
  { name: 'Engineers', icon: Wrench },
  { name: 'Technicians', icon: HardHat },
  { name: 'Electricians', icon: Wrench },
  { name: 'Drivers', icon: Car },
  { name: 'Accountants', icon: BadgeDollarSign },
  { name: 'IT Professionals', icon: Monitor },
  { name: 'HR Professionals', icon: Users },
  { name: 'Sales Executives', icon: BriefcaseBusiness },
];

export default function Home() {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
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

      {/* Industries We Serve */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="border border-[#997a00]/30 bg-[linear-gradient(135deg,rgba(43,90,143,0.05),rgba(255,255,255,1))] p-8 md:p-12 shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
            <div className="max-w-3xl mb-10">
              <div className="inline-block mb-4 px-4 py-2 border border-[#2b5a8f]/30 bg-white text-[#2b5a8f] text-xs uppercase font-bold tracking-widest">
                Industries We Serve
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-bebas text-[#0f172a] mb-3">
                Recruitment solutions across diverse industries
              </h2>
              <p className="text-lg text-slate-600">
                We support employers and job seekers with workforce solutions tailored to the needs of modern businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((industry, idx) => {
                const Icon = industry.icon;
                const isActive = activeIndustry === industry.name;
                return (
                  <motion.button
                    type="button"
                    key={industry.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveIndustry(isActive ? null : industry.name)}
                    className={`group relative overflow-hidden border border-[#2b5a8f]/30 px-4 py-4 text-left text-sm font-medium shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition-all duration-300 ${isActive ? 'bg-[#1b365d] text-[#f5d36a]' : 'bg-[#1b365d] text-white'}`}
                  >
                    <div className="relative flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center border border-[#cca300]/40 bg-[rgba(204,163,0,0.12)] text-[#cca300] shadow-sm ${isActive ? 'bg-[rgba(204,163,0,0.18)]' : ''}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className={`transition-colors duration-300 ${isActive ? 'text-[#f5d36a]' : 'text-white group-hover:text-[#f5d36a]'}`}>{industry.name}</div>
                        {idx >= 14 ? <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5d36a]">Featured</div> : null}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-8 bg-white">
        <div className="container-custom">
          <div className="border border-[#2b5a8f]/20 bg-white p-8 shadow-[0_15px_50px_rgba(15,23,42,0.05)]">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <div className="inline-block mb-3 px-4 py-2 border border-[#2b5a8f]/30 bg-[rgba(43,90,143,0.05)] text-[#2b5a8f] text-xs uppercase font-bold tracking-widest">
                  Positions We Recruit
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-bebas text-[#0f172a]">
                  Skilled roles for growing teams
                </h2>
              </div>
              <p className="text-sm text-slate-600 max-w-xl">
                We help employers fill critical roles quickly with dependable talent across technical, operational, and leadership functions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularPositions.map((position) => {
                const Icon = position.icon;
                return (
                  <div key={position.name} className="flex items-center gap-3 border border-[#2b5a8f]/20 bg-[linear-gradient(135deg,rgba(255,255,255,1),rgba(43,90,143,0.05))] px-4 py-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center border border-[#cca300]/35 bg-[rgba(204,163,0,0.12)] text-[#cca300]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-700">{position.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
