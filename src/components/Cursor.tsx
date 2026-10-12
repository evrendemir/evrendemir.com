"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

// Masaüstünde fareyi takip eden halka; bağlantıların üstünde büyür.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      setEnabled(true);
      x.set(e.clientX);
      y.set(e.clientY);
      setHovering(!!(e.target as HTMLElement).closest("a, button, input, [data-cursor]"));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] rounded-full border border-fg/60 mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: hovering ? 56 : 18, height: hovering ? 56 : 18, backgroundColor: hovering ? "#f4f2ee" : "rgba(0,0,0,0)" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    />
  );
}
