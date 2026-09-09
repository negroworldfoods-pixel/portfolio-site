import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { navLinks, infoData, ASSETS } from "@/constants/assets";
import ScrambleOnHover from "../effects/scrambleOnHover";
import { Instagram, Whatsapp, Google } from "iconsax-reactjs";

const logo = ASSETS.customName as StaticImageData;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050c06] text-white pt-20 pb-8 px-6 lg:px-16 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-radial from-[#1e1b4b]/30 via-transparent to-transparent opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Top Row: Contact Callout & Nav Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Contact Block */}
          <div className="space-y-1">
            <p className="text-xs text-zinc-400 font-normal">
              Contact Ndubisi at:
            </p>
            <a
              href={`mailto:${infoData.email}`}
              className="inline-flex items-center gap-1.5 text-lg sm:text-xl font-medium text-white hover:text-zinc-300 transition-colors"
            >
              <span>
                <ScrambleOnHover
                  text={infoData.email}
                  className="text-18px lg:text-[22px] font-mono cursor-pointer"
                  duration={1}
                />
              </span>
              <span className="text-sm">↗</span>
            </a>
          </div>

          {/* Right Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm sm:text-base text-zinc-300 hover:text-white font-medium transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center Giant Branding / Logo */}
        <div className="w-full pt-4 pb-2 flex justify-center items-center">
          {logo ? (
            <Image
              src={logo}
              alt={infoData.name}
              priority
              className="w-full h-auto max-h-[160px] object-contain brightness-0 invert"
            />
          ) : (
            <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase text-white leading-none text-center select-none">
              NDUBISI
            </h1>
          )}
        </div>

        {/* Bottom Row: Copyright & Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 pt-6 border-t border-zinc-900">
          <p>
            © {currentYear} {infoData.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={infoData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1.5"
            >
              <Instagram size={18} className="sm:hidden" variant="Bold" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a
              href={infoData.gbp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1.5"
            >
              <Google size={18} className="sm:hidden" variant="Bold" />
              <span className="hidden sm:inline">Google Business</span>
            </a>
            <a
              href={infoData.WhatsappMessageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1.5"
            >
              <Whatsapp size={18} className="sm:hidden" variant="Bold" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}