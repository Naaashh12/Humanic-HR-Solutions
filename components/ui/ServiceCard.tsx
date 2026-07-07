'use client';

import Link from 'next/link';
import {
  Wrench,
  HardHat,
  Zap,
  Users,
  Package,
  Lightbulb,
  Settings,
  Activity,
  Square,
  Droplet,
  Gauge,
} from 'lucide-react';
import { useInViewAnimation } from '@/hooks/useScrollAnimation';

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
  features?: string[];
}

const iconMap: Record<string, React.ReactNode> = {
  wrench: <Wrench className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700]" />,
  'hard-hat': <HardHat className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700]" />,
  zap: <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700]" />,
  users: <Users className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700]" />,
  package: <Package className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700]" />,
  lightbulb: <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700]" />,
  settings: <Settings className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700]" />,
  activity: <Activity className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700]" />,
  square: <Square className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700]" />,
  droplet: <Droplet className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700]" />,
  gauge: <Gauge className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700]" />,
};

export function ServiceCard({
  slug,
  title,
  description,
  icon,
  featured = false,
  features = [],
}: ServiceCardProps) {
  const { ref, isInView } = useInViewAnimation();
  const iconElement = iconMap[icon.toLowerCase()] || iconMap.wrench;

  return (
    <Link href={`/services/${slug}`}>
      <div
        ref={ref as any}
        className={`relative group cursor-pointer overflow-hidden transition-all duration-500 ${featured ? 'md:col-span-2 md:row-span-2' : ''
          } ${isInView ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: isInView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Card background with clip-path */}
        <div
          className="h-full p-6 md:p-8 bg-[#1b365d] border border-[#997a00] relative overflow-hidden group-hover:border-[#cca300] transition-all duration-300"
          style={{
            clipPath: featured
              ? 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))'
              : 'polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px))',
          }}
        >
          {/* Glow effect on hover */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[rgba(204, 163, 0,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              boxShadow: '0 0 40px rgba(204, 163, 0, 0.4)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Icon container */}
            <div className="mb-4 inline-flex w-12 h-12 md:w-16 md:h-16 items-center justify-center bg-gradient-to-br from-[#997a00] to-[#665200] border border-[#cca300] group-hover:border-[#ffd700] transition-all duration-300"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                boxShadow: '0 0 20px rgba(204, 163, 0, 0.3)',
              }}
            >
              {iconElement}
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-[#e6eaed] mb-2 group-hover:text-[#cca300] transition-colors duration-300 font-bebas uppercase">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-[#e6eaed]/80 mb-4 flex-grow">
              {description}
            </p>

            {/* Features for featured cards */}
            {featured && features.length > 0 && (
              <ul className="mb-4 space-y-1 text-xs md:text-sm text-[#e6eaed]/70">
                {features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#cca300] mr-2 mt-1">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Arrow indicator */}
            <div className="flex items-center text-[#cca300] font-bold uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform duration-300 mt-auto">
              <span>Learn More</span>
              <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
