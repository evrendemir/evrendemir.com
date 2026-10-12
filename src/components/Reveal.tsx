"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

// Kaydırınca aşağıdan yumuşakça beliren blok.
export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

// Satırın maskenin altından kayarak çıktığı başlık efekti.
export function MaskText({
  lines,
  className,
  delay = 0,
  animateOnMount = false,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  animateOnMount?: boolean;
}) {
  // Görünürlük dış kapta izlenir; içteki satırlar maskelendiği için kendileri hiç "görünmez".
  return (
    <motion.span
      className={`block ${className ?? ""}`}
      initial="hidden"
      {...(animateOnMount ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "-10% 0px" } })}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            variants={{ hidden: { y: "110%" }, show: { y: "0%" } }}
            transition={{ duration: 1, ease, delay: delay + i * 0.09 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <Reveal y={16} className="mb-10 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
      <span className="text-accent">{index}</span>
      <span className="h-px w-10 bg-line" />
      <span>{children}</span>
    </Reveal>
  );
}
