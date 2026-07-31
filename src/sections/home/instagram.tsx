"use client";

import { instagramPosts, siteConfig } from "@/data/site";
import { Reveal } from "@/components/effects/motion";
import { SectionHeading } from "@/components/layout/section-heading";
import { InstagramIcon } from "@/components/ui/social-icons";
import { Photo } from "@/components/ui/photo";

/**
 * Hardcoded IG preview until a Meta Graph API token or embed is wired.
 * Captions are unique on purpose (the old duplicate text came from aria-label + visible caption).
 * Swap images under /public/images/instagram with exports from @washingtonswharf.
 */
export function InstagramSection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:mb-12 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="@washingtonswharf"
              title="What we post when the fryer is busy"
              description="Preview tiles only. For live photos, follow the Instagram account. Drop real exports into /images/instagram to replace placeholders."
            />
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-11 items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold transition-colors hover:text-sand"
            >
              <InstagramIcon className="h-4 w-4" />
              Open Instagram
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
              >
                <Photo
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  slotLabel={post.image}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/80 via-navy/20 to-transparent p-3 opacity-100 md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100">
                  <p className="text-xs leading-relaxed text-ivory">
                    {post.caption}
                  </p>
                </div>
                <span className="sr-only">{post.caption}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
