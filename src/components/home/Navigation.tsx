"use client";

import Link from "next/link";
import { infoData } from "@/constants/assets";
import MenuButton from "./MenuButton";
import { useSidebarStore } from "@/stores/useSidebarStore";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Instagram,
  Google,
  Whatsapp,
  Call,
  GlobalSearch,
} from "iconsax-reactjs";
import RolloverText from "../effects/rolloverText";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/#business", label: "Business" },
];

export function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past 5px
      setIsScrolled(currentScrollY > 5);

      // Headroom effect - hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-sm bg-black/50 backdrop-grayscale-25"
          : !isHomePage
            ? "bg-black/60 backdrop-blur-none"
            : "bg-transparent backdrop-blur-none"
      }`}
    >
      <nav
        className={`flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-2.5 transition-all duration-300 ${
          isScrolled
            ? "bg-[--bg] md:bg-transparent border-b-2 border-zinc-50/5"
            : !isHomePage
              ? "bg-black/50 md:bg-black/50 border-b-2 border-transparent"
              : "bg-transparent md:bg-transparent border-b-2 border-transparent"
        }`}
      >
        <Link
          href="#"
          className="font-[family-name:var(--font-belleza)] text-sm tracking-wide text-[--ink] hover:opacity-80 transition-opacity"
        >
          <span className="hidden md:inline">{infoData.name}</span>
          <span className="md:hidden">{infoData.name.split(" ")[0]}</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm mt-1 tracking-[0.1em] uppercase text-[--ink]">
          {navLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-opacity text-xs"
              >
                <RolloverText
                  text={link.label}
                  className="text-xs"
                  duration={0.4}
                  direction="up"
                />
              </Link>
            ))}
          <a
            href={infoData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs"
          >
            <RolloverText
              text="Instagram"
              className="text-xs"
              duration={0.4}
              direction={"up"}
            />
          </a>
        </div>

        {/* Mobile trigger only */}
        <div className="md:hidden">
          <MenuButton />
        </div>
      </nav>

      {/* Dropdown panel, anchored under the navbar */}
      <MobileMenu />
    </motion.header>
  );
}

export const MobileMenu = () => {
  const { isOpen, close } = useSidebarStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-black/50 border-b backdrop-blur-sm border-white/10"
        >
          <motion.div
            className="flex flex-col items-center gap-3 py-8"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            exit={{ y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navLinks.map((link) => (
              <div key={link.href} className="w-full">
                <Link
                  href={link.href}
                  onClick={close}
                  className="block w-full text-center hover:bg-green-950/30 py-4 px-6 text-lg tracking-[0.15em] uppercase text-[--ink] 
                            hover:scale-105 active:scale-95 
                             transition-all duration-200 rounded-lg border border-transparent
                            
                             hover:border-[--ink]/10"
                >
                  {link.label}
                </Link>
              </div>
            ))}

            {/* Social Icons Section */}
            <div className="flex flex-col items-center gap-4 pt-6 mt-2 border-t border-white/10 w-full max-w-xs">
              <div className="flex items-center justify-center gap-6">
                <a
                  href={infoData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex flex-col items-center gap-1 text-[--ink] hover:text-[--ink]/70 hover:scale-110 active:scale-95 transition-all duration-200 group"
                  aria-label="Instagram"
                >
                  <Instagram size={28} variant="Bold" />
                  <span className="text-[10px] tracking-[0.05em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                    Instagram
                  </span>
                </a>
                <a
                  href={infoData.gbp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex flex-col items-center gap-1 text-[--ink] hover:text-[--ink]/70 hover:scale-110 active:scale-95 transition-all duration-200 group"
                  aria-label="Google Business Profile"
                >
                  <Google size={28} variant="Bold" />
                  <span className="text-[10px] tracking-[0.05em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                    Business
                  </span>
                </a>
                <a
                  href={infoData.WhatsappMessageLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex flex-col items-center gap-1 text-[--ink] hover:text-[--ink]/70 hover:scale-110 active:scale-95 transition-all duration-200 group"
                  aria-label="WhatsApp"
                >
                  <Whatsapp size={28} variant="Bold" />
                  <span className="text-[10px] tracking-[0.05em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                    WhatsApp
                  </span>
                </a>
                <a
                  href={`tel:${infoData.phone}`}
                  onClick={close}
                  className="flex flex-col items-center gap-1 text-[--ink] hover:text-[--ink]/70 hover:scale-110 active:scale-95 transition-all duration-200 group"
                  aria-label="Call"
                >
                  <Call size={28} variant="Bold" />
                  <span className="text-[10px] tracking-[0.05em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                    Call
                  </span>
                </a>
                <a
                  href={infoData.businessWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex flex-col items-center gap-1 text-[--ink] hover:text-[--ink]/70 hover:scale-110 active:scale-95 transition-all duration-200 group"
                  aria-label="Business Website"
                >
                  <GlobalSearch size={28} variant="Bold" />
                  <span className="text-[10px] tracking-[0.05em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                    Website
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
