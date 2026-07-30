"use client";

import { FormEvent, useState } from "react";
import {
  Car,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { faqs, hours, siteConfig } from "@/data/site";
import { photos } from "@/data/images";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/effects/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Contact"
        description={`Questions about the menu, hours, parking at City Center, or a group pickup? Call ${siteConfig.phone} or write ${siteConfig.email}.`}
        image={photos.diningRoom}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Visit"
              title="Hours & Location"
              className="mb-10"
            />
            <ul className="space-y-6">
              <InfoRow icon={<Clock className="h-5 w-5" />} title="Hours">
                {hours.map((h) => (
                  <p key={h.days}>
                    <span className="text-sand">{h.days}:</span> {h.hours}
                  </p>
                ))}
              </InfoRow>
              <InfoRow icon={<MapPin className="h-5 w-5" />} title="Location">
                <p>{siteConfig.address.full}</p>
              </InfoRow>
              <InfoRow icon={<Car className="h-5 w-5" />} title="Parking">
                <p>
                  Free parking is available at Cumming City Center, including the
                  nearby parking garage and street parking.
                </p>
              </InfoRow>
              <InfoRow icon={<Phone className="h-5 w-5" />} title="Phone">
                <a href={`tel:${siteConfig.phone}`} className="hover:text-gold">
                  {siteConfig.phone}
                </a>
              </InfoRow>
              <InfoRow icon={<Mail className="h-5 w-5" />} title="Email">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-gold"
                >
                  {siteConfig.email}
                </a>
                <br />
                <a
                  href={`mailto:${siteConfig.eventsEmail}`}
                  className="hover:text-gold"
                >
                  {siteConfig.eventsEmail}
                </a>
              </InfoRow>
            </ul>

            <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-border">
              <iframe
                title="Map to Washington's Wharf"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.address.full)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <div
                className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-[1.75rem] border border-gold/30 bg-card/50 p-10 text-center"
                role="status"
              >
                <CheckCircle2 className="h-12 w-12 text-gold" />
                <h2 className="mt-5 font-display text-3xl">Message Sent</h2>
                <p className="mt-3 text-sm text-muted">
                  We&apos;ll respond within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="space-y-5 rounded-[1.75rem] border border-border bg-card/40 p-6 md:p-8"
                aria-label="Contact form"
              >
                <h2 className="font-display text-3xl text-foreground">
                  Send a Message
                </h2>
                <div>
                  <Label htmlFor="contact-name" className="mb-2 block">
                    Name
                  </Label>
                  <Input id="contact-name" name="name" required />
                </div>
                <div>
                  <Label htmlFor="contact-email" className="mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact-message" className="mb-2 block">
                    Message
                  </Label>
                  <Textarea id="contact-message" name="message" required />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked"
              align="center"
              className="mb-12"
            />
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.05}>
                <details className="group rounded-2xl border border-border bg-card/30 p-5 open:border-gold/30">
                  <summary className="focus-ring cursor-pointer list-none font-display text-xl text-foreground marker:content-none">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="text-gold transition-transform group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <div className="mt-1 text-gold" aria-hidden>
        {icon}
      </div>
      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-sand">{title}</h3>
        <div className="mt-2 text-sm leading-relaxed text-muted">{children}</div>
      </div>
    </li>
  );
}
