import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { lang } = useLanguage();

  const content = {
    en: {
      headline: "Let's Build Something",
      headlineSpan: "Extraordinary.",
      desc: "Have a system idea you want to realize or need an elegant automation solution? I'm always open for discussion and collaboration.",
      btn: "Start a Conversation"
    },
    id: {
      headline: "Mari Bangun Sesuatu",
      headlineSpan: "yang Luar Biasa.",
      desc: "Punya ide sistem yang ingin direalisasikan atau butuh solusi otomatisasi yang elegan? Saya selalu terbuka untuk diskusi dan kolaborasi.",
      btn: "Mulai Percakapan"
    }
  };

  const t = content[lang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="footer" className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white py-20 px-6 border-t border-gray-800 snap-start">
      <div 
        ref={sectionRef} 
        className={`max-w-5xl mx-auto w-full flex flex-col items-center text-center transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {t.headline} <br/> {t.headlineSpan}
        </h2>
        <p className="text-gray-400 mb-10 max-w-lg leading-relaxed">
          {t.desc}
        </p>
        
        <a href="mailto:mfathirrenata@gmail.com" className="group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <span className="relative z-10 flex items-center gap-2">
            {t.btn}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </a>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-16"></div>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="font-bold text-gray-300 text-lg tracking-tighter">Portofolio<span className="text-blue-500">.</span></div>
          <div className="flex gap-6 font-medium">
            <a href="https://www.linkedin.com/in/muhammad-fathir-renata-200637431" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/mfathirrenata-code" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.instagram.com/fathirrenata17?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" className="hover:text-white transition-colors">Instagram</a>
          </div>
          <p>© 2026 Muhammad Fathir Renata.</p>
        </div>
      </div>
    </footer>
  );
}