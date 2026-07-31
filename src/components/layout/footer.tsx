"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { hours, navLinks, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
} from "@/components/ui/social-icons";

export function Footer() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  /**
   * Newsletter is not connected to Mailchimp/Resend/etc yet.
   * For now we open a mailto so the address is not silently discarded.
   * TODO: wire to a real ESP and remove mailto fallback.
   */
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") || "").trim();
    if (!email) return;
    const subject = encodeURIComponent("Newsletter signup - Washington's Wharf");
    const body = encodeURIComponent(
      `Please add this email to the Washington's Wharf list:\n\n${email}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <footer className="relative overflow-hidden border-t border-border bg-navy text-ivory">
      <div className="pointer-events-none absolute inset-0 ambient-gradient opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:gap-12 sm:px-5 sm:py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <p className="font-display text-3xl tracking-[0.06em]">
            Washington&apos;s Wharf
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-sand/80">
            {siteConfig.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            <SocialLink href={siteConfig.social.instagram} label="Instagram">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href={siteConfig.social.facebook} label="Facebook">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href={siteConfig.social.twitter} label="X">
              <XIcon />
            </SocialLink>
          </div>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.24em] text-gold">
            Explore
          </h2>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="focus-ring text-sm text-ivory/75 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.24em] text-gold">
            Visit
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-ivory/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
              <span>{siteConfig.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
              <a
                href={`tel:${siteConfig.phone}`}
                className="focus-ring hover:text-gold"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="focus-ring hover:text-gold"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 space-y-2">
            {hours.map((block) => (
              <p key={block.days} className="text-xs text-ivory/65">
                <span className="text-sand">{block.days}</span>
                <span className="mx-2 text-ivory/30">·</span>
                {block.hours}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.24em] text-gold">
            Specials by email
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ivory/70">
            New sides, UK beer rotations, and City Center hours changes. Form
            opens your email app until a list service is connected.
          </p>
          <form onSubmit={onSubmit} className="mt-5 space-y-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <Input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="border-sand/20 bg-white/5 text-ivory placeholder:text-ivory/40"
            />
            <Button type="submit" className="w-full">
              {status === "sent" ? "Check your email app" : "Email us to join"}
            </Button>
          </form>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-5 py-6 text-center text-xs text-ivory/45 md:px-8">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand/25 text-sand transition-colors hover:border-gold hover:text-gold"
    >
      {children}
    </a>
  );
}
