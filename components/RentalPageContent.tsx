"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Fuel,
  Users,
  Car,
  Scooter,
  ShieldCheck,
  Settings,
  LucideIcon,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Motorbike,
  Icon,
} from "lucide-react";
import { motorRacingHelmet } from "@lucide/lab";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { urlFor } from "@/lib/sanity";
import { SanityImageSource } from "@sanity/image-url";
import { SiWhatsapp } from "react-icons/si";

type FilterType = "all" | "car" | "scooter";

interface CategoryOption {
  id: FilterType;
  label: string;
  icon: LucideIcon;
}

export interface PriceOption {
  label: string;
  price: number;
}

export interface Vehicle {
  _id: string;
  name: string;
  type: "car" | "scooter";
  image: SanityImageSource;
  year: number;
  transmission: string;
  fuel: string;
  seats: number;
  price: number;
  priceOptions?: PriceOption[];
}

interface RentalPageContentProps {
  vehicles: Vehicle[];
}

const ITEMS_PER_PAGE = 9;

export default function RentalPageContent({
  vehicles,
}: RentalPageContentProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<FilterType>("all");
  const [selectedDurations, setSelectedDurations] = useState<{
    [key: string]: number;
  }>({});
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const categories: CategoryOption[] = [
    { id: "all", label: "All Units", icon: Settings },
    { id: "car", label: "Cars", icon: Car },
    { id: "scooter", label: "Scooters", icon: Motorbike },
  ];

  const safeVehicles = vehicles || [];

  const filteredData = safeVehicles.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" ? true : item.type === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, categoryFilter]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

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

  const handleBooking = (vehicle: Vehicle) => {
    const phoneNumber = "6287765089140";
    const message = `Halo Admin Dafa Rental, saya tertarik untuk menyewa unit ini:%0A%0A*Unit:* ${vehicle.name}%0A* Mohon informasi ketersediaannya.`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen font-sans bg-white text-gray-900 selection:bg-blue-700 selection:text-white overflow-x-hidden">
      <Navbar />

      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 bg-white items-center flex justify-center overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-widest text-blue-700 uppercase bg-blue-50 border border-blue-100 rounded-md">
              Full Catalog
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-gray-900">
              Find Your Perfect <br />{" "}
              <span className="text-blue-700">Fleet.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
              A collection of well-maintained vehicles with complete
              specifications for the comfort of your business or leisure trips.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-1/4 h-fit lg:sticky lg:top-28 space-y-4 lg:space-y-8 z-30">
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="w-full lg:hidden bg-white border border-gray-200 p-4 rounded-xl flex items-center justify-between text-gray-900 font-bold shadow-sm active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-blue-700" />
              <span>
                {isMobileFilterOpen ? "Hide Filters" : "Show Filters"}
              </span>
            </div>
            {isMobileFilterOpen ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>

          <div
            className={`space-y-8 ${isMobileFilterOpen ? "block animate-in fade-in slide-in-from-top-2 duration-300" : "hidden"} lg:block`}
          >
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="hidden lg:flex items-center gap-2 mb-6 text-gray-900 font-bold uppercase tracking-wider text-sm border-b border-gray-100 pb-4">
                <Filter size={18} className="text-blue-700" />
                Search Filter
              </div>

              <div className="mb-8">
                <label className="text-xs font-bold text-gray-500 uppercase mb-3 block tracking-wide">
                  Search Unit
                </label>
                <div className="relative">
                  <Search
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Ex: Alphard..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all placeholder:text-gray-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-4 block tracking-wide">
                  Vehicle Category
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
              <h4 className="font-bold text-lg mb-2">Quality Guarantee</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                All units undergo routine inspections for your safety.
              </p>
            </div>
          </div>
        </aside>

        <div className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">
              Showing{" "}
              <span className="text-gray-900">
                {filteredData.length > 0
                  ? `${(currentPage - 1) * ITEMS_PER_PAGE + 1} - ${Math.min(currentPage * ITEMS_PER_PAGE, filteredData.length)}`
                  : 0}
              </span>{" "}
              of <span className="text-gray-900">{filteredData.length}</span>{" "}
              Available Units
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {paginatedData.length > 0 ? (
                // MAPPING PAGINATED DATA
                paginatedData.map((vehicle) => {
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
                      className="group bg-white rounded-xl border border-gray-200 relative hover:z-50 hover:shadow-2xl transition-all duration-300 flex flex-col"
                    >
                      <div className="relative h-64 bg-gray-100 border-b border-gray-200 rounded-t-xl">
                        <Image
                          src={
                            vehicle.image
                              ? urlFor(vehicle.image).url()
                              : "/placeholder.png"
                          }
                          alt={vehicle.name}
                          fill
                          className="object-contain rounded-t-xl group-hover:scale-110 group-hover:-translate-y-6 transition duration-500 ease-in-out"
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
                                <Scooter size={14} className="text-blue-700" />
                              )}{" "}
                              Unit Ready
                            </div>
                            {vehicle.type === "scooter" && (
                              <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                                <Icon
                                  iconNode={motorRacingHelmet}
                                  size={14}
                                  className="text-blue-700"
                                />{" "}
                                2 Helmets
                              </div>
                            )}
                          </div>

                          {vehicle.priceOptions &&
                            vehicle.priceOptions.length > 0 && (
                              <div className="mb-4">
                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide block mb-1">
                                  Duration
                                </label>
                                <div className="relative">
                                  <select
                                    className="w-full text-xs font-medium bg-gray-50 border border-gray-200 text-gray-700 py-2 pl-3 pr-8 rounded-lg appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer transition-all"
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
                              {selectedIdx === -1 ||
                              selectedIdx === 0 ||
                              selectedIdx === 1
                                ? "Starts From"
                                : "Total Price"}
                            </p>
                            <p className="text-blue-700 font-black text-lg">
                              {formatRupiah(currentPrice)}
                              <span className="text-xs text-gray-400 font-medium ml-1">
                                {selectedIdx === -1 ||
                                selectedIdx === 0 ||
                                selectedIdx === 1
                                  ? " / Day"
                                  : ""}
                              </span>
                            </p>
                          </div>

                          <button
                            onClick={() => handleBooking(vehicle)}
                            className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-900 group-hover:bg-blue-700 group-hover:border-blue-700 group-hover:text-white transition-colors cursor-pointer"
                          >
                            <SiWhatsapp size={18} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-full py-20 text-center bg-gray-50 rounded-xl border border-dashed border-gray-300">
                  <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-gray-200 shadow-sm">
                    <Search className="text-gray-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Unit Not Found
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">
                    Try changing your search keywords or filter category.
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

          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={20} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg border text-sm font-bold transition-all ${
                      currentPage === page
                        ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-blue-700"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
