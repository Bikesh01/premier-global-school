
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Premier Global School | Itahari, Nepal",
    template: "%s | Premier Global School",
  },
  description:
    "Explore +2 Hotel Management programs, admissions and student life at Premier Global School in Itahari, Nepal.",
  metadataBase: new URL("https://www.premierglobalschool.edu.np"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
