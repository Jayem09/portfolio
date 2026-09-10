import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Mark Dinglasan — Software Engineer",
  description: "John Mark L. Dinglasan — Software Engineer (React, Python, Flask, Node.js) from Lipa, Philippines. Built e-commerce platforms, automation tools, and thesis systems. Open to full-time roles.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "John Mark Dinglasan — Software Engineer", description: "Portfolio of John Mark L. Dinglasan — React, Python, Flask, Tauri, AWS, Docker", type: "website" },
  keywords: ["John Mark Dinglasan","Software Engineer Philippines","Full Stack Developer Lipa","React Developer","Python Automation","Flask Developer"],
  authors: [{ name: "John Mark Dinglasan" }],
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
