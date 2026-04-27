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
      <section className="py-20 bg-gray-100 text-center px-6">
        <h2 className="text-3xl font-bold mb-12">
          Kenapa Pilih Kami?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div>✅ Stabil</div>
          <div>⚡ Cepat</div>
          <div>💰 Terjangkau</div>
          <div>📞 Support 24/7</div>
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
