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
  metadataBase: new URL("https://www.dafarentalscooterlombok.com"),
  title: {
    default: "Dafa Scooter Lombok Car Rental | Rent Car & Scooter",
    template: "%s | Dafa Scooter Lombok",
  },
  description:
    "Rent Car & Scooter in Lombok. Best price and quality. Free delivery to airport and hotel. 24/7 service.",
  keywords: [
    "Sewa Mobil Lombok",
    "Rental Mobil Lombok",
    "Sewa Motor Lombok",
    "Rental Motor Lombok",
    "Sewa Mobil Lepas Kunci",
    "Car Rental Lombok",
    "Scooter Rental Lombok",
    "Dafa Rental Lombok",
    "Dafa Scooter Lombok",
    "Scooter Rental",
    "Rent a Scooter",
    "Rent a Car",
    "Cheap Scooter & Car Rent Lombok",
    "Scooter Rent Lombok",
    "Car Rent Lombok",
  ],
  authors: [{ name: "Dafa Scooter Lombok" }],
  creator: "Dafa Scooter Lombok",
  publisher: "Dafa Scooter Lombok",
  openGraph: {
    title: "Dafa Scooter Lombok Car Rental | Rent Car & Scooter",
    description:
      "Rent Car & Scooter in Lombok. Best price and quality. Free delivery to airport and hotel. 24/7 service.",
    url: "https://www.dafarentalscooterlombok.com",
    siteName: "Dafa Scooter Lombok",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Pastikan file ini ada atau ganti dengan URL gambar yang valid
        width: 1200,
        height: 630,
        alt: "Dafa Scooter Lombok Car Rental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dafa Scooter Lombok Car Rental",
    description:
      "Rent Car & Scooter in Lombok. Best price and quality. Free delivery to airport and hotel. 24/7 service.",
    images: ["/og-image.jpg"], // Sama dengan OG Image
  },
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: "Dafa Scooter Lombok Car Rental",
    image: "https://www.dafarentalscooterlombok.com/logo.svg",
    "@id": "https://www.dafarentalscooterlombok.com",
    url: "https://www.dafarentalscooterlombok.com",
    telephone: "+6287765089140",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ketara, Pujut",
      addressLocality: "Mataram",
      addressRegion: "Nusa Tenggara Barat",
      postalCode: "83573",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -8.7844276,
      longitude: 116.2740155,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    sameAs: [
      "https://www.instagram.com/dafascooterlombok", // Ganti dengan link sosmed asli jika ada
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
