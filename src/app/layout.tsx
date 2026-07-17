import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Ryan Madhuwala (RAWx18) is an AI Infrastructure Engineer and open-source maintainer building Caracal at Garudex Labs. Youngest-ever Linux Foundation Lab Leader, backed by GitHub, Microsoft, Vercel & Founders, Inc.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ryan Madhuwala: AI Infrastructure Engineer",
    template: "%s · Ryan Madhuwala",
  },
  description,
  keywords: [
    "Ryan Madhuwala",
    "RAWx18",
    "AI Infrastructure Engineer",
    "Caracal",
    "Garudex Labs",
    "GitMesh",
    "Linux Foundation Lab Leader",
    "open source maintainer",
    "AI agents security",
    "developer portfolio",
  ],
  authors: [{ name: "Ryan Madhuwala", url: siteUrl }],
  creator: "Ryan Madhuwala",
  publisher: "Ryan Madhuwala",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.jpeg", type: "image/jpeg", sizes: "422x422" }],
    apple: [{ url: "/favicon.jpeg", type: "image/jpeg", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ryan Madhuwala",
    locale: "en_US",
    title: "Ryan Madhuwala: AI Infrastructure Engineer",
    description,
    images: [
      {
        url: "/cover_portfolio.png",
        width: 1517,
        height: 507,
        alt: "Ryan Madhuwala: AI Infrastructure Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RAWx18_dev",
    creator: "@RAWx18_dev",
    title: "Ryan Madhuwala: AI Infrastructure Engineer",
    description,
    images: ["/cover_portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Ryan Madhuwala",
      alternateName: "RAWx18",
      url: siteUrl,
      image: "https://github.com/RAWx18.png",
      jobTitle: "AI Infrastructure Engineer",
      description,
      email: "mailto:rawx18.dev@gmail.com",
      worksFor: {
        "@type": "Organization",
        name: "Garudex Labs",
        url: "https://www.caracal.run",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Information Technology, Gwalior",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/RAWx18",
        "https://x.com/RAWx18_dev",
        "https://www.linkedin.com/in/ryanmadhuwala",
      ],
      knowsAbout: [
        "AI Infrastructure",
        "AI Agent Security",
        "Open Source",
        "TypeScript",
        "Go",
        "Python",
        "Kubernetes",
        "PostgreSQL",
        "LangGraph",
        "OPA",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ryan Madhuwala",
      description,
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col dark:bg-black dark:text-zinc-50 transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
