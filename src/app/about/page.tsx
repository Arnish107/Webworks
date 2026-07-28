"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/data/site";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/effects/motion";

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
        eyebrow="Our Heritage"
        title="A Timeless Waterfront Story"
        description="For more than two decades, Washington's Wharf has welcomed guests to the edge of the harbor, where hospitality feels unhurried and every view is part of the menu."
        image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1000&q=80"
                alt="Historic waterfront dining atmosphere"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionHeading
              eyebrow="Our Story"
              title="Rooted in Harbor Heritage"
              description="Born from a passion for coastal dining and community gathering, Washington's Wharf grew from a beloved local table into a destination of relaxed luxury. We honor the marina's maritime spirit while offering a contemporary hospitality experience, refined, welcoming, and unmistakably of the water."
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-card/25 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Philosophy"
              title="How We Welcome You"
              align="center"
              className="mb-14"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Fresh Ingredients",
                text: "Day-boat seafood, seasonal produce, and carefully sourced meats, chosen for purity of flavor.",
              },
              {
                title: "Exceptional Hospitality",
                text: "Attentive without intrusion. Every guest should feel known, unhurried, and quietly celebrated.",
              },
              {
                title: "Beautiful Atmosphere",
                text: "Soft light, harbor breezes, and spaces designed for conversation as much as cuisine.",
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
              eyebrow="Why Guests Love Us"
              title="By the Numbers"
              align="center"
              className="mb-14"
            />
          </Reveal>
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-stat
                className="text-center"
              >
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
