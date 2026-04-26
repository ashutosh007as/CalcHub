import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-zinc-100 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto text-center px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Free GST & Salary Calculator India
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Calculate GST, in-hand salary, and income tax instantly. Simple,
          fast, and 100% free tools for India.
        </p>

        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link
            href="/gst-calculator"
            className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800"
          >
            GST Calculator
          </Link>

          <Link
            href="/salary-calculator"
            className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100"
          >
            Salary Calculator
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6 pb-20">
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg">GST Calculator</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Add or remove GST with CGST & SGST split instantly.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg">Salary Calculator</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Calculate your in-hand salary after tax deductions.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg">Fast & Free Tools</h3>
          <p className="text-gray-600 mt-2 text-sm">
            No signup required. Instant calculation for everyone.
          </p>
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">
          India’s Free Financial Calculator Tools
        </h2>

        <p className="text-sm leading-7">
          CalcHub provides free GST calculator and salary calculator tools for
          India. Businesses, freelancers, and employees can easily calculate
          GST amounts, in-hand salary, and income tax in seconds. This tool is
          designed to be fast, mobile-friendly, and accurate for daily use.
        </p>
      </section>
    </div>
  );
}