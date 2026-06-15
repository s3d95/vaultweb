import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ChromeFX } from "@/components/effects/chrome-fx";
import { ChromeScene } from "@/components/effects/chrome-scene";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { buildMetadata, defaultDescription } from "@/lib/metadata";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = buildMetadata({
  title: "Saad Vault | Saad's Programs",
  description: defaultDescription,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} min-h-screen text-foreground antialiased`}
      >
        {/* Global chrome background layers */}
        <div className="glow-orb" aria-hidden />
        <div className="grid-overlay" aria-hidden />
        <ChromeScene />
        <div className="vignette" aria-hidden />
        <div className="scroll-progress" aria-hidden>
          <span />
        </div>

        <div className="relative">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>

        <ChromeFX />
      </body>
    </html>
  );
}
