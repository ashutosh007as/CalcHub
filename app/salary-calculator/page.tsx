import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SalaryForm from "@/modules/salary/SalaryForm";
import SEOContent from "@/components/SEOContent";

export const metadata: Metadata = {
  title: "Salary Calculator India (2026) - In Hand & Tax",
  description:
    "Calculate your in-hand salary, annual income and tax in India. Simple and fast salary calculator.",
  keywords: [
    "salary calculator India",
    "in hand salary calculator",
    "income tax calculator India",
  ],
};

export default function SalaryPage() {
  return (
    <div>
      <Hero
        title="Salary Calculator India"
        subtitle="Calculate your in-hand salary and tax instantly"
      />

      <SalaryForm />

      <SEOContent
        title="About Salary Calculator"
        description="This tool helps you estimate your salary after tax in India."
      />
    </div>
  );
}