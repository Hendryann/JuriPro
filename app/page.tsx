export default function Home() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section
        className="min-h-screen bg-cover bg-center flex items-center relative"
        style={{ backgroundImage: "url('/bg-home.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 px-10 md:px-20 max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Jasa Pengurusan Legal Dokumen
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10">
            Kami adalah platform jasa legal dokumen yang menawarkan solusi cepat, murah, dan mudah bagi masyarakat, khususnya UMKM dengan validasi langsung oleh pakar hukum.
          </p>

          {/* BUTTON BIRU -> HOVER PUTIH BORDER BIRU */}
          <a
            href="https://wa.me/62XXXXXXXXXX"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold 
                       hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border 
                       transition duration-300"
          >
            Konsultasi Sekarang
          </a>
        </div>
      </section>

      {/* SECTION — MENGAPA HARUS MEMILIH KAMI */}
      <section className="py-20 px-8 md:px-16 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">
          Mengapa Harus <span className="text-blue-500">Memilih</span> Kami?
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          {/* CARD TEMPLATE */}
          {[
            {
              title: "Berpengalaman",
              desc: "Tim profesional dengan pengalaman dalam pengurusan legalitas usaha dan dokumen hukum.",
            },
            {
              title: "Proses Cepat",
              desc: "Pengurusan dokumen dilakukan secara efisien dan tepat waktu.",
            },
            {
              title: "Harga Terjangkau",
              desc: "Biaya layanan kompetitif tanpa mengurangi kualitas.",
            },
            {
              title: "Pendampingan Penuh",
              desc: "Kami mendampingi Anda hingga seluruh proses selesai.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow-sm bg-white cursor-pointer
                         transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
