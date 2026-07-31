"use client";

import Link from "next/link";
import { galleryImages } from "@/data/site";
import { Reveal } from "@/components/effects/motion";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { cn } from "@/lib/utils";

export function GalleryPreviewSection() {
  const preview = galleryImages.slice(0, 8);

  return (
    <section className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Photos"
              title="Shot here, not from a stock library"
              description="These slots are waiting for real plates, the bar, the phone booth, and the Vision Drive storefront. Until then you will see labeled placeholders."
            />
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/gallery">Open gallery</Link>
            </Button>
          </div>
        </Reveal>

        <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4">
          {preview.map((image, i) => (
            <Reveal key={image.id} delay={i * 0.04} className="mb-3 break-inside-avoid sm:mb-4">
              <figure
                className={cn(
                  "group relative overflow-hidden rounded-2xl",
                  image.span === "tall" ? "aspect-[3/4]" : "aspect-square"
                )}
              >
                <Photo
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  slotLabel={image.src}
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
