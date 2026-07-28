import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve a table at Washington's Wharf in Cumming, GA for authentic fish and chips, comfort food, and great drinks.",
  openGraph: {
    title: "Reserve a Table | Washington's Wharf",
    description:
      "Book your visit for crispy fish and chips in Cumming City Center.",
  },
};

export default function ReservationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
