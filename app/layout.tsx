import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../css/normalize.css";
import "../css/screen.css";

const GA_ID = "G-Y6R2ZEYDZ9";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto"
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Aniket Arora",
      url: "https://aniketarora.be",
      image: "https://aniketarora.be/assets/images/Face_Blob_50.png",
      jobTitle: "Senior Data Scientist",
      worksFor: {
        "@type": "Organization",
        name: "IBM Consulting"
      },
      sameAs: [
        "https://www.linkedin.com/in/aniket-arora/",
        "https://github.com/AniketArora",
        "https://x.com/AniketArora_1"
      ]
    },
    {
      "@type": "WebSite",
      name: "Aniket Arora",
      url: "https://aniketarora.be",
      inLanguage: "en"
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aniketarora.be"),
  title: "Aniket Arora",
  description:
    "Portfolio of Aniket Arora, Senior Data Scientist at IBM Consulting.",
  themeColor: "#1d3f4e",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1d3f4e" }
    ]
  },
  other: {
    "msapplication-TileColor": "#1d3f4e"
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Portfolio Of Aniket Arora",
    description:
      "Senior Data Scientist @ IBM Consulting focused on Generative AI, machine learning, and LLMs.",
    url: "/",
    type: "website",
    siteName: "Aniket Arora",
    locale: "en_US",
    images: [
      {
        url: "https://aniketarora.be/assets/images/Portfolio.png",
        width: 2543,
        height: 1269,
        alt: "Image is a preview of my portfolio website",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Of Aniket Arora",
    description:
      "Senior Data Scientist @ IBM Consulting focused on Generative AI, machine learning, and LLMs.",
    site: "@Anipoes",
    creator: "@Anipoes",
    images: ["https://aniketarora.be/assets/images/Portfolio.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
