import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { buildMetadata, defaultDescription } from "@/lib/metadata";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = buildMetadata({
  title: "Saad Vault | Premium Software Showcase",
  description: defaultDescription,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.async = true;
                script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3525357385323761";
                script.crossOrigin = "anonymous";
                document.head.appendChild(script);
              })();
            `,
          }}
        />
      </head>

      <body
        suppressHydrationWarning
        className={\`\${spaceGrotesk.variable} \${jetbrainsMono.variable} min-h-screen bg-background text-foreground antialiased\`}
      >
        <div className="relative">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-radial" />
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(64,196,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(64,196,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
