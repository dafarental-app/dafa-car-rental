import Link from "next/link";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-black tracking-tighter text-gray-900">
        DAFA<span className="text-blue-700">RENTAL.</span>
      </div>
      <div className="hidden md:flex gap-10 text-sm font-bold text-gray-600 uppercase tracking-wider">
        <Link href="/" className="hover:text-blue-700 transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-700 transition-colors">
          About
        </Link>
        <Link href="/rental" className="hover:text-blue-700 transition-colors">
          Rental
        </Link>
        <Link href="/contact" className="hover:text-blue-700 transition-colors">
          Contact
        </Link>
      </div>
      <button className="bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-blue-800 transition-transform active:scale-95">
        Book Now
      </button>
    </div>
  </nav>
);

export default Navbar;
