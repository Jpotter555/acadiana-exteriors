import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acadiana Exteriors | Exterior Maintenance Services in Louisiana",
  description:
    "Exterior maintenance services for your home or business - pressure washing, window cleaning, gutter services, and more in Acadiana, Louisiana.",
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
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Acadiana Exteriors | Exterior Maintenance Services",
    description:
      "Exterior maintenance services for homes and businesses in Acadiana - pressure washing, windows, gutters, and more",
    url: "https://acadianaexteriors.com",
    siteName: "Acadiana Exteriors",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Acadiana Exteriors - Exterior Maintenance Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acadiana Exteriors | Exterior Maintenance Services",
    description:
      "Exterior maintenance for homes and businesses in Acadiana, LA",
    images: ["/images/og-image.png"],
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
