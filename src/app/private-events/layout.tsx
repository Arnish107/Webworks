import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groups",
  description:
    "Plan birthdays, office lunches, family nights, and group takeout at Washington's Wharf in Cumming City Center.",
};

export default function PrivateEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
