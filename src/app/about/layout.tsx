import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Washington's Wharf in Cumming City Center, home of authentic British-style fish and chips, comfort food, and good vibes.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
