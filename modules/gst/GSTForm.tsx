"use client";

import { useState } from "react";
import ResultCard from "@/components/ResultCard";
import { GSTResult } from "./gst.types";

export default function GSTForm() {
  const [amount, setAmount] = useState<string>("");
  const [gst, setGst] = useState<number>(18);
  const [type, setType] = useState<"add" | "remove">("add");
  const [result, setResult] = useState<GSTResult | null>(null);

  const calculateGST = () => {
    const amt = parseFloat(amount);
    if (!amt) return;

    let gstAmount: number, total: number, base: number;

    if (type === "add") {
      gstAmount = (amt * gst) / 100;
      total = amt + gstAmount;
      base = amt;
    } else {
      base = amt / (1 + gst / 100);
      gstAmount = amt - base;
      total = amt;
    }

    setResult({
      base: base.toFixed(2),
      gstAmount: gstAmount.toFixed(2),
      total: total.toFixed(2),
      cgst: (gstAmount / 2).toFixed(2),
      sgst: (gstAmount / 2).toFixed(2),
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg -mt-10 relative z-10">

      <input
        type="number"
        placeholder="Enter Amount"
        className="w-full p-3 border rounded mb-3"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="flex gap-2 mb-3">
        {[5, 12, 18, 28].map((rate) => (
          <button
            key={rate}
            onClick={() => setGst(rate)}
            className={`flex-1 border p-2 rounded ${
              gst === rate ? "bg-blue-500 text-white" : ""
            }`}
          >
            {rate}%
          </button>
        ))}
      </div>

      <div className="flex gap-2 mb-3">
        <button
          onClick={() => setType("add")}
          className={`flex-1 p-2 rounded ${
            type === "add" ? "bg-green-500 text-white" : "border"
          }`}
        >
          Add GST
        </button>
        <button
          onClick={() => setType("remove")}
          className={`flex-1 p-2 rounded ${
            type === "remove" ? "bg-red-500 text-white" : "border"
          }`}
        >
          Remove GST
        </button>
      </div>

      <button
        onClick={calculateGST}
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-lg font-semibold hover:opacity-90"
      >
        Calculate
      </button>

      {result && <ResultCard data={result} />}
    </div>
  );
}