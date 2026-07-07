
import { Bebas_Neue, DM_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';
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
  title: 'Humanic HR Solutions - Industrial Excellence Through Innovation',
  description:
    'Leading provider of comprehensive industrial services including mechanical services, civil works, equipment rental, and specialized industrial support across Saudi Arabia.',
  keywords:
    'industrial services, equipment rental, mechanical services, civil works, Saudi Arabia, Yanbu',
  authors: [{ name: 'Humanic HR Solutions' }],

  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://goldenpyramids.com',
    title: 'Humanic HR Solutions',
    description:
      'Industrial Excellence Through Innovation - Comprehensive industrial services',
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

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
