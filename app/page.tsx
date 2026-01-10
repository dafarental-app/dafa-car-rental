"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Bike,
  ArrowRight,
  Star,
  ShieldCheck,
  Clock,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- FIXED DATA (High Quality Images) ---
const VEHICLES = [
  {
    id: 1,
    name: "Toyota Avanza",
    type: "car",
    price: "350.000",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Honda Brio",
    type: "car",
    price: "300.000",
    image:
      "https://images.unsplash.com/photo-1622396602324-42b7858c4424?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Pajero Sport",
    type: "car",
    price: "1.200.000",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Innova Zenix",
    type: "car",
    price: "600.000",
    image:
      "https://images.unsplash.com/photo-1609520505218-742184321475?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "Honda Vario 160",
    type: "bike",
    price: "80.000",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    name: "Yamaha NMAX",
    type: "bike",
    price: "120.000",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    name: "Vespa Matic",
    type: "bike",
    price: "150.000",
    image:
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    name: "Kawasaki KLX",
    type: "bike",
    price: "200.000",
    image:
      "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=800",
  },
];

const REVIEWS = [
  {
    name: "Sarah J.",
    text: "Profesional, unit bersih, dan on-time. Sangat direkomendasikan untuk kebutuhan bisnis.",
    rating: 5,
  },
  {
    name: "Dimas A.",
    text: "Proses sewa lepas kunci sangat efisien. Tidak bertele-tele. Kondisi motor prima.",
    rating: 5,
  },
  {
    name: "Linda W.",
    text: "Transparansi harga sangat baik. Tidak ada hidden cost saat pengembalian unit.",
    rating: 5,
  },
];


const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-black tracking-tighter text-gray-900">
        DAFA<span className="text-blue-700">RENTAL.</span>
      </div>
      <div className="hidden md:flex gap-10 text-sm font-bold text-gray-600 uppercase tracking-wider">
        <Link href="#" className="hover:text-blue-700 transition-colors">
          Home
        </Link>
        <Link href="#" className="hover:text-blue-700 transition-colors">
          About
        </Link>
        <Link href="/rental" className="hover:text-blue-700 transition-colors">
          Rental
        </Link>
        <Link href="#" className="hover:text-blue-700 transition-colors">
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
      <div className="flex gap-6 mt-4 md:mt-0 font-medium">
        <Link href="#" className="hover:text-white">
          Privacy
        </Link>
        <Link href="#" className="hover:text-white">
          Terms
        </Link>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  const [filter, setFilter] = useState<"all" | "car" | "bike">("all");

  const filteredVehicles =
    filter === "all" ? VEHICLES : VEHICLES.filter((v) => v.type === filter);

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 selection:bg-blue-700 selection:text-white">
      <Navbar />

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 mb-8 text-xs font-bold tracking-widest text-blue-700 uppercase bg-blue-50 border border-blue-100 rounded-md">
              Premium Transport Solutions
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-8 text-gray-900">
              Perjalanan Anda,
              <br />
              Prioritas{" "}
              <span className="text-blue-700 underline decoration-4 decoration-blue-700/30 underline-offset-8">
                Kami.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
              Sewa kendaraan lepas kunci dengan standar profesional. Armada
              terawat, proses transparan, dan layanan 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-700 text-white rounded-lg font-bold uppercase tracking-wider hover:bg-blue-800 transition-all active:scale-95">
                Lihat Armada
                <ArrowRight size={20} />
              </button>
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-bold uppercase tracking-wider hover:border-gray-900 transition-all">
                Hubungi Kami
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-gray-100 bg-gray-50"
          >
            <Image
              src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=1200" // Gambar lebih profesional (BMW)
              alt="Premium Car"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-4">
              Standar Layanan Kami.
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl font-medium">
              Komitmen kami untuk memberikan pengalaman berkendara yang aman dan
              nyaman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[500px]">
            <div className="md:col-span-2 md:row-span-2 bg-white p-10 rounded-2xl border border-gray-200 flex flex-col justify-between hover:border-blue-700 transition-colors duration-300 group">
              <div>
                <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={28} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  Kondisi Prima & Terjamin
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Setiap unit melewati inspeksi ketat 32 titik sebelum
                  diserahkan. Kebersihan dan performa mesin adalah prioritas
                  absolut kami.
                </p>
              </div>
            </div>

            <div className="bg-blue-700 text-white p-8 rounded-2xl flex flex-col justify-between">
              <Clock size={32} strokeWidth={2} className="mb-6" />
              <div>
                <h3 className="text-xl font-bold mb-2 tracking-tight">
                  Support 24 Jam
                </h3>
                <p className="text-blue-100 text-sm font-medium">
                  Layanan darurat di jalan raya kapanpun Anda membutuhkan.
                </p>
              </div>
            </div>

            <div className="relative bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=600"
                alt="Mechanic"
                fill
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gray-900/30"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <Wrench size={28} strokeWidth={2} className="mb-4" />
                <h3 className="text-xl font-bold tracking-tight">
                  Bengkel Resmi
                </h3>
              </div>
            </div>

            <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 flex items-center gap-6 hover:border-blue-700 transition-colors duration-300">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 tracking-tight">
                  Harga Final & Transparan
                </h3>
                <p className="text-gray-600 font-medium">
                  Tidak ada biaya tersembunyi (hidden fees) saat pengambilan
                  atau pengembalian unit.
                </p>
              </div>
              <div className="text-3xl font-black text-blue-700">0%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white" id="armada">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-black tracking-tighter mb-4">
                Pilihan Armada.
              </h2>
              <p className="text-gray-600 text-lg font-medium">
                Koleksi kendaraan terbaru untuk berbagai kebutuhan.
              </p>
            </div>

            <div className="flex p-1 bg-gray-100 rounded-lg border border-gray-200">
              {(["all", "car", "bike"] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`px-8 py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-all ${
                    filter === item
                      ? "bg-blue-700 text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {item === "all"
                    ? "All Units"
                    : item === "car"
                    ? "Cars"
                    : "Bikes"}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence>
              {filteredVehicles.map((vehicle) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  key={vehicle.id}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-64 bg-gray-100 border-b border-gray-200">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500 ease-in-out"
                    />
                    <div className="absolute top-4 left-4 bg-white border border-gray-200 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2">
                      {vehicle.type === "car" ? (
                        <Car size={14} />
                      ) : (
                        <Bike size={14} />
                      )}
                      {vehicle.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-2 tracking-tight">
                      {vehicle.name}
                    </h3>
                    <div className="flex justify-between items-end mt-6">
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">
                          Mulai dari
                        </p>
                        <p className="text-blue-700 font-black text-2xl">
                          Rp {vehicle.price}
                          <span className="text-sm text-gray-500 font-medium">
                            /hari
                          </span>
                        </p>
                      </div>
                      <button className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-900 group-hover:bg-blue-700 group-hover:border-blue-700 group-hover:text-white transition-colors">
                        <ArrowRight size={20} strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-center">
          <h2 className="text-3xl font-black tracking-tighter">
            Feedback Klien.
          </h2>
          <div className="flex gap-1 text-blue-700">
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
          </div>
        </div>

        <div className="relative flex w-full">
          <motion.div
            className="flex gap-8 whitespace-nowrap pl-6"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
            {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
              <div
                key={i}
                className="w-[450px] flex-shrink-0 bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-blue-700 transition-colors"
              >
                <div className="flex gap-1 text-blue-700 mb-6">
                  {[...Array(5)].map((_, r) => (
                    <Star
                      key={r}
                      size={18}
                      fill={r < review.rating ? "currentColor" : "none"}
                      className={r < review.rating ? "" : "text-gray-200"}
                    />
                  ))}
                </div>
                <p className="text-gray-700 font-medium text-lg mb-8 whitespace-normal leading-relaxed">
                  &quot;{review.text}&quot;
                </p>
                <div>
                  <h5 className="font-bold text-base text-gray-900">
                    {review.name}
                  </h5>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">
                    Verified Client
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 bg-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
            Siap untuk Perjalanan
            <br />
            Profesional Anda?
          </h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Booking unit Anda sekarang untuk memastikan ketersediaan. Layanan
            pelanggan kami siap membantu 24/7.
          </p>
          <button className="bg-white text-blue-700 px-12 py-5 rounded-lg font-bold text-lg uppercase tracking-wider hover:bg-gray-100 transition-transform active:scale-95">
            Hubungi via WhatsApp
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
