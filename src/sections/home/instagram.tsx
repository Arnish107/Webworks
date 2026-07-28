"use client";

import Image from "next/image";
import { instagramPosts, siteConfig } from "@/data/site";
import { Reveal } from "@/components/effects/motion";
import { SectionHeading } from "@/components/layout/section-heading";
import { InstagramIcon } from "@/components/ui/social-icons";

export function InstagramSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Social"
              title="Along the Wharf"
              description="Follow the seasons, plates, and celebrations."
            />
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold transition-colors hover:text-sand"
            >
              <InstagramIcon className="h-4 w-4" />
              @washingtonswharf
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {instagramPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.05}>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl"
                aria-label={post.caption}
              >
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-navy/0 p-4 opacity-0 transition-all duration-500 group-hover:bg-navy/55 group-hover:opacity-100">
                  <p className="text-xs leading-relaxed text-ivory">
                    {post.caption}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
