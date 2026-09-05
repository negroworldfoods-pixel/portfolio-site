"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/`~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρςστυφχψω0123456789"

interface ScrambleTextProps {
  text: string;
  duration?: number;
  classString?: string;
  delay?: number; // Made optional with default value
}

function ScrambleText({ text, duration = 1, classString, delay = 0 }: ScrambleTextProps) {
  const [display, setDisplay] = useState<string>(text);

  useEffect(() => {
    // Set initial display to scrambled text if delay > 0
    if (delay > 0) {
      setDisplay(
        text
          .split("")
          .map((char) => {
            if (char === " ") return " ";
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
    }

    // Delay the start of the animation
    const timeoutId = setTimeout(() => {
      let frame = 0;
      const totalFrames = Math.round(duration * 60); // ~60fps
      const interval = setInterval(() => {
        frame++;
        const revealCount = Math.floor((frame / totalFrames) * text.length);
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < revealCount) return text[i];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        if (frame >= totalFrames) {
          setDisplay(text);
          clearInterval(interval);
        }
      }, 1000 / 60);

      // Store interval ID for cleanup
      return () => clearInterval(interval);
    }, delay * 1000); // Convert delay from seconds to milliseconds

    return () => {
      clearTimeout(timeoutId);
      // The interval cleanup is handled inside the setTimeout
    };
  }, [text, duration, delay]);

  return <motion.span className={classString}>{display}</motion.span>;
}

export default ScrambleText;