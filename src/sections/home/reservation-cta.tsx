"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/effects/motion";
import { Button } from "@/components/ui/button";

export function ReservationCtaSection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <Image
        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
        alt="Marina boats at golden hour"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gold">
            Join Us
          </p>
          <h2 className="font-display text-4xl tracking-wide text-ivory md:text-6xl lg:text-7xl text-balance">
            Reserve Your Waterfront Experience
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-ivory/75">
            Secure a table by the marina, or let our events team craft an evening
            uniquely yours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/reservations">Book a Table</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-ivory/35 text-ivory hover:border-gold hover:text-gold"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
