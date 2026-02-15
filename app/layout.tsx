import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "CARMONA · ARCH | Excellence in Real Estate",
  description: "Bespoke digital assets for luxury real estate and architectural excellence. High-performance interfaces by Carmona Studio.",
  keywords: ["Real Estate", "Luxury", "Architecture", "Digital Assets", "High Performance"],
  authors: [{ name: "Carmona Studio" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: 'CARMONA · ARCH | Luxury Real Estate Engine',
    description: 'High-performance digital assets for boutique agencies.',
    url: 'https://carmona-estate.vercel.app',
    siteName: 'Carmona Studio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800', 
        width: 1200,
        height: 630,
        alt: 'Carmona Arch Luxury Estate',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}