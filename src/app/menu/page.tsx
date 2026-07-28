"use client";

import { useMemo, useState } from "react";
import { menuCategories, menuItems } from "@/data/site";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/effects/motion";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/types";

export default function MenuPage() {
  const [active, setActive] = useState<MenuItem["category"] | "all">("all");

  const filtered = useMemo(() => {
    if (active === "all") return menuItems;
    return menuItems.filter((item) => item.category === active);
  }, [active]);

  const grouped = useMemo(() => {
    return menuCategories
      .map((cat) => ({
        ...cat,
        items: filtered.filter((item) => item.category === cat.id),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [filtered]);

  return (
    <>
      <PageHero
        eyebrow="Cuisine"
        title="The Menu"
        description="Coastal classics and seasonal plates, crafted with restraint, finished with elegance."
        image="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=1600&q=80"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <nav
            className="mb-14 flex flex-wrap gap-2"
            aria-label="Menu categories"
          >
            <CategoryChip
              label="All"
              active={active === "all"}
              onClick={() => setActive("all")}
            />
            {menuCategories.map((cat) => (
              <CategoryChip
                key={cat.id}
                label={cat.label}
                active={active === cat.id}
                onClick={() => setActive(cat.id)}
              />
            ))}
          </nav>

          <div className="space-y-16">
            {grouped.map((group) => (
              <Reveal key={group.id}>
                <div>
                  <h2 className="font-display mb-8 text-3xl tracking-wide text-foreground md:text-4xl">
                    {group.label}
                  </h2>
                  <ul className="grid gap-4 md:grid-cols-2">
                    {group.items.map((item) => (
                      <li key={item.id}>
                        <article className="group rounded-2xl border border-border bg-card/40 p-5 transition-all duration-500 hover:border-gold/40 hover:bg-card/70">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="font-display text-xl tracking-wide text-foreground transition-colors group-hover:text-gold md:text-2xl">
                                {item.name}
                              </h3>
                              <p className="mt-2 text-sm leading-relaxed text-muted">
                                {item.description}
                              </p>
                              {item.dietary && (
                                <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-sand">
                                  {item.dietary.join(" · ")}
                                </p>
                              )}
                            </div>
                            <p className="shrink-0 text-sm text-gold">
                              {item.price}
                            </p>
                          </div>
                        </article>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "focus-ring rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-all duration-300",
        active
          ? "bg-gold text-navy"
          : "border border-border text-muted hover:border-gold hover:text-gold"
      )}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
