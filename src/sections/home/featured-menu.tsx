"use client";

import Link from "next/link";
import { featuredMenu } from "@/data/site";
import { Reveal } from "@/components/effects/motion";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { photos } from "@/data/images";

export function FeaturedMenuSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Board specials"
              title="From the fryer and the bar"
              description="Fish and shrimp prices below are the published figures guests cite. Other prices: ask when you order until we upload a current menu sheet."
            />
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/menu">Full menu page</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={photos.menuPdf}>
                  PDF menu
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="flex gap-5 overflow-x-auto pb-4 custom-scrollbar snap-x snap-mandatory">
          {featuredMenu.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06} className="snap-start">
              <article className="group relative w-[280px] shrink-0 overflow-hidden rounded-[1.5rem] md:w-[320px]">
                <div className="relative aspect-[4/5]">
                  <Photo
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    slotLabel={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
                      {item.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-ivory">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-ivory/75">
                      {item.description}
                    </p>
                    <p className="mt-3 text-sm text-sand">{item.price}</p>
                    <p className="mt-3 max-h-0 overflow-hidden text-xs leading-relaxed text-ivory/65 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                      {item.details}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
