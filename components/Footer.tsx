import Link from "next/link";

export const Footer = () => {
   return (
   <footer className="bg-gradient-to-r from-orange-300 to-orange-400 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">

        {/* Logo / Brand */}
        <h2 className="text-xl font-bold mb-2">TCalcora India 🇮🇳</h2>
        <p className="text-sm opacity-90 mb-4">
          Simple & fast financial calculators for everyone
        </p>

        {/* Links */}
        <div className="flex justify-center flex-wrap gap-6 text-sm mb-4">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-4"></div>

        {/* Bottom */}
        <p className="text-xs opacity-80">
          © {new Date().getFullYear()} TCalcora India. All rights reserved.
        </p>
      </div>
    </footer>
  );
}