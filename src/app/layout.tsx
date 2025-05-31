import type { Metadata } from "next";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const metadata: Metadata = {
  title: "LeadBuddy | Real Estate Lead Generation",
  description:
    "Get verified, high-converting real estate leads tailored to your business. Save time, close more deals with LeadBuddy.",
  keywords: [
    "real estate leads",
    "lead generation",
    "property leads",
    "real estate marketing",
  ],
  authors: [{ name: "LeadBuddy Team", url: "https://yourdomain.com" }],
  creator: "LeadBuddy",
  robots: "index, follow",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "LeadBuddy | Real Estate Lead Generation",
    description:
      "Get exclusive, high-converting real estate leads and grow your business with LeadBuddy.",
    url: "https://yourdomain.com",
    siteName: "LeadBuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadBuddy | Real Estate Lead Generation",
    description: "Discover verified real estate leads tailored to your needs.",
    site: "@leadbuddy",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>LeadBuddy | Real Estate Lead Generation</title>
        <meta
          name="description"
          content="Get verified, high-converting real estate leads tailored to your business. Save time, close more deals with LeadBuddy."
        />
        <meta
          name="keywords"
          content="real estate leads, lead generation, property leads, real estate marketing"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="LeadBuddy Team" />
        <meta name="creator" content="LeadBuddy" />
        <link rel="canonical" href="https://yourdomain.com" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="LeadBuddy | Real Estate Lead Generation"
        />
        <meta
          property="og:description"
          content="Get exclusive, high-converting real estate leads and grow your business with LeadBuddy."
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:site_name" content="LeadBuddy" />
        <meta property="og:type" content="website" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="LeadBuddy | Real Estate Lead Generation"
        />
        <meta
          name="twitter:description"
          content="Discover verified real estate leads tailored to your needs."
        />
        <meta name="twitter:site" content="@leadbuddy" />
        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/@geist-ui/react/fonts/Geist.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@geist-ui/react/fonts/GeistMono.css"
        />
      </head>
      <body className="font-geist flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 max-w-screen-2xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
