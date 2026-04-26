"use client";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          CalcHub
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/gst-calculator" className="hover:text-gray-200">
            GST
          </Link>
          <Link href="/salary-calculator" className="hover:text-gray-200">
            Salary
          </Link>
        </div>
      </div>
    </nav>
  );
}