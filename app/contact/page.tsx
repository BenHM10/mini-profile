"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Terima kasih ${form.name}, pesan kamu sudah dikirim!`);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-10">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 border">
        
        <h1 className="text-3xl font-bold text-center mb-2">
          Hubungi Kami
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Ada pertanyaan tentang paket internet? Kirim pesan ke kami.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
            required
          />

          <textarea
            name="message"
            placeholder="Tulis pesan kamu di sini..."
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-red-500"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Kirim Pesan
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600 space-y-1">
          <p>📧 support@notindihome.com</p>
          <p>📞 +62 812 3456 7890</p>
          <p>📍 Yogyakarta, Indonesia</p>
        </div>
      </div>
    </div>
  );
}