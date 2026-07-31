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
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Board specials"
              title="From the fryer and the bar"
              description="Fish and shrimp prices below are the published figures guests cite. Other prices: ask when you order until we upload a current menu sheet."
            />
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button asChild className="w-full sm:w-auto">
                <Link href="/menu">Full menu page</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={photos.menuPdf}>PDF menu</a>
              </Button>
            </div>
          </div>
        </Reveal>

        <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted md:hidden">
          Swipe for more
        </p>
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 custom-scrollbar snap-x snap-mandatory sm:mx-0 sm:gap-5 sm:px-0">
          {featuredMenu.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06} className="snap-start">
              <article className="group relative w-[min(78vw,280px)] shrink-0 overflow-hidden rounded-[1.5rem] md:w-[320px]">
                <div className="relative aspect-[4/5]">
                  <Photo
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 78vw, 320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    slotLabel={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:transition-transform md:duration-500 md:group-hover:-translate-y-2">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
                      {item.category}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-ivory sm:text-2xl">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-ivory/75">
                      {item.description}
                    </p>
                    <p className="mt-3 text-sm text-sand">{item.price}</p>
                    <p className="mt-3 text-xs leading-relaxed text-ivory/65 md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-500 md:group-hover:max-h-20 md:group-hover:opacity-100">
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
