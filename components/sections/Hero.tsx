'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { GlowButton } from '@/components/ui/GlowButton';
import { useInViewAnimation } from '@/hooks/useScrollAnimation';
// import Threads from '@/components/Threads';


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
      {/* THREADS BACKGROUND
<div className="absolute inset-0 z-0 overflow-hidden">
  <div className="w-full h-full relative">
    <Threads
      color={[0.9176470588235294, 0.7019607843137254, 0.03137254901960784]}
      amplitude={1.7}
      distance={0}
      enableMouseInteraction={false}
    />
  </div>
</div> */}
{/* VIDEO BACKGROUND */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <video
    autoPlay muted loop playsInline
    className="w-full h-full object-cover scale-105 animate-hero-zoom"
  >
    <source src="/hero.mp4" type="video/mp4" />
  </video>
</div>


      {/* COLOR GRADE — ties video to brand palette */}
<div
  className="absolute inset-0 z-10 pointer-events-none"
  style={{
    background:
      'linear-gradient(135deg, rgba(27,54,93,0.15) 0%, rgba(15,23,42,0.05) 50%, rgba(204,163,0,0.05) 100%)',
  }}
/>

{/* DIRECTIONAL SCRIM — protects text legibility, heavier at bottom for stats/buttons */}
<div
  className="absolute inset-0 z-10 pointer-events-none"
  style={{
    background:
      'linear-gradient(180deg, rgba(8,14,26,0.20) 0%, rgba(8,14,26,0.08) 35%, rgba(8,14,26,0.12) 70%, rgba(8,14,26,0.35) 100%)',
  }}
/>

      {/* SCANLINE OVERLAY */}
      {/* <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]">
        <div
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(15,23,42,0.1) 0px, rgba(15,23,42,0.1) 1px, transparent 1px, transparent 2px)',
          }}
          className="w-full h-full"
        />
      </div> */}

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
          className="text-sm md:text-base font-bold text-white uppercase tracking-[0.3em] mb-4 font-bebas drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
          variants={itemVariants}
        >
          Welcome to Smarter HR
        </motion.p>

        {/* Main Heading */}
        <motion.h1
  className="text-5xl md:text-7xl lg:text-8xl font-bold font-bebas text-white mb-6 leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
  variants={itemVariants}
>
  Human{' '}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] via-[#cca300] to-[#f5d36a]">
    Excellence
  </span>
  <br /> Through Smarter HR
</motion.h1>

        {/* Subheading */}
        <motion.p
  className="text-lg md:text-xl text-[#d7e7ff] mb-8 max-w-2xl mx-auto leading-relaxed font-dm-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
  variants={itemVariants}
>
  Delivering comprehensive{" "}
  <span className="font-bold text-[#FFD700]">
    HR solutions
  </span>{" "}
  across recruitment, compliance, employee relations, and workforce support across{" "}
  <span className="font-bold text-[#FFD700]">
    India and the Gulf.
  </span>
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
