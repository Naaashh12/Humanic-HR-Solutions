'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, MapPin, TrendingUp } from 'lucide-react';
import { GlowButton } from '@/components/ui/GlowButton';

export default function CareersPage() {
  const positions = [
    {
      id: 1,
      title: 'Senior Mechanical Engineer',
      department: 'Engineering',
      type: 'Full-Time',
      experience: '5+ years',
      description: 'Lead mechanical design and maintenance projects across industrial clients',
      location: 'Yanbu',
    },
    {
      id: 2,
      title: 'Civil Supervisor',
      department: 'Construction',
      type: 'Full-Time',
      experience: '5+ years',
      description: 'Oversee civil works projects and manage team operations',
      location: 'Yanbu',
    },
    {
      id: 3,
      title: 'Equipment Operator',
      department: 'Operations',
      type: 'Full-Time',
      experience: '2+ years',
      description: 'Operate and maintain industrial equipment with precision',
      location: 'Yanbu',
    },
    {
      id: 4,
      title: 'Electrical Technician',
      department: 'Electrical',
      type: 'Full-Time',
      experience: '3+ years',
      description: 'Installation and maintenance of electrical systems',
      location: 'Yanbu',
    },
    {
      id: 5,
      title: 'Project Manager',
      department: 'Management',
      type: 'Full-Time',
      experience: '4+ years',
      description: 'Manage industrial service projects from planning to completion',
      location: 'Yanbu',
    },
    {
      id: 6,
      title: 'Safety Officer',
      department: 'Health & Safety',
      type: 'Full-Time',
      experience: '3+ years',
      description: 'Ensure workplace safety standards and compliance',
      location: 'Yanbu',
    },
  ];

  const benefits = [
    { icon: Briefcase, title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { icon: TrendingUp, title: 'Career Growth', description: 'Professional development and advancement opportunities' },
    { icon: Users, title: 'Team Culture', description: 'Collaborative, inclusive work environment' },
    { icon: MapPin, title: 'Modern Facilities', description: 'State-of-the-art equipment and safe workplaces' },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Page Header */}
      <div className="relative py-16 md:py-24 border-b border-[#997a00] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#cca300] rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-bebas text-[#1b365d] mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-[#1b365d]/70 max-w-2xl">
            Build your career with Golden Pyramids. We're looking for talented professionals to join our growing team.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container-custom py-16">
        <h2 className="text-4xl font-bold font-bebas text-[#1b365d] mb-12">Why Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                className="p-6 border border-[#997a00] hover:border-[#cca300] bg-[#1b365d] group transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Icon className="w-8 h-8 text-[#cca300] mb-4" />
                <h3 className="font-bold text-[#e6eaed] mb-2">{benefit.title}</h3>
                <p className="text-[#e6eaed]/70 text-sm">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Open Positions */}
      <div className="container-custom py-16 border-t border-[#997a00]">
        <h2 className="text-4xl font-bold font-bebas text-[#1b365d] mb-12">
          Open Positions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {positions.map((position, idx) => (
            <motion.div
              key={position.id}
              className="p-6 border border-[#997a00] hover:border-[#cca300] bg-[#1b365d] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold font-bebas text-[#e6eaed] group-hover:text-[#cca300] transition-colors">
                    {position.title}
                  </h3>
                  <p className="text-sm text-[#cca300] uppercase tracking-widest">{position.department}</p>
                </div>
              </div>

              <p className="text-[#e6eaed]/70 text-sm mb-4">{position.description}</p>

              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-xs px-3 py-1 border border-[#997a00] text-[#e6eaed]/70">
                  {position.type}
                </span>
                <span className="text-xs px-3 py-1 border border-[#997a00] text-[#e6eaed]/70">
                  {position.experience}
                </span>
                <span className="text-xs px-3 py-1 border border-[#997a00] text-[#e6eaed]/70">
                  {position.location}
                </span>
              </div>

              <a
                href="/contact"
                className="inline-block text-[#cca300] font-bold text-sm uppercase tracking-widest hover:text-[#ffd700] transition-colors"
              >
                Apply Now →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Culture Section */}
      <div className="container-custom py-16">
        <div className="p-12 rounded-xl border border-[#997a00] bg-[#1b365d]">
          <h2 className="text-3xl font-bold font-bebas text-[#e6eaed] mb-4">Our Company Culture</h2>
          <p className="text-[#e6eaed]/80 mb-6">
            At Golden Pyramids, we believe in excellence, innovation, and teamwork. Our culture is built on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-[#cca300] mb-2">Excellence</h4>
              <p className="text-[#e6eaed]/70 text-sm">
                We strive for the highest standards in every project and interaction.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#cca300] mb-2">Safety First</h4>
              <p className="text-[#e6eaed]/70 text-sm">
                Our employees' wellbeing is our top priority in all operations.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#cca300] mb-2">Collaboration</h4>
              <p className="text-[#e6eaed]/70 text-sm">
                We work together across teams to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-custom py-16">
        <div className="p-12 border-2 border-[#cca300] bg-gradient-to-r from-[rgba(153, 122, 0,0.2)] to-[rgba(153, 122, 0,0.05)] text-center">
          <h2 className="text-3xl font-bold font-bebas text-[#1b365d] mb-4">
            Don't see the right position?
          </h2>
          <p className="text-[#1b365d]/70 mb-8">
            Send us your resume and let's explore opportunities that match your skills and aspirations.
          </p>
          <GlowButton
            href="/contact"
            variant="primary"
            size="lg"
          >
            Contact HR
          </GlowButton>
        </div>
      </div>
    </div>
  );
}
