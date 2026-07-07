'use client';

import { useEffect, useRef } from 'react';
import { useMousePosition, useIsTouchDevice } from '@/hooks/useScrollAnimation';

export function CustomCursor() {
  const mousePosition = useMousePosition();
  const isTouchDevice = useIsTouchDevice();
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;

    if (!cursor || !ring) return;

    // Update cursor position
    cursor.style.left = `${mousePosition.x}px`;
    cursor.style.top = `${mousePosition.y}px`;

    // Ring follows with slight delay
    setTimeout(() => {
      ring.style.left = `${mousePosition.x}px`;
      ring.style.top = `${mousePosition.y}px`;
    }, 5);
  }, [mousePosition, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Cursor dot */}
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-gradient-to-r from-red-600 to-red-500 rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 shadow-lg"
        style={{
          boxShadow: '0 0 10px rgba(204, 163, 0, 0.8)',
        }}
      />

      {/* Cursor ring */}
      <div
        ref={ringRef}
        className="fixed w-8 h-8 border-2 border-red-600 rounded-full pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2"
        style={{
          boxShadow: '0 0 15px rgba(153, 122, 0, 0.6), inset 0 0 10px rgba(204, 163, 0, 0.2)',
        }}
      />
    </>
  );
}
