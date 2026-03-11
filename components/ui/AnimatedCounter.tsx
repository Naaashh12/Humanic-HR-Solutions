'use client';

import { useCountUp, useInViewAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label?: ReactNode;
  className?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2000,
  suffix = '',
  prefix = '',
  label,
  className = '',
}: AnimatedCounterProps) {
  const { ref, isInView } = useInViewAnimation(true);
  const count = useCountUp(from, to, duration, isInView);

  return (
    <div
      ref={ref as any}
      className={`text-center ${className}`}
    >
      <div className="text-4xl md:text-5xl font-bold text-gradient-red mb-2">
        {prefix}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf0614] to-[#ff1a2e]">
          {count.toLocaleString()}
        </span>
        {suffix}
      </div>
      {label && (
        <div className="text-sm md:text-base text-[#e6eaed] uppercase tracking-widest font-semibold">
          {label}
        </div>
      )}
    </div>
  );
}
