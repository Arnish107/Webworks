"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function PageLoader() {
  const [phase, setPhase] = useState<"show" | "fade" | "gone">("show");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const showMs = reduce ? 400 : 1400;
    const fadeMs = reduce ? 200 : 700;

    const fadeTimer = window.setTimeout(() => setPhase("fade"), showMs);
    const goneTimer = window.setTimeout(() => setPhase("gone"), showMs + fadeMs);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(goneTimer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "fade" ? 0 : 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: phase === "fade" ? "none" : "auto" }}
      aria-hidden={phase !== "show"}
      role="status"
      aria-label="Loading Washington's Wharf"
    >
      <div className="text-center">
        <motion.p
          className="font-display text-4xl tracking-[0.08em] text-ivory md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Washington&apos;s Wharf
        </motion.p>
        <motion.div
          className="mx-auto mt-6 h-px w-24 origin-left bg-gold"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.p
          className="mt-4 text-xs uppercase tracking-[0.28em] text-sand/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Waterfront Dining
        </motion.p>
      </div>
    </motion.div>
  );
}
