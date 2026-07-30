"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/site";
import { Reveal } from "@/components/effects/motion";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 ambient-gradient opacity-40" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="From real reviews"
            title="What guests actually wrote"
            description="Pulled and lightly cleaned from public local reviews. Messy on purpose."
            align="center"
            className="mb-14"
          />
        </Reveal>

        <div className="relative min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="px-2"
            >
              <p className="font-display text-2xl leading-relaxed tracking-wide text-foreground md:text-4xl text-balance">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer className="mt-8">
                <cite className="not-italic text-sm tracking-[0.12em] text-gold">
                  {current.author}
                </cite>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                  {current.detail}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous testimonial"
            onClick={() =>
              setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
            }
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-2" role="tablist" aria-label="Testimonials">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial ${i + 1}`}
                className={`focus-ring h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-gold" : "w-2 bg-muted/50"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
