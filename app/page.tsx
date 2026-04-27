export default function Home() {
  return (
    <main className="font-sans">

      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <h1 className="text-5xl font-bold mb-4">
          NotIndihome Internet 🚀
        </h1>
        <p className="text-lg mb-6">
          Internet cepat, stabil, dan murah untuk semua kebutuhan
        </p>
        <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold">
          Pasang Sekarang
        </button>
      </section>

      {/* LAYANAN */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Layanan Kami
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold mb-2">🌐 Internet Fiber</h3>
            <p>Koneksi super cepat hingga ratusan Mbps</p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold mb-2">📺 TV Interaktif</h3>
            <p>Hiburan tanpa batas untuk keluarga</p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold mb-2">☎️ Telepon Rumah</h3>
            <p>Komunikasi jernih tanpa gangguan</p>
          </div>
        </div>
      </section>

     {/* KEUNGGULAN */}
<section className="py-24 px-6 bg-gradient-to-b from-white to-gray-100">
  <div className="max-w-6xl mx-auto">

    {/* Title */}
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">
        Kenapa Pilih Kami?
      </h2>
      <p className="text-gray-500">
        Lebih dari sekadar internet, kami memberikan pengalaman terbaik
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8 items-center">

      {/* LEFT */}
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="text-3xl">📶</div>
          <div>
            <h3 className="font-semibold">Stabil</h3>
            <p className="text-sm text-gray-600">
              Koneksi tetap lancar tanpa gangguan
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-3xl">⚡</div>
          <div>
            <h3 className="font-semibold">Cepat</h3>
            <p className="text-sm text-gray-600">
              Kecepatan tinggi tanpa buffering
            </p>
          </div>
        </div>
      </div>

      {/* CENTER (HIGHLIGHT BOX) */}
      <div className="bg-red-600 text-white p-10 rounded-3xl shadow-xl text-center scale-105">
        <h3 className="text-xl font-bold mb-4">
          #1 Pilihan Terbaik
        </h3>
        <p className="opacity-90 mb-6">
          Dipercaya oleh ribuan pelanggan di berbagai daerah
        </p>
        <button className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold">
          Mulai Sekarang
        </button>
      </div>

      {/* RIGHT */}
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="text-3xl">💰</div>
          <div>
            <h3 className="font-semibold">Terjangkau</h3>
            <p className="text-sm text-gray-600">
              Harga fleksibel untuk semua kalangan
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-3xl">📞</div>
          <div>
            <h3 className="font-semibold">Support 24/7</h3>
            <p className="text-sm text-gray-600">
              Tim siap membantu kapan saja
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

      {/* CTA */}
      <section className="py-20 text-center bg-red-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Siap Internet Tanpa Lemot?
        </h2>
        <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold">
          Daftar Sekarang
        </button>
      </section>

    </main>
  );
}
