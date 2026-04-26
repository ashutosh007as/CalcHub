import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "CalcHub India - GST, Salary",
    template: "%s | CalcHub India",
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
  authors: [{ name: "CalcHub India" }],
  creator: "CalcHub India",
  openGraph: {
    title: "CalcHub India",
    description: "Free financial calculators for India",
    url: "https://your-domain.com",
    siteName: "CalcHub",
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
