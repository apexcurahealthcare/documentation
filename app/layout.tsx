import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Layout from "./lib/Layout";
import { Providers } from "./Providers";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | ApexCura",
    default: "Projects",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${inter.variable}`}
        suppressHydrationWarning
      >
        <Providers>
          <Layout>{children}</Layout>
          <Toaster />
        </Providers>
        {/* Load the script dynamically with Next.js Script */}
        <Script
          id="apex-icons-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function initializeApexIcons() {
                const scriptUrl = "https://suite.apexcura.com/api/public/scripts/apexcura.icons.js";
                if (scriptUrl) {
                  const script = document.createElement("script");
                  script.src = scriptUrl + "?t=" + new Date().getTime();
                  document.head.appendChild(script);
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
