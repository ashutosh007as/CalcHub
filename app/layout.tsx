import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "TCalcora India - GST, Salary",
    template: "%s | TCalcora India",
  },
  description:
    "Free online GST calculator, salary calculator, and financial tools for India. Fast, simple and accurate.",
  keywords: [
    "GST calculator India",
    "salary calculator India",
    // "income tax calculator",
    "in hand salary calculator",
    "financial tools India",
  ],
  authors: [{ name: "TCalcora India" }],
  creator: "TCalcora India",
  openGraph: {
    title: "TCalcora India",
    description: "Free financial calculators for India",
    url: "https://your-domain.com",
    siteName: "TCalcora",
    type: "website",
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
