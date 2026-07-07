
import { Bebas_Neue, DM_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};



const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  weight: '400',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Humanic HR Solutions - Human Excellence Through Smarter HR',
  description:
    'Leading provider of comprehensive HR services including HR strategy, recruitment, payroll, compliance, employee relations, and workforce support across Saudi Arabia.',
  keywords:
    'HR services, recruitment, payroll, compliance, employee relations, workforce planning, Saudi Arabia, Yanbu',
  authors: [{ name: 'Humanic HR Solutions' }],

  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://goldenpyramids.com',
    title: 'Humanic HR Solutions',
    description:
      'Human Excellence Through Smarter HR - Comprehensive HR services',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(bebasNeue.variable, dmSans.variable, "font-sans")}
      style={{
        fontFamily: 'var(--font-dm-sans)',
      }}
    >
      <body className="bg-black text-[#e6eaed] overflow-x-hidden">
        {/* Custom cursor */}
        <CustomCursor />

        {/* Scroll progress bar */}
        <ScrollProgressBar />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main>{children}</main>

        {/* Floating WhatsApp button */}
        <WhatsAppButton />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
