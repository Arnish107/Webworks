"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FloatingLights } from "@/components/effects/motion";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Hero"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
          alt="Sailboats docked along a waterfront marina"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/45 to-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(200,169,106,0.18),transparent_50%)]" />
      </motion.div>

      <FloatingLights />

      <svg
        className="wave-divider z-10"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,48 C240,80 480,0 720,32 C960,64 1200,80 1440,40 L1440,80 L0,80 Z"
        />
      </svg>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 md:px-8"
      >
        <motion.p
          className="mb-5 text-xs uppercase tracking-[0.32em] text-gold"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          Washington&apos;s Wharf
        </motion.p>
        <motion.h1
          className="font-display max-w-4xl text-5xl leading-[1.05] tracking-wide text-ivory md:text-7xl lg:text-8xl text-balance"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          Experience Waterfront Dining at Its Finest
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
        >
          Fresh seafood, handcrafted cocktails, spectacular harbor views, and
          unforgettable private events.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          <Button asChild size="lg">
            <Link href="/reservations">Reserve a Table</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-ivory/35 text-ivory hover:border-gold hover:text-gold">
            <Link href="/menu">Explore the Menu</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
