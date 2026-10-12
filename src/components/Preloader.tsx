"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.76, 0, 0.24, 1] as const;

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 700;
    let frame = requestAnimationFrame(function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) frame = requestAnimationFrame(tick);
    });
    // Sekme arka plandayken rAF durur; açılış ekranı yine de zamanında kalksın.
    const hide = setTimeout(() => setVisible(false), duration + 250);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(hide);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-between bg-bg-soft p-6 md:p-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="overflow-hidden">
            <motion.p
              className="font-serif text-4xl italic md:text-6xl"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              Evren Demir
            </motion.p>
          </div>
          <p className="font-mono text-5xl tabular-nums text-accent md:text-8xl">{count}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
