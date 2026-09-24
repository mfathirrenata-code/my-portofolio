"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

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

  // Fungsi untuk memanggil dialog PDF Browser
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <nav className={`fixed w-full top-0 z-50 px-4 md:px-6 transition-all duration-700 ease-in-out ${scrolled ? "pt-4" : "pt-6"}`}>
      <div
        className={`mx-auto flex justify-between items-center rounded-full border transition-all duration-700 ease-in-out relative z-50 ${
          scrolled
            ? "max-w-5xl bg-white/90 backdrop-blur-lg shadow-lg shadow-gray-200/40 border-gray-200/50 px-5 md:px-6 py-3"
            : "max-w-7xl bg-white/50 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-gray-100 md:border-transparent px-5 md:px-0 py-3 md:py-2"
        }`}
      >
        <a href="#hero" className="text-xl md:text-2xl font-black text-blue-600 tracking-tighter shrink-0">
          Portofolio<span className="text-gray-900">.</span>
        </a>

        {/* Menu PC */}
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

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          
          {/* Tombol PDF (Hanya di PC/Tablet) */}
          <button
            onClick={handleDownloadPDF}
            className={`hidden md:flex items-center justify-center gap-1 w-10 h-10 rounded-full text-red-500 transition-all duration-300 shadow-sm border ${
              scrolled ? "bg-red-50 border-red-100 hover:bg-red-500 hover:text-white" : "bg-white/80 backdrop-blur-md border-red-100 hover:bg-red-500 hover:text-white"
            }`}
            title="Download PDF"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>

          {/* Tombol Toggle Bahasa */}
          <button
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            className={`flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full text-[10px] md:text-xs font-black transition-all duration-300 shadow-sm border ${
              scrolled ? "bg-white border-gray-200 text-gray-700 hover:bg-gray-50" : "bg-white/80 backdrop-blur-md border-gray-100 text-gray-600 hover:text-blue-600"
            }`}
            title="Ubah Bahasa"
          >
            {lang.toUpperCase()}
          </button>

          <a
            href="mailto:mfathirrenata@gmail.com"
            className={`hidden sm:inline-flex items-center gap-2 rounded-full px-5 md:px-6 py-2 text-xs md:text-sm font-bold transition-all duration-300 ${
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
            className="md:hidden w-9 h-9 flex items-center justify-center bg-white shadow-sm border border-gray-100 rounded-full text-gray-800 focus:outline-none"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* DROPDOWN MENU MOBILE */}
      <div className={`absolute top-full left-0 w-full mt-2 px-4 transition-all duration-500 md:hidden z-40 ${menuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"}`}>
        <div className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-3xl p-6 flex flex-col space-y-4 text-center">
          {NAV_LINKS[lang].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-bold py-2 transition-colors ${isActive(link.href) ? "text-blue-600" : "text-gray-600"}`}
            >
              {link.label}
            </a>
          ))}
          <div className="w-full h-px bg-gray-100 my-2"></div>
          
          {/* Tombol PDF di Mobile */}
          <button 
            onClick={() => {
              setMenuOpen(false);
              setTimeout(() => handleDownloadPDF(), 300);
            }}
            className="flex items-center justify-center gap-2 bg-red-50 border border-red-100 text-red-600 rounded-full py-3 text-sm font-bold shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {lang === "en" ? "Download PDF" : "Unduh PDF"}
          </button>

          <a 
            href="mailto:mfathirrenata@gmail.com" 
            onClick={() => setMenuOpen(false)}
            className="bg-blue-600 text-white rounded-full py-3 text-sm font-bold shadow-md shadow-blue-500/30"
          >
            {lang === "en" ? "Contact Me" : "Hubungi Saya"}
          </a>
        </div>
      </div>
    </nav>
  );
}