"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter text-gray-900">
          <Link href="/" onClick={() => setIsOpen(false)}>
            {" "}
            DAFA<span className="text-blue-700">RENTAL.</span>{" "}
          </Link>
        </div>

        <div className="hidden md:flex gap-10 text-sm font-bold text-gray-600 uppercase tracking-wider">
          <Link href="/" className="hover:text-blue-700 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-700 transition-colors">
            About
          </Link>
          <Link
            href="/rental"
            className="hover:text-blue-700 transition-colors"
          >
            Rental
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-700 transition-colors"
          >
            Contact
          </Link>
        </div>
        <a href="http://wa.me/6287765089140">
          <button className="hidden md:block bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-blue-800 transition-transform active:scale-95">
            Book Now
          </button>
        </a>

        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg absolute top-20 left-0 w-full flex flex-col px-6 py-8 space-y-6 animate-in slide-in-from-top-5 duration-200">
          <Link
            href="/"
            className="text-gray-900 font-bold uppercase tracking-wider hover:text-blue-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-900 font-bold uppercase tracking-wider hover:text-blue-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/rental"
            className="text-gray-900 font-bold uppercase tracking-wider hover:text-blue-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Rental
          </Link>
          <Link
            href="/contact"
            className="text-gray-900 font-bold uppercase tracking-wider hover:text-blue-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-blue-800 w-full">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
