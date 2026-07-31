"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { navLinks, siteConfig } from "@/data/site";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const scrolled = useScrolled(24);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 pt-[env(safe-area-inset-top)]",
        scrolled
          ? "glass border-b border-border py-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
          : "border-b border-transparent bg-transparent py-4 md:py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-5 md:px-8">
        <Link
          href="/"
          className="focus-ring group min-w-0 font-display text-[1.2rem] leading-tight tracking-[0.04em] text-foreground sm:text-2xl md:text-[1.7rem] md:tracking-[0.06em]"
          aria-label={`${siteConfig.name} home`}
          onClick={() => setOpen(false)}
        >
          <span className="transition-colors duration-300 group-hover:text-gold">
            Washington&apos;s Wharf
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "focus-ring text-[11px] uppercase tracking-[0.22em] transition-colors duration-300",
                pathname === link.href
                  ? "text-gold"
                  : "text-foreground/75 hover:text-gold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle color theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative h-10 w-10 text-foreground/80 sm:h-11 sm:w-11"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button asChild className="hidden md:inline-flex" size="sm">
            <Link href="/reservations">Reserve</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 lg:hidden sm:h-11 sm:w-11"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="glass max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav
              className="flex flex-col gap-1 px-4 py-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-5 sm:py-6"
              aria-label="Mobile"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "focus-ring block rounded-xl px-3 py-3.5 text-sm tracking-[0.16em] uppercase transition-colors",
                      pathname === link.href
                        ? "bg-gold/10 text-gold"
                        : "text-foreground/85 hover:text-gold"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button asChild className="mt-4 w-full">
                <Link href="/reservations" onClick={() => setOpen(false)}>
                  Reserve a Table
                </Link>
              </Button>
              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-2 block py-3 text-center text-sm text-muted transition-colors hover:text-gold"
                onClick={() => setOpen(false)}
              >
                Call {siteConfig.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
