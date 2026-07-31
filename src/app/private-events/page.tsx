"use client";

import Link from "next/link";
import { eventSpaces, eventTypes, galleryImages, siteConfig } from "@/data/site";
import { photos } from "@/data/images";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/effects/motion";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";

export default function PrivateEventsPage() {
  const eventGallery = galleryImages.filter((g) =>
    ["events", "dining", "food"].includes(g.category)
  );

  return (
    <>
      <PageHero
        eyebrow="Groups"
        title="Call ahead if you are feeding a crowd"
        description={`We do not run a private banquet hall. We do seat families and small groups, and we stage takeout for offices and game day. Start with ${siteConfig.phone}.`}
        image={photos.diningRoom}
        cta={{ href: "/contact", label: "Talk to us" }}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Three honest options"
              description="No invented ballrooms. Just the room we have."
              className="mb-14"
            />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {eventSpaces.map((space, i) => (
              <Reveal key={space.id} delay={i * 0.08}>
                <article className="overflow-hidden rounded-[1.5rem] border border-border bg-card/40">
                  <div className="relative aspect-[16/11]">
                    <Photo
                      src={space.image}
                      alt={space.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                      slotLabel={space.image}
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                      {space.capacity}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-foreground">
                      {space.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {space.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/20 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Real use cases"
              title="What people actually call about"
              description="Grounded in how a counter-service fish and chips shop gets used in Cumming City Center."
              className="mb-10 max-w-3xl"
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
            {eventTypes.map((event, i) => (
              <Reveal key={event.id} delay={i * 0.05}>
                <article className="group relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[3/4]">
                  <Photo
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    slotLabel={event.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-display text-xl text-ivory">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ivory/70">
                      {event.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Photos"
              title="Group-friendly plates"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eventGallery.slice(0, 6).map((image, i) => (
              <Reveal key={image.id} delay={i * 0.05}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Photo
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="33vw"
                    className="object-cover"
                    slotLabel={image.src}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <Photo
          src={photos.fishAndChips}
          alt="Fish and chips for a group order"
          fill
          className="object-cover"
          sizes="100vw"
          slotLabel={photos.fishAndChips}
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-4xl text-ivory md:text-6xl">
              Tell us the headcount
            </h2>
            <p className="mt-4 text-ivory/75">
              Call {siteConfig.phone} or send a note. We will tell you honestly
              what the dining room can handle versus what should be takeout.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Contact the shop</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
