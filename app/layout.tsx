import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-body", subsets: ["latin"] });
const poppins = Poppins({ variable: "--font-heading", subsets: ["latin"], weight: ["600", "700", "800"] });
const siteUrl = new URL("https://medzperfect.com");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "Medzperfect | RCM & Medical Billing", template: "%s | Medzperfect" },
  description: "AI-enabled medical billing, AR follow-up and denial recovery for US healthcare providers, governed by client-approved tools and policies.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Medzperfect — Recover every dollar you've earned.",
    description: "AI-enabled medical billing and denial recovery for US providers.",
    type: "website",
    siteName: "Medzperfect",
    images: [{ url: "/og.png", width: 1734, height: 905, alt: "Medzperfect medical billing and revenue recovery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medzperfect — Recover every dollar you've earned.",
    description: "AI-enabled medical billing and denial recovery for US providers.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = { themeColor: "#0A2E5C", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${poppins.variable}`}>{children}</body></html>;
}
