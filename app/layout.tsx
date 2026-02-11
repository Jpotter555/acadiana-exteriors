import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acadiana Exteriors | Professional Pressure Washing & Exterior Maintenance",
  description:
    "Professional pressure washing, window cleaning, gutter services, and exterior maintenance for residential and commercial properties in Acadiana, Louisiana.",
  keywords: [
    "pressure washing",
    "exterior cleaning",
    "window cleaning",
    "gutter cleaning",
    "Acadiana",
    "Louisiana",
    "property maintenance",
  ],
  authors: [{ name: "Acadiana Exteriors" }],
  openGraph: {
    title: "Acadiana Exteriors | Professional Pressure Washing Services",
    description:
      "Professional pressure washing and exterior maintenance services in Acadiana, Louisiana",
    url: "https://acadianaexteriors.com",
    siteName: "Acadiana Exteriors",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Acadiana Exteriors - Professional Pressure Washing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acadiana Exteriors | Professional Pressure Washing",
    description:
      "Professional pressure washing and exterior maintenance in Acadiana, LA",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
