import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Washington's Wharf is the British fish and chips shop in Cumming City Center at 451 Vision Dr, Suite H101, with a bar, counter service, and plates guests compare to UK trips.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
