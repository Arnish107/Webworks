import Link from "next/link";
import { cn } from "@/lib/utils";
import { Photo } from "@/components/ui/photo";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  cta,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-16 pt-32 md:min-h-[78vh] md:pb-24">
      <Photo
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        slotLabel={image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(14,34,56,0.45)_100%)]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        {eyebrow && (
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display max-w-4xl text-5xl leading-[1.05] tracking-wide text-ivory md:text-6xl lg:text-7xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/80 md:text-lg">
            {description}
          </p>
        )}
        {cta && (
          <Link
            href={cta.href}
            className={cn(
              "magnetic-btn focus-ring mt-8 inline-flex h-12 items-center rounded-full bg-gold px-7 text-sm font-medium text-navy transition-colors hover:bg-[#d4b87a]"
            )}
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
