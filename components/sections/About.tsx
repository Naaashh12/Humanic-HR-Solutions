'use client';

import { motion } from 'framer-motion';
import { useInViewAnimation } from '@/hooks/useScrollAnimation';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Wrench, Award, Users, TrendingUp } from 'lucide-react';

export function AboutSection() {
  const { ref, isInView } = useInViewAnimation(true);

  const stats = [
    { label: 'Years Experience', value: 5, icon: Award },
    { label: 'Active Projects', value: 50, icon: TrendingUp },
    { label: 'Team Members', value: 150, icon: Users },
    { label: 'Client Satisfaction', value: 100, suffix: '%', icon: Wrench },
  ];

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#bf0614] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8c0415] rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative hexagon */}
            <div
              className="absolute -inset-8 border-2 border-[#8c0415]/30"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            />

            {/* Main image container */}
<div
  className="relative bg-gradient-to-br from-[#8c0415]/20 to-[#000000] p-8 border border-[#bf0614]/50 overflow-hidden group"
  style={{
    clipPath:
      "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))",
  }}
>
 <div className="aspect-square overflow-hidden group-hover:shadow-[0_0_40px_rgba(191,6,20,0.4)] transition-all duration-300">
  <video
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/about.mp4" type="video/mp4" />
  </video>
</div>

              {/* Animated gear decoration */}
              <motion.div
                className="absolute -right-6 -bottom-6 w-32 h-32 border-2 border-[#8c0415]/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section label */}
            <div className="inline-block mb-4 px-4 py-2 border border-[#8c0415] bg-[rgba(140,4,21,0.1)] text-[#bf0614] text-xs uppercase font-bold tracking-widest">
              About Us
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold font-bebas text-[#e6eaed] mb-6">
              Trusted Partner in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf0614] to-[#ff1a2e] block">
                Industrial Solutions
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#e6eaed]/80 text-lg leading-relaxed mb-6">
              Golden Pyramids is a leading provider of comprehensive industrial services across Saudi Arabia and the Gulf region. With over two decades of experience, we specialize in delivering excellence across mechanical services, civil works, equipment rental, and specialized industrial support.
            </p>

            {/* Key points */}
            <div className="space-y-3 mb-8">
              {[
                'Certified technicians with industry expertise',
                'State-of-the-art equipment and technology',
                'ISO 9001 certified processes and quality assurance',
                ' 24/7 operational support and emergency response',
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#bf0614] to-[#ff1a2e] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-[#e6eaed]/80">{point}</p>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-[#bf0614] font-bold uppercase tracking-widest hover:text-[#ff1a2e] transition-colors group"
            >
              <span>Explore Our Services</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-20 border-t border-[#8c0415]">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Icon className="w-8 h-8 text-[#bf0614] mx-auto mb-4" />
                <AnimatedCounter
                  to={stat.value}
                  duration={2000}
                  suffix={stat.suffix}
                />
                <p className="text-xs md:text-sm text-[#e6eaed]/70 uppercase tracking-widest mt-2 font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
