"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          JuriPro
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <Link href="/">Home</Link>
          <Link href="/layanan">Layanan</Link>
          <Link href="/kontak">Kontak</Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md flex flex-col gap-3 p-4 text-lg">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/layanan" onClick={() => setOpen(false)}>
            Layanan
          </Link>
          <Link href="/kontak" onClick={() => setOpen(false)}>
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
}
