import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const { lang } = useLanguage();

  // STATE UNTUK MODAL DETAIL PROJECT
  const [selectedProject, setSelectedProject] = useState(null);

  const content = {
    en: {
      badge: "Portfolio",
      title: "Featured Projects.",
      subtitle: "A diverse showcase of full-stack web, deep learning, automation bots, and UI/UX designs.",
      statusDone: "Completed",
      statusDev: "In Dev",
      viewDetail: "View Details",
      
      // Label untuk Case Study di Modal
      lblProblem: "The Problem",
      lblSolution: "The Solution",
      lblFeatures: "Key Features",
      
      projects: [
        {
          id: 7,
          title: "Palm Oil Harvest Dashboard",
          category: "Full-Stack Web",
          status: "Completed",
          image: "/proj-sawit.jpg",
          desc: "Developed a comprehensive full-stack web system for plantation owners (KUD Intan Ma'mur) to track daily palm oil prices, monitor harvest yields, and manage farmer records efficiently.",
          tech: ["React.js", "Laravel", "Tailwind CSS", "MySQL", "WhatsApp API"],
          caseStudy: {
            problem: "KUD Intan Ma'mur relied on manual logbooks and Excel for palm oil harvest tracking, leading to delayed records, data loss, and trust issues (discrepancies) between farmers and management. Furthermore, fresh fruit bunch (TBS) prices were distributed via word-of-mouth, causing severe transparency issues.",
            solution: "Architected and developed a centralized web-based information system utilizing the Rapid Solo Software Development (RSSD) methodology. The platform digitizes harvest tracking and provides a transparent, real-time portal for both cooperative managers and individual farmers.",
            features: [
              { title: "Harvest Data Management", desc: "A digital logbook for administrators to input daily harvest data, calculate totals automatically, and generate comprehensive, structured reports." },
              { title: "Farmer Transparency Portal", desc: "A dedicated secure login system allowing individual farmers to independently monitor their personal harvest yields and current pricing." },
              { title: "Automated WhatsApp Alerts", desc: "Centralized TBS price management integrated with a WhatsApp broadcast system to notify farmers immediately whenever palm oil prices change." },
              { title: "Solo Agile Development (RSSD)", desc: "Built end-to-end as a solo full-stack developer, employing a modular, iterative agile approach to ensure high code maintainability." },
              { title: "High Usability Standard", desc: "The user interface was rigorously tested using the System Usability Scale (SUS) to ensure it is highly intuitive for both administrators and non-technical farmers." }
            ]
          }
        },
        {
          id: 6,
          title: "Telkomsel Data Automation",
          category: "Data Engineering",
          status: "Completed",
          image: "/proj-tsel.jpg",
          desc: "Engineered a backend operational monitoring system and robust data pipeline, managing large-scale data extraction, secure server transfers, and containerized deployment.",
          tech: ["Python", "Telegram API", "Selenium", "Docker", "Paramiko"],
          caseStudy: {
            problem: "The Network Broadband Experience Team at Telkomsel required rapid access to network quality data for daily monitoring and decision-making. Extracting, processing, and analyzing this data manually from internal web systems was highly time-consuming and inefficient, especially for repetitive operational tasks.",
            solution: "Developed 'Nonatero', a custom Telegram bot designed to automate data extraction directly from Telkomsel's intranet systems. The bot processes the raw data and delivers real-time network broadband metrics to the team via instant chat commands, drastically streamlining operational workflows.",
            features: [
              { title: "Automated Web Scraping", desc: "Utilized Python and Selenium to autonomously navigate and extract critical network data from secure internal web portals." },
              { title: "Real-time Bot Integration", desc: "Built a responsive interface using the Telegram API, allowing network engineers to request specific data on-the-fly using custom chat commands." },
              { title: "Secure Server Operations", desc: "Implemented Paramiko to establish secure SSH and SFTP connections for safe data file transfers and server-side script execution." },
              { title: "Containerized Deployment", desc: "Packaged the entire automation script and its dependencies within Docker containers to ensure consistent, scalable, and reliable performance." },
              { title: "Operational Efficiency", desc: "Successfully eliminated manual data retrieval processes, significantly boosting the team's productivity and decision-making speed." }
            ]
          }
        },
        {
          id: 5,
          title: "PLN Monitoring Dashboard",
          category: "Web & Dashboard",
          status: "Completed",
          image: "/proj-pln.jpg",
          desc: "Developed a full-stack monitoring dashboard to consolidate regional data, migrating legacy systems to modern frameworks. Managed end-to-end integration with a clean, intuitive UI/UX design.",
          tech: ["React.js", "Vite", "Laravel", "MySQL", "Google Sheets API"],
          caseStudy: {
            problem: "The Commercial Division of PT PLN UID RKR struggled with manual Customer Relationship Management (CRM) tracking. Relying on scattered, manually updated Microsoft Excel files resulted in delayed performance evaluations, a lack of real-time trend visualization, and poor information transparency.",
            solution: "Architected a centralized, web-based CRM monitoring dashboard that transforms fragmented manual reports into a dynamic analytics platform. By integrating Google Sheets as the primary data source with a modern web framework, the system significantly accelerates data processing and supports rapid managerial decision-making.",
            features: [
              { title: "Automated Data Integration", desc: "Seamlessly integrated Google Sheets API and REST APIs to synchronize legacy spreadsheet inputs into a modern, centralized database structure." },
              { title: "Interactive Analytics UI", desc: "Designed a clean, professional user interface featuring interactive tables and analytical charts to track 'close won' data and marketing activities in real-time." },
              { title: "Advanced Data Management", desc: "Implemented robust search functionality, comprehensive data filtering, and one-click image export capabilities for streamlined corporate reporting." },
              { title: "Real-time Notification System", desc: "Engineered a built-in alert system to notify stakeholders of critical CRM updates and performance metrics directly within the dashboard." },
              { title: "Modern Tech Stack", desc: "Leveraged React.js (Vite) for a highly responsive, Client-Side Rendered (CSR) frontend, paired with a robust Laravel backend architecture." }
            ]
          }
        },
        {
          id: 4,
          title: "VR Hajj Simulation",
          category: "3D Game Development",
          status: "Completed",
          image: "/proj-vr.jpg",
          desc: "Developed highly realistic 3D models and textures of the Holy Land (Mecca) to support an immersive Virtual Reality (VR) application for Hajj pilgrimage education and simulation.",
          tech: ["Blender", "Substance Painter", "Unity 3D", "3D Texturing"],
          caseStudy: {
            problem: "Conventional Hajj training methods often lack depth and interactivity, leading to a poor understanding of the complex rituals. Consequently, first-time pilgrims frequently make critical mistakes during the actual pilgrimage, such as performing Sa'i from the wrong starting point or out of sequence.",
            solution: "Designed and developed highly detailed, realistic 3D environments of the Holy Land for a Virtual Reality (VR) simulation. This immersive approach allows prospective pilgrims to virtually experience and practice the rituals, bridging the gap between theoretical knowledge and real-world execution.",
            features: [
              { title: "Realistic 3D Modeling", desc: "Constructed highly accurate 3D models of vital landmarks, including Masjid al-Haram, the Kaaba, and Mount Arafat, based on extensive visual references and expert consultations." },
              { title: "High-Fidelity Texturing", desc: "Applied advanced texturing techniques using Substance Painter to achieve visually stunning, lifelike materials that enhance the user's sense of presence in the VR environment." },
              { title: "Immersive Environment Design", desc: "Designed specific interior and exterior spaces crucial to the pilgrimage rituals, ensuring spatial accuracy to facilitate correct movement and orientation during the simulation." },
              { title: "VR Engine Integration Readiness", desc: "Optimized all 3D assets, meshes, and textures for seamless implementation into the Unity 3D engine, ensuring smooth performance in VR applications." },
              { title: "Research-Backed Development", desc: "Utilized the Game Development Life Cycle (GDLC) and conducted expert interviews to ensure the architectural and procedural accuracy of the simulated environment." }
            ]
          }
        },
        {
          id: 3,
          title: "Internship Management Web",
          category: "Full-Stack Web",
          status: "Completed",
          image: "/proj-intern.jpg",
          desc: "Worked as a Front-End Developer responsible for designing and implementing the user interface to ensure a highly responsive and user-friendly website for a university internship portal.",
          tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
          caseStudy: {
            problem: "The process of finding and validating student internship placements was highly unstructured. Information regarding available industry partners was scattered, and the approval workflow relied on manual communication, making it difficult for students to secure validated roles and for the Head of Program (Kaprodi) to monitor available vacancies.",
            solution: "Developed a centralized, role-based Internship Management portal. The platform digitizes the entire pipeline: Lecturers can easily post available industry vacancies, the Head of Program can review and approve them in one click, and students can browse and apply for validated internships through a clean, intuitive interface.",
            features: [
              { title: "Role-Based Dashboards", desc: "Designed distinct, tailored user interfaces for three main user roles: Students, Lecturers, and the Head of Program (Kaprodi)." },
              { title: "Vacancy Submission System", desc: "A streamlined input form for Lecturers to register new internship opportunities from industry partners seamlessly." },
              { title: "Centralized Approval Workflow", desc: "A secure validation mechanism allowing the Kaprodi to review, reject, or approve internship listings before they go live for students." },
              { title: "Student Exploration Portal", desc: "An interactive and easy-to-navigate portal for students to discover approved vacancies, read requirements, and select their desired internship." },
              { title: "Responsive Front-End Architecture", desc: "Built using HTML, CSS, JavaScript, and Bootstrap to guarantee a lightweight, mobile-friendly, and accessible user experience across all devices." }
            ]
          }
        },
        {
          id: 2,
          title: "Stunting Detection App",
          category: "Mobile Development",
          status: "Completed",
          image: "/proj-stunting.jpg",
          desc: "Developed LifeGrow, a mobile application integrating machine learning to help parents detect and monitor stunting risks in toddlers, alongside BMI calculators and educational health articles.",
          tech: ["Android Studio", "Machine Learning", "Figma", "UI/UX Design"],
          caseStudy: {
            problem: "Indonesia faces high stunting rates due to chronic malnutrition and limited access to healthcare education. Parents, especially those with limited health literacy, lack accessible tools to continuously monitor their toddlers' growth and nutritional needs during the crucial first 1000 days.",
            solution: "Created 'LifeGrow', a user-friendly mobile application that empowers parents to detect early signs of stunting. The app utilizes a machine learning model to provide quick, accurate growth analysis and serves as an educational hub to raise awareness about child nutrition and health.",
            features: [
              { title: "ML-Powered Stunting Detection", desc: "Analyzes birth and current data (weight, height, age, gender) through a machine learning model to predict potential stunting risks accurately." },
              { title: "Integrated BMI Calculator", desc: "A built-in Body Mass Index calculator adapted to Indonesian health guidelines for both children and adults." },
              { title: "Educational Article Hub", desc: "A curated collection of articles providing parents with actionable insights on stunting prevention, nutrition, and health management." },
              { title: "Growth History Tracking", desc: "Allows parents to manage and review previous stunting analysis records to monitor their child's developmental progress over time." },
              { title: "Admin Content Management", desc: "A dedicated portal for system administrators to seamlessly add, update, or remove educational articles dynamically." }
            ]
          }
        },
        {
          id: 1,
          title: "Online Learning UI/UX",
          category: "UI/UX Design",
          status: "Completed",
          image: "/proj-uiux.jpg",
          desc: "Designed an end-to-end, user-centric interface for an online learning platform. Translated complex educational requirements into interactive Figma prototypes, streamlining user navigation.",
          tech: ["Figma", "Wireframing", "Interactive Prototyping", "User Research"],
          caseStudy: {
            problem: "Current learning systems face low student engagement, technological gaps for both educators and students, and difficulty balancing entertaining gamification with strict academic curriculums and diverse learning styles.",
            solution: "Implemented an inclusive and adaptive gamified learning approach. Transformed the learning process into an interactive and collaborative experience, supported by accessible technical onboarding and strict oversight to align with curriculum goals.",
            features: [
              { title: "Accessibility & Personalization", desc: "A highly user-friendly UI/UX featuring a content recommendation system adapted to individual learning styles (visual, text, audio)." },
              { title: "Gamification System", desc: "Interactive exams/quests format with real-time Leaderboards and Dynamic Badges." },
              { title: "Collaboration Space", desc: "Integrated team project spaces, discussion forums, and academic guilds to encourage social interaction." },
              { title: "Integrated Help Center", desc: "In-app interactive tutorials (tooltips), quick guides, and helpdesk to onboard users seamlessly." },
              { title: "Curriculum Control Panel", desc: "A dedicated dashboard for lecturers to map game points and quizzes directly to curriculum indicators." }
            ]
          }
        }
      ]
    },
    id: {
      badge: "Portofolio",
      title: "Proyek Unggulan.",
      subtitle: "Pameran beragam karya dari web full-stack, deep learning, bot otomatisasi, hingga desain UI/UX.",
      statusDone: "Selesai",
      statusDev: "Tahap Dev",
      viewDetail: "Lihat Detail",
      
      lblProblem: "Kesimpulan Masalah",
      lblSolution: "Pendekatan Solusi",
      lblFeatures: "Fitur Esensial",

      projects: [
        {
          id: 7,
          title: "Sistem Kelapa Sawit KUD",
          category: "Full-Stack Web",
          status: "Selesai",
          image: "/proj-sawit.jpg",
          desc: "Membangun sistem web full-stack komprehensif untuk pemilik kebun (KUD Intan Ma'mur) guna melacak harga harian kelapa sawit, memantau hasil panen, dan mengelola data petani secara efisien.",
          tech: ["React.js", "Laravel", "Tailwind CSS", "MySQL", "WhatsApp API"],
          caseStudy: {
            problem: "KUD Intan Ma'mur mengandalkan pencatatan manual (buku/Excel) yang memicu risiko kehilangan data dan selisih laporan (trust issue) antara pengurus dan petani. Selain itu, harga Tandan Buah Segar (TBS) menyebar dari mulut ke mulut sehingga merugikan petani akibat informasi yang lambat dan tidak transparan.",
            solution: "Merancang dan membangun sistem informasi berbasis web secara mandiri menggunakan metodologi Rapid Solo Software Development (RSSD). Sistem ini mendigitalisasi pencatatan panen dan menyediakan portal transparan bagi petani maupun pengurus koperasi secara real-time.",
            features: [
              { title: "Manajemen Data Panen Terpusat", desc: "Fitur untuk pengurus melakukan pencatatan hasil panen harian, perhitungan total otomatis, dan pembuatan rekapitulasi laporan secara terstruktur." },
              { title: "Portal Transparansi Petani", desc: "Akses login khusus yang aman bagi setiap petani untuk memantau histori data panen pribadi dan harga kelapa sawit secara mandiri." },
              { title: "Notifikasi Harga via WhatsApp", desc: "Fitur pembaruan harga TBS terpusat yang diintegrasikan dengan broadcast WhatsApp API untuk menyebarkan informasi perubahan harga langsung ke perangkat petani." },
              { title: "Pengembangan Mandiri (RSSD)", desc: "Sistem dibangun end-to-end oleh solo developer (Full-Stack) dengan pendekatan Agile yang modular agar fitur dapat dikembangkan dan diuji secara bertahap." },
              { title: "Teruji Secara Usability (SUS)", desc: "Sistem dievaluasi secara ketat menggunakan System Usability Scale (SUS) untuk memastikan antarmuka (UI/UX) mudah digunakan oleh pengurus dan petani awam." }
            ]
          }
        },
        {
          id: 6,
          title: "Otomatisasi Data Telkomsel",
          category: "Data Engineering",
          status: "Selesai",
          image: "/proj-tsel.jpg",
          desc: "Merancang sistem pemantauan operasional backend dan pipeline data yang andal, mengelola ekstraksi data skala besar, transfer server yang aman, dan deployment berbasis kontainer.",
          tech: ["Python", "Telegram API", "Selenium", "Docker", "Paramiko"],
          caseStudy: {
            problem: "Tim Network Broadband Experience di Telkomsel membutuhkan akses cepat terhadap data kualitas jaringan untuk pemantauan harian. Proses ekstraksi dan pengolahan data secara manual dari sistem web internal sangat memakan waktu dan tidak efisien, terutama untuk pekerjaan yang berulang.",
            solution: "Mengembangkan 'Nonatero', sebuah bot Telegram otomasi yang dirancang khusus untuk mengambil data dari sistem intranet Telkomsel. Bot ini memproses data mentah dan menyajikan metrik jaringan secara real-time langsung kepada tim melalui perintah chat, sehingga mempercepat alur kerja secara signifikan.",
            features: [
              { title: "Otomatisasi Web Scraping", desc: "Menggunakan Python dan Selenium untuk mengekstraksi data operasional jaringan secara otomatis dari portal web internal perusahaan." },
              { title: "Integrasi Bot Real-time", desc: "Membangun antarmuka bot responsif dengan Telegram API yang memungkinkan engineer meminta data spesifik kapan saja melalui command khusus." },
              { title: "Operasi Server Aman", desc: "Menerapkan library Paramiko untuk koneksi SSH dan SFTP yang aman guna mengelola transfer file dan eksekusi di sisi server." },
              { title: "Deployment Berbasis Kontainer", desc: "Membungkus aplikasi bot beserta seluruh dependensinya menggunakan lingkungan Docker untuk memastikan performa yang stabil dan terisolasi." },
              { title: "Peningkatan Efisiensi", desc: "Berhasil menghilangkan proses pengambilan data manual yang repetitif, meningkatkan produktivitas tim dan kecepatan analisis jaringan." }
            ]
          }
        },
        {
          id: 5,
          title: "Dashboard Monitoring PLN",
          category: "Web & Dashboard",
          status: "Selesai",
          image: "/proj-pln.jpg",
          desc: "Mengembangkan dashboard monitoring full-stack untuk mengkonsolidasi data regional, melakukan migrasi dari sistem lama ke framework modern. Mengelola integrasi end-to-end dengan desain UI/UX yang bersih.",
          tech: ["React.js", "Vite", "Laravel", "MySQL", "Google Sheets API"],
          caseStudy: {
            problem: "Bidang Niaga PT PLN UID RKR mengalami kesulitan dalam memantau data kinerja CRM (Customer Relationship Management). Ketergantungan pada pembaruan dokumen Microsoft Excel secara manual menyebabkan lambatnya evaluasi, ketiadaan visualisasi tren real-time, dan kurangnya transparansi data antar divisi.",
            solution: "Membangun dashboard monitoring CRM berbasis website yang tersentralisasi untuk mengubah pelaporan manual menjadi platform analitik interaktif. Dengan mengintegrasikan Google Sheets sebagai sumber data utama, sistem ini memangkas waktu pemrosesan data secara signifikan dan mendukung manajemen dalam pengambilan keputusan yang akurat.",
            features: [
              { title: "Integrasi Data Otomatis", desc: "Memanfaatkan Google Sheets API dan REST API untuk mensinkronisasi data dari spreadsheet konvensional ke dalam basis data web modern secara otomatis." },
              { title: "Visualisasi Analitik Interaktif", desc: "Merancang UI/UX yang rapi dan profesional, menyajikan tabel interaktif dan grafik analitik untuk melacak aktivitas pemasaran dan data 'close won' secara real-time." },
              { title: "Manajemen Data Lanjutan", desc: "Dilengkapi dengan fitur pencarian spesifik, filter data dinamis, dan kemampuan ekspor grafik menjadi gambar untuk mempermudah penyusunan laporan manajerial." },
              { title: "Sistem Notifikasi Terpadu", desc: "Menerapkan sistem peringatan langsung di dalam dashboard untuk memberikan informasi seketika terkait pembaruan indikator kinerja CRM." },
              { title: "Implementasi Teknologi Modern", desc: "Dibangun menggunakan pustaka React.js dengan Vite untuk menghasilkan antarmuka yang sangat responsif, didukung oleh framework Laravel di sisi backend." }
            ]
          }
        },
        {
          id: 4,
          title: "Simulasi Haji VR",
          category: "3D Game Development",
          status: "Selesai",
          image: "/proj-vr.jpg",
          desc: "Mengembangkan pemodelan dan tekstur 3D Tanah Suci yang sangat realistis untuk mendukung aplikasi Virtual Reality (VR) sebagai media edukasi dan simulasi tata cara ibadah haji.",
          tech: ["Blender", "Substance Painter", "Unity 3D", "3D Texturing"],
          caseStudy: {
            problem: "Metode bimbingan haji konvensional dinilai kurang interaktif dan mendalam. Hal ini sering mengakibatkan jamaah (terutama pemula) kurang memahami tata cara ibadah, sehingga rawan terjadi kesalahan fatal di Tanah Suci, seperti keliru memulai titik Sa'i atau urutan rukun haji.",
            solution: "Merancang lingkungan 3D Tanah Suci yang sangat detail dan realistis untuk simulasi Virtual Reality (VR). Pendekatan imersif ini memungkinkan calon jamaah untuk merasakan suasana dan berlatih secara langsung di lingkungan virtual sebelum berangkat ke lokasi sebenarnya.",
            features: [
              { title: "Pemodelan 3D Presisi", desc: "Membangun model 3D akurat dari lokasi utama ibadah haji, termasuk Masjidil Haram, Ka’bah, dan Arafah, berdasarkan referensi visual dan wawancara dengan pakar." },
              { title: "Tekstur Realistis (High-Fidelity)", desc: "Menerapkan teknik texturing tingkat lanjut menggunakan Substance Painter untuk menciptakan material visual yang menyerupai kondisi nyata, meningkatkan sensasi kehadiran pengguna di dunia VR." },
              { title: "Desain Lingkungan Interaktif", desc: "Merancang interior dan eksterior area spesifik yang krusial untuk simulasi, memastikan skala dan tata ruang akurat agar jamaah memahami arah dan pergerakan yang benar." },
              { title: "Optimasi Integrasi VR", desc: "Mengoptimalkan seluruh aset 3D (mesh dan tekstur) agar siap dan ringan saat diimplementasikan ke dalam game engine Unity untuk kebutuhan aplikasi Virtual Reality." },
              { title: "Pengembangan Berbasis Riset", desc: "Menggunakan metode Game Development Life Cycle (GDLC) dan studi literatur yang ketat untuk memastikan keakuratan bentuk bangunan sesuai dengan kondisi asli di Mekkah." }
            ]
          }
        },
        {
          id: 3,
          title: "Sistem Manajemen Magang",
          category: "Full-Stack Web",
          status: "Selesai",
          image: "/proj-intern.jpg",
          desc: "Bekerja sebagai Front-End Developer yang bertanggung jawab merancang dan mengimplementasikan antarmuka pengguna untuk memastikan website portal magang kampus yang sangat responsif dan ramah pengguna.",
          tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
          caseStudy: {
            problem: "Proses pencarian dan validasi tempat magang mahasiswa sangat tidak terstruktur. Informasi mitra industri berserakan, dan alur persetujuan masih mengandalkan komunikasi manual. Hal ini menyulitkan mahasiswa untuk mendapatkan posisi yang valid dan menyulitkan Kepala Program Studi (Kaprodi) dalam memantau lowongan yang tersedia.",
            solution: "Mengembangkan portal Manajemen Magang terpusat berbasis peran. Platform ini mendigitalisasi seluruh alur kerja: Dosen dapat mempublikasikan lowongan industri dengan mudah, Kaprodi dapat meninjau dan menyetujuinya dalam satu klik, dan mahasiswa dapat mencari serta melamar magang tervalidasi melalui antarmuka yang bersih dan intuitif.",
            features: [
              { title: "Dashboard Berbasis Peran", desc: "Merancang antarmuka pengguna yang berbeda dan disesuaikan untuk tiga peran utama: Mahasiswa, Dosen, dan Kepala Program Studi (Kaprodi)." },
              { title: "Sistem Pengajuan Lowongan", desc: "Formulir input yang disederhanakan bagi Dosen untuk mendaftarkan peluang magang baru dari mitra industri secara lancar." },
              { title: "Alur Persetujuan Terpusat", desc: "Mekanisme validasi yang aman yang memungkinkan Kaprodi untuk meninjau, menolak, atau menyetujui daftar magang sebelum dipublikasikan kepada mahasiswa." },
              { title: "Portal Eksplorasi Mahasiswa", desc: "Portal interaktif dan mudah dinavigasi bagi mahasiswa untuk menemukan lowongan yang disetujui, membaca persyaratan, dan memilih magang yang mereka inginkan." },
              { title: "Arsitektur Front-End Responsif", desc: "Dibangun menggunakan HTML, CSS, JavaScript, dan Bootstrap untuk menjamin pengalaman pengguna yang ringan, ramah seluler, dan dapat diakses di semua perangkat." }
            ]
          }
        },
        {
          id: 2,
          title: "Aplikasi Deteksi Stunting",
          category: "Mobile Development",
          status: "Selesai",
          image: "/proj-stunting.jpg",
          desc: "Mengembangkan LifeGrow, aplikasi mobile terintegrasi machine learning untuk membantu orang tua mendeteksi dan memantau risiko stunting pada balita, dilengkapi kalkulator BMI dan artikel kesehatan edukatif.",
          tech: ["Android Studio", "Machine Learning", "Figma", "UI/UX Design"],
          caseStudy: {
            problem: "Tingginya angka stunting di Indonesia disebabkan oleh kurangnya pemahaman gizi di 1000 hari pertama anak dan minimnya akses layanan kesehatan. Orang tua kesulitan memantau tumbuh kembang anak karena minimnya alat bantu yang praktis dan edukatif.",
            solution: "Membangun 'LifeGrow', aplikasi mobile yang dirancang khusus untuk orang tua. Aplikasi ini memanfaatkan model machine learning untuk mendeteksi risiko stunting secara cepat dan akurat, serta menyediakan akses langsung ke artikel edukasi untuk langkah pencegahan.",
            features: [
              { title: "Deteksi Stunting Machine Learning", desc: "Menganalisis data fisik anak (berat/panjang lahir dan saat ini, usia, gender) menggunakan model ML untuk memprediksi risiko stunting secara presisi." },
              { title: "Kalkulator BMI Terintegrasi", desc: "Fitur perhitungan Indeks Massa Tubuh (IMT) yang disesuaikan dengan pedoman kesehatan Indonesia untuk anak-anak dan orang dewasa." },
              { title: "Pusat Artikel Edukasi", desc: "Kumpulan artikel informatif yang membantu orang tua memahami cara mencegah, mengobati, dan mengelola asupan gizi anak." },
              { title: "Manajemen Riwayat Analisis", desc: "Sistem pencatatan yang memungkinkan pengguna untuk menyimpan dan memantau rekam jejak hasil deteksi stunting sebelumnya." },
              { title: "Panel Pengelola Konten", desc: "Sistem khusus (dashboard) bagi admin untuk menambah, mengubah, atau menghapus artikel edukasi yang tampil pada aplikasi." }
            ]
          }
        },
        {
          id: 1,
          title: "UI/UX Platform Edukasi",
          category: "Desain UI/UX",
          status: "Selesai",
          image: "/proj-uiux.jpg",
          desc: "Membuat prototipe desain UI/UX dari konsep awal hingga mockup akhir, memastikan antarmuka yang intuitif, menarik, dan ramah pengguna untuk platform pendidikan.",
          tech: ["Figma", "Prototyping", "Wireframing", "User Research"],
          caseStudy: {
            problem: "Kendala utama sistem pembelajaran saat ini adalah rendahnya keterlibatan pelajar, hambatan teknis yang dialami dosen maupun pelajar, serta sulitnya menyeimbangkan elemen hiburan (gamifikasi) dengan bobot kurikulum dan keragaman gaya belajar.",
            solution: "Menerapkan pendekatan pembelajaran berbasis gamifikasi yang inklusif dan adaptif. Mengubah proses belajar menjadi pengalaman interaktif dan kolaboratif, diiringi pendampingan teknis yang mudah dipahami, serta pengawasan ketat terpusat pada kurikulum.",
            features: [
              { title: "Aksesibilitas & Personalisasi", desc: "UI/UX yang sangat user-friendly dengan sistem rekomendasi materi yang menyesuaikan gaya belajar masing-masing pelajar." },
              { title: "Sistem Gamifikasi", desc: "Format ujian/kuis interaktif dengan Leaderboard dan Dynamic Badges yang diperbarui secara real-time." },
              { title: "Ruang Kolaborasi", desc: "Fitur proyek tim, forum diskusi, atau guild/clan akademik untuk mendorong interaksi sosial." },
              { title: "Pusat Bantuan Terpadu", desc: "Tutorial interaktif (tooltips), video panduan singkat, dan helpdesk langsung di dalam aplikasi untuk memandu pengguna." },
              { title: "Panel Kontrol Kurikulum", desc: "Dasbor khusus dosen untuk memetakan poin game atau kuis agar selalu sejalan dengan indikator kurikulum." }
            ]
          }
        }
      ]
    }
  };

  const t = content[lang];

  // Efek Animasi Scroll
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
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  // Fungsi Panah Carousel
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <section id="projects" className="relative w-full min-h-screen py-24 bg-white text-gray-900 snap-start overflow-hidden flex flex-col justify-center border-t border-gray-100">

        {/* Background Bias Cahaya Halus */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-50 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-[-10%] w-[30rem] h-[30rem] bg-cyan-50 rounded-full blur-[100px]"></div>
        </div>

        <div
          ref={sectionRef}
          className={`relative z-10 w-full transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
        >

          {/* HEADER SECTION (Top) */}
          <div className="max-w-[90rem] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">{t.badge}</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-4 text-gray-900">
                {t.title}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {/* Navigasi Arrows */}
            <div className="flex gap-4 shrink-0">
              <button
                onClick={() => scroll("left")}
                className="w-14 h-14 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-14 h-14 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          {/* CAROUSEL SECTION (Bottom) */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-8 pb-16 px-6 lg:px-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pt-4"
          >
            {t.projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="snap-center sm:snap-start shrink-0 w-[85vw] sm:w-[26rem] md:w-[28rem] bg-white rounded-[2rem] border border-gray-200 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden group flex flex-col hover:-translate-y-2 cursor-pointer"
              >

                {/* --- BAGIAN ATAS: GAMBAR --- */}
                <div className="relative w-full h-56 md:h-64 bg-gray-900 overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md backdrop-blur-md ${project.status === "Selesai" || project.status === "Completed"
                        ? "bg-green-500/90 text-white"
                        : "bg-orange-500/90 text-white"
                      }`}>
                      {project.status === "Selesai" || project.status === "Completed" ? t.statusDone : t.statusDev}
                    </span>
                  </div>
                </div>

                {/* --- BAGIAN BAWAH: DESKRIPSI & TECH STACK --- */}
                <div className="p-8 flex flex-col flex-grow bg-white relative">

                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

                  <span className="text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-3">{project.category}</span>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed text-sm mb-6 flex-grow line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((techItem, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 rounded-lg group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  {/* Tombol "Lihat Detail" */}
                  <div className="mt-auto w-full pt-4 border-t border-gray-100">
                    <div className="w-full py-3 rounded-xl border border-gray-200 text-sm font-bold text-gray-500 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                      <span>{t.viewDetail}</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                </div>

              </div>
            ))}

            {/* Extra Spacer for smooth ending scroll */}
            <div className="shrink-0 w-4 sm:w-12"></div>
          </div>

        </div>
      </section>

      {/* --- MODAL (LIGHTBOX) DETAIL PROJECT --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">

          {/* Latar Belakang Gelap / Blur */}
          <div
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity cursor-pointer"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Konten Modal */}
          {/* UBAH DISINI: max-h-[85vh] agar tidak mepet ujung browser HP */}
          <div className="relative bg-white w-full max-w-3xl rounded-[1.5rem] md:rounded-[2rem] shadow-2xl overflow-hidden animate-fade-in-up z-10 flex flex-col max-h-[85vh] md:max-h-[90vh]">

            {/* Tombol Close (Disesuaikan ukurannya untuk HP) */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-20 w-8 h-8 md:w-10 md:h-10 bg-black/40 hover:bg-black/80 text-white backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300"
            >
              ✕
            </button>

            {/* Foto Preview di ATAS */}
            <div className="w-full h-40 md:h-64 relative shrink-0 bg-gray-900 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent"></div>

              <div className="absolute bottom-4 left-4 md:left-8 z-10">
                <span className={`px-2 md:px-3 py-1 rounded-md text-[9px] md:text-[10px] font-bold uppercase tracking-wider shadow-md ${selectedProject.status === "Selesai" || selectedProject.status === "Completed"
                    ? "bg-green-500 text-white"
                    : "bg-orange-500 text-white"
                  }`}>
                  {selectedProject.status === "Selesai" || selectedProject.status === "Completed" ? t.statusDone : t.statusDev}
                </span>
              </div>
            </div>

            {/* Detail di BAWAH */}
            <div className="w-full p-5 md:p-8 flex flex-col overflow-y-auto bg-white custom-scrollbar">

              <div className="mb-5 md:mb-6">
                <p className="text-xs md:text-sm text-blue-600 font-bold mb-1 md:mb-2 uppercase tracking-wider">{selectedProject.category}</p>
                <h3 className="text-xl md:text-3xl font-black text-gray-900 mb-2 md:mb-4 leading-tight">{selectedProject.title}</h3>
              </div>

              {/* LOGIKA CONDITIONAL RENDERING: Tampilkan Case Study Jika Ada */}
              {selectedProject.caseStudy ? (
                <div className="mb-6 md:mb-8 space-y-6 md:space-y-8 border-b border-gray-100 pb-6 md:pb-8">
                  
                  {/* Deskripsi Pembuka */}
                  <p className="text-gray-600 leading-relaxed text-sm border-l-4 border-blue-500 pl-3 md:pl-4 italic">
                    {selectedProject.desc}
                  </p>

                  {/* Problem & Solution Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-red-50/50 p-4 md:p-5 rounded-2xl border border-red-100">
                      <h4 className="flex items-center gap-2 text-xs md:text-sm font-bold text-red-700 mb-2 md:mb-3 uppercase tracking-wide">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        {t.lblProblem}
                      </h4>
                      <p className="text-gray-700 text-xs md:text-sm leading-relaxed">{selectedProject.caseStudy.problem}</p>
                    </div>
                    
                    <div className="bg-green-50/50 p-4 md:p-5 rounded-2xl border border-green-100">
                      <h4 className="flex items-center gap-2 text-xs md:text-sm font-bold text-green-700 mb-2 md:mb-3 uppercase tracking-wide">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {t.lblSolution}
                      </h4>
                      <p className="text-gray-700 text-xs md:text-sm leading-relaxed">{selectedProject.caseStudy.solution}</p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-gray-900 mb-3 md:mb-4 uppercase tracking-wide border-b border-gray-100 pb-2">
                      {t.lblFeatures}
                    </h4>
                    <div className="grid grid-cols-1 gap-2 md:gap-4">
                      {selectedProject.caseStudy.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-3 md:gap-4 items-start p-2 md:p-3 hover:bg-gray-50 rounded-xl transition-colors">
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xs md:text-sm">
                            {idx + 1}
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-900 text-xs md:text-sm mb-1">{feature.title}</h5>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ) : (
                <p className="text-gray-600 leading-relaxed text-sm mb-6 md:mb-8">
                  {selectedProject.desc}
                </p>
              )}

              {/* Tools & Technology (Bagian Bawah) */}
              <div className="mt-auto">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 md:mb-4">Tools & Technology Used</h4>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {selectedProject.tech.map(tool => (
                    <span key={tool} className="px-2.5 py-1 md:px-3 md:py-1.5 bg-gray-50 text-gray-700 text-[10px] md:text-xs font-bold rounded-lg border border-gray-200 transition-colors cursor-default">
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