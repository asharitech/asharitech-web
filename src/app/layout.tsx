import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Ashari Tech - Revolutionizing Indonesia's Future with AI and Technology",
  description:
    "Ashari Tech harnesses cutting-edge AI and technology to transform Indonesia's landscape, empowering SMEs, enhancing lives, and building a more connected, prosperous future. Meet Brainy Buddy, our AI assistant for learning.",
  keywords: [
    "Ashari Tech",
    "AI Indonesia",
    "artificial intelligence",
    "technology Indonesia",
    "SME empowerment",
    "digital transformation",
    "Brainy Buddy",
    "AI assistant",
    "machine learning",
    "innovation hub",
    "startup Indonesia",
    "teknologi Indonesia",
    "kecerdasan buatan",
  ],
  authors: [{ name: "Ashari Tech" }],
  creator: "Ashari Tech",
  publisher: "Ashari Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ashari.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Ashari Tech - Revolutionizing Indonesia's Future with AI and Technology",
    description:
      "Harness cutting-edge AI and technology to transform Indonesia's landscape. Empowering SMEs, enhancing lives, and building a more connected, prosperous future.",
    url: "https://ashari.tech",
    siteName: "Ashari Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ashari Tech - AI and Technology Innovation in Indonesia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ashari Tech - Revolutionizing Indonesia's Future with AI and Technology",
    description:
      "Harness cutting-edge AI and technology to transform Indonesia's landscape. Empowering SMEs, enhancing lives, and building a more connected future.",
    images: ["/og-image.jpg"],
    creator: "@ashari.tech",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION || "",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ashari Tech",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ashari Tech",
  description:
    "AI and technology company revolutionizing Indonesia's future through innovation, SME empowerment, and digital transformation",
  url: "https://ashari.tech",
  logo: "https://ashari.tech/logo.png",
  foundingDate: "2024",
  foundingLocation: {
    "@type": "Country",
    name: "Indonesia",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "",
    contactType: "customer service",
    email: "support@ashari.tech",
  },
  sameAs: [
    "https://github.com/asharitech",
    "https://instagram.com/ashari.tech",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Brainy Buddy",
          description:
            "AI Assistant untuk Belajar - 24/7 educational AI companion",
          applicationCategory: "EducationalApplication",
          operatingSystem: "Web, Telegram, LINE",
        },
      },
    ],
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
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe usage for JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#9d5a41" />
        <meta name="msapplication-TileColor" content="#9d5a41" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
