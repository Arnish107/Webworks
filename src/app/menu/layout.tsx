import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the Washington's Wharf menu: fish and chips, shrimp baskets, chicken tenders, pretzels with beer cheese, wings, and cold drinks in Cumming, GA.",
  openGraph: {
    title: "Menu | Washington's Wharf",
    description:
      "Crispy fish and chips, comfort classics, and bar favorites in Cumming City Center.",
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
