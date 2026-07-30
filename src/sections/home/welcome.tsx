"use client";

import Link from "next/link";
import { Reveal, ParallaxImage } from "@/components/effects/motion";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { SectionHeading } from "@/components/layout/section-heading";
import { photos } from "@/data/images";
import { siteConfig } from "@/data/site";

export function WelcomeSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <ParallaxImage className="relative aspect-[4/5] rounded-[2rem] md:aspect-[5/6]">
            <Photo
              src={photos.diningRoom}
              alt="Dining room at Washington's Wharf"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              slotLabel={photos.diningRoom}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </ParallaxImage>
        </Reveal>

        <Reveal delay={0.15}>
          <SectionHeading
            eyebrow="At H101"
            title="The fish and chips shop Cumming kept asking for"
            description="Washington's Wharf sits in Cumming City Center with counter service, a proper bar, and a plate of fish and chips that locals compare to trips across the pond. We took over the British fish-and-chips space on Vision Drive and kept the mission simple: fry it fresh, pour a real pint, and keep the room easy."
          />
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted md:text-base">
            Start with pretzel and beer cheese. Order fish at $16.95 or shrimp at
            $11.95. Add mushy peas or gravy if you know. Kids usually go for the
            tenders. The phone booth still gets a laugh, and the 80s playlist stays
            in the background where it belongs.
          </p>
          <p className="mt-4 text-sm text-sand">
            {siteConfig.address.full} · {siteConfig.phone}
          </p>
          <Button asChild className="mt-8" variant="outline">
            <Link href="/about">How we got here</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
