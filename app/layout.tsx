import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IDEAL CIS",
  description:
    "IDEAL CIS is a software development company that specializes in building custom software solutions for businesses.",
  generator: "IDEAL CIS",
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
