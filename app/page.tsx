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
    {/* KEUNGGULAN */}
<section className="py-24 bg-gray-100 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl font-bold mb-4">
      Kenapa Pilih Kami?
    </h2>
    <p className="text-gray-500 mb-16">
      Kami memberikan layanan terbaik untuk pengalaman internet Anda
    </p>

    <div className="grid md:grid-cols-4 gap-8">

      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition group">
        <div className="text-4xl mb-4 group-hover:scale-110 transition">📶</div>
        <h3 className="font-semibold mb-2">Stabil</h3>
        <p className="text-sm text-gray-600">
          Koneksi tetap lancar tanpa gangguan
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition group">
        <div className="text-4xl mb-4 group-hover:scale-110 transition">⚡</div>
        <h3 className="font-semibold mb-2">Cepat</h3>
        <p className="text-sm text-gray-600">
          Kecepatan tinggi untuk semua kebutuhan
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition group">
        <div className="text-4xl mb-4 group-hover:scale-110 transition">💰</div>
        <h3 className="font-semibold mb-2">Terjangkau</h3>
        <p className="text-sm text-gray-600">
          Harga fleksibel sesuai kebutuhan
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition group">
        <div className="text-4xl mb-4 group-hover:scale-110 transition">📞</div>
        <h3 className="font-semibold mb-2">Support 24/7</h3>
        <p className="text-sm text-gray-600">
          Tim siap membantu kapan saja
        </p>
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
