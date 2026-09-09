import React from "react";
import { infoData } from "@/constants/assets";
import ScrambleOnHover from "../effects/scrambleOnHover";

export default function EarlyLife() {
  return (
    <section className="bg-white text-zinc-900 py-20 px-6 lg:px-16 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Section Label */}
        <div className="lg:col-span-3">
          <span className="cursor-default">
            <ScrambleOnHover text={'BACKGROUND'} once={false} duration={0.7} className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold cursor-default" />
          </span>
        </div>

        {/* Narrative Content */}
        <div className="lg:col-span-9 space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-950 uppercase leading-snug">
            <ScrambleOnHover text='Early Life' once={false} className="inline" duration={0.5}  /> & Academic Foundation
          </h2>

          <p className="text-zinc-700 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Onuorah Chukwudi Ndubisi completed his early education in Ibadan before advancing to the University of Ibadan, where he earned his Bachelor’s degree in Psychology from the Faculty of the Social Sciences.
          </p>

          <p className="text-zinc-700 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Balancing rigorous academic coursework with his ambition for hospitality, he turned his residence at Ransome Kuti Hall into an early testing ground for commercial food production. Studying consumer psychology provided him with key insights into buyer behavior and brand identity, which directly influenced his later success in building culinary concepts for the university community.
          </p>

          {/* Featured Quote Block */}
          {infoData?.quote && (
            <blockquote className="pt-6 border-t border-zinc-200">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 leading-tight">
                &ldquo;{infoData.quote}&rdquo;
              </p>
            </blockquote>
          )}
        </div>
      </div>
    </section>
  );
}