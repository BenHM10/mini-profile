"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-red-600">
          NotIndihome
        </h1>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-8 items-center font-medium">
          <Link href="/" className="hover:text-red-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-red-600 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-red-600 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-red-600 transition">
            Contact
          </Link>

          {/* BUTTON */}
          <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:scale-105 transition">
            Daftar
          </button>
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-4">
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/services" className="block">Services</Link>
          <Link href="/contact" className="block">Contact</Link>

          <button className="w-full bg-red-600 text-white py-2 rounded-full">
            Daftar
          </button>
        </div>
      )}

    </nav>
  );
}
