import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Events",
  description:
    "Host weddings, corporate events, and private dining at Washington's Wharf, an elegant waterfront event venue with harbor views.",
};

export default function PrivateEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
