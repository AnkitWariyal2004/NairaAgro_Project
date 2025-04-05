import type { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../app/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naira Agro",
  description: "Beautiful Organic Farm delivering quality produce and sustainable farming practices.",
  keywords: "Organic Farm, Sustainable Agriculture, Organic Produce, Eco-Friendly Farming, Naira Agro, Moringa Powder,Sahiwal Cows",
  authors: [{ name: "Naira Agro", url: "https://nairaagro.in" }],
  openGraph: {
    title: "Naira Agro - Beautiful Organic Farm",
    description: "Experience the beauty and sustainability of organic farming at Naira Agro.",
    url: "https://nairaagro.in",
    siteName: "Naira Agro",
    images: [
      {
        url: "/og-image.jpg", // Replace with your Open Graph image URL
        width: 800,
        height: 600,
        alt: "Naira Agro Organic Farm",
      },
    ],
    locale: "en_IN", 
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png", rel: "apple-touch-icon" },
    ],
  },
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://nairaagro.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Standard Meta Tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
