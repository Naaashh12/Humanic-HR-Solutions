'use client';

import { useScrollProgress } from '@/hooks/useScrollAnimation';

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#997a00] via-[#cca300] to-[#ffd700] z-9999"
      style={{
        width: `${progress * 100}%`,
        boxShadow: '0 0 10px rgba(204, 163, 0, 0.8)',
        transition: 'width 0.1s linear',
      }}
    />
  );
}
