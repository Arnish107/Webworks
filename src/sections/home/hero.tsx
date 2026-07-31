"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { FloatingLights } from "@/components/effects/motion";
import { photos } from "@/data/images";
import { siteConfig } from "@/data/site";

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
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-0 sm:pt-24 md:min-h-screen"
      aria-label="Hero"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Photo
          src={photos.hero}
          alt="Fish and chips from Washington's Wharf in Cumming"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          slotLabel={photos.hero}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/55 to-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(200,169,106,0.18),transparent_50%)]" />
      </motion.div>

      <FloatingLights />

      <svg
        className="wave-divider z-10 h-12 sm:h-20"
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
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-[env(safe-area-inset-bottom)] sm:px-5 sm:pb-0 md:px-8"
      >
        <motion.p
          className="mb-4 text-[10px] uppercase tracking-[0.28em] text-gold sm:mb-5 sm:text-xs sm:tracking-[0.32em]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          Cumming City Center · Suite H101
        </motion.p>
        <motion.h1
          className="font-display max-w-4xl text-[2.35rem] leading-[1.08] tracking-wide text-ivory sm:text-5xl md:text-7xl lg:text-8xl text-balance"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          Fish & chips that hold up to the UK trip
        </motion.h1>
        <motion.p
          className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-ivory/80 sm:mt-6 sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
        >
          Crispy battered fish, British chips, pretzel with beer cheese, and UK
          beers on Vision Drive. Open daily from 11:30.
        </motion.p>
        <motion.div
          className="mt-5 flex flex-col gap-2 text-sm text-ivory/70 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden />
            {siteConfig.address.street}
          </span>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden />
            {siteConfig.phone}
          </a>
        </motion.div>
        <motion.div
          className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/menu">See the menu</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-ivory/35 text-ivory hover:border-gold hover:text-gold sm:w-auto"
          >
            <Link href="/reservations">Reserve a table</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
