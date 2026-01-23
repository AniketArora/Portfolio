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

export const metadata: Metadata = {
  metadataBase: new URL("https://aniketarora.be"),
  title: "Aniket Arora",
  description:
    "Portfolio of Aniket Arora, Senior Data Scientist at IBM Consulting.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Portfolio Of Aniket Arora",
    description:
      "Senior Data Scientist @ IBM Consulting focused on Generative AI, machine learning, and LLMs.",
    url: "/",
    type: "website",
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
