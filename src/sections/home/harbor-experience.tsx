"use client";

import { harborExperiences } from "@/data/site";
import { ParallaxImage, Reveal } from "@/components/effects/motion";
import { SectionHeading } from "@/components/layout/section-heading";
import { Photo } from "@/components/ui/photo";
import { cn } from "@/lib/utils";

export function HarborExperienceSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why people come back"
            title="Not a template restaurant story"
            description="Specific things guests mention: the batter, the bar, the 80s playlist, and how easy it is to park at City Center."
            className="mb-16"
          />
        </Reveal>

        <div className="space-y-20 md:space-y-28">
          {harborExperiences.map((item, index) => {
            const reverse = index % 2 === 1;
            return (
              <div
                key={item.id}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <Reveal className={cn(reverse && "md:order-2")}>
                  <ParallaxImage className="relative aspect-[16/11] rounded-[1.75rem]">
                    <Photo
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      slotLabel={item.image}
                    />
                  </ParallaxImage>
                </Reveal>
                <Reveal delay={0.12} className={cn(reverse && "md:order-1")}>
                  <p className="mb-3 text-xs uppercase tracking-[0.24em] text-gold">
                    0{index + 1}
                  </p>
                  <h3 className="font-display text-3xl tracking-wide text-foreground md:text-4xl lg:text-5xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                    {item.description}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
