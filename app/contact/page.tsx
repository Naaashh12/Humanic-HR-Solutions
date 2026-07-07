'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_EMAIL, COMPANY_LOCATION } from '@/lib/constants';
import { GlowButton } from '@/components/ui/GlowButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitted(true);
    setIsLoading(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Page Header */}
      <div className="container-custom py-16">
        <h1 className="text-5xl md:text-7xl font-bold font-bebas text-[#1b365d] mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-[#1b365d]/70">
          Let's discuss how Humanic HR Solutions can support your people operations
        </p>
      </div>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-bebas text-[#1b365d] mb-8">
              Contact Information
            </h2>

            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#997a00]/20 border border-[#cca300]">
                  <Phone className="w-6 h-6 text-[#ffd700]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1b365d] mb-2">Phone</h3>
                  <a
                    href={`tel:${COMPANY_PHONE}`}
                    className="text-[#cca300] hover:text-[#ffd700] font-semibold"
                  >
                    {COMPANY_PHONE}
                  </a>
                  <p className="text-sm text-[#1b365d]/70">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#997a00]/20 border border-[#cca300]">
                  <Mail className="w-6 h-6 text-[#ffd700]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1b365d] mb-2">Email</h3>
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="text-[#cca300] hover:text-[#ffd700] font-semibold"
                  >
                    {COMPANY_EMAIL}
                  </a>
                  <p className="text-sm text-[#1b365d]/70">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#997a00]/20 border border-[#cca300]">
                  <MapPin className="w-6 h-6 text-[#ffd700]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1b365d] mb-2">Location</h3>
                  <p className="text-[#cca300] font-semibold">{COMPANY_LOCATION}</p>
                  <p className="text-sm text-[#1b365d]/70">Postal Code: 46424</p>
                </div>
              </div>
            </div>

            {/* Office Hours / Additional Info */}
            <div className="p-6 border border-[#997a00] bg-[rgba(153, 122, 0,0.1)]">
              <h3 className="font-bold text-[#cca300] uppercase tracking-widest text-sm mb-4">
                Quick Response
              </h3>
              <ul className="space-y-2 text-sm text-[#1b365d]/80">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#cca300]" />
                  Typical response time: &lt; 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#cca300]" />
                  Urgent HR support available 24/7
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#cca300]" />
                  No obligation consultations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#cca300]" />
                  Confidentiality guaranteed
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="p-8 border border-[#997a00] bg-[#1b365d] backdrop-blur"
              >
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-[#cca300] uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-[rgba(153, 122, 0,0.1)] border border-[#997a00] text-[#1b365d] placeholder-[#997a00] focus:outline-none focus:border-[#cca300] transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-bold text-[#cca300] uppercase tracking-widest mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full px-4 py-3 bg-[rgba(153, 122, 0,0.1)] border border-[#997a00] text-[#1b365d] placeholder-[#997a00] focus:outline-none focus:border-[#cca300] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-[#cca300] uppercase tracking-widest mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-[rgba(153, 122, 0,0.1)] border border-[#997a00] text-[#1b365d] placeholder-[#997a00] focus:outline-none focus:border-[#cca300] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-[#cca300] uppercase tracking-widest mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+966 14 3915068"
                      className="w-full px-4 py-3 bg-[rgba(153, 122, 0,0.1)] border border-[#997a00] text-[#1b365d] placeholder-[#997a00] focus:outline-none focus:border-[#cca300] transition-colors"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-bold text-[#cca300] uppercase tracking-widest mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[rgba(153, 122, 0,0.1)] border border-[#997a00] text-[#1b365d] focus:outline-none focus:border-[#cca300] transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="mechanical">HR Strategy & Advisory</option>
                      <option value="civil">Policy & Compliance</option>
                      <option value="equipment-rental">HR Technology Enablement</option>
                      <option value="manpower-supply">Talent Acquisition</option>
                      <option value="material-supply">Payroll & Benefits</option>
                      <option value="electrical">Employee Relations</option>
                      <option value="valve-maintenance">Performance Management</option>
                      <option value="metering-skid">HR Analytics & Reporting</option>
                      <option value="analyzer-shelter">Learning & Development</option>
                      <option value="dewatering">Workforce Planning</option>
                      <option value="pumping-station">HR Operations Support</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-[#cca300] uppercase tracking-widest mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your HR needs or requirements..."
                      rows={4}
                      className="w-full px-4 py-3 bg-[rgba(153, 122, 0,0.1)] border border-[#997a00] text-[#1b365d] placeholder-[#997a00] focus:outline-none focus:border-[#cca300] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#cca300] text-white font-bold uppercase tracking-widest hover:shadow-[0_0_40px_rgba(204, 163, 0,0.8)] disabled:opacity-50 transition-all duration-300"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                    {!isLoading && <Send className="w-5 h-5" />}
                  </button>

                  <p className="text-xs text-[#1b365d]/60 text-center">
                    We respect your privacy. Your information is confidential.
                  </p>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 border-2 border-[#cca300] bg-[rgba(204, 163, 0,0.1)] flex flex-col items-center justify-center h-full text-center"
              >
                <div className="w-16 h-16 rounded-full border-2 border-[#cca300] flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-[#cca300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-bebas text-[#1b365d] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#1b365d]/70 mb-4">
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#cca300] font-bold hover:text-[#ffd700] transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
