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
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1000&q=80"
              alt="Casual restaurant dining room with warm lighting"
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
            title="Good Eats and Good Vibes in Cumming"
            description="Washington's Wharf is your spot for authentic British-style fish and chips in Cumming City Center. Come for the crispy batter and flaky fish. Stay for the friendly service, cold pints, and easygoing atmosphere."
          />
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted md:text-base">
            Dig into classics like fish and chips, a golden shrimp basket, juicy
            chicken tenders, and saucy wings. Kick things off with sweet potato
            tots, cheese sticks, British chips with mushy peas, or a warm pretzel
            with rich beer cheese.
          </p>
          <Button asChild className="mt-8" variant="outline">
            <Link href="/about">Our Story</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
