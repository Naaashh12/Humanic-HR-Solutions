'use client';

import { useScrollProgress } from '@/hooks/useScrollAnimation';

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#8c0415] via-[#bf0614] to-[#ff1a2e] z-9999"
      style={{
        width: `${progress * 100}%`,
        boxShadow: '0 0 10px rgba(191, 6, 20, 0.8)',
        transition: 'width 0.1s linear',
      }}
    />
  );
}
