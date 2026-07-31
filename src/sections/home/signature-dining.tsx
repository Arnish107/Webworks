"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signatureDining } from "@/data/site";
import { Reveal } from "@/components/effects/motion";
import { SectionHeading } from "@/components/layout/section-heading";
import { Photo } from "@/components/ui/photo";

export function SignatureDiningSection() {
  const [active, setActive] = useState<string | null>(signatureDining[0]?.id ?? null);

  return (
    <section className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Order these"
            title="What leaves the fryer"
            description="Six plates and pours guests actually talk about in reviews. Tap a plate for the details."
            align="center"
            className="mb-10 sm:mb-14"
          />
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {signatureDining.map((item, i) => {
            const isActive = active === item.id;
            return (
              <Reveal key={item.id} delay={i * 0.06}>
                <article
                  className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]"
                  onMouseEnter={() => setActive(item.id)}
                  onFocus={() => setActive(item.id)}
                  onClick={() =>
                    setActive((current) =>
                      current === item.id ? null : item.id
                    )
                  }
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  aria-label={`${item.title}. ${isActive ? "Hide" : "Show"} details`}
                  data-cursor="hover"
                >
                  <Photo
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-focus-within:scale-110"
                    slotLabel={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3 className="font-display text-2xl tracking-wide text-ivory md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ivory/80 md:hidden">
                      {item.description}
                    </p>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          className="mt-3 hidden text-sm leading-relaxed text-ivory/80 md:block"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.35 }}
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
