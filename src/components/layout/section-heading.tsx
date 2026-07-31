import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto text-center",
        "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[2rem] leading-[1.12] tracking-wide text-foreground sm:text-4xl md:text-5xl lg:text-6xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
