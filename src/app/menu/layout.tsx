import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Fish & Chips $16.95, Shrimp & Chips $11.95, pretzel and beer cheese, tenders, wings, and UK beers at Washington's Wharf in Cumming, GA.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
