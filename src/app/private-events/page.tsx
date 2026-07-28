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
    ["events", "weddings"].includes(g.category)
  );

  return (
    <>
      <PageHero
        eyebrow="Celebrate"
        title="Private Events on the Water"
        description="From intimate rehearsals to grand waterfront weddings, spaces, cuisine, and service composed entirely for you."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80"
        cta={{ href: "/contact", label: "Plan Your Event" }}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Spaces"
              title="Event Spaces"
              description="Three distinctive settings, each framed by harbor light."
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
              eyebrow="Weddings"
              title="Wedding Packages"
              description="Ceremonies at golden hour, receptions under lantern light, and menus as memorable as the vows."
              className="mb-10 max-w-3xl"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Harbor Ceremony",
                  detail:
                    "Terrace vows, floral styling consultation, and champagne welcome.",
                },
                {
                  title: "Reception Soirée",
                  detail:
                    "Seated dinner or stations, open bar options, and dedicated event captain.",
                },
                {
                  title: "Full Weekend",
                  detail:
                    "Rehearsal dinner, ceremony, reception, and preferred vendor guidance.",
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
              eyebrow="Business & Beyond"
              title="Corporate & Private Dining"
              description="Executive dinners, product launches, and milestone celebrations with discreet, polished service."
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
              title="Event Gallery"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eventGallery.map((image, i) => (
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
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600&q=80"
          alt="Evening reception by the water"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-4xl text-ivory md:text-6xl">
              Begin Your Celebration
            </h2>
            <p className="mt-4 text-ivory/75">
              Share your vision, our events team will craft the evening around
              it.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
