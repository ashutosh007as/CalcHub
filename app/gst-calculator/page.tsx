import Hero from "@/components/Hero";
import SEOContent from "@/components/SEOContent";
import GSTForm from "@/modules/gst/GSTForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GST Calculator India (2026) - Add or Remove GST",
  description:
    "Calculate GST easily in India. Add or remove GST with CGST & SGST split instantly. Free GST calculator.",
  keywords: [
    "GST calculator",
    "GST calculator India",
    "GST calculate online",
    "CGST SGST calculator",
  ],
};

export default function GSTPage() {
  return (
    <div>
      <Hero
        title="GST Calculator (India)"
        subtitle="Add or remove GST with CGST & SGST split instantly"
      />
      <GSTForm />
      <SEOContent
        title="About GST Calculator"
        description="This GST calculator helps you calculate GST amount and split CGST/SGST easily."
      />
    </div>
  );
}