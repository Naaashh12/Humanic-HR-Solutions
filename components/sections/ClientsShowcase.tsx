'use client';

import { motion } from 'framer-motion';
import { useInViewAnimation } from '@/hooks/useScrollAnimation';
import { useRef, useEffect } from 'react';
import { Star, Award, CheckCircle, Zap } from 'lucide-react';

export function ClientsShowcase() {
  const { ref, isInView } = useInViewAnimation(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle field animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.6;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;
    const draw = () => {
      ctx!.fillStyle = 'rgba(241, 245, 249, 0.15)';
      ctx!.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx!.fillStyle = `rgba(43, 90, 143, ${p.opacity})`;
        ctx!.fillRect(p.x, p.y, p.size, p.size);

        // Draw connections
        particles.forEach((p2) => {
          const dist = Math.hypot(p2.x - p.x, p2.y - p.y);
          if (dist < 100) {
            ctx!.strokeStyle = `rgba(43, 90, 143, ${0.12 * (1 - dist / 100)})`;
            ctx!.lineWidth = 0.5;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(p2.x, p2.y);
            ctx!.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.6;
    };

    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Sample client data - can be replaced with real client logos
  const clients = [
  { name: 'Aramco', logo: '/clients/saudi-aramco-seeklogo.png' },
  { name: 'SABIC', logo: '/clients/sab.png' },
  { name: 'Technip', logo: '/clients/Technip.svg' },
  { name: 'Marafiq', logo: '/clients/marafi.png' },
  { name: 'Hyundai', logo: '/clients/hyundai.svg' },
  { name: 'Samsung', logo: '/clients/Samsung.png' },
  { name: 'Saipem', logo: '/clients/dg0dcknquuegh69leek6eu9nvr.png' },
  { name: 'Hitachi', logo: '/clients/Hitachi.png' },
];
  const achievements = [
    { icon: 'star', label: '100% Satisfaction', value: 'Client Rating' },
    { icon: 'award', label: '50+', value: 'Active Projects' },
    { icon: 'check', label: '500+', value: 'Talent Profiles' },
    { icon: 'zap', label: '24/7', value: 'HR Support' },
  ];

  const AchievementIcon = ({ type }: { type: string }) => {
    switch(type) {
      case 'star': return <Star className="w-8 h-8 text-[#2b5a8f] mx-auto mb-3" />;
      case 'award': return <Award className="w-8 h-8 text-[#2b5a8f] mx-auto mb-3" />;
      case 'check': return <CheckCircle className="w-8 h-8 text-[#2b5a8f] mx-auto mb-3" />;
      case 'zap': return <Zap className="w-8 h-8 text-[#2b5a8f] mx-auto mb-3" />;
      default: return null;
    }
  };

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-[#f1f5f9] overflow-hidden">
      {/* Particle Field Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-600 pointer-events-none"
      />

      <div className="container-custom relative z-10">
        {/* Header with shadow effect */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-2 border border-[#2b5a8f]/30 bg-[rgba(43,90,143,0.05)] text-[#2b5a8f] text-xs uppercase font-bold tracking-widest">
            Our Legacy
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-bebas text-[#0f172a] mb-4 relative">
            <span
              className="relative"
              style={{
                textShadow: '2px 2px 0 #cbd5e1, 4px 4px 0 #2b5a8f',
              }}
            >
            Trusted by People Leaders
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Supporting growing employers across energy, manufacturing, construction, and logistics sectors
          </p>
        </motion.div>

        {/* Achievements Counter Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 border border-slate-200 bg-white/80 backdrop-blur-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {achievements.map((achievement, idx) => (
              <div key={idx} className="text-center">
                <AchievementIcon type={achievement.icon} />
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1b365d] to-[#2b5a8f] font-bebas">
                  {achievement.label}
                </div>
                <p className="text-xs md:text-sm text-slate-500 uppercase tracking-widest mt-2">
                  {achievement.value}
                </p>
              </div>
            ))}
        </motion.div>

        {/* Client Logos Marquee */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-widest text-center mb-8">
            Working With
          </h3>

          {/* First marquee row */}
          <div className="flex overflow-hidden mb-6">
            <div className="flex animate-marquee gap-8">
              {[...clients, ...clients].map((client, idx) => (
                <div
  key={idx}
  className="flex items-center justify-center w-[180px] h-[90px] border border-slate-200 bg-white hover:border-[#2b5a8f] transition-all duration-300 hover:shadow-[0_0_20px_rgba(43,90,143,0.1)]"
>
  <img
    src={client.logo}
    alt={client.name}
    className="max-h-12 object-contain opacity-90 hover:opacity-100 transition"
  />
</div>
              ))}
            </div>
          </div>

          {/* Second marquee row (reverse) */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-reverse gap-8">
              {[...clients, ...clients].reverse().map((client, idx) => (
                <div
  key={idx}
  className="flex items-center justify-center w-[180px] h-[90px] border border-slate-200 bg-white hover:border-[#2b5a8f] transition-all duration-300 hover:shadow-[0_0_20px_rgba(43,90,143,0.1)]"
>
  <img
    src={client.logo}
    alt={client.name}
    className="max-h-12 object-contain opacity-90 hover:opacity-100 transition"
  />
</div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Showcase Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {[
            {
              title: 'HR Analytics Reporting',
              description: 'Clear workforce insight for leadership decisions',
              size: 'md:col-span-2',
            },
            {
              title: 'Talent Pipeline Network',
              description: '500+ qualified talent profiles',
              size: 'md:col-span-1',
            },
            {
              title: 'Policy & Compliance',
              description: 'Clear HR standards for growing teams',
              size: 'md:col-span-1',
            },
            {
              title: 'HR Operations Support',
              description: '24/7 employee support and monitoring',
              size: 'md:col-span-2',
            },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              className={`p-6 border border-slate-200 hover:border-[#2b5a8f] bg-white/80 backdrop-blur transition-all duration-300 group cursor-pointer ${
                project.size
              }`}
              whileHover={{ y: -5 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="mb-4 inline-block w-3 h-3 bg-[#2b5a8f] group-hover:bg-[#cca300] group-hover:shadow-[0_0_15px_rgba(204,163,0,0.5)] transition-all duration-300" />
              <h4 className="font-bold text-[#0f172a] mb-2 group-hover:text-[#2b5a8f] transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">
                {project.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
