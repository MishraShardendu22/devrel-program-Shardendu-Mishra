import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../css/base.css";
import "../css/vendor.css";
import "../css/main.css";
import "../css/font-awesome/css/font-awesome.min.css";
import "./custom.css";
import Navbar from "@/Component/Navbar";

const lora = localFont({
  src: [
    {
      path: "../../fonts/lora/lora-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/lora/lora-italic-webfont.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/lora/lora-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/lora/lora-bolditalic-webfont.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-lora",
  display: "swap",
});

const montserrat = localFont({
  src: [
    {
      path: "../../fonts/montserrat/montserrat-thin-webfont.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../fonts/montserrat/montserrat-extralight-webfont.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../fonts/montserrat/montserrat-light-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/montserrat/montserrat-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/montserrat/montserrat-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/montserrat/montserrat-semibold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/montserrat/montserrat-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/montserrat/montserrat-extrabold-webfont.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../fonts/montserrat/montserrat-black-webfont.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keploy Developer Relation",
  description: "This is the official website for Keploy Developer Relation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}