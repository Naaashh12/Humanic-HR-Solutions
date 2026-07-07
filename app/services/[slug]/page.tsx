import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { getServiceBySlug, getAllServiceSlugs, getRelatedServices } from '@/lib/services-data';
import { HexImageCluster } from '@/components/ui/HexImageCluster';

/* ── Static params ─────────────────────────────────────────────────────────── */
export async function generateStaticParams() {
  return getAllServiceSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} — Humanic HR Solutions`,
    description: service.shortDescription,
  };
}

/* ── One image per service ─────────────────────────────────────────────────────
   Place each image at /public/services/<slug>.jpg
   The HexImageCluster slices it across all 7 hex cells automatically.
   File naming: mechanical.jpg, civil.jpg, equipment-rental.jpg, etc.
─────────────────────────────────────────────────────────────────────────────── */
const SERVICE_IMAGE: Record<string, string> = {
  'mechanical':                 '/services/mechanical.jpg',
  'civil':                      '/services/civil.jpg',
  'equipment-rental':           '/services/equipment-rental.jpg',
  'manpower-supply':            '/services/manpower-supply.jpg',
  'material-supply':            '/services/material-supply.jpg',
  'electrical-instrumentation': '/services/electrical.jpg',
  'valve-maintenance':          '/services/valve-maintenance.jpg',
  'metering-skid':              '/services/metering-skid.jpg',
  'analyzer-shelter':           '/services/analyzer-shelter.jpg',
  'dewatering':                 '/services/dewatering.jpg',
  'pumping-station':            '/services/pumping-station.jpg',
};

/* ── Page ──────────────────────────────────────────────────────────────────── */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const related = getRelatedServices(slug);
  const imgSrc = SERVICE_IMAGE[slug] ?? '';

  return (
    <div className="min-h-screen bg-black text-[#e6eaed]">

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-[#997a00]/40">

        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#cca300] opacity-[0.04] rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#997a00] opacity-[0.05] rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="container-custom relative z-10">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#e6eaed]/40 mb-8">
            <Link href="/" className="hover:text-[#cca300] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-[#cca300] transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#cca300]">{service.title}</span>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* LEFT — text content */}
            <div className="flex-1 min-w-0">
              <div className="inline-block mb-5 px-3 py-1 border border-[#997a00] bg-[rgba(153, 122, 0,0.12)] text-[#cca300] text-[10px] uppercase font-bold tracking-[0.28em]">
                Industrial Services
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-bebas uppercase text-[#e6eaed] leading-tight mb-4">
                {service.title}
              </h1>

              {/* Red accent line */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-14 bg-gradient-to-r from-[#cca300] to-[#ffd700]" />
                <div className="h-[2px] w-5  bg-[#997a00]/35" />
              </div>

              <p className="text-base md:text-lg text-[#e6eaed]/72 leading-relaxed max-w-xl mb-8">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#cca300] text-white font-bold uppercase text-sm tracking-widest hover:bg-[#ffd700] transition-all duration-300 hover:shadow-[0_0_30px_rgba(204, 163, 0,0.6)]"
                >
                  Get a Quote
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#997a00] text-[#e6eaed]/70 font-bold uppercase text-sm tracking-widest hover:border-[#cca300] hover:text-[#e6eaed] transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Services
                </Link>
              </div>
            </div>

            {/* RIGHT — Hex Image Cluster (one image, 7 hex cells) */}
            <div className="shrink-0 flex items-center justify-center">
              <div className="relative">
                {/* Soft ambient glow behind the cluster */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(204, 163, 0,0.15) 0%, transparent 70%)',
                    transform: 'scale(1.3)',
                  }}
                />
                <HexImageCluster
                  src={imgSrc}
                  alt={service.title}
                  cellSize={180}
                  className="relative z-10 drop-shadow-[0_0_30px_rgba(204, 163, 0,0.3)]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ FEATURES + CAPABILITIES ══════════════════════════════════════════ */}
      <section className="py-16 border-b border-[#997a00]/25">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Features */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-bebas uppercase text-[#e6eaed] mb-6">
                What We <span className="text-[#cca300]">Offer</span>
              </h2>
              <ul className="space-y-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-[#cca300] shrink-0 mt-0.5 group-hover:text-[#ffd700] transition-colors" />
                    <span className="text-[#e6eaed]/72 text-sm leading-relaxed group-hover:text-[#e6eaed] transition-colors">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Capabilities */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-bebas uppercase text-[#e6eaed] mb-6">
                Our <span className="text-[#cca300]">Capabilities</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.capabilities.map((c, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 border border-[#997a00]/50 bg-[rgba(153, 122, 0,0.06)] hover:border-[#cca300] hover:bg-[rgba(204, 163, 0,0.10)] transition-all duration-200 text-sm text-[#e6eaed]/68 hover:text-[#e6eaed]"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                  >
                    <span className="text-[#cca300] mr-2 text-xs">▸</span>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HIGHLIGHTS ════════════════════════════════════════════════════════ */}
      <section className="py-16 border-b border-[#997a00]/25">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold font-bebas uppercase text-[#e6eaed] mb-8 text-center">
            Why Choose <span className="text-[#cca300]">Us</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.highlights.map((h, i) => (
              <div
                key={i}
                className="relative p-5 border border-[#997a00]/40 bg-[rgba(153, 122, 0,0.07)] hover:border-[#cca300]/70 hover:bg-[rgba(204, 163, 0,0.12)] transition-all duration-300 group text-center"
                style={{ clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))' }}
              >
                <div className="text-3xl font-black font-bebas text-[#cca300]/25 group-hover:text-[#cca300]/45 transition-colors mb-2 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-sm text-[#e6eaed]/68 group-hover:text-[#e6eaed] transition-colors leading-snug">
                  {h}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RELATED SERVICES ══════════════════════════════════════════════════ */}
      {related.length > 0 && (
        <section className="py-16 border-b border-[#997a00]/25">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold font-bebas uppercase text-[#e6eaed] mb-8">
              Related <span className="text-[#cca300]">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map(rel => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group p-5 border border-[#997a00]/50 bg-[rgba(153, 122, 0,0.06)] hover:border-[#cca300] hover:bg-[rgba(204, 163, 0,0.12)] transition-all duration-300"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
                >
                  <h3 className="font-bold font-bebas uppercase text-lg text-[#e6eaed] group-hover:text-[#cca300] transition-colors mb-1">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-[#e6eaed]/50 group-hover:text-[#e6eaed]/75 transition-colors leading-relaxed">
                    {rel.shortDescription}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-[#cca300] text-xs font-bold uppercase tracking-widest group-hover:gap-2 transition-all">
                    <span>View Service</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ BOTTOM CTA ════════════════════════════════════════════════════════ */}
      <section className="py-14">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-bebas uppercase text-[#e6eaed] mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-[#e6eaed]/55 mb-7 max-w-xl mx-auto text-sm">
            Contact our team to discuss how {service.title.toLowerCase()} can support your operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#cca300] text-white font-bold uppercase tracking-widest hover:bg-[#ffd700] transition-all duration-300 hover:shadow-[0_0_40px_rgba(204, 163, 0,0.6)]"
          >
            Contact Us Today
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}