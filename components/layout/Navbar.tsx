"use client";


import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";
import { GlowButton } from "@/components/ui/GlowButton";
import Image from "next/image";
const LogoIcon = () => (
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 84.72 84.72"
className="w-10 h-10 flex-shrink-0"
aria-label="GP"
>
<rect fill="#cca300" width="84.72" height="84.72" rx="13.44" />
<path
fill="#e6eaed"
d="M72.46,9.39c-1.63,3-2.95,5.62-4.5,8.11a3.11,3.11,0,0,1-2.3.85c-6,.06-11.94,0-17.91,0a25.63,25.63,0,0,0-4,.34A9.4,9.4,0,0,0,37,23.33c-2.58,4.34-5,8.77-7.49,13.18-1.28,2.3-2.48,4.64-3.82,7.13a52.3,52.3,0,0,0,6-.08,3.28,3.28,0,0,0,1.94-1.66C36.44,37,39.14,32,41.75,27a4,4,0,0,1,4-2.44c8.86.09,17.72.08,26.57.11.38,0,.76,0,1.31.06L70.35,30.9C66.82,37.44,63.27,44,59.77,50.51a3.12,3.12,0,0,1-3.09,1.88c-4.31-.08-8.62,0-12.93-.07-.23,0-.46,0-1-.06,1.53-2.77,2.93-5.4,4.47-8,.23-.39,1.09-.56,1.66-.56,1.1,0,2.21.33,3.3.26a2.38,2.38,0,0,0,1.72-.92c1.64-3,3.15-6,4.7-9a1.74,1.74,0,0,0,0-.48c-.34,0-.67-.09-1-.11-1.7-.07-3.4-.08-5.09-.22a5.58,5.58,0,0,0-5.88,3.11L40,48.74,32.05,63.32a4,4,0,0,1-.31.4l-2-.86-.1.16L45.8,75.28c-.57,0-.9.06-1.23.06H25.71c-5.06,0-7.72-4.54-5.3-9q3.47-6.4,6.94-12.82c.18-.34.34-.69.58-1.17H11.05c.42-.79.74-1.41,1.06-2,4.59-8.61,9.08-17.27,13.8-25.8a51,51,0,0,1,5.79-8.35A19.08,19.08,0,0,1,45.37,9.67c5.82-.38,11.68-.22,17.53-.28C66,9.36,69,9.39,72.46,9.39Z"
/>
</svg>
);


export function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const [servicesOpen, setServicesOpen] = useState(false);
const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);


const toggleMenu = () => setIsOpen(!isOpen);
const toggleServices = () => setServicesOpen(!servicesOpen);


return (
<nav
className="fixed top-0 left-0 w-full h-16 z-50 backdrop-blur-xl border-b border-slate-200"
style={{
        background: "rgba(255, 255, 255, 0.85)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.05)",
      }}
>
{/* Top metallic blue glow line */}
<div
className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
style={{
          background:
"linear-gradient(90deg, transparent 0%, #1b365d 25%, #2b5a8f 50%, #1b365d 75%, transparent 100%)",
        }}
/>


{/* Subtle inner bottom glow */}
<div
className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none"
style={{
          background:
"linear-gradient(90deg, transparent 0%, rgba(43, 90, 143, 0.15) 50%, transparent 100%)",
        }}
/>


<div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
{/* Logo — square SVG icon */}
<Link href="/" className="flex items-center gap-2.5 group">
<Image
src="/logo.png"
alt="Humanic HR Solutions"
width={60}
height={60}
className="object-contain"
/>
<span className="font-bebas font-bold uppercase tracking-wider whitespace-nowrap flex items-end">
<span className="text-[#cca300] text-2xl sm:text-3xl lg:text-3xl">
    Humanic{"  "}
</span>


<span className="relative top-0">
<span className="relative top-2 flex items-end">
<span className="text-[#cca300] text-[2.6rem] sm:text-[3.4rem] lg:text-[3rem] leading-none font-extrabold">
    H
</span>
<span className="-ml-2.5 text-[#2b5a8f]  text-[2.6rem] sm:text-[3.4rem] lg:text-[3rem] leading-none font-extrabold">
    R
</span>
</span>
</span>


<span className="text-[#2b5a8f]  text-2xl sm:text-3xl lg:text-3xl group-hover:text-[#ffd700] transition-colors">
  Solutions
</span>
</span>
</Link>


{/* Desktop Navigation */}
<div className="hidden md:flex items-center gap-8">
{NAV_LINKS.map((link) => (
<div
key={link.href}
className="relative group"
onMouseEnter={() => {
if (link.label === "Services") {
if (closeTimeout) clearTimeout(closeTimeout);
                  setServicesOpen(true);
                }
              }}
onMouseLeave={() => {
if (link.label === "Services") {
const timer = setTimeout(() => setServicesOpen(false), 250);
                  setCloseTimeout(timer);
                }
              }}
>
<Link
href={link.href}
className="relative text-[#0f172a] hover:text-[#2b5a8f] transition-colors uppercase text-base font-semibold tracking-widest flex items-center gap-1 px-3 py-1.5 group/navlink"
>
{/* Glowing animated border on hover */}
<span className="absolute inset-0 rounded-sm border border-transparent group-hover/navlink:border-[#2b5a8f]/30 bg-transparent group-hover/navlink:bg-[#2b5a8f]/5 transition-all duration-300" />
<span
className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover/navlink:w-4/5 transition-all duration-300"
style={{
                    background:
"linear-gradient(90deg, transparent, #cca300, transparent)",
                  }}
/>
<span className="relative z-10">{link.label}</span>
{link.label === "Services" && (
<ChevronDown className="relative z-10 w-4 h-4" />
                )}
</Link>


{/* Services Mega-Menu */}
{link.label === "Services" && servicesOpen && (
<div
className="fixed top-16 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-6xl bg-white/95 border-2 border-[#2b5a8f] p-8 shadow-2xl shadow-slate-200/50 backdrop-blur-xl z-50 rounded-lg animate-fadeIn"
onMouseEnter={() => {
if (closeTimeout) clearTimeout(closeTimeout);
                    setServicesOpen(true);
                  }}
onMouseLeave={() => {
const timer = setTimeout(() => setServicesOpen(false), 250);
                    setCloseTimeout(timer);
                  }}
>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{SERVICES.map((service) => (
<Link
key={service.slug}
href={`/services/${service.slug}`}
className="p-4 border border-slate-100 hover:border-[#2b5a8f] bg-slate-50 hover:bg-slate-100/50 transition-all duration-300 group/item"
>
<h4 className="text-sm font-bold text-[#2b5a8f] group-hover/item:text-[#cca300] transition-colors uppercase">
{service.title}
</h4>
<p className="text-xs text-slate-600 mt-1 line-clamp-2">
{service.shortDescription}
</p>
</Link>
                    ))}
</div>
</div>
              )}
</div>
          ))}
</div>


{/* CTA Button and Mobile Menu */}
<div className="flex items-center gap-4">
<GlowButton
href="/contact"
variant="primary"
size="sm"
className="hidden sm:inline-flex"
>
            Get Quote
</GlowButton>


{/* Mobile Menu Button */}
<button
onClick={toggleMenu}
className="md:hidden p-2 hover:bg-slate-100 rounded transition-colors"
>
{isOpen ? (
<X className="w-6 h-6 text-[#2b5a8f]" />
            ) : (
<Menu className="w-6 h-6 text-[#2b5a8f]" />
            )}
</button>
</div>
</div>


{/* Mobile Navigation Menu */}
{isOpen && (
<div
className="md:hidden fixed top-16 left-0 w-full border-b border-slate-200 animate-slideDown shadow-xl"
style={{
            background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
          }}
>
<div className="p-4 space-y-2">
{NAV_LINKS.map((link) => (
  <div key={link.href}>
    {link.label === "Services" ? (
      <>
        <button
          onClick={toggleServices}
          className="w-full text-left p-3 text-[#0f172a] hover:text-[#2b5a8f] hover:bg-slate-50 transition-colors uppercase text-sm font-semibold tracking-widest flex items-center justify-between"
        >
          {link.label}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              servicesOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {servicesOpen && (
          <div className="pl-4 space-y-1 bg-slate-50/50">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                onClick={() => setIsOpen(false)}
                className="block p-2 text-xs text-slate-600 hover:text-[#2b5a8f] hover:bg-slate-100 transition-colors"
              >
                {service.title}
              </Link>
            ))}
          </div>
        )}
      </>
    ) : (
      <Link
        href={link.href}
        onClick={() => setIsOpen(false)}
        className="block w-full p-3 text-[#0f172a] hover:text-[#2b5a8f] hover:bg-slate-50 transition-colors uppercase text-sm font-semibold tracking-widest"
      >
        {link.label}
      </Link>
    )}
  </div>
))}


{/* Mobile CTA */}
<GlowButton
href="/contact"
variant="primary"
size="sm"
className="w-full mt-4"
>
              Get Quote
</GlowButton>
</div>
</div>
      )}
</nav>
  );
}