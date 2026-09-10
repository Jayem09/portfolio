import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name — Software Engineer",
  description: "Software Engineer portfolio — Next.js, React, Laravel. Building fast, accessible web apps.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Your Name — Software Engineer", description: "Portfolio", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){const s=localStorage.getItem('theme');const d=window.matchMedia('(prefers-color-scheme: dark)').matches;const u=s?s==='dark':d;document.documentElement.classList.toggle('dark',u)})();`,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-ink dark:text-white min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
