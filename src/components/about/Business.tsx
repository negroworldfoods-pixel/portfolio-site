import Image from "next/image";
import { Global, ArrowRight, Star1, Location } from "iconsax-reactjs";
import { infoData } from "@/constants/assets";
import ScrambleOnHover from "../effects/scrambleOnHover";

const imageOfownerOnHisApron =
  "https://ozsaxqicerbsltduruog.supabase.co/storage/v1/object/public/portfolio-bucket/vertical.jpg";
const gbpLink = infoData.gbp;
const restaurantWebsite = infoData.businessWebsite;

export default function Business() {
  return (
    <section id='business' className="bg-green-950/20 text-white border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/40 via-zinc-950/50 to-zinc-950/80" />
      <div className="opacity-50 absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left: everything but the photo, one running column */}
        <div className="px-4 sm:px-6 lg:pl-16 lg:pr-12 py-16 sm:py-20 lg:py-24 flex flex-col justify-between gap-12 lg:gap-16">
          <div className="space-y-6">
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-zinc-500">
              The Venture
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.05]">
              <ScrambleOnHover text={'Negro World'} once={false} duration={0.7} />{" "}
              <span className="text-zinc-500 font-light italic">Foods</span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
              From supplying raw plantains in Ransome Kuti Hall to pioneering the famous
              <span className="text-white font-medium"> Negropizza</span>, Negro World Foods has grown into a campus staple and expanding culinary brand in Ibadan.
            </p>

            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-md">
              From <span className="text-zinc-300">Negropizza</span> and <span className="text-zinc-300">Jollof Rice</span> to freshly prepared small chops and plantain-based delicacies, the menu is a fusion of local flavors and creative flair — a go-to for students, lecturers, and food enthusiasts on campus.
            </p>
          </div>

          {/* Stats as a horizontal strip, not cards */}
          <div className="grid grid-cols-2 divide-x divide-zinc-800 border-y border-zinc-800">
            <div className="pr-4 sm:pr-6 py-4 sm:py-5 space-y-1.5">
              <div className="flex items-center gap-1.5 text-zinc-500">
                <Star1 size={14} className="text-white fill-white" />
                <span className="text-[10px] tracking-wider">Community proof</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white">4.8+</p>
              <p className="text-xs text-zinc-500 leading-relaxed">
                From dozens of Google reviews across Ibadan
              </p>
            </div>

            <div className="pl-4 sm:pl-6 py-4 sm:py-5 space-y-1.5">
              <div className="flex items-center gap-1.5 text-zinc-500">
                <Location size={14} className="text-white" />
                <span className="text-[10px] tracking-wider">Location</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white">UI Hub</p>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Ransome Kuti Hall, University of Ibadan, Oyo State
              </p>
            </div>
          </div>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
            Built on consistency, grit, and culinary innovation — the mission remains clear: expanding the franchise footprint nationwide.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {gbpLink && (
              <a
                href={gbpLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3.5 transition-colors"
              >
                <span>Google Business Profile</span>
                <ArrowRight size={14} className="rotate-40 text-zinc-950" />
              </a>
            )}

            {restaurantWebsite && (
              <a
                href={restaurantWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-800 hover:border-white bg-zinc-900/80 text-zinc-200 hover:text-white font-medium text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3.5 transition-colors"
              >
                <Global size={16} />
                <span>Visit Website</span>
              </a>
            )}
          </div>
        </div>

        {/* Right: the photo, full column height, no inline caption box */}
        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
          <Image
            src={imageOfownerOnHisApron}
            alt="Owner at Negro World Foods"
            fill
            className="object-cover object-[50%_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-zinc-950/60 lg:via-transparent lg:to-transparent" />

          <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8 text-white space-y-1">
            <p className="text-[10px] sm:text-xs text-zinc-300">Campus roots</p>
            <p className="text-sm sm:text-base lg:text-lg font-medium">
              Ransome Kuti Hall, University of Ibadan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}