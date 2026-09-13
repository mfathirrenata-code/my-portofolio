import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { lang } = useLanguage();

  // STATE UNTUK MODAL (POP-UP) INTERAKTIF
  const [selectedExp, setSelectedExp] = useState(null);

  // KAMUS UNTUK HALAMAN EXPERIENCE DENGAN DATA BARU
  const content = {
    en: {
      title: "Experience & Education",
      eduTitle: "Education",
      techTitle: "Tech Stack",
      viewDetail: "Click to View Details",
      close: "Close Preview",
      internships: [
        {
          id: "tsel",
          role: "PT Telekomunikasi Selular",
          company: "Backend Developer (Intern) • Fixed Broadband",
          date: "Sept 2025 - Jan 2026",
          location: "Pekanbaru, Riau",
          type: "On-site",
          image: "/tsel-doc.JPG",
          desc: "Completed an internship program focused on operational automation. Engineered a Telegram Bot integrated with web databases via Selenium and optimized complex data queries to streamline internal workflows.",
          tools: ["Node.js", "Selenium", "Telegram API", "MySQL"]
        },
        {
          id: "pln",
          role: "PT PLN (Persero) UID RKR",
          company: "Fullstack Developer (Intern)",
          date: "Feb 2026 - Jun 2026",
          location: "Pekanbaru, Riau",
          type: "On-site",
          image: "/pln-doc.jpeg",
          desc: "Served as a Fullstack Developer Intern, spearheading the end-to-end development of a centralized monitoring web application to enhance internal data tracking and operational efficiency.",
          tools: ["React.js", "Laravel", "Tailwind CSS", "MySQL"]
        },
        {
          id: "capstone",
          company: "Politeknik Caltex Riau",
          role: "2nd Best Capstone Project",
          date: "2023",
          location: "Pekanbaru, Riau",
          type: "Award / Achievement",
          image: "/capstone-doc.JPG",
          desc: "Awarded 2nd Place for the Best Capstone Project. Engineered an innovative and scalable system integrating modern web architectures. Demonstrated advanced problem-solving skills and technical proficiency.",
          tools: ["React.js", "Node.js", "Deep Learning", "Tailwind CSS"]
        }
      ],
      it: "Informatics Engineering",
      ips: "Social Sciences",
      pcrDegree: "Bachelor (D4)",
      pcrYear: "2022 - 2026",
      pcrGpa: "GPA: 3.4",
      smaDegree: "High School",
      smaYear: "2019 - 2022",
      smaGpa: "Score: 91.7"
    },
    id: {
      title: "Pengalaman & Pendidikan",
      eduTitle: "Pendidikan",
      techTitle: "Tech Stack",
      viewDetail: "Klik untuk Detail",
      close: "Tutup Preview",
      internships: [
        {
          id: "tsel",
          role: "PT Telekomunikasi Selular",
          company: "Backend Developer (Magang) • Fixed Broadband",
          date: "Sept 2025 - Jan 2026",
          location: "Pekanbaru, Riau",
          type: "On-site",
          image: "/tsel-doc.JPG",
          desc: "Menjalani program magang dengan fokus otomatisasi operasional. Merancang Telegram Bot yang terintegrasi database web menggunakan Selenium, serta mengoptimalkan kueri data untuk mempercepat alur kerja.",
          tools: ["Node.js", "Selenium", "Telegram API", "MySQL"]
        },
        {
          id: "pln",
          role: "PT PLN (Persero) UID RKR",
          company: "Fullstack Developer (Magang)",
          date: "Feb 2026 - Jun 2026",
          location: "Pekanbaru, Riau",
          type: "On-site",
          image: "/pln-doc.jpeg",
          desc: "Bertugas merancang dan membangun aplikasi web monitoring (end-to-end) tersentralisasi untuk meningkatkan efisiensi pelacakan data internal perusahaan secara real-time.",
          tools: ["React.js", "Laravel", "Tailwind CSS", "MySQL"]
        },
        {
          id: "capstone",
          company: "Politeknik Caltex Riau",
          role: "Juara 2 Best Capstone Project",
          date: "2023",
          location: "Pekanbaru, Riau",
          type: "Penghargaan",
          image: "/capstone-doc.JPG",
          desc: "Meraih penghargaan Juara 2 Best Capstone Project atas pengembangan sistem yang inovatif dan skalabel. Membuktikan kemampuan tingkat lanjut dalam penyelesaian masalah dan penguasaan arsitektur web modern.",
          tools: ["React.js", "Node.js", "Deep Learning", "Tailwind CSS"]
        }
      ],
      it: "Teknik Informatika",
      ips: "Ilmu Pengetahuan Sosial",
      pcrDegree: "Sarjana Terapan (D4)",
      pcrYear: "2022 - 2026",
      pcrGpa: "IPK: 3.4",
      smaDegree: "Ijazah SMA",
      smaYear: "2019 - 2022",
      smaGpa: "Nilai: 91.7"
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

  // Mencegah scroll pada body saat Modal Terbuka
  useEffect(() => {
    if (selectedExp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedExp]);

  return (
    <>
      <section id="experience" className="relative w-full min-h-screen flex items-center justify-center py-20 px-6 bg-gray-50/50 border-y border-gray-100 z-10 snap-start">
        <div
          ref={sectionRef}
          className={`max-w-6xl mx-auto w-full transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 text-center md:text-left">{t.title}</h2>

          <div className="grid lg:grid-cols-3 gap-6">

            {/* KIRI: KARTU PENGALAMAN MAGANG INTERAKTIF (Ambil 2 Kolom) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {t.internships.map((exp) => (
                <div
                  key={exp.id}
                  onClick={() => setSelectedExp(exp)}
                  // UBAH DISINI: Ganti shadow-sm jadi shadow-xl shadow-gray-300/50
                  className="relative group w-full h-64 md:h-72 rounded-[2rem] overflow-hidden cursor-pointer shadow-xl shadow-gray-300/50 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:-translate-y-1"
                >
                  {/* Foto Latar Belakang */}
                  <img src={exp.image} alt={exp.company} className="absolute inset-0 w-full h-98 object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />

                  {/* Gradient Overlay (Gelap di bawah agar teks terbaca) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Konten Kartu */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-md">{exp.type}</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-md">{exp.location}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.date}</span>
                    </div>

                    {/* Tombol Klik (Hanya muncul saat di-hover) */}
                    <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/20">
                      <svg className="w-5 h-5 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* KANAN: PENDIDIKAN & TECH STACK (1 Kolom) */}
            <div className="flex flex-col gap-6">

              {/* Pendidikan Kompak & Highlighted */}
              {/* UBAH DISINI: Ganti shadow-sm jadi shadow-xl shadow-gray-200/60 */}
              <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/60 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-6">{t.eduTitle}</h3>

                {/* PCR */}
                <div className="flex items-start gap-4 mb-6 group">
                  <div className="w-14 h-14 shrink-0 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-md p-2.5 group-hover:border-blue-300 group-hover:shadow-lg transition-all duration-300">
                    <img src="/logoPCR.png" alt="PCR" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col w-full">
                    <h4 className="text-[15px] font-black text-gray-900 leading-tight mb-1">{t.it}</h4>
                    <div className="flex items-center justify-between w-full mb-3">
                      <p className="text-xs font-bold text-gray-500">Politeknik Caltex Riau</p>
                      <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{t.pcrYear}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[11px] font-bold px-3 py-1 bg-gray-50 text-gray-700 rounded-lg border border-gray-200">{t.pcrDegree}</span>
                      <span className="text-[11px] font-black px-3 py-1 bg-blue-600 text-white rounded-lg shadow-md shadow-blue-500/30">{t.pcrGpa}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-100 mb-6"></div>

                {/* SMAN 8 */}
                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 shrink-0 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-md p-2.5 group-hover:border-blue-300 group-hover:shadow-lg transition-all duration-300">
                    <img src="/logoSmandel.png" alt="SMAN 8" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col w-full">
                    <h4 className="text-[15px] font-black text-gray-900 leading-tight mb-1">{t.ips}</h4>
                    <div className="flex items-center justify-between w-full mb-3">
                      <p className="text-xs font-bold text-gray-500">SMAN 8 Pekanbaru</p>
                      <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{t.smaYear}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[11px] font-bold px-3 py-1 bg-gray-50 text-gray-700 rounded-lg border border-gray-200">{t.smaDegree}</span>
                      <span className="text-[11px] font-black px-3 py-1 bg-blue-600 text-white rounded-lg shadow-md shadow-blue-500/30">{t.smaGpa}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Tech Stack Singkat */}
              {/* UBAH DISINI: Tingkatkan shadow-xl jadi shadow-2xl biar lebih mantap */}
              <div className="bg-gray-900 text-white p-6 md:p-8 rounded-[2rem] shadow-2xl shadow-gray-900/40 flex flex-col h-full border border-gray-800">
                <h3 className="text-lg font-bold mb-5 text-gray-100">{t.techTitle}</h3>

                <div className="space-y-6 flex-grow content-start">

                  {/* 1. Frontend & UI/UX */}
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">Frontend & UI/UX</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-blue-500/20 hover:text-blue-300 transition-colors">React.js</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-blue-500/20 hover:text-blue-300 transition-colors">Vite</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-blue-500/20 hover:text-blue-300 transition-colors">Tailwind CSS</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-blue-500/20 hover:text-blue-300 transition-colors">Bootstrap 5</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-blue-500/20 hover:text-blue-300 transition-colors">Figma</span>
                    </div>
                  </div>

                  {/* 2. Backend, Database & API */}
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">Backend & Database</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-green-500/20 hover:text-green-300 transition-colors">PHP & Laravel</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-green-500/20 hover:text-green-300 transition-colors">Node.js</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-green-500/20 hover:text-green-300 transition-colors">Python</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-green-500/20 hover:text-green-300 transition-colors">MySQL</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-green-500/20 hover:text-green-300 transition-colors">SQL Server</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-green-500/20 hover:text-green-300 transition-colors">G-Sheets API</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-green-500/20 hover:text-green-300 transition-colors">REST API / GAS</span>
                    </div>
                  </div>

                  {/* 3. Infrastruktur & Tools Ekosistem */}
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">DevOps & Tools</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-orange-500/20 hover:text-orange-300 transition-colors">Git & GitHub</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-orange-500/20 hover:text-orange-300 transition-colors">Docker</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-orange-500/20 hover:text-orange-300 transition-colors">NPM / Yarn</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-orange-500/20 hover:text-orange-300 transition-colors">Laragon / XAMPP</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-orange-500/20 hover:text-orange-300 transition-colors">Postman</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-orange-500/20 hover:text-orange-300 transition-colors">DBeaver</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold hover:bg-orange-500/20 hover:text-orange-300 transition-colors">GH Copilot</span>
                    </div>
                  </div>

                  {/* 4. Keahlian Spesifik & Data Science */}
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">AI & Data Science</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-blue-600/30 text-blue-300 rounded-md text-[10px] font-semibold border border-blue-500/30 hover:bg-blue-500 hover:text-white transition-all cursor-default">TensorFlow & PyTorch</span>
                      <span className="px-2.5 py-1 bg-blue-600/30 text-blue-300 rounded-md text-[10px] font-semibold border border-blue-500/30 hover:bg-blue-500 hover:text-white transition-all cursor-default">Keras</span>
                      <span className="px-2.5 py-1 bg-blue-600/30 text-blue-300 rounded-md text-[10px] font-semibold border border-blue-500/30 hover:bg-blue-500 hover:text-white transition-all cursor-default">Pandas & NumPy</span>
                      <span className="px-2.5 py-1 bg-blue-600/30 text-blue-300 rounded-md text-[10px] font-semibold border border-blue-500/30 hover:bg-blue-500 hover:text-white transition-all cursor-default">Scikit-Learn</span>
                      <span className="px-2.5 py-1 bg-blue-600/30 text-blue-300 rounded-md text-[10px] font-semibold border border-blue-500/30 hover:bg-blue-500 hover:text-white transition-all cursor-default">Jupyter & Colab</span>
                      <span className="px-2.5 py-1 bg-blue-600/30 text-blue-300 rounded-md text-[10px] font-semibold border border-blue-500/30 hover:bg-blue-500 hover:text-white transition-all cursor-default">Selenium</span>
                      <span className="px-2.5 py-1 bg-blue-600/30 text-blue-300 rounded-md text-[10px] font-semibold border border-blue-500/30 hover:bg-blue-500 hover:text-white transition-all cursor-default">Blender 3D</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- MODAL (LIGHTBOX) INTERAKTIF --- */}
      {selectedExp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 py-10">
          <div
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity cursor-pointer"
            onClick={() => setSelectedExp(null)}
          ></div>

          <div className="relative bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden animate-fade-in-up z-10 flex flex-col max-h-[90vh]">
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 hover:bg-black/70 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all duration-300"
            >
              ✕
            </button>

            <div className="w-full h-56 md:h-72 relative shrink-0">
              <img
                src={selectedExp.image}
                alt={selectedExp.company}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent"></div>
              <div className="absolute bottom-4 left-6 text-white z-10">
                <span className="text-xs font-bold bg-blue-600 px-3 py-1 rounded-md mb-2 inline-block shadow-lg">
                  {selectedExp.type}
                </span>
                <p className="text-sm font-semibold tracking-wide drop-shadow-md">
                  {selectedExp.location}
                </p>
              </div>
            </div>

            <div className="w-full p-8 flex flex-col overflow-y-auto bg-white">
              <div className="mb-6">
                <p className="text-sm text-blue-600 font-bold mb-2 uppercase tracking-wider">{selectedExp.date}</p>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 leading-tight">{selectedExp.role}</h3>
                <p className="text-sm md:text-base font-semibold text-gray-500">{selectedExp.company}</p>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8">
                {selectedExp.desc}
              </p>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Tools & Tech Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.tools.map(tool => (
                    <span key={tool} className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-lg border border-blue-100 transition-colors cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}