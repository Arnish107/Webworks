"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryImages } from "@/data/site";
import { PageHero } from "@/components/layout/page-hero";
import { cn } from "@/lib/utils";
import type { GalleryCategory } from "@/types";

const filters: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "dining", label: "Dining" },
  { id: "waterfront", label: "Waterfront" },
  { id: "food", label: "Food" },
  { id: "cocktails", label: "Cocktails" },
  { id: "events", label: "Events" },
  { id: "weddings", label: "Weddings" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory>("all");

  const images = useMemo(() => {
    if (filter === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === filter);
  }, [filter]);

  return (
    <>
      <PageHero
        eyebrow="Visual Journal"
        title="Gallery"
        description="Harbor light, plated beauty, and celebrations captured along the wharf."
        image="https://images.unsplash.com/photo-1592861956120-e524fc739696?w=1600&q=80"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div
            className="mb-12 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Gallery filters"
          >
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={filter === item.id}
                onClick={() => setFilter(item.id)}
                className={cn(
                  "focus-ring rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-all duration-300",
                  filter === item.id
                    ? "bg-gold text-navy"
                    : "border border-border text-muted hover:border-gold hover:text-gold"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {images.map((image) => (
                <motion.figure
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45 }}
                  className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl"
                >
                  <div
                    className={cn(
                      "relative",
                      image.span === "tall"
                        ? "aspect-[3/4]"
                        : image.span === "wide"
                          ? "aspect-[16/10]"
                          : "aspect-square"
                    )}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/25" />
                    <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-sm text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {image.alt}
                    </figcaption>
                  </div>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
