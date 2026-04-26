"use client";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-orange-300 to-orange-400 text-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">

        {/* Logo */}
        <Link href="/" className="text-[38px] font-bold">
          <Image src="/tCalcora.svg" width={200} height={80} alt="Tcalcora logo"/>
        </Link>

        {/* Links */}
        <div className="flex gap-10 text-sm font-medium">
          <Link href="/" className="hover:text-gray-200 font-bold text-[16px]">Home</Link>
          <Link href="/gst-calculator" className="hover:text-gray-200 font-bold text-[16px]"> GST </Link>
          <Link href="/salary-calculator" className="hover:text-gray-200 font-bold text-[16px]"> Salary </Link>
        </div>
      </div>
    </nav>
  );
}