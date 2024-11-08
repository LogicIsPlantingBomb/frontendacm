import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import MainNav from "@/components/shared/main-nav";
import Footer from "@/components/shared/footer";

const inter = Inter({ subsets: ["latin"] });

const title =
  "ACM Student chapter at OIST Bhopal";
const description =
  "ACM Student Chapter at OIST Bhopal";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "never",
  },
  metadataBase: new URL("https://nevernever.me"),
  themeColor: "#ffffff",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainNav />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
