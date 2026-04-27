export default function Home() {
  return (
    <main className="font-sans">

      {/* HERO */}
      <div className="text-center py-28 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          NotIndihome Internet 🚀
        </h1>
        <p className="text-lg opacity-90 mb-8">
          Internet cepat, stabil, dan murah
        </p>

        <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition">
          Pasang Sekarang
        </button>
      </div>

      {/* CARD SIMPLE */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="font-bold text-lg mb-2">⚡ Super Cepat</h3>
            <p className="text-gray-600">
              Nikmati kecepatan internet tanpa buffering
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="font-bold text-lg mb-2">📶 Stabil</h3>
            <p className="text-gray-600">
              Koneksi tetap lancar sepanjang hari
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="font-bold text-lg mb-2">💰 Terjangkau</h3>
            <p className="text-gray-600">
              Harga ramah di kantong semua kalangan
            </p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20 bg-red-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Siap Internet Tanpa Lemot?
        </h2>

        <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold shadow hover:scale-105 transition">
          Daftar Sekarang
        </button>
      </div>

    </main>
  );
}
