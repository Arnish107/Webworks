import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the story, philosophy, and waterfront heritage of Washington's Wharf, elegant coastal dining for over 25 years.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
