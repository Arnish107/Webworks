"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/effects/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const times = [
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTime, setSelectedTime] = useState("7:00 PM");
  const [guests, setGuests] = useState(2);

  const availability = useMemo(() => {
    return times.map((time) => ({
      time,
      available: !["12:30 PM", "7:30 PM", "8:00 PM"].includes(time),
    }));
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Book Your Table"
        description="Reserve waterfront seating for an evening of coastal cuisine and harbor views."
        image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:px-8 lg:gap-16">
          <Reveal>
            {submitted ? (
              <div
                className="flex h-full flex-col items-center justify-center rounded-[1.75rem] border border-gold/30 bg-card/50 p-10 text-center"
                role="status"
              >
                <CheckCircle2 className="h-12 w-12 text-gold" />
                <h2 className="mt-5 font-display text-3xl text-foreground">
                  Request Received
                </h2>
                <p className="mt-3 max-w-sm text-sm text-muted">
                  Thank you. Our reservations team will confirm your table shortly
                  via email or phone.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="space-y-5 rounded-[1.75rem] border border-border bg-card/40 p-6 md:p-8"
                aria-label="Reservation form"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Name">
                    <Input id="name" name="name" required autoComplete="name" />
                  </Field>
                  <Field id="email" label="Email">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                    />
                  </Field>
                  <Field id="phone" label="Phone">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                    />
                  </Field>
                  <Field id="date" label="Date">
                    <Input id="date" name="date" type="date" required />
                  </Field>
                </div>

                <div>
                  <Label className="mb-3 block">Preferred Time</Label>
                  <div
                    className="grid grid-cols-3 gap-2 sm:grid-cols-4"
                    role="listbox"
                    aria-label="Available times"
                  >
                    {availability.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        role="option"
                        aria-selected={selectedTime === slot.time}
                        disabled={!slot.available}
                        onClick={() => setSelectedTime(slot.time)}
                        className={cn(
                          "focus-ring rounded-xl border px-2 py-2.5 text-xs transition-all duration-300",
                          !slot.available &&
                            "cursor-not-allowed border-border/40 text-muted/40 line-through",
                          slot.available &&
                            selectedTime === slot.time &&
                            "border-gold bg-gold/15 text-gold",
                          slot.available &&
                            selectedTime !== slot.time &&
                            "border-border text-foreground hover:border-gold/50"
                        )}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="time" value={selectedTime} />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="guests" label="Guests">
                    <div className="flex items-center gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        aria-label="Decrease guests"
                        onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      >
                        −
                      </Button>
                      <span className="min-w-8 text-center text-lg" aria-live="polite">
                        {guests}
                      </span>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        aria-label="Increase guests"
                        onClick={() => setGuests((g) => Math.min(20, g + 1))}
                      >
                        +
                      </Button>
                      <input type="hidden" name="guests" value={guests} />
                    </div>
                  </Field>
                  <Field id="occasion" label="Occasion">
                    <Input
                      id="occasion"
                      name="occasion"
                      placeholder="Anniversary, birthday..."
                    />
                  </Field>
                </div>

                <Field id="notes" label="Notes">
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Allergies, seating preferences, celebrations..."
                  />
                </Field>

                <Button type="submit" size="lg" className="w-full">
                  Request Reservation
                </Button>
                <p className="text-center text-xs text-muted">
                  Parties of 9+ please call{" "}
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-gold hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-6">
              <div className="overflow-hidden rounded-[1.75rem] border border-border">
                <div
                  className="flex aspect-[4/3] items-center justify-center bg-harbor/30 p-8 text-center"
                  role="img"
                  aria-label={`Map placeholder for ${siteConfig.address.full}`}
                >
                  <div>
                    <p className="font-display text-3xl text-ivory">Find Us</p>
                    <p className="mt-3 text-sm text-ivory/75">
                      {siteConfig.address.full}
                    </p>
                    <p className="mt-6 text-xs uppercase tracking-[0.2em] text-sand">
                      Google Maps Embed Placeholder
                    </p>
                    <iframe
                      title="Washington's Wharf location map"
                      className="mt-6 h-48 w-full rounded-xl border-0 opacity-80"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.address.full)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-border bg-card/40 p-6">
                <h2 className="font-display text-2xl text-foreground">
                  Availability Legend
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  <li>Gold highlight, selected time</li>
                  <li>Struck times, currently unavailable</li>
                  <li>Open times, ready to reserve</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 block">
        {label}
      </Label>
      {children}
    </div>
  );
}
