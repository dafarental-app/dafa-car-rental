"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Award,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const STATS = [
  { label: "Years Experience", value: "5+" },
  { label: "Happy Clients", value: "2.5k+" },
  { label: "Total Fleet", value: "50+" },
];

const VALUES = [
  {
    icon: <Target size={28} className="text-blue-600" />,
    title: "Mission Driven",
    desc: "To provide the safest and most comfortable transportation solution for every journey.",
  },
  {
    icon: <Users size={28} className="text-blue-600" />,
    title: "Customer Obsessed",
    desc: "We prioritize your needs with 24/7 support and flexible rental terms tailored to you.",
  },
  {
    icon: <Award size={28} className="text-blue-600" />,
    title: "Premium Quality",
    desc: "Every vehicle is strictly maintained to authorized dealer standards for peak performance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900 selection:bg-blue-700 selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 bg-white items-center flex justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gray-900">
            <Image
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1920&auto=format&fit=crop"
              alt="Dafa Rental Fleet"
              fill
              sizes="100vw"
              className="object-cover scale-105 contrast-[0.9] brightness-[0.8]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-blue-900/30 mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="backdrop-blur-sm bg-white/10 p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl"
            >
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-6 drop-shadow-lg">
                Dafa Scooter Lombok
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                  Car Rental
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-10 max-w-xl mx-auto leading-relaxed font-medium drop-shadow">
                From a small garage to a leading transport provider. We believe
                that a great journey starts with reliability and comfort.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 relative z-20 -mt-16">
          <div className="max-w-7xl mx-auto mt-3">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
            >
              {STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg shadow-blue-900/5 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300"
                >
                  <h3 className="text-4xl lg:text-5xl font-black tracking-tight text-blue-700 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 text-sm font-bold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50 translate-x-[-50%] translate-y-[-50%]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl -z-10 opacity-50 translate-x-[30%] translate-y-[30%]"></div>

          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6 text-gray-900">
                The Foundation of
                <br /> Our Service.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are committed to ensuring your transportation is the
                smoothest part of your trip through our core principles.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {VALUES.map((val, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-transparent transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                      {val.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-32 px-6 bg-gray-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6">
                Visit Our HQ.
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed text-lg max-w-md">
                Come inspect our fleet personally. Our team is ready to assist
                you with professional service.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="bg-blue-600/20 p-3 rounded-xl text-blue-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Head Office</h4>
                    <p className="text-gray-400 text-sm mt-0.5 leading-snug">
                      Jl. Bypass Bandara Int. Lombok No.km 2, Tanak Awu, Kec.
                      Pujut, Kabupaten Lombok Tengah, <br /> Nusa Tenggara Bar.
                      83573
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="bg-blue-600/20 p-3 rounded-xl text-blue-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Center</h4>
                    <p className="text-gray-400 text-sm mt-0.5">
                      087765089140 (24 Hours)
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="https://maps.app.goo.gl/uHqfBo7ujzNb8bAW9"
                className="group inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-all active:scale-95 hover"
              >
                Get Directions
                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-gray-800/50"
              style={{ height: "500px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4050616.8368836106!2d108.90530239999998!3d-7.500480414777555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdaf0076008447%3A0x213d8be3b8d54e07!2sDafa%20rencar%20mobil%20motor!5e0!3m2!1sid!2sid!4v1768472934679!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
