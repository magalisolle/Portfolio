import type { Metadata } from "next";
import { Bricolage_Grotesque, Poppins } from "next/font/google";
import { generalSans } from "./fonts";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Magali Solle \u2014 Product Designer",
    template: "%s · Magali Solle",
  },
  description:
    "Senior Product Designer with 6+ years of experience in SaaS, fintech, and digital products. Based in Buenos Aires.",
  applicationName: "Magas Portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={generalSans.variable}>
      <body
        className={`${bricolage.variable} ${poppins.variable} bg-mint text-ink antialiased`}
      >
        <LanguageProvider>
          <ScrollToTop />
          {children}
        </LanguageProvider>
        <GoogleAnalytics gaId="G-H7BW1R0WH9" />
      </body>
    </html>
  );
}
