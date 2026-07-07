'use client';

import { COMPANY_PHONE } from '@/lib/constants';

type WhatsAppButtonProps = {
  variant?: 'floating' | 'footer';
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.671.149-.198.297-.768.967-.941 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.671-1.617-.92-2.216-.242-.58-.487-.5-.671-.51-.173-.008-.372-.01-.57-.01-.198 0-.521.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.076 4.487.709.306 1.262.49 1.694.627.712.227 1.36.195 1.872.118.572-.085 1.758-.719 2.008-1.414.249-.695.249-1.29.174-1.414-.074-.124-.272-.198-.57-.347Z"
      />
      <path
        fill="currentColor"
        d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.95L0 24l6.2-1.63A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52ZM12 21.82c-1.84 0-3.64-.49-5.2-1.42l-.37-.22-3.68.97.98-3.58-.24-.37A9.82 9.82 0 0 1 2.18 12c0-5.42 4.4-9.82 9.82-9.82 2.62 0 5.08 1.02 6.93 2.87A9.77 9.77 0 0 1 21.82 12c0 5.42-4.4 9.82-9.82 9.82Z"
      />
    </svg>
  );
}

export function WhatsAppButton({ variant = 'floating' }: WhatsAppButtonProps) {
  const phone = COMPANY_PHONE.replace(/\D/g, '');
  const href = `https://wa.me/${phone}`;

  if (variant === 'footer') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2b5a8f]/30 bg-[#1b365d] text-[#ffd700] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2b5a8f] hover:text-white"
      >
        <WhatsAppIcon className="h-4 w-4" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
