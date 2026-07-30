"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats, siteConfig } from "@/data/site";
import { photos } from "@/data/images";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/effects/motion";
import { Photo } from "@/components/ui/photo";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = statsRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-stat]", {
        y: 30,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 80%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageHero
        eyebrow="About"
        title="A fryer, a bar, and Suite H101"
        description="Washington's Wharf is the British fish and chips shop in Cumming City Center. We replaced the previous fish-and-chips tenant on Vision Drive and kept the brief short: fry it right, pour UK beer, treat people well."
        image={photos.hero}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Photo
                src={photos.diningRoom}
                alt="Inside Washington's Wharf"
                fill
                sizes="50vw"
                className="object-cover"
                slotLabel={photos.diningRoom}
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionHeading
              eyebrow="The room"
              title="Built for baskets, not banquet speeches"
              description="Counter service, a bar guests keep calling a masterstroke, 80s hits at a talkable volume, and a phone booth that still gets pointed out. Free parking in the City Center garage makes the amphitheatre-night dinner run easy."
            />
            <p className="mt-6 text-sm text-muted">
              Find us at {siteConfig.address.full}. Call {siteConfig.phone}.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-card/25 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="How we cook"
              title="What we refuse to phone in"
              align="center"
              className="mb-14"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Fish fried to order",
                text: "Guests who eat in the UK keep saying the batter and flake hold up. That is the whole brand promise.",
              },
              {
                title: "Sides people argue about",
                text: "British chips vs fries, mushy peas, gravy, and beer cheese on the pretzel. Pick a side and defend it.",
              },
              {
                title: "A bar that matches the food",
                text: "UK drafts and cocktails that make sense with fried fish, not a decorative wine list nobody orders.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="rounded-[1.5rem] border border-border bg-background/50 p-8 text-center">
                  <h3 className="font-display text-2xl text-foreground md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
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
              eyebrow="Quick facts"
              title="Grounded in Cumming"
              align="center"
              className="mb-14"
            />
          </Reveal>
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} data-stat className="text-center">
                <p className="font-display text-5xl text-gold md:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
