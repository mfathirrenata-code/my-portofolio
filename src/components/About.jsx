import { useState, useEffect, useRef } from "react";
// 1. IMPORT MESIN BAHASA-NYA
import { useLanguage } from "../context/LanguageContext"; 

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // 2. PANGGIL STATUS BAHASA SAAT INI (en / id)
  const { lang } = useLanguage(); 

  // 3. BUAT KAMUS TERJEMAHAN UNTUK HALAMAN INI
  const content = {
    en: {
      title: "The Architect",
      headline: "Crafting Digital",
      headlineSpan: "Masterpieces.",
      p1: "Hello! I'm Muhammad Fathir Renata. An Informatics Engineering student at Politeknik Caltex Riau (PCR) driven by a profound passion for creating scalable digital experiences and robust modern architectures.",
      p2: "My core focus is Full-Stack Web Development, engineering scalable and robust applications from the ground up. Over the past 4 years in the IT landscape, I have also cultivated strong complementary skills in UI/UX, 3D modeling, and mobile development, empowering me to deliver comprehensive and highly versatile digital solutions.",
      years: "Years\nExperience",
      projects: "Projects\nBuilt",
      core: "Core Disciplines",
      descUI: "Clean & Minimalist",
      desc3D: "Blender",
      descAI: "Android Studio"
    },
    id: {
      title: "Sang Arsitek",
      headline: "Merangkai Mahakarya",
      headlineSpan: "Digital.",
      p1: "Halo! Saya Muhammad Fathir Renata. Mahasiswa Teknik Informatika di Politeknik Caltex Riau (PCR) dengan semangat tinggi dalam menciptakan pengalaman digital yang skalabel dan arsitektur modern yang kokoh.",
      p2: "Fokus utama saya adalah Full-Stack Web Development, merancang aplikasi yang tangguh dan skalabel dari hulu ke hilir. Selama 4 tahun mendalami dunia IT, saya juga mengasah keahlian pendukung di bidang UI/UX, pemodelan 3D, dan pengembangan mobile, yang memungkinkan saya menghadirkan solusi digital yang komprehensif dan serbaguna.",
      years: "Tahun\nPengalaman",
      projects: "Proyek\nDibuat",
      core: "Fokus Disiplin Ilmu",
      descUI: "Bersih & Minimalis",
      desc3D: "Blender",
      descAI: "Android Studio"
    }
  };

  // 4. PILIH BAHASA OTOMATIS
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
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 bg-white z-10 snap-start">
      <div 
        ref={sectionRef} 
        className={`max-w-6xl mx-auto w-full transition-all duration-1000 ease-out transform flex flex-col items-center ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          {/* Ganti teks statis dengan variabel dari kamus */}
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-6">{t.title}</h2>
          <h3 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[1.1] mb-6">
            {t.headline} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{t.headlineSpan}</span>
          </h3>
        </div>

        {/* --- PANORAMIC IMAGE --- */}
        <div className="relative w-full h-[30vh] md:h-[60vh] rounded-[2rem] overflow-hidden mb-16 shadow-2xl group">
          <div className="absolute inset-0 bg-gray-900/10 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
          <img 
            src="/about-cover.JPG" 
            alt="Workspace or Abstract Tech" 
            className="w-full h-150 object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
          />
        </div>

        {/* --- KONTEN & STATISTIK --- */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 w-full items-center mb-20">
          <div className="text-center md:text-left">
            {/* Gunakan variabel p1 dan p2 */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6 whitespace-pre-line">{t.p1}</p>
            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">{t.p2}</p>
          </div>

          <div className="flex items-center justify-center gap-12 lg:gap-16 border-y border-gray-100 py-10">
            <div className="text-center">
              <h4 className="text-6xl lg:text-7xl font-black text-gray-900 tracking-tighter mb-2">4<span className="text-blue-600">+</span></h4>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em] whitespace-pre-line">{t.years}</p>
            </div>
            <div className="w-px h-24 bg-gray-200"></div>
            <div className="text-center">
              <h4 className="text-6xl lg:text-7xl font-black text-gray-900 tracking-tighter mb-2">7<span className="text-blue-600">+</span></h4>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em] whitespace-pre-line">{t.projects}</p>
            </div>
          </div>
        </div>

        {/* --- GRID BIDANG FOKUS --- */}
        <div className="w-full">
          <h4 className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">{t.core}</h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl text-center hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-white shadow-sm text-blue-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">💻</div>
              <h4 className="font-bold text-gray-900 mb-2">Full Stack Developer</h4>
              <p className="text-sm text-gray-500">React, Laravel, Node.js</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl text-center hover:bg-white hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-white shadow-sm text-cyan-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">🎨</div>
              <h4 className="font-bold text-gray-900 mb-2">UI/UX Design</h4>
              <p className="text-sm text-gray-500">{t.descUI}</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl text-center hover:bg-white hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-white shadow-sm text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">🧊</div>
              <h4 className="font-bold text-gray-900 mb-2">3D Modelling</h4>
              <p className="text-sm text-gray-500">{t.desc3D}</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl text-center hover:bg-white hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-white shadow-sm text-purple-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">🧠</div>
              <h4 className="font-bold text-gray-900 mb-2">Android Developer</h4>
              <p className="text-sm text-gray-500">{t.descAI}</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}