'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const AnimatedGear = ({ 
  size = 60, 
  className = '', 
  speed = 20,
  color = '#C8A44D'
}: { 
  size?: number; 
  className?: string;
  speed?: number;
  color?: string;
}) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
    >
      <defs>
        <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </linearGradient>
      </defs>
      
      {/* Gear outer circle */}
      <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="2" opacity="0.3" />
      
      {/* Main gear teeth */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        const x1 = 50 + 35 * Math.cos((angle * Math.PI) / 180);
        const y1 = 50 + 35 * Math.sin((angle * Math.PI) / 180);
        const x2 = 50 + 45 * Math.cos((angle * Math.PI) / 180);
        const y2 = 50 + 45 * Math.sin((angle * Math.PI) / 180);
        
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#gearGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}
      
      {/* Center circle */}
      <circle cx="50" cy="50" r="15" fill={color} opacity="0.8" />
      <circle cx="50" cy="50" r="8" fill="#ffffff" opacity="0.5" />
    </motion.svg>
  );
};

export const GearIcon = ({ 
  size = 24, 
  className = '',
  color = 'currentColor'
}: { 
  size?: number; 
  className?: string;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 0l4.24-4.24M1 12h6m6 0h6m-1.78 7.78l-4.24-4.24m-5.08 0l-4.24 4.24" />
    </svg>
  );
};

export const RotatingGear = ({ 
  size = 100,
  className = '',
  speed = 20
}: {
  size?: number;
  className?: string;
  speed?: number;
}) => {
  return (
    <motion.div
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
    >
      <AnimatedGear size={size} speed={0} color="#C8A44D" />
    </motion.div>
  );
};
