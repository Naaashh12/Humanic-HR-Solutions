'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import {
  COMPANY_NAME,
  COMPANY_LOCATION,
  COMPANY_PHONE,
  COMPANY_EMAIL,
  COMPANY_EMAIL_ALT,
  FOOTER_SECTIONS,
  SOCIAL_LINKS,
} from '@/lib/constants';
import { SERVICES } from '@/lib/services-data';

/* ── Gear SVG component ─────────────────────────────────────────────────────
   Draws a gear with N teeth via SVG path math.
   cx/cy = center, r = outer radius, ir = inner radius, teeth = tooth count
   strokeColor, opacity, animDur, animDir control appearance & rotation
────────────────────────────────────────────────────────────────────────────── */
function Gear({
  cx, cy, r, ir, teeth, strokeColor, opacity, animDur, animDir = 1, strokeWidth = 1,
}: {
  cx: number; cy: number; r: number; ir: number; teeth: number;
  strokeColor: string; opacity: number; animDur: string; animDir?: number; strokeWidth?: number;
}) {
  const toothAngle = (2 * Math.PI) / teeth;
  const toothWidth = toothAngle * 0.4;
  let d = '';

  for (let i = 0; i < teeth; i++) {
    const a0 = i * toothAngle - toothWidth / 2;
    const a1 = i * toothAngle + toothWidth / 2;
    const a2 = (i + 0.5) * toothAngle - toothWidth * 0.3;
    const a3 = (i + 0.5) * toothAngle + toothWidth * 0.3;

    if (i === 0) {
      d += `M ${cx + ir * Math.cos(a0)} ${cy + ir * Math.sin(a0)} `;
    } else {
      d += `L ${cx + ir * Math.cos(a0)} ${cy + ir * Math.sin(a0)} `;
    }
    d += `L ${cx + r * Math.cos(a0)} ${cy + r * Math.sin(a0)} `;
    d += `L ${cx + r * Math.cos(a1)} ${cy + r * Math.sin(a1)} `;
    d += `L ${cx + ir * Math.cos(a1)} ${cy + ir * Math.sin(a1)} `;
    d += `L ${cx + ir * Math.cos(a2)} ${cy + ir * Math.sin(a2)} `;
    d += `L ${cx + ir * Math.cos(a3)} ${cy + ir * Math.sin(a3)} `;
  }
  d += 'Z';

  const spinDir = animDir > 0 ? '0;360' : '0;-360';

  return (
    <g opacity={opacity}>
      <path d={d} fill="none" stroke={strokeColor} strokeWidth={strokeWidth}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${cx} ${cy}`}
          to={`${animDir > 0 ? 360 : -360} ${cx} ${cy}`}
          dur={animDur}
          repeatCount="indefinite"
        />
      </path>
      {/* Inner hub circle */}
      <circle cx={cx} cy={cy} r={ir * 0.38} fill="none" stroke={strokeColor} strokeWidth={strokeWidth * 0.7}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${cx} ${cy}`}
          to={`${animDir > 0 ? 360 : -360} ${cx} ${cy}`}
          dur={animDur}
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
}

/* ── Hexagon component ──────────────────────────────────────────────────────*/
function Hex({
  cx, cy, r, strokeColor, opacity, animDur, delay = '0s',
}: {
  cx: number; cy: number; r: number; strokeColor: string; opacity: number; animDur: string; delay?: string;
}) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(' ');

  return (
    <polygon points={pts} fill="none" stroke={strokeColor} strokeWidth="0.8" opacity={opacity}>
      <animateTransform
        attributeName="transform"
        type="rotate"
        from={`0 ${cx} ${cy}`}
        to={`360 ${cx} ${cy}`}
        dur={animDur}
        begin={delay}
        repeatCount="indefinite"
      />
      <animate attributeName="opacity" values={`${opacity};${opacity * 0.3};${opacity}`} dur={animDur} begin={delay} repeatCount="indefinite" />
    </polygon>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const servicesA = SERVICES.slice(0, 5);
  const servicesB = SERVICES.slice(5);

  return (
    <footer className="relative bg-gradient-to-b from-[#1b365d] to-[#0f172a] overflow-hidden">

      {/* ── ANIMATED GEARS + GEO BACKGROUND ─────────────────────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ opacity: 0.55 }}
      >
        <defs>
          <filter id="gearGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="gearGlowMed" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="gearGlowSoft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ════ BOTTOM-LEFT CLUSTER ════ */}
        {/* XL anchor gear */}
        <g filter="url(#gearGlow)">
          <Gear cx={80} cy={440} r={88} ir={66} teeth={16} strokeColor="#ffd700" opacity={1} animDur="20s" animDir={1} strokeWidth={1.8} />
        </g>
        {/* Medium meshing gear */}
        <g filter="url(#gearGlowMed)">
          <Gear cx={230} cy={400} r={50} ir={36} teeth={10} strokeColor="#cbd5e1" opacity={1} animDur="11.5s" animDir={-1} strokeWidth={1.5} />
        </g>
        {/* Small gear top of cluster */}
        <g filter="url(#gearGlowSoft)">
          <Gear cx={158} cy={318} r={30} ir={21} teeth={7} strokeColor="#ffd700" opacity={1} animDur="6.5s" animDir={1} strokeWidth={1.2} />
        </g>
        {/* Tiny accent gear */}
        <g filter="url(#gearGlowSoft)">
          <Gear cx={290} cy={470} r={18} ir={12} teeth={6} strokeColor="#cca300" opacity={1} animDur="5s" animDir={1} strokeWidth={1} />
        </g>
        {/* Extra medium — left mid */}
        <g filter="url(#gearGlowMed)">
          <Gear cx={50} cy={280} r={38} ir={27} teeth={9} strokeColor="#94a3b8" opacity={1} animDur="13s" animDir={-1} strokeWidth={1.3} />
        </g>

        {/* ════ TOP-RIGHT CLUSTER ════ */}
        {/* XL anchor gear */}
        <g filter="url(#gearGlow)">
          <Gear cx={1370} cy={150} r={96} ir={72} teeth={18} strokeColor="#ffd700" opacity={1} animDur="24s" animDir={-1} strokeWidth={1.8} />
        </g>
        {/* Medium meshing gear */}
        <g filter="url(#gearGlowMed)">
          <Gear cx={1212} cy={185} r={54} ir={39} teeth={11} strokeColor="#cbd5e1" opacity={1} animDur="13s" animDir={1} strokeWidth={1.5} />
        </g>
        {/* Small gear */}
        <g filter="url(#gearGlowSoft)">
          <Gear cx={1298} cy={278} r={32} ir={22} teeth={8} strokeColor="#ffd700" opacity={1} animDur="7.5s" animDir={-1} strokeWidth={1.2} />
        </g>
        {/* Tiny accent gear */}
        <g filter="url(#gearGlowSoft)">
          <Gear cx={1150} cy={110} r={20} ir={14} teeth={6} strokeColor="#cca300" opacity={1} animDur="5.5s" animDir={1} strokeWidth={1} />
        </g>
        {/* Extra medium — right edge */}
        <g filter="url(#gearGlowMed)">
          <Gear cx={1410} cy={300} r={42} ir={30} teeth={9} strokeColor="#94a3b8" opacity={1} animDur="15s" animDir={1} strokeWidth={1.3} />
        </g>

        {/* ════ SCATTERED LONE GEARS ════ */}
        <g filter="url(#gearGlowMed)">
          <Gear cx={680} cy={200} r={40} ir={28} teeth={9} strokeColor="#2b5a8f" opacity={1} animDur="16s" animDir={1} strokeWidth={1.2} />
        </g>
        <g filter="url(#gearGlowSoft)">
          <Gear cx={500} cy={420} r={28} ir={19} teeth={7} strokeColor="#cbd5e1" opacity={1} animDur="10s" animDir={-1} strokeWidth={1.1} />
        </g>
        <g filter="url(#gearGlowSoft)">
          <Gear cx={900} cy={380} r={36} ir={25} teeth={8} strokeColor="#ffd700" opacity={1} animDur="12s" animDir={1} strokeWidth={1.1} />
        </g>
        <g filter="url(#gearGlowSoft)">
          <Gear cx={1050} cy={460} r={24} ir={16} teeth={6} strokeColor="#cbd5e1" opacity={1} animDur="8s" animDir={-1} strokeWidth={1} />
        </g>
        <g filter="url(#gearGlowSoft)">
          <Gear cx={360} cy={200} r={26} ir={18} teeth={7} strokeColor="#2b5a8f" opacity={1} animDur="9s" animDir={1} strokeWidth={1} />
        </g>
        <g filter="url(#gearGlowSoft)">
          <Gear cx={780} cy={460} r={22} ir={15} teeth={6} strokeColor="#cbd5e1" opacity={1} animDur="11s" animDir={-1} strokeWidth={1} />
        </g>
        <g filter="url(#gearGlowSoft)">
          <Gear cx={1100} cy={260} r={30} ir={21} teeth={8} strokeColor="#cca300" opacity={1} animDur="14s" animDir={1} strokeWidth={1.1} />
        </g>
        <g filter="url(#gearGlowSoft)">
          <Gear cx={580} cy={310} r={20} ir={14} teeth={6} strokeColor="#ffd700" opacity={1} animDur="7s" animDir={1} strokeWidth={1} />
        </g>

        {/* ════ HEXAGONS ════ */}
        <Hex cx={500} cy={120} r={38} strokeColor="#2b5a8f" opacity={1} animDur="22s" delay="0s" />
        <Hex cx={496} cy={120} r={24} strokeColor="#cbd5e1" opacity={0.85} animDur="14s" delay="2s" />
        <Hex cx={700} cy={360} r={32} strokeColor="#cbd5e1" opacity={0.9} animDur="28s" delay="1s" />
        <Hex cx={900} cy={140} r={44} strokeColor="#2b5a8f" opacity={0.85} animDur="26s" delay="3s" />
        <Hex cx={896} cy={140} r={27} strokeColor="#cbd5e1" opacity={0.75} animDur="16s" delay="5s" />
        <Hex cx={200} cy={200} r={34} strokeColor="#cbd5e1" opacity={0.9} animDur="19s" delay="4s" />
        <Hex cx={1180} cy={430} r={36} strokeColor="#2b5a8f" opacity={0.85} animDur="24s" delay="2s" />
        <Hex cx={620} cy={250} r={22} strokeColor="#ffd700" opacity={0.8} animDur="15s" delay="1s" />
        <Hex cx={420} cy={480} r={28} strokeColor="#cbd5e1" opacity={0.75} animDur="21s" delay="3s" />
        <Hex cx={1300} cy={400} r={30} strokeColor="#2b5a8f" opacity={0.7} animDur="18s" delay="1.5s" />

        {/* ════ ROTATING TRIANGLES ════ */}
        {[
          { cx: 400, cy: 320, r: 24, dur: '11s', op: 0.75, col: '#cbd5e1' },
          { cx: 800, cy: 210, r: 18, dur: '8s', op: 0.7, col: '#ffd700' },
          { cx: 1050, cy: 450, r: 28, dur: '14s', op: 0.65, col: '#2b5a8f' },
          { cx: 260, cy: 370, r: 16, dur: '10s', op: 0.7, col: '#cbd5e1' },
          { cx: 660, cy: 430, r: 20, dur: '13s', op: 0.6, col: '#ffd700' },
          { cx: 950, cy: 260, r: 15, dur: '9s', op: 0.65, col: '#2b5a8f' },
          { cx: 1200, cy: 330, r: 22, dur: '12s', op: 0.6, col: '#cbd5e1' },
        ].map(({ cx, cy, r, dur, op, col }, i) => {
          const pts = Array.from({ length: 3 }, (_, j) => {
            const a = (2 * Math.PI * j) / 3 - Math.PI / 2;
            return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
          }).join(' ');
          return (
            <polygon key={i} points={pts} fill="none" stroke={col} strokeWidth="1.1" opacity={op}>
              <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur={dur} repeatCount="indefinite" />
              <animate attributeName="opacity" values={`${op};${op * 0.25};${op}`} dur={dur} repeatCount="indefinite" />
            </polygon>
          );
        })}
      </svg>

      {/* ── CONVEX PLANET CURVE (more pronounced bow) ────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 w-full pointer-events-none overflow-visible" style={{ height: '130px' }}>
        <svg
          viewBox="0 0 1440 130"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-full overflow-visible"
        >
          <defs>
            <radialGradient id="starBurst" cx="85%" cy="10%" r="25%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="12%" stopColor="#8db5e2" stopOpacity="0.75" />
              <stop offset="35%" stopColor="#2b5a8f" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2b5a8f" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="12%" stopColor="#1b365d" />
              <stop offset="42%" stopColor="#2b5a8f" />
              <stop offset="78%" stopColor="#cbd5e1" />
              <stop offset="86%" stopColor="#ffd700" />
              <stop offset="91%" stopColor="#cca300" />
              <stop offset="100%" stopColor="#1b365d" />
            </linearGradient>
            <linearGradient id="haloGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="18%" stopColor="#2b5a8f" stopOpacity="0.18" />
              <stop offset="78%" stopColor="#cbd5e1" stopOpacity="0.38" />
              <stop offset="86%" stopColor="#ffd700" stopOpacity="0.55" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* Convex arc — bows UP more (deeper negative control points) */}
          <path
            d="M0,130 C360,-28 1080,-28 1440,130 L1440,0 L0,0 Z"
            fill="#f8fafc"
          />
          {/* Wide halo */}
          <path
            d="M0,130 C360,-28 1080,-28 1440,130"
            fill="none"
            stroke="url(#haloGrad)"
            strokeWidth="24"
            opacity="0.5"
          />
          {/* Sharp rim */}
          <path
            d="M0,130 C360,-28 1080,-28 1440,130"
            fill="none"
            stroke="url(#rimGrad)"
            strokeWidth="1.8"
            opacity="0.95"
          />

          {/* Star burst light — top right */}
          <ellipse cx="85%" cy="6" rx="180" ry="100" fill="url(#starBurst)" opacity="0.72" />
          {/* Star core */}
          {/* Star core */}
          <circle cx="85%" cy="3" r="3.5" fill="white" opacity="0.98">
            <animate
              attributeName="opacity"
              values="0.98;0.5;0.98"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────────── */}

      <div className="relative z-10 container-custom pt-32 pb-10">

        {/* 6-column grid: Info | Company | Services A | Services B | Contact+Legal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-10">

          {/* Col 1 — Company Info (spans 2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-[#ffd700] mb-4 uppercase tracking-widest font-bebas">
              {COMPANY_NAME}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Leading provider of HR solutions and people services across Saudi Arabia and the Gulf region.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3 text-slate-300 hover:text-[#ffd700] transition-colors">
                <MapPin className="w-4 h-4 text-[#ffd700] shrink-0 mt-0.5" />
                <span>{COMPANY_LOCATION}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-[#ffd700] transition-colors">
                <Phone className="w-4 h-4 text-[#ffd700] shrink-0" />
                <a href={`tel:${COMPANY_PHONE}`}>{COMPANY_PHONE}</a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-[#ffd700] transition-colors">
                <Mail className="w-4 h-4 text-[#ffd700] shrink-0" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="break-all">{COMPANY_EMAIL}</a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-[#ffd700] transition-colors">
  <Mail className="w-4 h-4 text-[#ffd700] shrink-0" />
  <a
    href={`mailto:${COMPANY_EMAIL_ALT}`}
    className="break-all"
  >
    {COMPANY_EMAIL_ALT}
  </a>
</div>
            </div>
          </div>

          {/* Col 2 — Company links */}
          <div>
            <h4 className="text-sm font-bold text-[#ffd700] mb-4 uppercase tracking-widest">
              {FOOTER_SECTIONS.company.title}
            </h4>
            <ul className="space-y-2">
              {FOOTER_SECTIONS.company.links.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-300 hover:text-[#ffd700] transition-colors text-sm flex items-center gap-2 group">
                    <span className="text-[#2b5a8f] opacity-0 group-hover:opacity-100 transition-all shrink-0">▸</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services A (first 5) */}
          <div>
            <h4 className="text-sm font-bold text-[#ffd700] mb-4 uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-1.5">
              {servicesA.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-300 hover:text-[#ffd700] transition-colors text-xs flex items-center gap-2 group leading-snug"
                  >
                    <span className="text-[#2b5a8f] opacity-0 group-hover:opacity-100 transition-all shrink-0">▸</span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Services B (last 6) */}
          <div>
            {/* Empty header spacer to align with col 3 */}
            <h4 className="text-sm font-bold text-transparent mb-4 uppercase tracking-widest select-none">
              &nbsp;
            </h4>
            <ul className="space-y-1.5">
              {servicesB.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-300 hover:text-[#ffd700] transition-colors text-xs flex items-center gap-2 group leading-snug"
                  >
                    <span className="text-[#2b5a8f] opacity-0 group-hover:opacity-100 transition-all shrink-0">▸</span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 — Contact on top, Legal below */}
          <div className="flex flex-col gap-8">
            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold text-[#ffd700] mb-4 uppercase tracking-widest">
                {FOOTER_SECTIONS.contact.title}
              </h4>
              <ul className="space-y-2">
                {FOOTER_SECTIONS.contact.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-slate-300 hover:text-[#ffd700] transition-colors text-sm flex items-center gap-2 group">
                      <span className="text-[#2b5a8f] opacity-0 group-hover:opacity-100 transition-all shrink-0">▸</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal — directly below Contact */}
            <div>
              <h4 className="text-sm font-bold text-[#ffd700] mb-4 uppercase tracking-widest">
                {FOOTER_SECTIONS.legal.title}
              </h4>
              <ul className="space-y-2">
                {FOOTER_SECTIONS.legal.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-slate-300 hover:text-[#ffd700] transition-colors text-sm flex items-center gap-2 group">
                      <span className="text-[#2b5a8f] opacity-0 group-hover:opacity-100 transition-all shrink-0">▸</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#2b5a8f]/0 via-[#2b5a8f]/50 to-[#2b5a8f]/0 mb-8" />

        {/* ── BOTTOM BAR ─────────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright + darknebulabs — bigger */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-sm text-slate-400">&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
            <p className="text-sm text-slate-300">
              Designed &amp; developed by{' '}
              <a
                href="https://darknebulabs.online"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block text-[#ffd700] hover:text-[#ffffff] transition-colors font-bold tracking-wide group text-base"
              >
                darknebulabs.online
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#cca300] to-[#ffd700] group-hover:w-full transition-all duration-355" />
              </a>
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            <WhatsAppButton variant="footer" />
            {SOCIAL_LINKS.map((social) => {
              let Icon = Linkedin;
              if (social.platform === 'twitter') Icon = Twitter;
              if (social.platform === 'instagram') Icon = Instagram;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#ffd700] transition-all duration-300 hover:scale-125"
                  aria-label={social.platform}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 text-slate-300 hover:text-[#ffd700] border border-slate-400/30 hover:border-[#ffd700] text-xs uppercase font-bold tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
