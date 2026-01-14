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
  Users,
  Fuel,
  Settings,
  CalendarDays,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { urlFor } from "@/lib/sanity";
import type { SanityImageSource } from "@sanity/image-url";

export interface PriceOption {
  label: string;
  price: number;
}

export interface Vehicle {
  _id: string;
  name: string;
  type: "car" | "bike";
  image: SanityImageSource;
  year: number;
  transmission: string;
  fuel: string;
  seats: number;
  price: number;
  priceOptions?: PriceOption[];
}

export interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

interface LandingPageProps {
  vehicles: Vehicle[];
  reviews: Review[];
}
export default function LandingPage({ vehicles, reviews }: LandingPageProps) {
  const [filter, setFilter] = useState<"all" | "car" | "bike">("all");

  const [selectedDurations, setSelectedDurations] = useState<{
    [key: string]: number;
  }>({});

  const safeVehicles = vehicles || [];

  const filteredVehicles =
    filter === "all"
      ? safeVehicles
      : safeVehicles.filter((v) => v.type === filter);

  const formatRupiah = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleDurationChange = (vehicleId: string, optionIndex: number) => {
    setSelectedDurations((prev) => ({
      ...prev,
      [vehicleId]: optionIndex,
    }));
  };

  // --- UPDATE: Menambahkan fungsi handleBooking agar sama dengan Rental Page ---
  const handleBooking = (vehicle: Vehicle) => {
    const phoneNumber = "6287765089140"; 
    // Format pesan yang rapi dengan line break dan bold text
    const message = `Halo Admin Dafa Rental, saya tertarik untuk menyewa unit ini:%0A%0A*Unit:* ${vehicle.name}%0A* Mohon informasi ketersediaannya.`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

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
              Your Journey,
              <br />
              Our{" "}
              <span className="text-blue-700 underline decoration-4 decoration-blue-700/30 underline-offset-8">
                Priority.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
              Self-drive car rental with professional standards. Well-maintained
              fleet, transparent process, and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/rental">
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-700 text-white rounded-lg font-bold uppercase tracking-wider hover:bg-blue-800 transition-all active:scale-95 cursor-pointer">
                  View Fleet <ArrowRight size={20} />
                </button>
              </a>
              <a href="http://wa.me/6287765089140">
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-bold uppercase tracking-wider hover:border-gray-900 transition-all hover:bg-gray-900 hover:text-white transition-all active:scale-95 cursor-pointer">
                  Contact Us
                </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-gray-100 bg-gray-50"
          >
            <Image
              src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=1200"
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
              Our Service Standards.
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl font-medium">
              Our commitment to delivering a safe and comfortable driving
              experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[500px]">
            <div className="md:col-span-2 md:row-span-2 bg-white p-10 rounded-2xl border border-gray-200 flex flex-col justify-between hover:border-blue-700 transition-colors duration-300 group">
              <div>
                <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={28} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  Prime Condition & Guaranteed
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every unit goes through a strict 32-point inspection before
                  handover. Cleanliness and engine performance are our absolute
                  priorities.
                </p>
              </div>
            </div>
            <div className="bg-blue-700 text-white p-8 rounded-2xl flex flex-col justify-between">
              <Clock size={32} strokeWidth={2} className="mb-6" />
              <div>
                <h3 className="text-xl font-bold mb-2 tracking-tight">
                  24/7 Support
                </h3>
                <p className="text-blue-100 text-sm font-medium">
                  Roadside emergency assistance whenever you need it.
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
                  Authorized Workshop
                </h3>
              </div>
            </div>
            <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 flex items-center gap-6 hover:border-blue-700 transition-colors duration-300">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 tracking-tight">
                  Final & Transparent Pricing
                </h3>
                <p className="text-gray-600 font-medium">
                  No hidden fees at pickup or return.
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
                Vehicle Options.
              </h2>
              <p className="text-gray-600 text-lg font-medium">
                Latest collection of vehicles for various needs.
              </p>
            </div>
            <div className="flex p-1 bg-gray-100 rounded-lg border border-gray-200">
              {(["all", "car", "bike"] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`px-8 py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-all ${filter === item ? "bg-blue-700 text-white shadow-sm" : "text-gray-500 hover:text-gray-900 hover:bg-gray-200"}`}
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
              {filteredVehicles.map((vehicle) => {
                const selectedIdx = selectedDurations[vehicle._id] ?? -1;
                const currentPrice =
                  selectedIdx === -1
                    ? vehicle.price
                    : (vehicle.priceOptions?.[selectedIdx]?.price ??
                      vehicle.price);
                const priceUnit =
                  selectedIdx === -1
                    ? "/Day"
                    : `/${vehicle.priceOptions?.[selectedIdx]?.label}`;

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    key={vehicle._id}
                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-700 hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-64 bg-gray-100 border-b border-gray-200">
                      <Image
                        src={
                          vehicle.image
                            ? urlFor(vehicle.image).url()
                            : "/placeholder.png"
                        }
                        alt={vehicle.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500 ease-in-out"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-gray-200 px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2 shadow-sm">
                        <CalendarDays size={12} className="text-blue-700" />
                        {vehicle.year}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${vehicle.type === "car" ? "bg-blue-50 text-blue-700" : "bg-orange-50 text-orange-700"}`}
                          >
                            {vehicle.type}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-4 tracking-tight leading-snug">
                          {vehicle.name}
                        </h3>

                        <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
                          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                            <Settings size={14} className="text-blue-700" />{" "}
                            {vehicle.transmission}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                            <Fuel size={14} className="text-blue-700" />{" "}
                            {vehicle.fuel}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                            <Users size={14} className="text-blue-700" />{" "}
                            {vehicle.seats} Seat
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                            {vehicle.type === "car" ? (
                              <Car size={14} className="text-blue-700" />
                            ) : (
                              <Bike size={14} className="text-blue-700" />
                            )}{" "}
                            Unit Ready
                          </div>
                        </div>

                        {vehicle.priceOptions &&
                          vehicle.priceOptions.length > 0 && (
                            <div className="mb-4">
                              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide block mb-1">
                                Duration
                              </label>
                              <div className="relative">
                                <select
                                  className="w-full text-xs font-medium bg-gray-50 border border-gray-200 text-gray-700 py-2 pl-3 pr-8 rounded-lg appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer"
                                  value={selectedIdx}
                                  onChange={(e) =>
                                    handleDurationChange(
                                      vehicle._id,
                                      parseInt(e.target.value)
                                    )
                                  }
                                >
                                  <option value={-1}>1 Day (Daily)</option>
                                  {vehicle.priceOptions.map((opt, idx) => (
                                    <option key={idx} value={idx}>
                                      {opt.label}
                                    </option>
                                  ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                  <ChevronDown size={14} />
                                </div>
                              </div>
                            </div>
                          )}
                      </div>

                      <div className="pt-6 border-t border-gray-100 flex justify-between items-end">
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mb-1">
                            {selectedIdx === -1 ? "Starts From" : "Total Price"}
                          </p>
                          <p className="text-blue-700 font-black text-lg">
                            {formatRupiah(currentPrice)}
                            <span className="text-xs text-gray-400 font-medium ml-1">
                              {priceUnit}
                            </span>
                          </p>
                        </div>
                        {/* UPDATE: Menggunakan onClick dengan handleBooking agar sama dengan Rental Page */}
                        <button
                          onClick={() => handleBooking(vehicle)}
                          className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-900 group-hover:bg-blue-700 group-hover:border-blue-700 group-hover:text-white transition-colors cursor-pointer"
                        >
                          <ArrowRight size={18} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-center">
          <h2 className="text-3xl font-black tracking-tighter">
            Customer Feedback.
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
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...reviews, ...reviews].map((review, i) => (
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
                <p className="text-gray-700 font-medium text-lg mb-8 whitespace-normal leading-relaxed italic">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-base text-gray-900 leading-tight">
                      {review.name}
                    </h5>
                    <p className="text-xs text-blue-700 font-bold uppercase tracking-wider mt-1">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 bg-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
            Ready for Your
            <br />
            Professional Journey?
          </h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Book your unit now to secure availability. Our customer service team
            is ready to help 24/7.
          </p>
          <a href="http://wa.me/6287765089140">
            <button className="bg-white text-blue-700 px-12 py-5 rounded-lg font-bold text-lg uppercase tracking-wider hover:bg-gray-100 transition-transform active:scale-95">
              Contact via WhatsApp
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}