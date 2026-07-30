"use client";

import Link from "next/link";
import { Reveal } from "@/components/effects/motion";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { photos } from "@/data/images";
import { siteConfig } from "@/data/site";

export function ReservationCtaSection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <Photo
        src={photos.ctaBanner}
        alt="Washington's Wharf dining"
        fill
        sizes="100vw"
        className="object-cover"
        slotLabel={photos.ctaBanner}
      />
      <div className="absolute inset-0 bg-navy/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gold">
            {siteConfig.address.city}, {siteConfig.address.state}
          </p>
          <h2 className="font-display text-4xl tracking-wide text-ivory md:text-6xl lg:text-7xl text-balance">
            Hungry before 7? We are open.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-ivory/75">
            Mon-Thu & Sunday 11:30 AM - 7:00 PM · Fri-Sat until 9:00 PM.
            Call {siteConfig.phone} or book a table online.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/reservations">Book a table</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-ivory/35 text-ivory hover:border-gold hover:text-gold"
            >
              <Link href="/contact">Directions to H101</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
