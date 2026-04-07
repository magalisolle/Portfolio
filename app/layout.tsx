import type { Metadata } from "next";
import { Bricolage_Grotesque, Poppins } from "next/font/google";
import { generalSans } from "./fonts";
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
    default: "Magas Portfolio — Magali, Senior Product Designer",
    template: "%s · Magas Portfolio",
  },
  description:
    "Product designer focused on building clear and scalable digital products. SaaS, fintech, and complex workflows.",
  applicationName: "Magas Portfolio",
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
        {children}
      </body>
    </html>
  );
}
