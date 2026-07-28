"use client";

import Image from "next/image";
import Link from "next/link";
import { eventTypes } from "@/data/site";
import { Reveal } from "@/components/effects/motion";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";

export function PrivateEventsPreview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Celebrate"
              title="Private Events"
              description="Weddings, corporate gatherings, and milestone evenings, composed with waterfront grace."
            />
            <Button asChild variant="outline">
              <Link href="/private-events">Plan Your Event</Link>
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {eventTypes.map((event, i) => (
            <Reveal key={event.id} delay={i * 0.05}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-[1.25rem] lg:aspect-[2/3]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl text-ivory md:text-2xl">
                    {event.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-ivory/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {event.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
