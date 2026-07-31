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
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 text-sm text-muted sm:px-5 md:grid-cols-3 md:items-start md:gap-6 md:px-8">
        <p className="inline-flex items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
          <span>
            <span className="block text-foreground">{siteConfig.address.street}</span>
            <span className="block">
              {siteConfig.address.city}, {siteConfig.address.state}{" "}
              {siteConfig.address.zip}
            </span>
          </span>
        </p>
        <p className="inline-flex items-center gap-2 md:justify-center">
          <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden />
          <a href={`tel:${siteConfig.phone}`} className="hover:text-gold">
            {siteConfig.phone}
          </a>
        </p>
        <p className="inline-flex items-start gap-2 md:justify-end">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
          <span>
            <span className="block text-foreground">Open daily from 11:30</span>
            <span className="block">
              {todayHours.days}: {todayHours.hours}
            </span>
          </span>
        </p>
      </div>
    </section>
  );
}
