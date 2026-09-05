'use client'

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ASSETS } from "@/constants/assets";

const NAME = "Onuorah Chukwudi Ndubisi";
const customName = ASSETS.customName as StaticImageData;

export default function PreLoader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    const hideTimer = setTimeout(() => setIsHidden(true), 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ease-out preloader-bg ${
        isLoaded ? "opacity-0 pointer-events-none select-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="signature-wrap relative z-10">
          <Image
            src={customName}
            alt={NAME}
            priority
            className="signature-img"
          />
        </div>
        <p className="preloader-name text-sm md:text-base tracking-[0.15em] uppercase text-[--ink]">
          {NAME}
        </p>
      </div>
    </div>
  );
}