export default function About() {
  return (
    <main className="font-sans text-gray-800">

      {/* HERO ABOUT */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Tentang Kami
          </h1>
          <p className="text-lg opacity-90">
            Menghadirkan koneksi internet terbaik untuk masa depan digital Anda
          </p>
        </div>
      </section>

      {/* DESKRIPSI */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Siapa Kami?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            NotIndihome adalah penyedia layanan internet berbasis fiber optic 
            yang berfokus pada kecepatan, stabilitas, dan harga terjangkau. 
            Kami hadir untuk memenuhi kebutuhan digital masyarakat modern, 
            mulai dari rumah tangga hingga bisnis.
          </p>
        </div>
      </section>

      {/* VISI MISI */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Visi & Misi
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* VISI */}
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-3">🎯 Visi</h3>
              <p className="text-gray-600">
                Menjadi penyedia layanan internet terdepan yang menghubungkan 
                setiap individu dengan dunia tanpa batas.
              </p>
            </div>

            {/* MISI */}
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-3">🚀 Misi</h3>
              <ul className="text-gray-600 space-y-2 list-disc ml-5 text-left">
                <li>Menyediakan layanan internet berkualitas tinggi</li>
                <li>Menghadirkan teknologi terbaru</li>
                <li>Memberikan pelayanan terbaik kepada pelanggan</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* NILAI */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Nilai Kami
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6">🤝 Integritas</div>
            <div className="p-6">💡 Inovasi</div>
            <div className="p-6">📞 Pelayanan</div>
            <div className="p-6">⭐ Kepercayaan</div>
          </div>
        </div>
      </section>

    </main>
  );
}
