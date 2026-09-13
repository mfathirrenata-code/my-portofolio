import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();
  const ROLES = ["Fullstack Web Developer", "UI/UX Specialist", "3D Modeller", "Deep Learning Explorer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [ripples, setRipples] = useState([]);

  const content = {
    en: {
      bio: "An Informatics Engineering student at Politeknik Caltex Riau focused on designing modern web architectures, exploring 3D Modelling, and Deep Learning technologies.",
      btn: "View Work"
    },
    id: {
      bio: "Saya mahasiswa Teknik Informatika di Politeknik Caltex Riau. Berfokus merancang arsitektur web modern, hingga mengeksplorasi 3D Modelling dan teknologi Deep Learning.",
      btn: "Lihat Karya"
    }
  };

  const t = content[lang];

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((prev) => (prev + 1) % ROLES.length), 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScreenClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newRipple = { x: e.clientX - rect.left, y: e.clientY - rect.top, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== newRipple.id)), 1000);
  };

  return (
    <section id="hero" onClick={handleScreenClick} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 cursor-default snap-start">
      <style>
        {`
          html {
            scroll-snap-type: y mandatory;
            scroll-behavior: smooth;
          }
          
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
          @keyframes roleSlide { 0% { opacity: 0; transform: translateY(20px); } 15% { opacity: 1; transform: translateY(0); } 85% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-20px); } }
          @keyframes spinHelm { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes rippleEffect { 0% { transform: translate(-50%, -50%) scale(0); opacity: 0.6; } 100% { transform: translate(-50%, -50%) scale(6); opacity: 0; } }
          
          .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-role { animation: roleSlide 3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .animate-spin-helm { animation: spinHelm 90s linear infinite; }
          .animate-ripple { animation: rippleEffect 1s ease-out forwards; }
          .delay-200 { animation-delay: 200ms; }
          .delay-500 { animation-delay: 500ms; }
        `}
      </style>

      {/* Latar Belakang Ocean Breeze */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-gradient-to-br from-slate-50 via-sky-100 to-blue-200 pointer-events-none">
        <div className="absolute -right-[20%] -top-[10%] w-[900px] h-[900px] text-blue-900 opacity-[0.03] animate-spin-helm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <circle cx="12" cy="12" r="7"></circle>
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 2v3"></path>
            <path d="M12 19v3"></path>
            <path d="M2 12h3"></path>
            <path d="M19 12h3"></path>
            <path d="M4.93 4.93l2.12 2.12"></path>
            <path d="M16.95 16.95l2.12 2.12"></path>
            <path d="M4.93 19.07l2.12-2.12"></path>
            <path d="M16.95 7.05l2.12-2.12"></path>
          </svg>
        </div>
        {ripples.map((r) => (
          <div key={r.id} className="absolute w-20 h-20 rounded-full border-2 border-blue-400 bg-blue-300/20 animate-ripple" style={{ left: r.x, top: r.y }}></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 relative z-10 pointer-events-none">
        <div className="flex-1 text-left opacity-0 animate-fade-in-up pointer-events-auto">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[1.05] mb-2">
            Muhammad Fathir Renata<span className="text-blue-600">.</span>
          </h1>
          <div className="h-12 md:h-16 flex items-center mb-6 overflow-hidden">
            <span key={roleIndex} className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-extrabold tracking-tight animate-role block">
              {ROLES[roleIndex]}
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-10 leading-relaxed font-medium">
            {t.bio}
          </p>
          <div className="flex items-center gap-4">
            <a href="#projects" className="px-8 py-4 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">{t.btn}</a>
          </div>
        </div>

        <div className="flex-1 relative opacity-0 animate-fade-in-up delay-200 flex justify-center md:justify-end w-full pointer-events-auto">
          <div className="relative w-72 h-[22rem] md:w-80 md:h-[26rem] animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-gray-100 rounded-[2.5rem] transform rotate-3 scale-105 -z-10"></div>
            <div className="relative w-full h-full bg-gray-200 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl group">
              <img src="/profile.jpg" alt="Muhammad Fathir Renata" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium -z-10 bg-gray-100 text-center px-4">[Simpan profile.jpg di folder public]</div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}><span className="text-2xl">🦁</span></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-up delay-500 z-20 pointer-events-none">
        <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center p-1"><div className="w-1 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDuration: '2s' }}></div></div>
      </div>
    </section>
  );
}