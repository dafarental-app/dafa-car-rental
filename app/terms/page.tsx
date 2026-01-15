"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  AlertCircle,
  Check,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TERMS_SECTIONS = [
  {
    id: "eligibility",
    title: "1. Driver Eligibility",
    icon: <UserCheckIcon />,
    content: (
      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li>
          Renters must be at least <strong>21 years old</strong>.
        </li>
        <li>
          Must possess a valid driver's license (SIM A for cars, SIM C for
          scooters) that has been active for at least 1 year.
        </li>
        <li>
          International renters must present a valid International Driving
          Permit (IDP) alongside their national license.
        </li>
        <li>
          We reserve the right to refuse service if the driver is deemed unfit
          to drive.
        </li>
      </ul>
    ),
  },
  {
    id: "booking",
    title: "2. Booking & Payment",
    icon: <CreditCardIcon />,
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          To secure a booking, a down payment of <strong>50%</strong> is
          required via bank transfer or credit card. The remaining balance must
          be settled upon vehicle pickup.
        </p>
        <p>
          A refundable security deposit of <strong>IDR 1,000,000</strong> (for
          cars) or <strong>IDR 500,000</strong> (for scooters) is required and
          will be returned within 24 hours after the rental period ends,
          provided no damage or fines occur.
        </p>
      </div>
    ),
  },
  {
    id: "cancellation",
    title: "3. Cancellation Policy",
    icon: <AlertIcon />,
    content: (
      <div className="space-y-4 text-gray-600">
        <p>We understand plans change. Our cancellation fees are as follows:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>48+ hours before pickup:</strong> Free cancellation (100%
            refund).
          </li>
          <li>
            <strong>24-48 hours before pickup:</strong> 50% refund of the down
            payment.
          </li>
          <li>
            <strong>Less than 24 hours:</strong> No refund.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "usage",
    title: "4. Vehicle Usage & Restrictions",
    icon: <CarIcon />,
    content: (
      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li>
          Vehicles are for <strong>normal road use only</strong>. Off-roading,
          racing, or using the vehicle for illegal purposes is strictly
          prohibited.
        </li>
        <li>
          Smoking inside the vehicle is strictly prohibited. A cleaning fee of
          IDR 500,000 will be charged for violations.
        </li>
        <li>
          The vehicle must not be taken outside the agreed city limits without
          prior written consent from Dafa Rental.
        </li>
      </ul>
    ),
  },
  {
    id: "liability",
    title: "5. Liability & Insurance",
    icon: <ShieldIcon />,
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          All our vehicles come with standard insurance. However, the renter is
          liable for:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Own Risk (OR):</strong> IDR 300,000 per incident for minor
            accidents.
          </li>
          <li>
            Tire punctures, lost keys, or interior damage (not covered by
            insurance).
          </li>
          <li>Traffic fines (E-Tilang) incurred during the rental period.</li>
        </ul>
      </div>
    ),
  },
];

function UserCheckIcon() {
  return (
    <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
      <Check size={20} />
    </div>
  );
}
function CreditCardIcon() {
  return (
    <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
      <FileText size={20} />
    </div>
  );
}
function AlertIcon() {
  return (
    <div className="p-2 bg-orange-100 text-orange-700 rounded-lg">
      <AlertCircle size={20} />
    </div>
  );
}
function CarIcon() {
  return (
    <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
      <ArrowRight size={20} />
    </div>
  );
}
function ShieldIcon() {
  return (
    <div className="p-2 bg-green-100 text-green-700 rounded-lg">
      <Shield size={20} />
    </div>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900 selection:bg-blue-700 selection:text-white">
      <Navbar />

      <main className="pt-20">
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gray-900">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1740&auto=format&fit=crop"
              alt="Terms and Conditions"
              fill
              sizes="100vw"
              className="object-cover scale-105 contrast-[0.9] brightness-[0.6]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-blue-900/20 mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-200 uppercase bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                <AlertCircle size={14} /> Legal Documentation
              </div>
              <h1 className="text-4xl lg:text-6xl font-black tracking-tighter mb-4 drop-shadow-lg">
                Terms of Service.
              </h1>
              <p className="text-lg text-gray-300 max-w-xl mx-auto font-medium">
                Please read these terms carefully before booking. Transparency
                is key to a smooth journey.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FileText size={20} className="text-blue-700" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-3">
                    {TERMS_SECTIONS.map((section) => (
                      <Link
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-gray-600 hover:text-blue-700 hover:translate-x-1 transition-all text-sm font-medium"
                      >
                        {section.title}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="bg-blue-800 text-black p-8 rounded-3xl shadow-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                      <HelpCircle size={24} />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Still confused?</h4>
                    <p className="text-blue-200 text-sm mb-6">
                      Our team can explain these terms in detail.
                    </p>
                    <Link
                      href="/contact"
                      className="text-blue text-sm font-bold underline decoration-blue-400 underline-offset-4"
                    >
                      Contact Support
                    </Link>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 translate-x-10 -translate-y-10"></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              {TERMS_SECTIONS.map((section, idx) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                    {section.icon}
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
                    {section.content}
                  </div>
                </motion.div>
              ))}

              <div className="bg-gray-100 p-8 rounded-[2rem] text-center mt-12">
                <p className="text-gray-600 mb-6 font-medium">
                  By clicking "Agree & Continue" during the booking process, you
                  acknowledge that you have read and understood these terms.
                </p>
                <Link
                  href="/rental"
                  className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-blue-900/20"
                >
                  I Agree, Let's Book <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
