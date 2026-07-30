import { Clock, MapPin, Phone } from "lucide-react";
import { hours, siteConfig } from "@/data/site";

/** Puts real visit details above the fold-ish, not only in the footer. */
export function VisitStrip() {
  const todayHours = hours[0];

  return (
    <section
      className="border-y border-border bg-card/30"
      aria-label="Location and hours"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p className="inline-flex items-start gap-2 md:items-center">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
          <span>{siteConfig.address.full}</span>
        </p>
        <p className="inline-flex items-center gap-2">
          <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden />
          <a href={`tel:${siteConfig.phone}`} className="hover:text-gold">
            {siteConfig.phone}
          </a>
        </p>
        <p className="inline-flex items-center gap-2">
          <Clock className="h-4 w-4 shrink-0 text-gold" aria-hidden />
          <span>
            Open daily from 11:30 · {todayHours.days} {todayHours.hours}
          </span>
        </p>
      </div>
    </section>
  );
}
