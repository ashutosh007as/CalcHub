"use client";

import { useState } from "react";
import ResultCard from "@/components/ResultCard";
import { SalaryResult } from "./salary.types";

export default function SalaryForm() {
  const [salary, setSalary] = useState<string>("");
  const [bonus, setBonus] = useState<string>("");
  const [result, setResult] = useState<SalaryResult | null>(null);

  const calculateSalary = () => {
    const monthly = parseFloat(salary);
    const bonusAmt = parseFloat(bonus) || 0;

    if (!monthly) return;

    const annual = monthly * 12 + bonusAmt;

    // Simple tax logic (approx for demo)
    let tax = 0;

    if (annual <= 300000) tax = 0;
    else if (annual <= 600000) tax = annual * 0.05;
    else if (annual <= 900000) tax = annual * 0.10;
    else if (annual <= 1200000) tax = annual * 0.15;
    else tax = annual * 0.20;

    const inHandAnnual = annual - tax;
    const monthlyInHand = inHandAnnual / 12;

    setResult({
      annualSalary: annual.toFixed(0),
      tax: tax.toFixed(0),
      inHandAnnual: inHandAnnual.toFixed(0),
      monthlyInHand: monthlyInHand.toFixed(0),
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg -mt-10">

      <input
        type="number"
        placeholder="Monthly Salary (₹)"
        className="w-full p-3 border rounded mb-3"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <input
        type="number"
        placeholder="Annual Bonus (₹ optional)"
        className="w-full p-3 border rounded mb-3"
        value={bonus}
        onChange={(e) => setBonus(e.target.value)}
      />

      <button
        onClick={calculateSalary}
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-lg font-semibold"
      >
        Calculate Salary
      </button>

      {result && <ResultCard data={result} />}
    </div>
  );
}