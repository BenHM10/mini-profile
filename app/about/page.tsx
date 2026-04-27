export default function About() {
  return (
    <main className="font-sans text-gray-800">

      {/* HERO */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-500/80"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Lebih dari Sekadar Internet
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Kami menghadirkan koneksi yang menghubungkan hidup, pekerjaan,
            dan hiburan Anda tanpa batas.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Cerita Kami
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              NotIndihome hadir dari kebutuhan akan internet yang benar-benar
              stabil dan terjangkau. Kami percaya bahwa koneksi internet bukan
              lagi sekadar kebutuhan, tapi bagian penting dari kehidupan modern.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dari rumah hingga bisnis, kami berkomitmen memberikan layanan
              terbaik dengan teknologi terbaru.
            </p>
          </div>

          {/* visual box */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 h-64 rounded-2xl shadow-xl"></div>

        </div>
      </section>

      {/* VISI MISI MODERN */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Visi & Misi
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="p-8 rounded-2xl border hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">🎯 Visi</h3>
              <p className="text-gray-600">
                Menjadi penyedia layanan internet yang menghubungkan seluruh
                masyarakat dengan teknologi tanpa batas.
              </p>
            </div>

            <div className="p-8 rounded-2xl border hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">🚀 Misi</h3>
              <ul className="text-gray-600 space-y-2 list-disc ml-5">
                <li>Koneksi cepat dan stabil</li>
                <li>Inovasi berkelanjutan</li>
                <li>Pelayanan terbaik</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* STATS (biar keliatan legit) */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Dipercaya Banyak Pelanggan
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-red-600">10K+</h3>
              <p className="text-gray-600">Pengguna</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-600">50+</h3>
              <p className="text-gray-600">Area</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-600">99%</h3>
              <p className="text-gray-600">Kepuasan</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-600">24/7</h3>
              <p className="text-gray-600">Support</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Bergabung?
          </h2>
          <p className="mb-6 opacity-90">
            Rasakan pengalaman internet terbaik sekarang juga
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Mulai Sekarang
          </button>
        </div>
      </section>

    </main>
  );
}
