'use client';

import { ReactNode } from 'react';
import { COLORS } from '@/lib/constants';

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export function GlowButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  href,
  target,
  rel,
}: GlowButtonProps) {
  const baseStyles = 'relative overflow-hidden inline-flex items-center justify-center font-bold letter-spacing tracking-widest transition-all duration-300 transform hover:scale-105';

  const variantStyles = {
    primary: `bg-[${COLORS.redLight}] text-white border-2 border-[${COLORS.redDark}] hover:shadow-[0_0_40px_rgba(204, 163, 0,0.8),0_0_60px_rgba(153, 122, 0,0.4)] shadow-[0_0_20px_rgba(204, 163, 0,0.5),inset_0_0_20px_rgba(255, 215, 0,0.1)]`,
secondary:
"bg-[#CCA300] border border-white text-white hover:bg-[#FFD700] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] active:scale-95 transition-all duration-300"  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  const content = (
    <>
      {/* Shimmer effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 -translate-x-full hover:translate-x-full transition-all duration-600" />
      
      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {content}
    </button>
  );
}
