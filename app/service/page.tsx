"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Car,
  Briefcase,
  Gem,
  UserCheck,
  ShieldCheck,
  Clock,
  Smartphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SERVICES = [
  {
    title: "Daily Self-Drive",
    desc: "Enjoy the freedom of driving yourself. Perfect for weekend getaways, family vacations, or city errands. Flexible hourly and daily rates available.",
    icon: <Car size={32} className="text-white" />,
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1740&auto=format&fit=crop",
    color: "bg-blue-600",
  },
  {
    title: "Corporate Leasing",
    desc: "Long-term mobility solutions for businesses. We offer fleet management, monthly billing, and priority support for your company's needs.",
    icon: <Briefcase size={32} className="text-white" />,
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1636&auto=format&fit=crop",
    color: "bg-gray-900",
  },
  {
    title: "VIP & Wedding",
    desc: "Make a statement on your special day. Our luxury fleet includes premium cars like Alphard, Camry, and Mercedes for weddings or VIP transport.",
    icon: <Gem size={32} className="text-white" />,
    image:
      "https://images.unsplash.com/photo-1562426509-5044a121aa49?q=80&w=1740&auto=format&fit=crop",
    color: "bg-blue-800",
  },
  {
    title: "Chauffeur Services",
    desc: "Sit back and relax. Hire our professional, English-speaking drivers who know the best routes and ensure your safety throughout the trip.",
    icon: <UserCheck size={32} className="text-white" />,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1740&auto=format&fit=crop",
    color: "bg-gray-700",
  },
];

const STEPS = [
  {
    title: "Choose Vehicle",
    desc: "Browse our catalog and select the car or scooter that fits your needs.",
    icon: <Smartphone size={24} />,
  },
  {
    title: "Easy Verification",
    desc: "Upload your ID (KTP/Passport) and SIM via WhatsApp. Fast approval.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "Unit Delivery",
    desc: "We deliver the clean, fueled vehicle to your location or airport.",
    icon: <Car size={24} />,
  },
  {
    title: "Enjoy the Ride",
    desc: "Drive with peace of mind. 24/7 roadside assistance is included.",
    icon: <Clock size={24} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900 selection:bg-blue-700 selection:text-white">
      <Navbar />

      <main className="pt-20">
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gray-900">
            <Image
              src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1856&auto=format&fit=crop"
              alt="Our Services"
              fill
              sizes="100vw"
              className="object-cover scale-105 contrast-[0.9] brightness-[0.7]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-blue-900/30 mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="backdrop-blur-sm bg-white/10 p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl"
            >
              <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-300 uppercase bg-blue-900/50 border border-blue-700/50 rounded-full">
                Premium Mobility
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-6 drop-shadow-lg">
                Services Tailored
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                  For You.
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-0 max-w-xl mx-auto leading-relaxed font-medium drop-shadow">
                From daily rentals to exclusive chauffeurs, we provide
                professional transportation solutions designed for your comfort.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-4xl font-black tracking-tighter mb-4 text-gray-900">
                What We Offer.
              </h2>
              <p className="text-gray-600 text-lg">
                Choose the perfect package that suits your travel plans.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {SERVICES.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>

                  <div className="absolute bottom-0 left-0 p-10 w-full text-white">
                    <div
                      className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {service.desc}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-400 group-hover:text-blue-300">
                      Learn More <ArrowRight size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-black tracking-tighter mb-4 text-gray-900">
                  How It Works.
                </h2>
                <p className="text-gray-600 text-lg">
                  Rent your dream vehicle in 4 simple steps.
                </p>
              </div>
              <Link
                href="/contact"
                className="px-8 py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-colors"
              >
                Ask Questions
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  className="relative p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-blue-200 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-black shadow-md border-4 border-white">
                    {i + 1}
                  </div>
                  <div className="mb-4 text-blue-700 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
