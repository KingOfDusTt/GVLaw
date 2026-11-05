import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin", "greek"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "greek"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GV Law | Γκάτζιου & Βαλαδάκης — Δικηγορικό Γραφείο στον Κορυδαλλό",
  description:
    "Υπεύθυνη και εξατομικευμένη νομική υποστήριξη σε ιδιώτες και επαγγελματίες, με συνέπεια, διακριτικότητα και επαγγελματισμό στον Κορυδαλλό.",
  icons: {
    icon: [
      { url: "/brand/gv-logo.svg", type: "image/svg+xml" },
      { url: "/brand/gv-logo-white.png", type: "image/png" },
    ],
    shortcut: "/brand/gv-logo.svg",
    apple: "/brand/gv-logo-white.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="el"
      className={`${ebGaramond.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-ivory text-slate-900 font-sans antialiased selection:bg-royal selection:text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}