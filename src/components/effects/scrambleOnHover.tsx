"use client";

import { useState, useEffect, useRef } from "react";

const CHARS =
  "!@#$%^&*()_+-=[]{}|;:,.<>?/`~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÖ×ØÙÜÝÞßàæçèéïðñòóþÿΑΒΓΔΕΖΗΘΙΞΟΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρςστυφχψω0123456789◇◆?#█▓▒░■□?#█▓▒░■□▪▫?#█▓▒░■□▪▫?#█▓";

interface ScrambleOnHoverProps {
  text: string;
  className?: string;
  duration?: number; // in seconds
  once?: boolean;
}

export default function ScrambleOnHover({
  text,
  once = false,
  className,
  duration = 0.8,
}: ScrambleOnHoverProps) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isAnimating = useRef(false);
  const hasPlayed = useRef(false);

  const scramble = () => {
    if (once && hasPlayed.current) return;
    // Prevent restarting while an animation is already running
    if (isAnimating.current) return;
    isAnimating.current = true;
    if (once) hasPlayed.current = true;

    // Clear any previous interval just in case
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    let frame = 0;
    const totalFrames = Math.round(duration * 60); // ~60fps

    // Immediately show fully scrambled text
    setDisplay(
      text
        .split("")
        .map((char) =>
          char === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]
        )
        .join("")
    );

    intervalRef.current = setInterval(() => {
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
        if (intervalRef.current) clearInterval(intervalRef.current);
        isAnimating.current = false;
      }
    }, 1000 / 60);
  };

  // Keep display in sync if the text prop changes
  useEffect(() => {
    setDisplay(text);
  }, [text]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span className={className} onMouseEnter={scramble}>
      {display}
    </span>
  );
}