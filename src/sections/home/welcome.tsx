"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, ParallaxImage } from "@/components/effects/motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/layout/section-heading";

export function WelcomeSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <ParallaxImage className="relative aspect-[4/5] rounded-[2rem] md:aspect-[5/6]">
            <Image
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1000&q=80"
              alt="Elegant coastal restaurant dining room"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </ParallaxImage>
        </Reveal>

        <Reveal delay={0.15}>
          <SectionHeading
            eyebrow="Welcome"
            title="A Harbor Haven for Discerning Guests"
            description="Nestled along the water's edge, Washington's Wharf has long been a gathering place where coastal cuisine, gracious hospitality, and timeless marina views converge. From quiet weekday lunches to candlelit celebrations, every visit is composed with care."
          />
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted md:text-base">
            Our kitchen celebrates the catch of the day, prime cuts, and seasonal
            harvests, always plated with restraint and elegance. Step onto the
            terrace, feel the breeze off the harbor, and settle into an evening
            designed to linger.
          </p>
          <Button asChild className="mt-8" variant="outline">
            <Link href="/about">Our Story</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
