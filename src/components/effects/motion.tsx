"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrolled } from "@/hooks/use-scrolled";
import { Button } from "@/components/ui/button";

export function BackToTop() {
  const scrolled = useScrolled(600);

  if (!scrolled) return null;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Button
        size="icon"
        variant="outline"
        className="glass border-sand/30 bg-navy/60 text-ivory hover:border-gold hover:text-gold"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </motion.div>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxImage({
  children,
  className = "",
  speed = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="h-[120%] w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

export function FloatingLights() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="animate-pulse-glow absolute -left-10 top-1/4 h-64 w-64 rounded-full bg-harbor/30 blur-3xl" />
      <div className="animate-float absolute right-10 top-1/3 h-40 w-40 rounded-full bg-gold/15 blur-3xl" />
      <div className="animate-pulse-glow absolute bottom-10 left-1/3 h-52 w-52 rounded-full bg-sand/10 blur-3xl" />
    </div>
  );
}

export function useGsapReveal(selector = "[data-reveal]") {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    async function init() {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const root = containerRef.current;
      if (!root) return;

      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 48 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
              },
            }
          );
        });
      }, root);
    }

    init();
    return () => ctx?.revert();
  }, [selector]);

  return containerRef;
}
