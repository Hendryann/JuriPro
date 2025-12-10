"use client";

import Image from "next/image";
import Link from "next/link";

export default function Layanan() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative w-full h-[420px] flex items-center justify-center">
        <Image
          src="/bg-layanan.jpg"
          alt="Background Layanan"
          fill
          priority
          className="object-cover brightness-[0.55]"
        />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl font-bold text-white leading-tight drop-shadow-xl">
            Layanan <span className="text-blue-400">Legal Dokumen</span>
          </h1>
          <p className="mt-5 text-lg text-gray-200 leading-relaxed">
            Kami menyediakan berbagai layanan legalisasi dokumen, perizinan usaha,
            hingga pendirian badan hukum sesuai kebutuhan Anda.
          </p>
        </div>
      </section>

      {/* GRID LAYANAN 2 × 2 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Pilihan <span className="text-blue-600">Layanan Kami</span>
          </h2>

          {/* GRID 2×2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all hover:scale-[1.03] cursor-pointer">
              <h3 className="text-xl font-semibold mb-3">Paket Basic</h3>
              <ul className="text-gray-600 leading-relaxed list-disc list-inside text-sm space-y-1">
                <li>Pembuatan/penyusunan surat legal</li>
                <li>Scan & Print Legalitas</li>
                <li>Template + File PDF Final</li>
                <li>Revisi 1x</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all hover:scale-[1.03] cursor-pointer">
              <h3 className="text-xl font-semibold mb-3">Paket UMKM</h3>
              <ul className="text-gray-600 leading-relaxed list-disc list-inside text-sm space-y-1">
                <li>Pembuatan NIB / izin usaha dasar</li>
                <li>Konsultasi Legalitas UMKM</li>
                <li>Penyusunan dokumen usaha</li>
                <li>Pengurusan dokumen sampai selesai</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all hover:scale-[1.03] cursor-pointer">
              <h3 className="text-xl font-semibold mb-3">Paket Pendirian PT</h3>
              <ul className="text-gray-600 leading-relaxed list-disc list-inside text-sm space-y-1">
                <li>Konsultasi struktur PT</li>
                <li>Penyusunan akta pendirian</li>
                <li>Penyusunan data pemegang saham</li>
                <li>Pendaftaran OSS-RBA</li>
                <li>Pengurusan dokumen legal perusahaan</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all hover:scale-[1.03] cursor-pointer">
              <h3 className="text-xl font-semibold mb-3">Paket Pendaftaran Merek</h3>
              <ul className="text-gray-600 leading-relaxed list-disc list-inside text-sm space-y-1">
                <li>Cek kelas merek</li>
                <li>Penyusunan dokumen permohonan</li>
                <li>Pengajuan ke DJKI</li>
                <li>Monitoring status sampai selesai</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold">Butuh Bantuan Pengurusan Dokumen?</h2>
        <p className="mt-3 text-blue-100 max-w-xl mx-auto">
          Konsultasikan kebutuhan legalisasi usaha Anda bersama tim profesional kami.
        </p>
        <Link
          href="https://wa.me/6282284020148"
          className="mt-8 inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-50 transition"
        >
          Konsultasi Sekarang
        </Link>
      </section>
    </div>
  );
}
