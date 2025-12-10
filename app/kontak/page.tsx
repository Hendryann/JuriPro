"use client";

import Image from "next/image";
import { Mail, Instagram, Phone } from "lucide-react";

export default function Kontak() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative w-full h-[420px] flex items-center justify-center">
        <Image
          src="/bg-kontak.jpg"
          alt="Background Kontak"
          fill
          priority
          className="object-cover brightness-[0.55]"
        />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl font-bold text-white leading-tight drop-shadow-xl">
            Hubungi <span className="text-blue-400">Kami</span>
          </h1>
          <p className="mt-5 text-lg text-gray-200 leading-relaxed">
            Kami siap membantu kebutuhan legal dokumen, konsultasi, dan layanan lainnya.
          </p>
        </div>
      </section>

      {/* GRID KONTAK */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Pilihan <span className="text-blue-600">Kontak</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6282284020148"
              target="_blank"
              className="group bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-blue-500 hover:scale-[1.03] transition-all cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <Phone className="h-10 w-10 text-blue-600 group-hover:scale-110 transition" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  WhatsApp
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Chat langsung dengan admin untuk konsultasi cepat.
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:JuriPro.01@gmail.com"
              target="_blank"
              className="group bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-blue-500 hover:scale-[1.03] transition-all cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <Mail className="h-10 w-10 text-blue-600 group-hover:scale-110 transition" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  Email
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Kirim pertanyaan atau dokumen langsung melalui email.
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/juri_pro?igsh=MWltbW5tdDJnbzFkOQ=="
              target="_blank"
              className="group bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-blue-500 hover:scale-[1.03] transition-all cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <Instagram className="h-10 w-10 text-blue-600 group-hover:scale-110 transition" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  Instagram
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Ikuti kami untuk update layanan & promo terbaru.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
