import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve a table at Washington's Wharf for waterfront dining in Alexandria. Book online or call for large parties.",
  openGraph: {
    title: "Reserve a Table | Washington's Wharf",
    description:
      "Book your waterfront dining experience, fresh seafood, harbor views, and refined hospitality.",
  },
};

export default function ReservationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
