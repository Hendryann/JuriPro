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

        {/* NAVBAR — Putih Solid */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center bg-white shadow-md border-b">
          <img src="/logo.jpg" alt="Logo" className="h-12 w-auto" />

          <div className="ml-auto flex gap-8 text-black font-medium">
            <a href="/" className="hover:text-blue-600 transition">Home</a>
            <a href="/Layanan" className="hover:text-blue-600 transition">Layanan</a>
            <a href="/kontak" className="hover:text-blue-600 transition">Kontak</a>
          </div>
        </nav>

        
      </body>
    </html>
  );
}
