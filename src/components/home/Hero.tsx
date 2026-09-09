import { infoData } from "@/constants/assets";
import { Google, Global, Instagram, Whatsapp, Arrow } from "iconsax-reactjs";
import { GeminiIcon } from "@/constants/custom-icon";
import Image from "next/image";

const bgImage =
  "https://ozsaxqicerbsltduruog.supabase.co/storage/v1/object/public/portfolio-bucket/background-negro.jpg";
const bgImageOnPhone =
  "https://ozsaxqicerbsltduruog.supabase.co/storage/v1/object/public/portfolio-bucket/background-negro-phone%20(2).jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-zinc-950 text-white pt-24 pb-16 px-6 lg:px-16 overflow-hidden flex flex-col justify-end">
      {/* Background Image Layer with Dark Overlay */}
      <div className="absolute inset-0 mt-0 z-0">
        {/* Phone background: visible on mobile, hidden on sm and above */}
        <Image
          src={bgImageOnPhone}
          alt="Background Mobile"
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          loading="eager"
          priority
          quality={100}
          className="object-cover object-center opacity-40 block sm:hidden"
        />

        {/* Desktop background: hidden on mobile, visible on sm and above */}
        <Image
          src={bgImage}
          alt="Background"
          fill
          priority
          quality={100}
          className="object-cover lg:object-top object-center opacity-40 hidden sm:block"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full relative z-20 space-y-10 pt-40 md:pt-0">
        {/* Typography Block */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95]">
            Chef & <br />
            <span className="text-zinc-400 font-light italic">Restaurateur</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg max-w-lg leading-relaxed font-normal">
            Crafting memorable culinary experiences, elevated dining concepts, and authentic flavor profiles.
          </p>
        </div>

        {/* Action Row & Social Links Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-zinc-800/80">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={infoData.WhatsappMessageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-sm px-7 py-3.5 rounded-none transition-colors"
            >
              <span>Let&apos;s Talk</span>
              <GeminiIcon className="w-4 h-4 fill-zinc-950" />
            </a>

            <a
              href={infoData.businessWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-white bg-zinc-900/60 hover:bg-zinc-900 text-zinc-200 hover:text-white font-medium text-sm px-6 py-3.5 rounded-none transition-colors backdrop-blur-sm"
            >
              <span>NegroWorld</span>
              <Arrow size={16} className="rotate-45" />
            </a>
          </div>

          {/* Minimalist Social Bar */}
          <div className="flex items-center gap-3 text-zinc-400">
            <a
              href={infoData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900/80 hover:bg-zinc-800 hover:text-white border border-zinc-800 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>

            <a
              href={infoData.gbp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900/80 hover:bg-zinc-800 hover:text-white border border-zinc-800 transition-colors"
              aria-label="Google Business Profile"
            >
              <Google size={18} />
            </a>

            <a
              href={`tel:${infoData.phone}`}
              className="p-3 bg-zinc-900/80 hover:bg-zinc-800 hover:text-white border border-zinc-800 transition-colors"
              aria-label="WhatsApp"
            >
              <Whatsapp size={18} />
            </a>

            <a
              href={infoData.businessWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900/80 hover:bg-zinc-800 hover:text-white border border-zinc-800 transition-colors"
              aria-label="Website"
            >
              <Global size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;