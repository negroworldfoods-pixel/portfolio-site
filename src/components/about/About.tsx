"use client";

import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { infoData } from "@/constants/assets";
import ScrambleOnHover from "../effects/scrambleOnHover";
import { cn } from "@/utils/cn";
const aboutImage = infoData.ownerImageSmiling;

const aboutImages = [
  {
    title:
      "Received a grant for being an outstanding student in Entrepreneurship",
    image:
      "https://ozsaxqicerbsltduruog.supabase.co/storage/v1/object/public/portfolio-bucket/award.jpg",
  },
  {
    title: "Meeting the Africa Youth Entrepreneur (AYE) President",
    image:
      "https://ozsaxqicerbsltduruog.supabase.co/storage/v1/object/public/portfolio-bucket/award_2.jpg",
  },
];

const stats = [
  {
    value: "5+ Years",
    label: "Culinary & Business Experience",
    image: aboutImage,
  },
  {
    value: "3 Awards",
    label: "Entrepreneur of the Year (2019)",
    image: aboutImages[0].image,
  },
  {
    value: "1 Brand",
    label: "Negroworldfoods & Negropizza",
    image: aboutImages[1].image,
  },
];

const About = () => {

  return (
    <section
      className="bg-white text-zinc-900 py-20 px-6 lg:px-16 border-t border-zinc-200"
      id="about"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Header Grid: Minimalist Label + Large Headline Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500">
              ABOUT
            </span>
          </div>

          <div className="lg:col-span-9 space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] text-zinc-900 ">
              Passionate and dedicated to creating delicious meals, memorable
              eat-in experiences, and exceptional customer service. Driven by
              creativity, quality, and bringing people together through great
              food.
            </h2>

            {/* Sharp CTA & Contact Info */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm px-6 py-3 rounded-none transition-colors"
              >
                <span>Get in Touch</span>
              </a>

              <div className="flex flex-wrap gap-6 text-sm text-zinc-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin size={16} className="text-zinc-900" /> Ibadan, Oyo
                  State
                </span>
                <a
                  href="mailto:Onuorahchukwudi2@gmail.com"
                  className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors"
                >
                  <Mail size={16} className="text-zinc-900" />{" "}
                  <ScrambleOnHover text={infoData.email} duration={0.8} once={true} className="text-zinc-600" />
                </a>
                <a
                  href="tel:07066535558"
                  className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors"
                >
                  <Phone size={16} className="text-zinc-900" /> {infoData.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Small helper note, mobile-only */}
        <p className="block md:hidden -mb-8 text-xs text-zinc-500 italic">
          (Click on image to expand)
        </p>

        {/* 3-Column Card Grid matching reference layout */}
        <div className="flex flex-col md:flex-row gap-6 pt-4 w-full md:h-[450px]">
          {stats.map((stat, idx) => {
            
            return (
              <div
                key={idx}
                className={cn(
                  "relative w-full md:flex-1 md:hover:flex-[6.5] md:h-full transition-all duration-500 ease-in-out overflow-hidden rounded-none group bg-zinc-100 cursor-pointer h-56"
                )}
              >
                <Image
                  src={stat.image}
                  alt={stat.label}
                  fill
                  quality={90}
                  priority={idx === 0}
                  sizes="(max-width: 900px) 100vw, 90vw"
                  className={cn(
                    "object-cover transition-transform duration-500 group-hover:scale-105 lg:object-[50%_15%]",
                    idx == 0 && "object-[50%_15%]"
                  )}
                />

                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Text Container */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-1 z-10 whitespace-normal">
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-light text-zinc-200 line-clamp-2">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Text Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-zinc-200 text-zinc-700 leading-relaxed text-base sm:text-lg">
          <div className="space-y-3">
            <h4 className="text-zinc-900 font-semibold text-xl">
              The Journey & Innovation
            </h4>
            <p className="text-sm sm:text-base leading-relaxed">
              I grew up learning through observation and assisting my mom in the
              kitchen. Starting from 300-level at Ransome Kuti Hall (University
              of Ibadan), I built <a className="font-semibold text-green-900" href={infoData.businessWebsite}>Negroworldfoods</a> by selling raw plantain and
              creating our signature
              <span className="text-zinc-900 font-semibold"> Negropizza</span>.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-zinc-900 font-semibold text-xl">
              Key Recognition
            </h4>
            <ul className="text-sm sm:text-base space-y-1 text-zinc-700">
              <li>
                • Overall Entrepreneur of the Year — University of Ibadan (2019)
              </li>
              <li>• Entrepreneur of the Year — Psychology Department (2019)</li>
              <li>• Entrepreneur of the Year — Ransome Kuti Hall (2019)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;