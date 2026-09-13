// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Experience from './components/Experience'

// Wajib di-import agar tombol bahasa berfungsi untuk semua halaman
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    // Membungkus seluruh aplikasi dengan mesin Bahasa
    <LanguageProvider>
      
      {/* PERUBAHAN PENTING: overflow-hidden diganti jadi overflow-x-hidden */}
      <div className="relative bg-white text-gray-900 font-sans min-h-screen scroll-smooth selection:bg-gray-900 selection:text-white overflow-x-hidden">
        
        {/* Efek Ambient Glow (Cahaya Bernapas) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div 
            className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-100/60 blur-[120px] animate-pulse" 
            style={{ animationDuration: '8s' }}
          ></div>
          <div 
            className="absolute -bottom-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-cyan-100/40 blur-[100px] animate-pulse" 
            style={{ animationDuration: '12s', animationDelay: '2s' }}
          ></div>
        </div>

        {/* Kontainer Utama */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
          </main>
          <Footer />
        </div>
        
      </div>
    </LanguageProvider>
  )
}

export default App