import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tron-disk",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" /> {/* for iOS */}
        <meta name="mobile-web-app-capable" content="yes" /> {/* for Android */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> {/* for iOS */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
