import type { Metadata } from "next";
import { siteConfig } from "./page";

export const metadata: Metadata = {
  metadataBase: new URL("https://badrlt.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,
  keywords: [
    "latrache",
    "bader",
    "latrache",
    "latrache",
    "bader",
    "bader",
    "latrache bader",
    "latrache bader",
    "latrache",
    "latrache bader",
    "latrache bader",
    "latrache bader",
    "latrache bader",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER",
    "programmer",
    "latrache bader",
    "website",
    "@latrache bader",
    "latrache bader",
    "latrache developer",
  ],
  authors: [
    {
      name: "latrache bader",
      url: "https://github.com/baderlt",
    },
  ],
  creator: "latrache bader",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@latrachebader",
  },
  icons: {
    icon: "/favddicon.ico",
  },
};
