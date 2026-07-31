"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { PLACEHOLDER_SRC } from "@/data/images";
import { cn } from "@/lib/utils";

type PhotoProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  /** Shown if the asset fails to load */
  slotLabel?: string;
};

function isSvg(src: string) {
  return src.toLowerCase().endsWith(".svg");
}

/**
 * Restaurant photo helper.
 * Uses Unsplash stand-ins from src/data/images.ts until real H101 photos are uploaded.
 * Falls back to a branded local SVG if a remote asset fails.
 */
export function Photo({
  src,
  alt,
  className,
  slotLabel,
  fill,
  ...props
}: PhotoProps) {
  const [failed, setFailed] = useState(false);
  const resolvedSrc = failed ? PLACEHOLDER_SRC : src;
  const svg = isSvg(resolvedSrc);

  if (failed && fill) {
    return (
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden bg-navy px-6 text-center",
          className
        )}
        role="img"
        aria-label={alt}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(45,93,123,0.45),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(200,169,106,0.16),transparent_50%)]" />
        <p className="relative text-[10px] uppercase tracking-[0.28em] text-gold">
          Washington&apos;s Wharf
        </p>
        <div className="relative h-px w-16 bg-gold/50" />
        <p className="relative font-display text-2xl tracking-wide text-ivory md:text-3xl">
          {slotLabel?.split("/").pop()?.replace(/\.(svg|jpg|jpeg|png)$/i, "").replace(/[-_]/g, " ") ?? "Coming soon"}
        </p>
        <p className="relative text-xs text-sand/80">Photo placeholder</p>
      </div>
    );
  }

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      fill={fill}
      className={className}
      unoptimized={svg}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
