import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gize PLC — Logistics, Shipping & Warehousing",
  description: "Gize PLC is a leading logistics and shipping company providing end-to-end supply chain solutions.",
  keywords: ["Gize PLC", "logistics", "shipping", "warehousing", "container shipping", "supply chain", "freight"],
  authors: [{ name: "Gize PLC" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Sidebar />
        <div className="md:ml-[70px] pb-16 md:pb-0">
          <Navbar />
          {children}
        </div>
        <ScrollToTop />
        <Toaster />
      </body>
    </html>
  );
}
