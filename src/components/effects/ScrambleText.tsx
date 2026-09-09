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
  let intervalId: ReturnType<typeof setInterval> | null = null;

  // Initial scramble when there's a delay
  if (delay > 0) {
    setDisplay(
      text
        .split("")
        .map((char) => (char === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
        .join("")
    );
  }

  const timeoutId = setTimeout(() => {
    let frame = 0;
    const totalFrames = Math.round(duration * 60);

    intervalId = setInterval(() => {
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
        if (intervalId) clearInterval(intervalId);
      }
    }, 1000 / 60);
  }, delay * 1000);

  return () => {
    clearTimeout(timeoutId);
    if (intervalId) clearInterval(intervalId);
  };
}, [text, duration, delay]);

  return <motion.span className={classString}>{display}</motion.span>;
}

export default ScrambleText;