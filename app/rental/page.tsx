"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { vehicles } from "@/data/vehicle";
import { Search, Filter, Fuel, Users, Gauge } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider"; 
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RentalPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<"all" | "car" | "bike">("all");
  
  const filteredData = vehicles.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" ? true : item.type === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter text-blue-600">
            GoRent.
          </Link>
          <div className="text-sm font-medium text-slate-500">
            Rental Catalog
          </div>
        </div>
      </nav>

      <header className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Temukan Kendaraanmu</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Pilih dari koleksi mobil dan motor terbaik kami untuk perjalanan yang tak terlupakan.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row gap-8">
        
        <aside className="w-full md:w-1/4 h-fit bg-white p-6 rounded-xl border border-slate-200 sticky top-24">
          <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold">
            <Filter size={20} /> Filter Pencarian
          </div>
          
          <div className="mb-6">
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Cari Nama</label>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Misal: Alphard..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="text-xs font-bold text-slate-500 uppercase mb-3 block">Kategori</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                <input 
                  type="radio" 
                  name="category" 
                  checked={categoryFilter === "all"} 
                  onChange={() => setCategoryFilter("all")}
                  className="accent-blue-600"
                />
                <span className="text-sm">Semua Kendaraan</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                <input 
                  type="radio" 
                  name="category" 
                  checked={categoryFilter === "car"} 
                  onChange={() => setCategoryFilter("car")}
                  className="accent-blue-600"
                />
                <span className="text-sm">Mobil (Cars)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                <input 
                  type="radio" 
                  name="category" 
                  checked={categoryFilter === "bike"} 
                  onChange={() => setCategoryFilter("bike")}
                  className="accent-blue-600"
                />
                <span className="text-sm">Motor (Bikes)</span>
              </label>
            </div>
          </div>
        </aside>

        <div className="w-full md:w-3/4">
          <div className="mb-4 text-sm text-slate-500">
            Menampilkan <span className="font-bold text-slate-900">{filteredData.length}</span> hasil
          </div>

          {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-slate-200 group">
                    {/* Image Area */}
                    <div className="bg-slate-100 h-48 relative flex items-center justify-center">
                      <div className="text-slate-400 text-xs">Image: {item.name}</div>
                      <Badge className="absolute top-3 left-3 bg-white text-slate-900 hover:bg-white shadow-sm">
                        {item.transmission}
                      </Badge>
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg font-bold">{item.name}</CardTitle>
                        <Badge variant="secondary" className="uppercase text-[10px] tracking-wider">
                          {item.type}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent>
                      {/* Gestalt: Similarity (Icon Groups) */}
                      <div className="flex gap-4 text-slate-500 text-xs mb-4">
                        <div className="flex items-center gap-1">
                          <Users size={14} /> {item.seats} Seat
                        </div>
                        <div className="flex items-center gap-1">
                          <Gauge size={14} /> 2024
                        </div>
                        <div className="flex items-center gap-1">
                          <Fuel size={14} /> Petrol
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        Rp {item.price.toLocaleString('id-ID')}
                        <span className="text-xs text-slate-400 font-normal ml-1">/hari</span>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <Button className="w-full bg-slate-900 hover:bg-blue-600 transition-colors">
                        Sewa Sekarang
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
              <p className="text-slate-400">Tidak ada kendaraan yang ditemukan.</p>
              <button 
                onClick={() => {setSearchTerm(""); setCategoryFilter("all")}}
                className="text-blue-600 text-sm font-bold mt-2 hover:underline"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}