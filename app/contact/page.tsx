"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ContactPage() {
  // 1. State untuk menyimpan data form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // 2. Fungsi untuk handle perubahan input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Fungsi untuk kirim ke WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format nomor HP (Ganti 0 di depan jadi 62)
    const phoneNumber = "6287765089140"; 

    // Susun pesan
    const text = `Halo Admin Dafa Rental, saya ingin bertanya.%0A%0A*Nama:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A*Pesan:* ${formData.message}`;

    // Redirect ke WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900 selection:bg-blue-700 selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 bg-white items-center flex justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gray-900">
            <Image
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Customer Service"
              fill
              sizes="100vw"
              className="object-cover scale-105 contrast-[0.9] brightness-[0.7]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-blue-900/30 mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="backdrop-blur-sm bg-white/10 p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl"
            >
              <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-300 uppercase bg-blue-900/50 border border-blue-700/50 rounded-full">
                24/7 Support
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-6 drop-shadow-lg">
                Let`s Start a
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                  Conversation.
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-lg mx-auto leading-relaxed font-medium drop-shadow">
                Have questions about our fleet or services? We are here to help
                you plan your perfect journey.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 relative -mt-20 z-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-2xl rounded-[2.5rem] overflow-hidden bg-white border border-gray-100">
              <motion.div
                className="lg:col-span-7 p-10 md:p-14"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-black tracking-tighter mb-2 text-gray-900">
                  Send us a Message.
                </h2>
                <p className="text-gray-500 mb-10">
                  We usually reply within 15 minutes during operating hours.
                </p>

                {/* FORM START */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName" // Tambahkan name
                        value={formData.firstName} // Bind value
                        onChange={handleChange} // Bind onChange
                        placeholder="John"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName" // Tambahkan name
                        value={formData.lastName} // Bind value
                        onChange={handleChange} // Bind onChange
                        placeholder="Doe"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email" // Tambahkan name
                      value={formData.email} // Bind value
                      onChange={handleChange} // Bind onChange
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message" // Tambahkan name
                      value={formData.message} // Bind value
                      onChange={handleChange} // Bind onChange
                      placeholder="Tell us about your trip plans..."
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-5 rounded-xl uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                  </button>
                </form>
                {/* FORM END */}

              </motion.div>

              <motion.div
                className="lg:col-span-5 bg-gray-900 text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="relative z-10 space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-blue-400">
                      Contact Information
                    </h3>
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-xl text-blue-400 shrink-0">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">Head Office</h4>
                          <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                            Jl. Bypass Bandara Int. Lombok No.km 2, Tanak Awu, Kec. Pujut, Kabupaten Lombok Tengah, 
                            <br /> Nusa Tenggara Bar. 83573
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-xl text-blue-400 shrink-0">
                          <Phone size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">Call Us</h4>
                          <p className="text-gray-400 text-sm mt-1">
                            +62 812 3456 7890
                          </p>
                          <p className="text-gray-500 text-xs mt-1">
                            Mon - Sun (24 Hours)
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-xl text-blue-400 shrink-0">
                          <Mail size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">Email Us</h4>
                          <p className="text-gray-400 text-sm mt-1">
                            dafascooterrentcar@gmail.com
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative z-10 mt-10">
                  <div className="bg-blue-800/50 p-6 rounded-2xl border border-blue-700/30">
                    <div className="flex items-center gap-3 mb-2 text-blue-200">
                      <MessageSquare size={20} />
                      <span className="font-bold uppercase tracking-wider text-xs">
                        Live Chat
                      </span>
                    </div>
                    <p className="text-sm font-medium mb-4">
                      Need a quicker response? Chat with our team via WhatsApp.
                    </p>
                    <Link
                      href="#"
                      className="text-white text-sm font-bold underline decoration-blue-400 underline-offset-4 flex items-center gap-1 hover:text-blue-300 transition"
                    >
                      Start Chat <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pb-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black tracking-tighter mb-4">
                Common Questions.
              </h2>
              <p className="text-gray-600">
                Quick answers to help you get started faster.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:border-blue-200 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-700 mb-4">
                  <Clock size={20} />
                </div>
                <h4 className="font-bold text-lg mb-3">Is there a late fee?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes, we charge a standard hourly rate for late returns
                  exceeding 2 hours grace period.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:border-blue-200 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-700 mb-4">
                  <MapPin size={20} />
                </div>
                <h4 className="font-bold text-lg mb-3">
                  Can I return to a different city?
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Currently, vehicles must be returned to the same city hub
                  where they were picked up.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:border-blue-200 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-700 mb-4">
                  <Send size={20} />
                </div>
                <h4 className="font-bold text-lg mb-3">
                  How do I extend my rental?
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Simply contact our admin via WhatsApp at least 6 hours before
                  your rental ends.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}