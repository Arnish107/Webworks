import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of fish and chips, comfort food, drinks, and the welcoming dining room at Washington's Wharf in Cumming, GA.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
