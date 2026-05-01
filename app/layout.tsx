import type React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GlassNavbar } from "@/components/layout/glass-navbar";
import { siteMetadata } from "@/lib/metadata";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} font-sans overflow-x-hidden antialiased`}
      >
        <GlassNavbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
