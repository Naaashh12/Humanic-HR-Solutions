'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Briefcase,
  MapPin,
  TrendingUp,
  Wrench,
  Hammer,
  HardHat,
  Car,
  Factory,
  BadgeDollarSign,
  UserRound,
  Monitor,
  BriefcaseBusiness,
  UploadCloud,
  ArrowRight,
  Sparkles,
  Mail,
  Briefcase as BriefcaseIcon,
} from 'lucide-react';
import { GlowButton } from '@/components/ui/GlowButton';
import { COMPANY_EMAIL } from '@/lib/constants';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    preferredRole: '',
    location: '',
    message: '',
  });
  const [selectedFileName, setSelectedFileName] = useState('');

  const positions = [
    {
      id: 1,
      title: 'Senior HR Consultant',
      department: 'HR Advisory',
      type: 'Full-Time',
      experience: '5+ years',
      description: 'Lead HR advisory projects across client organizations',
      location: 'Yanbu',
    },
    {
      id: 2,
      title: 'Talent Acquisition Lead',
      department: 'Recruitment',
      type: 'Full-Time',
      experience: '5+ years',
      description: 'Oversee hiring campaigns and manage recruitment operations',
      location: 'Yanbu',
    },
    {
      id: 3,
      title: 'Payroll Specialist',
      department: 'Payroll Operations',
      type: 'Full-Time',
      experience: '2+ years',
      description: 'Manage payroll inputs, records, and employee pay support with precision',
      location: 'Yanbu',
    },
    {
      id: 4,
      title: 'Employee Relations Specialist',
      department: 'Employee Relations',
      type: 'Full-Time',
      experience: '3+ years',
      description: 'Support workplace cases, employee communication, and HR documentation',
      location: 'Yanbu',
    },
    {
      id: 5,
      title: 'HR Project Manager',
      department: 'HR Delivery',
      type: 'Full-Time',
      experience: '4+ years',
      description: 'Manage HR service projects from planning to completion',
      location: 'Yanbu',
    },
    {
      id: 6,
      title: 'Compliance Officer',
      department: 'HR Compliance',
      type: 'Full-Time',
      experience: '3+ years',
      description: 'Ensure HR policy standards, documentation, and compliance',
      location: 'Yanbu',
    },
  ];

  const benefits = [
    { icon: Briefcase, title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { icon: TrendingUp, title: 'Career Growth', description: 'Professional development and advancement opportunities' },
    { icon: Users, title: 'Team Culture', description: 'Collaborative, inclusive work environment' },
    { icon: MapPin, title: 'Modern Workplace', description: 'Smart HR tools and supportive workspaces' },
  ];

  const positionsWeRecruit = [
    { name: 'Engineers', icon: Wrench },
    { name: 'Technicians', icon: Hammer },
    { name: 'Electricians', icon: Wrench },
    { name: 'Welders', icon: HardHat },
    { name: 'Shuttering Carpenters', icon: Hammer },
    { name: 'Steel Fixers', icon: HardHat },
    { name: 'Helpers', icon: Users },
    { name: 'Drivers', icon: Car },
    { name: 'Machine Operators', icon: Factory },
    { name: 'Accountants', icon: BadgeDollarSign },
    { name: 'HR Professionals', icon: UserRound },
    { name: 'Sales Executives', icon: BriefcaseBusiness },
    { name: 'Managers', icon: BriefcaseBusiness },
    { name: 'IT Professionals', icon: Monitor },
    { name: 'Site Supervisors', icon: HardHat },
  ];

  const recruitmentSteps = [
    { title: 'Requirement Review', description: 'We align on the role, skillset, and urgency.' },
    { title: 'Candidate Search', description: 'We source and shortlist qualified professionals quickly.' },
    { title: 'Screening', description: 'Each profile is reviewed for experience and fit.' },
    { title: 'Interviews', description: 'We coordinate interviews and support decision-making.' },
    { title: 'Selection', description: 'You receive the best-fit candidates with clear insight.' },
    { title: 'Onboarding', description: 'We stay involved through joining and transition support.' },
  ];

  const candidateBenefits = [
    'Trusted recruitment support for India and Gulf markets',
    'Dedicated guidance from experienced recruiters',
    'Opportunities aligned to your background and goals',
    'Fast access to roles across engineering, operations, and office teams',
    'Transparent communication from first contact to placement',
    'Support with applications, interview prep, and follow-up',
  ];

  const isFormActive = Object.values(formData).some((value) => value.trim() !== '') || Boolean(selectedFileName);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFileName(file ? file.name : '');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Experience: ${formData.experience}`,
      `Preferred Role: ${formData.preferredRole}`,
      `Location: ${formData.location}`,
      `Message: ${formData.message}`,
      `Resume: ${selectedFileName || 'No file selected'}`,
    ].join('\n');

    const mailtoLink = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent('Career Application from Humanic HR Solutions Website')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

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
            Build your career with Humanic HR Solutions. We're looking for talented HR professionals to join our growing team.
          </p>
        </div>
      </div>

      {/* Positions We Recruit */}
      <div className="container-custom py-16 border-b border-[#997a00]">
        <div className="max-w-3xl mb-8">
          <div className="inline-block mb-4 px-4 py-2 border border-[#2b5a8f]/30 bg-[rgba(43,90,143,0.05)] text-[#2b5a8f] text-xs uppercase font-bold tracking-widest">
            Positions We Recruit
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-bebas text-[#1b365d] mb-3">
            Skilled talent across business-critical roles
          </h2>
          <p className="text-lg text-[#1b365d]/70">
            We connect employers with qualified professionals across operations, office, technical, and leadership roles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {positionsWeRecruit.map((position, idx) => {
            const Icon = position.icon;
            return (
              <motion.div
                key={position.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden border border-[#997a00]/25 bg-white px-4 py-4 shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cca300] hover:shadow-[0_18px_50px_rgba(204,163,0,0.16)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(204,163,0,0.12)] via-transparent to-[rgba(43,90,143,0.08)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center border border-[#cca300]/40 bg-[rgba(204,163,0,0.12)] text-[#cca300]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{position.name}</span>
                </div>
              </motion.div>
            );
          })}
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

      {/* Employers & Job Seekers */}
      <div className="container-custom py-16 border-t border-[#997a00]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden border border-[#997a00]/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(204,163,0,0.16))] p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] md:p-8"
        >
          <div className="absolute -right-10 -top-10 h-36 w-36 bg-[#cca300]/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(43,90,143,0.12),transparent_40%)]" />
          <div className="relative flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
            <div className="max-w-xl">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center border border-[#cca300]/40 bg-white text-[#cca300] shadow-sm">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold font-bebas text-[#1b365d] mb-3">For Employers</h2>
              <p className="mb-5 text-[#1b365d]/75">We provide reliable staffing support for growing teams and critical projects.</p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 bg-[#cca300]" /> Skilled workforce</li>
                <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 bg-[#cca300]" /> Pre-screened candidates</li>
                <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 bg-[#cca300]" /> Quick recruitment process</li>
                <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 bg-[#cca300]" /> Customized hiring solutions</li>
                <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 bg-[#cca300]" /> End-to-end recruitment support</li>
              </ul>
            </div>

            <div className="w-full xl:max-w-[480px] border border-[#997a00]/25 bg-white/90 p-4 shadow-sm md:p-5">
              <div className="mb-4 flex items-center justify-between border-b border-[#cca300]/30 pb-3">
                <h3 className="font-bold text-[#1b365d]">Recruitment Roadmap</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#cca300]">Milestones</span>
              </div>
              <div className="relative space-y-3">
                <div className="absolute left-[1.15rem] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#cca300] via-[#2b5a8f] to-[#cca300]" />
                {recruitmentSteps.map((step, index) => (
                  <div key={step.title} className="relative pl-8">
                    <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center border border-[#cca300] bg-[#1b365d] text-[10px] font-bold text-[#f5d36a]">
                      {index + 1}
                    </div>
                    <div className="border border-[#2b5a8f]/15 bg-[rgba(43,90,143,0.04)] p-3 shadow-sm">
                      <h4 className="text-sm font-semibold text-[#1b365d]">{step.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
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

      {/* Job Seekers Section */}
      <div className="container-custom py-16 border-t border-[#997a00]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden border border-[#2b5a8f]/30 bg-[linear-gradient(135deg,rgba(43,90,143,0.12),rgba(255,255,255,0.97))] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:p-8"
        >
          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start" >
            <div className="flex h-full flex-col gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center border border-[#2b5a8f]/30 bg-white text-[#2b5a8f] shadow-sm">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-3xl font-bold font-bebas text-[#1b365d] mb-2">For Job Seekers</h2>
                <p className="text-[#1b365d]/75 mb-3">Looking for your next career opportunity?</p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Register with Humanic HR Solutions and gain access to opportunities with leading companies in India and the Gulf.
                </p>
              </div>
              <div className="flex-1 border border-[#2b5a8f]/20 bg-white/90 p-4 text-sm text-slate-700 shadow-sm">
                <div className="mb-3 flex items-center gap-2 font-semibold text-[#1b365d]">
                  <BriefcaseIcon className="h-4 w-4 text-[#cca300]" />
                  Why candidates choose us
                </div>
                <ul className="space-y-2.5">
                  {candidateBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 border-b border-[#2b5a8f]/10 pb-2 last:border-b-0 last:pb-0">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 bg-[#cca300]" />
                      <span className="text-sm text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit} className={`border border-[#2b5a8f]/20 bg-white/90 p-5 shadow-sm md:p-6 ${isFormActive ? 'bg-[linear-gradient(135deg,rgba(204,163,0,0.12),rgba(255,255,255,0.98))]' : 'bg-white/90'}`}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#1b365d]">Full Name</label>
                  <input name="name" value={formData.name} onChange={handleInputChange} required className={`w-full border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition-all duration-300 focus:border-[#cca300] focus:ring-2 focus:ring-[#cca300]/20 ${formData.name ? 'border-[#cca300] bg-[rgba(204,163,0,0.10)]' : ''}`} placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#1b365d]">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className={`w-full border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition-all duration-300 focus:border-[#cca300] focus:ring-2 focus:ring-[#cca300]/20 ${formData.email ? 'border-[#cca300] bg-[rgba(204,163,0,0.10)]' : ''}`} placeholder="you@example.com" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#1b365d]">Phone</label>
                  <input name="phone" value={formData.phone} onChange={handleInputChange} required className={`w-full border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition-all duration-300 focus:border-[#cca300] focus:ring-2 focus:ring-[#cca300]/20 ${formData.phone ? 'border-[#cca300] bg-[rgba(204,163,0,0.10)]' : ''}`} placeholder="Phone number" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#1b365d]">Experience</label>
                  <input name="experience" value={formData.experience} onChange={handleInputChange} required className={`w-full border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition-all duration-300 focus:border-[#cca300] focus:ring-2 focus:ring-[#cca300]/20 ${formData.experience ? 'border-[#cca300] bg-[rgba(204,163,0,0.10)]' : ''}`} placeholder="e.g. 5 years" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#1b365d]">Preferred Role</label>
                  <input name="preferredRole" value={formData.preferredRole} onChange={handleInputChange} className={`w-full border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition-all duration-300 focus:border-[#cca300] focus:ring-2 focus:ring-[#cca300]/20 ${formData.preferredRole ? 'border-[#cca300] bg-[rgba(204,163,0,0.10)]' : ''}`} placeholder="Role you want" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#1b365d]">Location</label>
                  <input name="location" value={formData.location} onChange={handleInputChange} className={`w-full border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition-all duration-300 focus:border-[#cca300] focus:ring-2 focus:ring-[#cca300]/20 ${formData.location ? 'border-[#cca300] bg-[rgba(204,163,0,0.10)]' : ''}`} placeholder="City or country" />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-semibold text-[#1b365d]">Message</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className={`w-full border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition-all duration-300 focus:border-[#cca300] focus:ring-2 focus:ring-[#cca300]/20 ${formData.message ? 'border-[#cca300] bg-[rgba(204,163,0,0.10)]' : ''}`} placeholder="Tell us about your background and goals" />
              </div>

              <label className={`mt-4 flex cursor-pointer items-center justify-between border border-dashed px-4 py-4 text-sm font-semibold transition-all duration-300 ${isFormActive ? 'border-[#cca300] bg-[rgba(204,163,0,0.16)] text-[#1b365d]' : 'border-[#2b5a8f]/45 bg-[rgba(43,90,143,0.04)] text-[#2b5a8f] hover:border-[#cca300] hover:bg-[rgba(204,163,0,0.08)]'}`}>
                <span className="flex items-center gap-3">
                  <UploadCloud className="h-5 w-5" />
                  {selectedFileName ? selectedFileName : 'Upload Resume'}
                </span>
                <ArrowRight className="h-4 w-4" />
                <input type="file" accept=".pdf,.doc,.docx" className="sr-only" onChange={handleFileChange} />
              </label>

              <button type="submit" className={`mt-5 inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-all duration-300 ${isFormActive ? 'bg-[#cca300] text-[#1b365d] hover:bg-[#997a00]' : 'bg-[#1b365d] text-white hover:bg-[#2b5a8f]'}`}>
                <Mail className="h-4 w-4" />
                Send Application
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Culture Section */}
      <div className="container-custom py-16">
        <div className="p-12 rounded-xl border border-[#997a00] bg-[#1b365d]">
          <h2 className="text-3xl font-bold font-bebas text-[#e6eaed] mb-4">Our Company Culture</h2>
          <p className="text-[#e6eaed]/80 mb-6">
            At Humanic HR Solutions, we believe in excellence, trust, and teamwork. Our culture is built on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-[#cca300] mb-2">Excellence</h4>
              <p className="text-[#e6eaed]/70 text-sm">
                We strive for the highest standards in every client engagement and employee interaction.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#cca300] mb-2">People First</h4>
              <p className="text-[#e6eaed]/70 text-sm">
                Our employees' wellbeing is our top priority in all decisions.
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
