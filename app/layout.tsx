import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Playfair_Display, Work_Sans } from "next/font/google";

import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jane Wilson Portfolio",
  description:
    "Discover the portfolio of Jane Wilson, a creative web developer and designer. Explore modern websites, intuitive user interfaces, and unique digital solutions tailored for businesses and personal brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${workSans.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
