import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the Washington's Wharf menu, fresh seafood, prime steaks, craft cocktails, and an elegant wine list on the waterfront.",
  openGraph: {
    title: "Menu | Washington's Wharf",
    description:
      "Coastal classics and seasonal plates crafted with restraint and elegance.",
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
