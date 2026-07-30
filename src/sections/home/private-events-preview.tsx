"use client";

import Link from "next/link";
import { eventTypes, siteConfig } from "@/data/site";
import { Reveal } from "@/components/effects/motion";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";

export function PrivateEventsPreview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Groups"
              title="Feeding more than a two-top"
              description={`No private banquet hall. Just a dining room, a bar, and call-ahead takeout. For bigger orders, dial ${siteConfig.phone}.`}
            />
            <Button asChild variant="outline">
              <Link href="/private-events">Group options</Link>
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {eventTypes.map((event, i) => (
            <Reveal key={event.id} delay={i * 0.05}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-[1.25rem] lg:aspect-[2/3]">
                <Photo
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  slotLabel={event.image}
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
