import type { Metadata } from "next";
import { Lora, Montserrat } from "next/font/google";
import "./globals.css";
import "../styles/fonts.css";
import "../styles/base.css";
import "../styles/vendor.css";
import "../styles/main.css";
import "../styles/dark-mode.css";
import "../styles/font-awesome/css/font-awesome.min.css";
import "../styles/micons/micons.css";
import "./custom.css";
import "../styles/font-fix.css";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import { ThemeProvider } from "@/components/ThemeProvider";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devrel.keploy.io'),
  title: {
    default: "Keploy Developer Relations Program | Join DevRel Community",
    template: "%s | Keploy DevRel Program"
  },
  description: "Get into the world of DevRels and experience of being one for a month. Join Keploy's Developer Relations Program to learn API testing, create content, and grow your developer community skills.",
  authors: [{ name: "Keploy.io", url: "https://keploy.io" }],
  creator: "Keploy Inc.",
  publisher: "Keploy Inc.",
  keywords: [
    "Keploy", 
    "Developer Relations", 
    "DevRel", 
    "API Testing", 
    "Open Source",
    "Developer Community",
    "Technical Content",
    "Developer Advocacy",
    "Testing Tools",
    "Software Testing",
    "Community Building",
    "Developer Program",
    "Tech Education",
    "API Mocking",
    "Test Automation"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://devrel.keploy.io/",
  },
  openGraph: {
    title: "Keploy Developer Relations Program | Join DevRel Community",
    description: "Get into the world of DevRels and experience of being one for a month. Learn API testing, create content, and grow your community skills.",
    url: "https://devrel.keploy.io/",
    siteName: "Keploy Developer Relations Program",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/cohort3.png",
        width: 1200,
        height: 630,
        alt: "Keploy Developer Relations Program"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Keployio",
    creator: "@Keployio",
    title: "Keploy Developer Relations Program | Join DevRel Community",
    description: "Get into the world of DevRels and experience of being one for a month. Learn API testing, create content, and grow your community skills.",
    images: ["/cohort3.png"]
  },
  icons: {
    icon: "/keploy-logo.png",
    apple: "/keploy-logo.png"
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
        />
        <link rel="icon" href="/keploy-logo.png" type="image/png" />
      </head>
      <body
        className={`${lora.variable} ${montserrat.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}