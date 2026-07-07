'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { GlowButton } from '@/components/ui/GlowButton';
import { useInViewAnimation } from '@/hooks/useScrollAnimation';
import Threads from '@/components/Threads';


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
      className="relative w-full min-h-screen bg-[#f8fafc] flex items-center justify-center overflow-hidden pt-14"
    >
      {/* THREADS BACKGROUND */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <div className="w-full h-full relative">
    <Threads
      color={[0.9176470588235294, 0.7019607843137254, 0.03137254901960784]}
      amplitude={1.7}
      distance={0}
      enableMouseInteraction={false}
    />
  </div>
</div>

      {/* VIGNETTE OVERLAY */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(248, 250, 252, 0.7) 100%)',
        }}
      />

      {/* SCANLINE OVERLAY */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]">
        <div
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(15,23,42,0.1) 0px, rgba(15,23,42,0.1) 1px, transparent 1px, transparent 2px)',
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
          <div className="h-1 w-16 bg-gradient-to-r from-[#1b365d] via-[#2b5a8f] to-[#1b365d]" />
        </motion.div>

        {/* Preheading */}
        <motion.p
          className="text-sm md:text-base font-bold text-[#cca300] uppercase tracking-widest mb-4 font-bebas"
          variants={itemVariants}
        >
          Welcome to Smarter HR
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-bebas text-[#0f172a] mb-6 leading-tight"
          variants={itemVariants}
        >
          Human{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b365d] via-[#2b5a8f] to-[#3b82f6]">
            Excellence
          </span>
          <br /> Through Smarter HR
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed font-dm-sans"
          variants={itemVariants}
        >
          Delivering comprehensive HR solutions across recruitment, payroll, compliance,
          employee relations, and workforce support across Saudi Arabia.
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
            { label: '500+', value: 'Talent Pool' },
            { label: '24/7', value: 'HR Support' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-4 border border-[#2b5a8f]/20 hover:border-[#2b5a8f] bg-white/80 backdrop-blur transition-all duration-300 hover:shadow-[0_0_20px_rgba(43,90,143,0.1)]"
            >
              <div className="text-xl md:text-2xl font-bold text-[#cca300] font-bebas">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">
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
