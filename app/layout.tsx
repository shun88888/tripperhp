import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavBarWrapper } from "@/components/navbar-wrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HP2 - Hero with Marquee",
  description: "Modern hero section with animated marquee gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBarWrapper />
        {children}
      </body>
    </html>
  );
}
