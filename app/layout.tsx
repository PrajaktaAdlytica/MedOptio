import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const display = Geist({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MedOptio | Medication workflows, optimized for safer care",
  description:
    "MedOptio is a human-supervised medication operations platform for pharmacy, clinic, care-home, and digital health teams.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "MedOptio",
    description:
      "AI-assisted review, refill, and follow-up workflows for safer medication operations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
