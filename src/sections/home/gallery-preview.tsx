"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/data/site";
import { Reveal } from "@/components/effects/motion";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function GalleryPreviewSection() {
  const preview = galleryImages.slice(0, 8);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Moments"
              title="Gallery"
              description="A glimpse of crispy classics, cold drinks, and good vibes in Cumming."
            />
            <Button asChild variant="outline">
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </Reveal>

        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {preview.map((image, i) => (
            <Reveal key={image.id} delay={i * 0.04} className="mb-4 break-inside-avoid">
              <figure
                className={cn(
                  "group relative overflow-hidden rounded-2xl",
                  image.span === "tall" ? "aspect-[3/4]" : "aspect-square"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gold/0 shadow-[inset_0_0_0_0_rgba(200,169,106,0)] transition-all duration-500 group-hover:bg-gold/10 group-hover:shadow-[inset_0_0_40px_rgba(200,169,106,0.25)]" />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
