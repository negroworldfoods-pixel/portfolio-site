import { infoData } from "@/constants/assets";
import ScrambleText from "../effects/ScrambleText";
import { Google, Global, Instagram, Whatsapp, Arrow } from "iconsax-reactjs";
import { GeminiIcon } from "@/constants/custom-icon";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] max-sm:min-h-svh bg-[#050f0d] text-white pt-6 md:pt-24 pb-16 px-6 lg:px-16 overflow-hidden flex flex-col justify-center">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0A1F1A] rounded-full blur-[120px] pointer-events-none opacity-60" />

      {/* Mobile Top Header - Visible ONLY on small screens (< md) */}
      <div className="md:hidden relative w-full h-[420px] -mb-32 mt-8 z-0 pointer-events-none">
        <Image
          src={infoData.ownerOnTransparentBg}
          alt={infoData.name}
          fill
          priority
          className="object-cover object-top"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 35%, transparent 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 35%, transparent 80%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Typography & CTAs */}
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              I am a Chef &{" "}
              <span className="block mt-1">
                Restaurateur.
              </span>
            </h1>
          </div>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
            Crafting memorable culinary experiences, elevated dining concepts,
            and authentic flavor profiles.
          </p>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={infoData.WhatsappMessageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-7 py-3.5 rounded-0 transition-all duration-300 shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let&apos;s Talk</span>
              <GeminiIcon className="w-5 h-5 text-white fill-current" />
            </a>

            <a
              href={infoData.businessWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-emerald-800/60 bg-[#0A1F1A]/60 hover:bg-[#0A1F1A] text-gray-200 hover:text-white font-medium px-6 py-3.5 rounded-0 transition-all duration-300 backdrop-blur-sm"
            >
              <span>Explore Portfolio</span>
              <Arrow size={18} className="rotate-45" />
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="pt-6 border-emerald-900/40 flex items-center gap-5 text-gray-400">
            <div className="group relative">
              <a
                href={infoData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0A1F1A]/40 hover:bg-[#0A1F1A] hover:text-emerald-400 transition-colors border border-emerald-900/30 block"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Instagram
              </span>
            </div>

            <div className="group relative">
              <a
                href={infoData.gbp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0A1F1A]/40 hover:bg-[#0A1F1A] hover:text-emerald-400 transition-colors border border-emerald-900/30 block"
                aria-label="Google Business Profile"
              >
                <Google size={20} />
              </a>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Google Business
              </span>
            </div>

            <div className="group relative">
              <a
                href={`tel:${infoData.phone}`}
                className="p-2.5 rounded-lg bg-[#0A1F1A]/40 hover:bg-[#0A1F1A] hover:text-emerald-400 transition-colors border border-emerald-900/30 block"
                aria-label="Phone"
              >
                <Whatsapp size={20} />
              </a>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                WhatsApp
              </span>
            </div>

            <div className="group relative">
              <a
                href={infoData.businessWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0A1F1A]/40 hover:bg-[#0A1F1A] hover:text-emerald-400 transition-colors border border-emerald-900/30 block"
                aria-label="Website"
              >
                <Global size={20} />
              </a>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Website
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Feature - Enabled for `md` and up */}
        <div className="hidden md:flex md:col-span-5 justify-center md:justify-end">
          <div className="relative w-full max-w-[340px] lg:max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden border border-emerald-800/40 bg-[#0A1F1A]/40 shadow-2xl">
            <Image
              src={infoData.ownerOnTransparentBg}
              alt={infoData.name}
              fill
              priority
              sizes="(max-width: 1024px) 340px, 380px"
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050f0d] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;