import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Footer from "../Footer"
import ScrollToNext from "../ScrollToNext"
import profilePhoto from "../../assets/profile.png"
import certCpp from "../../assets/cert_cpp.jpg"
import certPython from "../../assets/cert_python.jpg"
import certJava from "../../assets/cert_java.jpg"
import certReactjs from "../../assets/cert_reactjs.jpg"
import certPhp from "../../assets/cert_php.jpg"

const skills = [
  "React", "JavaScript", "Tailwind CSS", "Bootstrap",
  "PHP", "Laravel", "Git", "PostgreSQL", "Hosting",
]

const quickFacts = [
  { icon: "fa-solid fa-location-dot", label: "Based in", value: "Phnom Penh, Cambodia" },
  { icon: "fa-solid fa-graduation-cap", label: "Studying", value: "Norton University" },
  { icon: "fa-solid fa-code", label: "Focus", value: "Full Stack Web Development" },
]

const certificates = [
  {
    id: 1,
    title: "Basic / Advance C / C++ / OOP & Algorithm",
    granted: "October 15, 2024",
    image: certCpp,
    color: "from-orange-500/10 to-amber-500/5 border-orange-500/20",
    badge: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    icon: <i className="fa-solid fa-cogs"></i>,
  },
  {
    id: 2,
    title: "Basic / Advance Python / Flask & Project Courses",
    granted: "March 15, 2025",
    image: certPython,
    color: "from-blue-500/10 to-sky-500/5 border-blue-500/20",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    icon: <i className="fa-brands fa-python"></i>,
  },
  {
    id: 3,
    title: "Basic / Advance Java / MySQL / iReport & Project Courses",
    granted: "June 15, 2025",
    image: certJava,
    color: "from-red-500/10 to-rose-500/5 border-red-500/20",
    badge: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    icon: <i className="fa-brands fa-java"></i>,
  },
  {
    id: 4,
    title: "Basic / Advance PHP / MySQL / Laravel / API & Project Courses",
    granted: "October 15, 2025",
    image: certPhp,
    color: "from-purple-500/10 to-violet-500/5 border-purple-500/20",
    badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    icon: <i className="fa-brands fa-php"></i>,
  },
  {
    id: 5,
    title: "HTML, CSS, Bootstrap, JavaScript, ReactJS & Project Courses",
    granted: "November 15, 2025",
    image: certReactjs,
    color: "from-cyan-500/10 to-teal-500/5 border-cyan-500/20",
    badge: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    icon: <i className="fa-brands fa-react"></i>,
  },
]

const experiences = [
  {
    role: "Full-stack Developer Intern — Inklusivity Technology",
    period: "2026 · 6 Months (Completed)",
    type: "Internship",
    desc: "Designed and built AFM, a full financial modelling platform (7-year P&L, balance sheet, cash flow, valuation & scenario projections), 100% solo from an empty repo to production — now live at fmodelling.e-workplace.net.",
  },
  {
    role: "Studying at Norton University",
    period: "2023 – Present",
    type: "Education",
    desc: "Studying Software Development, focusing on coding, technology, and creating innovative digital solutions.",
  },
  {
    role: "Etec Center",
    period: "2021 – Present",
    type: "Learning",
    desc: "After finishing my BacII in 2022, I started learning C, C++, Python, Flask, Java, SQL, web design, and PHP Laravel at Etec Center to strengthen my programming and web development skills.",
  },
]

const stats = [
  { value: `${certificates.length}`, label: "Certificates" },
  { value: "6", label: "Months Interning" },
  { value: `${skills.length}`, label: "Technologies" },
  { value: "5+", label: "Projects Shipped" },
]

/* Shared card shell so every panel reads as one system */
const panel =
  "bg-white/80 border border-slate-200 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 rounded-2xl"

function SectionHeading({ icon, tint, children, sub }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
        <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${tint}`}>
          <i className={icon} />
        </span>
        {children}
      </h2>
      {sub && <p className="text-slate-500 text-sm mt-1.5 ml-11">{sub}</p>}
    </div>
  )
}

export default function About() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* ── Certificate Modal / Lightbox ── */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative z-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Certificate of Completion</p>
                <h3 className="text-slate-900 dark:text-white font-bold text-sm leading-snug max-w-xs">{selectedCert.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="ml-4 flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-colors text-lg leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Certificate image */}
            <div className="bg-slate-100 dark:bg-slate-950 p-4">
              <img
                src={selectedCert.image}
                alt={`Certificate – ${selectedCert.title}`}
                className="w-full rounded-lg object-contain max-h-[70vh]"
              />
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-slate-500 text-xs">Granted: {selectedCert.granted}</span>
              <span className="text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                ✓ Verified
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── Background blobs ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      {/* ── Page Content ── */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* ── Hero header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-10"
          >
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest">
                <span className="w-8 h-px bg-cyan-600 dark:bg-cyan-400" />
                About Me
              </span>
              <h1 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white mt-3">
                Who I{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 dark:from-cyan-400 via-blue-500 dark:via-blue-400 to-purple-600 dark:to-purple-500">Am</span>
              </h1>
            </div>

            {/* Stat strip fills the space beside the title */}
            <div className="lg:col-span-5 grid grid-cols-4 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/80 border border-slate-200 dark:bg-slate-900/60 dark:border-slate-800 rounded-xl px-2 py-3 text-center"
                >
                  <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
                    {s.value}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Two-column body ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

            {/* ── Left rail: profile + skills (sticky on desktop) ── */}
            <motion.aside
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-4 lg:sticky lg:top-24 space-y-6"
            >
              {/* Profile card */}
              <div className="relative bg-gradient-to-br from-white to-slate-100 border border-slate-200 shadow-sm dark:from-slate-900 dark:to-slate-800/60 dark:border-slate-700/60 rounded-3xl p-6 sm:p-7 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                <div className="absolute top-0 right-0 w-56 h-56 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="relative flex flex-col items-center text-center">
                  {/* Photo */}
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-[18px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 opacity-70 blur-[1.5px]" />
                    <div className="relative w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-slate-900 shadow-2xl shadow-cyan-500/10">
                      <img
                        src={profilePhoto}
                        alt="Meng Rithisak"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Open to work
                    </div>
                  </div>

                  <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-7">Meng Rithisak</h2>
                  <p className="text-cyan-600 dark:text-cyan-400 font-semibold mt-0.5 text-sm">Full Stack Developer</p>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mt-4">
                    Passionate about creating elegant solutions to complex problems — building modern,
                    responsive applications that users love.
                  </p>
                </div>

                {/* Quick facts */}
                <div className="relative mt-6 pt-5 border-t border-slate-200 dark:border-slate-700/60 space-y-3">
                  {quickFacts.map((f) => (
                    <div key={f.label} className="flex items-center gap-3">
                      <span className="w-8 h-8 flex-shrink-0 rounded-lg bg-slate-100 border border-slate-200 dark:bg-slate-800/60 dark:border-slate-700 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-xs">
                        <i className={f.icon} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] text-slate-500 uppercase tracking-wider leading-none">{f.label}</p>
                        <p className="text-slate-800 dark:text-slate-200 text-sm font-medium truncate mt-1">{f.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="relative grid grid-cols-2 gap-3 mt-6">
                  <Link
                    to="/portfolio"
                    className="text-center text-sm font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    My Work
                  </Link>
                  <Link
                    to="/contact"
                    className="text-center text-sm font-semibold px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-slate-300 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700 dark:text-slate-200 transition-all duration-200"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Skills — chips instead of a sparse grid */}
              <div className={`${panel} p-6`}>
                <SectionHeading
                  icon="fa-solid fa-bolt"
                  tint="bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400"
                >
                  Skills
                </SectionHeading>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-cyan-500/30 text-slate-700 hover:text-slate-900 dark:bg-slate-800/60 dark:hover:bg-slate-700/60 dark:border-slate-700 dark:hover:border-cyan-500/30 dark:text-slate-300 dark:hover:text-white px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.aside>

            {/* ── Right column: experience + certificates ── */}
            <div className="lg:col-span-8 space-y-6">

              {/* ── Experience ── */}
              <motion.section
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`${panel} p-6 sm:p-8`}
              >
                <SectionHeading
                  icon="fa-regular fa-calendar-alt"
                  tint="bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400"
                >
                  Experience &amp; Education
                </SectionHeading>

                <div className="space-y-5 relative">
                  <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-transparent hidden sm:block" />
                  {experiences.map((exp, i) => {
                    const isIntern = exp.type === "Internship"
                    return (
                      <div key={i} className="sm:pl-10 relative">
                        <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full items-center justify-center hidden sm:flex ${
                          isIntern ? "bg-gradient-to-br from-amber-400 to-orange-500" : "bg-gradient-to-br from-cyan-400 to-blue-500"
                        }`}>
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                        <div className={`rounded-xl p-5 transition-colors duration-300 ${
                          isIntern
                            ? "bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/25 hover:border-amber-500/40"
                            : "bg-slate-100/80 border border-slate-200 hover:border-slate-300 dark:bg-slate-800/40 dark:border-slate-700/60 dark:hover:border-slate-600"
                        }`}>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <h3 className="text-slate-900 dark:text-white font-bold">{exp.role}</h3>
                            <span className={`text-xs border px-2.5 py-0.5 rounded-full font-medium ${
                              isIntern
                                ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25"
                                : "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20"
                            }`}>
                              {exp.period}
                            </span>
                          </div>
                          <p className={`text-xs font-medium mb-2 ${isIntern ? "text-amber-600 dark:text-amber-400" : "text-blue-600 dark:text-blue-400"}`}>
                            {isIntern && <i className="fa-solid fa-star mr-1.5" />}
                            {exp.type}
                          </p>
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.section>

              {/* ── Certificates ── */}
              <motion.section
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`${panel} p-6 sm:p-8`}
              >
                <SectionHeading
                  icon="fa-solid fa-trophy"
                  tint="bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400"
                  sub="Click any certificate to see the official document"
                >
                  Certificates – Etec Center
                </SectionHeading>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certificates.map((cert, i) => {
                    const isOrphan = i === certificates.length - 1 && certificates.length % 2 === 1
                    return (
                      <button
                        key={cert.id}
                        onClick={() => setSelectedCert(cert)}
                        className={`group text-left bg-gradient-to-br ${cert.color} border rounded-xl p-4 flex items-center gap-4 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ${
                          isOrphan ? "sm:col-span-2" : ""
                        }`}
                      >
                        {/* Thumbnail preview */}
                        <div className="relative w-24 h-[68px] flex-shrink-0 rounded-lg overflow-hidden border border-white/60 dark:border-slate-700 bg-slate-100 dark:bg-slate-950">
                          <img
                            src={cert.image}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 flex items-center justify-center transition-colors duration-200">
                            <svg className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-base text-slate-700 dark:text-slate-200">{cert.icon}</span>
                            <span className={`text-[10px] border px-2 py-0.5 rounded-full font-medium ${cert.badge}`}>
                              Etec Center
                            </span>
                          </div>
                          <p className="text-slate-900 dark:text-white font-semibold text-sm leading-snug">{cert.title}</p>
                          <p className="text-slate-500 text-xs mt-1">Granted: {cert.granted}</p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </motion.section>

            </div>
          </div>
        </div>
      </div>

      <ScrollToNext to="/portfolio" label="My Projects" />
      <Footer />
    </div>
  )
}
