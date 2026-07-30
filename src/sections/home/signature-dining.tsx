"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signatureDining } from "@/data/site";
import { Reveal } from "@/components/effects/motion";
import { SectionHeading } from "@/components/layout/section-heading";
import { Photo } from "@/components/ui/photo";

export function SignatureDiningSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Order these"
            title="What leaves the fryer"
            description="Six plates and pours guests actually talk about in reviews."
            align="center"
            className="mb-14"
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signatureDining.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <article
                className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem]"
                onMouseEnter={() => setActive(item.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(item.id)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                data-cursor="hover"
              >
                <Photo
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-focus-within:scale-110"
                  slotLabel={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl tracking-wide text-ivory md:text-3xl">
                    {item.title}
                  </h3>
                  <AnimatePresence>
                    {active === item.id && (
                      <motion.p
                        className="mt-3 text-sm leading-relaxed text-ivory/80"
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
          ))}
        </div>
      </div>
    </section>
  );
}
