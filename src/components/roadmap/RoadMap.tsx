import React from "react";
import Image from "next/image";
import { infoData } from "@/constants/assets";
import { ArrowUpRight, Award, Flame, Store, Rocket } from "lucide-react";
import ScrambleOnHover from "../effects/scrambleOnHover";

interface TimelineStep {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  badge?: string;
  images?: string[];
}

const timelineData: TimelineStep[] = [
  {
    year: "The Origin",
    title: "Raw Plantain Distribution",
    subtitle: "Ransome Kuti Hall, UI",
    description:
      "Started as an undergraduate hustle, supplying raw plantains directly to student hostels across campus.",
    icon: Store,
  },
  {
    year: "The Foundation",
    title: "Launching Negroworldfoods",
    subtitle: "Brand Establishment",
    description:
      "Formalized the culinary venture into a distinct brand, setting up structured kitchen operations and delivery networks.",
    icon: Rocket,
  },
  {
    year: "The Breakthrough",
    title: "Creating the Negropizza",
    subtitle: "Signature Innovation",
    description:
      "Pioneered the famous plantain-based Negropizza, capturing campus attention and earning top entrepreneurship awards.",
    icon: Flame,
    badge: "Signature Creation",
    images: infoData.pizzaImages,
  },
  {
    year: "The Vision",
    title: "Franchise & Regional Expansion",
    subtitle: "Scaling Beyond Campus",
    description:
      "Expanding the brand footprint across Ibadan and beyond, partnering with delivery platforms and setting up new outlets.",
    icon: Award,
    badge: "Active Growth",
  },
];

export default function GrowthJourney() {
  return (
    <section className="bg-zinc-950 text-white py-24 px-6 lg:px-16 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3">
            
            <ScrambleOnHover text='THE TRAJECTORY' className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold" once={false} />
          </div>
          <div className="lg:col-span-9 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-snug">
              From Campus Hustle <br />
              <span className="text-zinc-500 font-light italic">
                To Regional Brand
              </span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-normal">
              A timeline tracing the strategic evolution, product innovations, and milestone expansion of Negroworldfoods.
            </p>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative pt-8">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12 sm:space-y-16 relative">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center gap-8"
                >
                  {/* Content Box */}
                  <div
                    className={`w-full sm:w-1/2 text-left ${
                      isEven ? "sm:text-right sm:pr-12" : "sm:order-2 sm:pl-12"
                    }`}
                  >
                    <div className="space-y-4 bg-zinc-900/40 p-6 sm:p-8 border border-zinc-800/80 rounded-none relative">
                      {item.badge && (
                        <span className="inline-block text-[10px] uppercase tracking-widest bg-white text-zinc-950 px-2.5 py-1 font-bold">
                          {item.badge}
                        </span>
                      )}
                      <div>
                        <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-1">
                          {item.year} — {item.subtitle}
                        </p>
                        <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Pizza Image Showcase Grid */}
                      {item.images && item.images.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 pt-2">
                          {item.images.map((imgUrl, imgIdx) => (
                            <div
                              key={imgIdx}
                              className="relative aspect-video sm:aspect-square w-full overflow-hidden border border-zinc-800 bg-zinc-900"
                            >
                              <Image
                                src={imgUrl}
                                alt={`${item.title} image ${imgIdx + 1}`}
                                fill
                                sizes="(max-width: 640px) 50vw, 25vw"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Icon Marker */}
                  <div className="absolute sm:relative left-4 sm:left-auto -translate-x-1/2 sm:translate-x-0 z-10 flex items-center justify-center w-10 h-10 bg-zinc-950 border border-zinc-700 text-white rounded-none sm:order-1 sm:mx-auto">
                    <Icon size={18} />
                  </div>

                  {/* Empty Spacer Column */}
                  <div
                    className={`hidden sm:block w-1/2 ${
                      isEven ? "sm:order-2" : "sm:order-1"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout / External Menu Link */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            Want to explore the active kitchen offerings?
          </p>
          <a
            href={infoData.businessWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs uppercase tracking-wider px-6 py-3 transition-colors"
          >
            <span>Visit Menu Site</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}