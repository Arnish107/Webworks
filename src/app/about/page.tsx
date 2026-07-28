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
        eyebrow="Our Story"
        title="Fish & Chips with Heart"
        description="Washington's Wharf brings authentic British-style fish and chips, comfort classics, and a welcoming bar to Cumming City Center."
        image="https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=1600&q=80"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1000&q=80"
                alt="Cozy restaurant atmosphere"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionHeading
              eyebrow="About Us"
              title="A Cumming Favorite for Crispy Classics"
              description="We are all about generous portions, crispy batter, flaky fish, and an easygoing room where friends and families feel at home. Guests come for the fish and chips and stay for the pretzel with beer cheese, the bar, and the friendly staff."
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-card/25 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What Matters"
              title="How We Do Things"
              align="center"
              className="mb-14"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Crispy & Fresh",
                text: "Fish fried to order, chips that stay golden, and sauces made to dunk every bite.",
              },
              {
                title: "Friendly Service",
                text: "Fast, welcoming, and happy to help you find the perfect basket, side, or pint.",
              },
              {
                title: "Good Vibes",
                text: "Casual seating, 80s hits, a solid bar, and a spot that feels great for lunch or dinner.",
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
              eyebrow="By the Numbers"
              title="Why Guests Love Us"
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
