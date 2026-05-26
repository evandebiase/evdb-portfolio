"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const springConfig = { damping: 30, stiffness: 350, mass: 0.4 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on devices with a fine pointer.
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 8);
      mouseY.set(e.clientY - 8);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive =
        target.closest("a, button, [data-cursor='hover'], input, textarea, select, [role='button']") !== null;
      setHovering(isInteractive);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x, y }}
      animate={{ scale: hovering ? 3 : 1, opacity: hovering ? 0.18 : 0.6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 rounded-full bg-ink"
    />
  );
}
