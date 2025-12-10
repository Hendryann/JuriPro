import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Juripro",
  description: "Website Jasa Hukum Profesional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-10 py-4 flex items-center">
          <img src="/logo.png" alt="Logo" className="h-15 w-auto" />

          <div className="ml-auto flex gap-8 text-black font-medium">
            <a href="/" className="hover:text-blue-600 transition">Home</a>
            <a href="/Layanan" className="hover:text-blue-600 transition">Layanan</a>
            <a href="/kontak" className="hover:text-blue-600 transition">Kontak</a>
          </div>
        </nav>

        {/* CONTENT — tanpa jarak lagi */}
        <div className="pt-0">{children}</div>

        {/* FOOTER */}
        <footer className="w-full bg-gray-200 text-center py-4 mt-10 text-sm text-gray-700">
          Copyright © 2025 JuriPro. All Rights Reserved.
        </footer>

      </body>
    </html>
  );
}
