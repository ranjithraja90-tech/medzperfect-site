import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-body", subsets: ["latin"] });
const poppins = Poppins({ variable: "--font-heading", subsets: ["latin"], weight: ["600", "700", "800"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "medzperfect.com";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: { default: "Medzperfect | RCM & Medical Billing", template: "%s | Medzperfect" },
    description: "Medical billing, AR follow-up and denial recovery for US healthcare providers, delivered securely from India.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Medzperfect — Recover every dollar you've earned.",
      description: "Specialist medical billing and denial recovery for US providers.",
      type: "website",
      siteName: "Medzperfect",
      images: [{ url: `${origin}/og.png`, width: 1734, height: 905, alt: "Medzperfect medical billing and revenue recovery" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Medzperfect — Recover every dollar you've earned.",
      description: "Specialist medical billing and denial recovery for US providers.",
      images: [`${origin}/og.png`],
    },
  };
}

export const viewport: Viewport = { themeColor: "#0A2E5C", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${poppins.variable}`}>{children}</body></html>;
}
