'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { GlowButton } from '@/components/ui/GlowButton';
import { useInViewAnimation } from '@/hooks/useScrollAnimation';
import Hyperspeed from '@/components/Hyperspeed';
import { hyperspeedPresets } from '@/components/HyperSpeedPresets';

export function HeroSection() {
  const { ref, isInView } = useInViewAnimation(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden pt-14"
    >
      {/* HYPERSPEED BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed effectOptions={hyperspeedPresets.six as any} />
      </div>

      {/* VIGNETTE OVERLAY */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {/* SCANLINE OVERLAY */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-10">
        <div
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 2px)',
          }}
          className="w-full h-full"
        />
      </div>

      {/* CONTENT */}
      <motion.div
        ref={ref as any}
        className="relative z-20 container-custom text-center max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Floating accent line above title */}
        <motion.div className="mb-6 flex justify-center" variants={itemVariants}>
          <div className="h-1 w-16 bg-gradient-to-r from-[#8c0415] via-[#bf0614] to-[#8c0415]" />
        </motion.div>

        {/* Preheading */}
        <motion.p
          className="text-sm md:text-base font-bold text-[#bf0614] uppercase tracking-widest mb-4 font-bebas"
          variants={itemVariants}
        >
          Welcome to the Next Level
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-bebas text-[#e6eaed] mb-6 leading-tight"
          variants={itemVariants}
        >
          Industrial{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf0614] via-[#ff1a2e] to-[#8c0415]">
            Excellence
          </span>
          <br /> Through Innovation
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-[#e6eaed]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-dm-sans"
          variants={itemVariants}
        >
          Delivering comprehensive industrial solutions across mechanical services, civil works,
          equipment rental, and specialized industrial support across Saudi Arabia.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <GlowButton href="/services" variant="primary" size="lg">
            Explore Services
          </GlowButton>
          <GlowButton href="/contact" variant="secondary" size="lg">
            Get in Touch
          </GlowButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-16 max-w-xl mx-auto"
          variants={itemVariants}
        >
          {[
            { label: '11+', value: 'Services' },
            { label: '500+', value: 'Equipment' },
            { label: '24/7', value: 'Support' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-4 border border-[#8c0415]/30 hover:border-[#bf0614] bg-black/50 backdrop-blur transition-all duration-300 hover:shadow-[0_0_20px_rgba(191,6,20,0.3)]"
            >
              <div className="text-xl md:text-2xl font-bold text-[#bf0614] font-bebas">
                {stat.label}
              </div>
              <div className="text-xs text-[#e6eaed]/70 uppercase tracking-widest mt-1">
                {stat.value}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        
       
      </motion.div>
    </section>
  );
}