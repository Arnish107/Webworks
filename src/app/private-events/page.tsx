"use client";

import Image from "next/image";
import Link from "next/link";
import { eventSpaces, eventTypes, galleryImages } from "@/data/site";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/effects/motion";
import { Button } from "@/components/ui/button";

export default function PrivateEventsPage() {
  const eventGallery = galleryImages.filter((g) =>
    ["events", "dining", "food"].includes(g.category)
  );

  return (
    <>
      <PageHero
        eyebrow="Groups"
        title="Bring the Whole Crew"
        description="Birthdays, office lunches, family nights, and game-day orders. We make feeding a group easy."
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
        cta={{ href: "/contact", label: "Plan a Group Visit" }}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Spaces"
              title="How to Gather Here"
              description="Dine in, pull up to the bar, or call ahead for takeout."
              className="mb-14"
            />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {eventSpaces.map((space, i) => (
              <Reveal key={space.id} delay={i * 0.08}>
                <article className="overflow-hidden rounded-[1.5rem] border border-border bg-card/40">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={space.image}
                      alt={space.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
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
              eyebrow="Easy Wins"
              title="Popular Group Setups"
              description="Tell us how many people you are feeding and we will help you put together baskets, sides, and drinks."
              className="mb-10 max-w-3xl"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Family Night",
                  detail:
                    "Fish and chips, chicken tenders, tots, and soft drinks for the whole table.",
                },
                {
                  title: "Office Lunch",
                  detail:
                    "A mix of fish, shrimp, wings, and pretzels that travels well for pickup.",
                },
                {
                  title: "Game Day",
                  detail:
                    "Wings, baskets, chips, and cold beers ready when the crew arrives.",
                },
              ].map((pkg) => (
                <li
                  key={pkg.title}
                  className="rounded-2xl border border-border bg-background/40 p-6"
                >
                  <h3 className="font-display text-2xl text-foreground">
                    {pkg.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{pkg.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Occasions"
              title="Built for Sharing"
              description="Comfort food that works for almost any gathering."
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {eventTypes.map((event, i) => (
              <Reveal key={event.id} delay={i * 0.05}>
                <article className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 font-display text-xl text-ivory">
                    {event.title}
                  </h3>
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
              eyebrow="Inspiration"
              title="Group-Friendly Favorites"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eventGallery.slice(0, 6).map((image, i) => (
              <Reveal key={image.id} delay={i * 0.05}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <Image
          src="https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=1600&q=80"
          alt="Fish and chips ready for a group order"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-4xl text-ivory md:text-6xl">
              Feeding a Crowd?
            </h2>
            <p className="mt-4 text-ivory/75">
              Call ahead or send us a note and we will help you get the order
              right.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
