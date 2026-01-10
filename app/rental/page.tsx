"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { vehicles } from "../../data/vehicle";
import {
  Search,
  Filter,
  Fuel,
  Users,
  Gauge,
  Car,
  Bike,
  ArrowRight,
  ShieldCheck,
  Settings,
  LucideIcon,
} from "lucide-react";

type FilterType = "all" | "car" | "bike";

interface CategoryOption {
  id: FilterType;
  label: string;
  icon: LucideIcon;
}

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <Link
        href="/"
        className="text-2xl font-black tracking-tighter text-gray-900"
      >
        DAFA<span className="text-blue-700">RENTAL.</span>
      </Link>
      <div className="hidden md:flex gap-10 text-sm font-bold text-gray-600 uppercase tracking-wider">
        <Link href="/" className="hover:text-blue-700 transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-700 transition-colors">
          About
        </Link>
        <Link href="/rental" className="text-blue-700 transition-colors">
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

const Footer = () => (
  <footer className="bg-gray-950 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-16">
      <div className="md:col-span-2">
        <h2 className="text-3xl font-black tracking-tighter mb-6">
          DAFA RENTAL.
        </h2>
        <p className="text-gray-400 leading-relaxed max-w-md">
          Mitra transportasi profesional Anda. Menyediakan armada premium dengan
          standar keselamatan tertinggi untuk perjalanan bisnis dan liburan.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">
          Quick Links
        </h4>
        <ul className="space-y-4 font-medium text-gray-400">
          <li>
            <Link href="#" className="hover:text-white transition">
              Armada Kami
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white transition">
              Syarat & Ketentuan
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white transition">
              Tentang Perusahaan
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">
          Contact
        </h4>
        <ul className="space-y-4 font-medium text-gray-400">
          <li>Jakarta Selatan, Indonesia</li>
          <li>+62 812 3456 7890</li>
          <li>business@dafarental.com</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
      <p>© 2025 Dafa Rental Group. All rights reserved.</p>
    </div>
  </footer>
);

export default function RentalPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<FilterType>("all");

  const categories: CategoryOption[] = [
    { id: "all", label: "Semua Armada", icon: Settings },
    { id: "car", label: "Mobil (Cars)", icon: Car },
    { id: "bike", label: "Motor (Bikes)", icon: Bike },
  ];

  const filteredData = vehicles.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" ? true : item.type === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-700 selection:text-white">
      <Navbar />

      <header className="pt-32 pb-16 px-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-widest text-blue-700 uppercase bg-blue-50 border border-blue-100 rounded-md">
              Katalog Lengkap
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-gray-900">
              Temukan Armada <br />{" "}
              <span className="text-blue-700">Pilihan Anda.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
              Koleksi kendaraan terawat dengan spesifikasi lengkap untuk
              kenyamanan perjalanan bisnis maupun liburan Anda.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-1/4 h-fit sticky top-28 space-y-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-gray-900 font-bold uppercase tracking-wider text-sm border-b border-gray-100 pb-4">
              <Filter size={18} className="text-blue-700" />
              Filter Pencarian
            </div>

            <div className="mb-8">
              <label className="text-xs font-bold text-gray-500 uppercase mb-3 block tracking-wide">
                Cari Unit
              </label>
              <div className="relative">
                <Search
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Contoh: Alphard..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all placeholder:text-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase mb-4 block tracking-wide">
                Kategori Kendaraan
              </label>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <label
                    key={cat.id}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all border ${
                      categoryFilter === cat.id
                        ? "bg-blue-50 border-blue-200 text-blue-700"
                        : "bg-white border-transparent hover:bg-gray-50 text-gray-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="category"
                      checked={categoryFilter === cat.id}
                      onChange={() => setCategoryFilter(cat.id)}
                      className="hidden"
                    />
                    <cat.icon size={18} />
                    <span className="text-sm font-bold">{cat.label}</span>
                    {categoryFilter === cat.id && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-blue-700" />
                    )}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-blue-700 text-white p-6 rounded-xl text-center">
            <ShieldCheck size={32} className="mx-auto mb-4 opacity-80" />
            <h4 className="font-bold text-lg mb-2">Jaminan Kualitas</h4>
            <p className="text-blue-100 text-sm leading-relaxed">
              Semua unit melewati inspeksi rutin untuk keamanan Anda.
            </p>
          </div>
        </aside>

        <div className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">
              Menampilkan{" "}
              <span className="text-gray-900">{filteredData.length}</span> Unit
              Tersedia
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-700 hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-56 bg-gray-100 border-b border-gray-100 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-700 ease-in-out"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-sm border border-gray-200">
                        {item.transmission}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-bold text-lg text-gray-900 tracking-tight leading-tight">
                          {item.name}
                        </h3>
                        <div
                          className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                            item.type === "car"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-orange-50 text-orange-700"
                          }`}
                        >
                          {item.type}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-6 pt-4 border-t border-gray-100">
                        <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-lg">
                          <Users size={16} className="text-gray-400 mb-1" />
                          <span className="text-[10px] font-bold text-gray-700">
                            {item.seats} Seat
                          </span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-lg">
                          <Gauge size={16} className="text-gray-400 mb-1" />
                          <span className="text-[10px] font-bold text-gray-700">
                            {item.year}
                          </span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-lg">
                          <Fuel size={16} className="text-gray-400 mb-1" />
                          <span className="text-[10px] font-bold text-gray-700">
                            {item.fuel}
                          </span>
                        </div>
                      </div>

                      <div className="mt-auto flex justify-between items-end">
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide mb-0.5">
                            Harga Sewa
                          </p>
                          <div className="text-blue-700 font-black text-xl">
                            Rp {(item.price / 1000).toLocaleString("id-ID")}k
                            <span className="text-xs text-gray-400 font-medium ml-1">
                              /hari
                            </span>
                          </div>
                        </div>
                        <button className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center group-hover:bg-blue-700 transition-colors shadow-lg shadow-gray-200">
                          <ArrowRight size={18} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center bg-gray-50 rounded-xl border border-dashed border-gray-300">
                  <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-gray-200 shadow-sm">
                    <Search className="text-gray-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Unit Tidak Ditemukan
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">
                    Coba ubah kata kunci pencarian atau kategori filter Anda.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setCategoryFilter("all");
                    }}
                    className="text-blue-700 text-xs font-bold uppercase tracking-widest hover:underline"
                  >
                    Reset Filter
                  </button>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
