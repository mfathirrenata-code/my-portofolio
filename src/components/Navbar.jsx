"use client";
import { useEffect, useState } from "react";
// 1. Import useLanguage
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // 2. AMBIL LANG & SETLANG DARI CONTEXT (Hapus useState lokal 'lang')
  const { lang, setLang } = useLanguage();

  const NAV_LINKS = {
    en: [
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      { href: "#projects", label: "Projects" },
    ],
    id: [
      { href: "#about", label: "Tentang" },
      { href: "#experience", label: "Pengalaman" },
      { href: "#projects", label: "Karya" },
    ]
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "experience", "projects", "footer"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const isActive = (href) => href === `#${active}`;

  return (
    <nav className={`fixed w-full top-0 z-50 px-6 transition-all duration-700 ease-in-out ${scrolled ? "pt-4" : "pt-6"}`}>
      <div
        className={`mx-auto flex justify-between items-center rounded-full border transition-all duration-700 ease-in-out ${
          scrolled
            ? "max-w-5xl bg-white/85 backdrop-blur-lg shadow-lg shadow-gray-200/40 border-gray-200/50 px-6 py-3"
            : "max-w-7xl bg-transparent border-transparent px-0 py-2"
        }`}
      >
        <a href="#hero" className="text-2xl font-black text-blue-600 tracking-tighter shrink-0">
          Portofolio<span className="text-gray-900">.</span>
        </a>

        <div className={`hidden md:flex items-center rounded-full border transition-all duration-700 ${
          scrolled
            ? "space-x-8 text-sm font-semibold text-gray-800 border-transparent bg-transparent px-0 py-0"
            : "bg-white/80 backdrop-blur-md shadow-sm border-gray-100 px-8 py-3 space-x-8 text-sm font-semibold text-gray-600"
        }`}>
          {NAV_LINKS[lang].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors duration-300 ${isActive(link.href) ? "text-blue-600" : "hover:text-blue-600"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          
          {/* Tombol Toggle Bahasa (Sekarang memperbarui global state) */}
          <button
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            className={`hidden sm:flex items-center justify-center w-10 h-10 rounded-full text-xs font-black transition-all duration-300 shadow-sm border ${
              scrolled ? "bg-white border-gray-200 text-gray-700 hover:bg-gray-50" : "bg-white/80 backdrop-blur-md border-gray-100 text-gray-600 hover:text-blue-600"
            }`}
            title="Ubah Bahasa"
          >
            {lang.toUpperCase()}
          </button>

          <a
            href="mailto:mfathirrenata@gmail.com"
            className={`hidden sm:inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm font-bold transition-all duration-300 ${
              scrolled
                ? "bg-gray-900 text-white hover:bg-blue-600 shadow-md border border-transparent"
                : "bg-white text-gray-800 shadow-sm border border-gray-100 hover:text-blue-600"
            }`}
          >
            {lang === "en" ? "Contact" : "Kontak"}
          </a>

          {/* Hamburger Menu Mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden w-11 h-11 flex items-center justify-center bg-white shadow-sm border border-gray-100 rounded-full text-gray-800"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}