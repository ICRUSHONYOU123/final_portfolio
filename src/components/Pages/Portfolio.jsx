import { useState } from "react"
import { motion } from "framer-motion"
import Img1 from "../../assets/img1.jpg"
import Img2 from "../../assets/img2.jpg"
import Img4 from "../../assets/img4.jpg"
import Img5 from "../../assets/image5.png"
import FModelling from "../../assets/fmodelling.png"
import Footer from "../Footer"
import ScrollToNext from "../ScrollToNext"

/* ── Featured internship project ── */
const featured = {
  title: "AFM — Financial Modelling Platform",
  company: "Inklusivity Technology",
  role: "Software Developer Internship · 6 Months · Completed",
  link: "https://fmodelling.e-workplace.net/",
  image: FModelling,
  description:
    "A full financial modelling & projection platform that I designed, built and shipped 100% alone — from an empty repository to a live production system — during my 6-month internship. It generates real-time 7-year financial projections with live dashboards, charts and Excel export.",
  highlights: [
    "7-Year P&L, Balance Sheet & Cash Flow projections",
    "Scenario analysis — Business As Usual vs Project",
    "Depreciation, debt schedule & company valuation",
    "Interactive dashboards, Excel export & EN/KH languages",
  ],
  tags: ["React", "Tailwind CSS", "Laravel API", "PostgreSQL", "Chart.js", "i18n EN/KH"],
  credentials: [
    { role: "User", email: "rithisak@gmail.com", password: "12345678", badge: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/30" },
  ],
}

/* ── Other projects ── */
const projects = [
  {
    id: 1,
    title: "Student Management System",
    description:
      "3-role system (Admin, Teacher, Student) with different permission levels to access features Real world project.",
    tags: ["React", "Tailwind", "Laravel", "PostgreSQL"],
    image: Img4,
    link: "#",
    video: "/student_management_demo.mp4",
    status: "live",
  },
  {
    id: 2,
    title: "Drink Store System",
    description:
      "2-role system (Admin, Customer) with different permission levels to access features real payment access QR pop up.",
    tags: ["React", "Tailwind", "Laravel", "PostgreSQL"],
    image: Img5,
    link: "#",
    video: "/drink_store_demo.mp4",
    status: "live",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A fully responsive personal portfolio built with React + Tailwind CSS as my final project at Etec Center.",
    tags: ["React", "Tailwind"],
    image: Img2,
    link: "#",
    status: "live",
  },
  {
    id: 4,
    title: "License Key Website",
    description:
      "A game hacking & selling platform with cart, checkout, payment integration, and automatic key generation.",
    tags: ["React", "Laravel", "PostgreSQL", "Tailwind"],
    image: Img1,
    link: "https://laravel-project-hosting.onrender.com/",
    status: "live",
  },
]

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "6", label: "Months Internship" },
  { value: "1", label: "Live Production App" },
  { value: "100%", label: "Self-Built From 0" },
]

/* ── Motion variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

/* ── Copy-to-clipboard chip ── */
function CopyChip({ value }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <button
      onClick={copy}
      title="Copy to clipboard"
      className={`group/chip inline-flex items-center gap-1.5 font-mono text-xs sm:text-[13px] px-2.5 py-1 rounded-md border transition-all duration-200 ${
        copied
          ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400"
          : "bg-white border-slate-300 text-slate-700 hover:text-slate-900 dark:bg-slate-800/80 dark:border-slate-700 dark:text-slate-300 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 dark:hover:text-white"
      }`}
    >
      <span className="truncate max-w-[160px] sm:max-w-none">{value}</span>
      {copied ? (
        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-3.5 h-3.5 flex-shrink-0 opacity-50 group-hover/chip:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  )
}

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
      {/* ── Header ── */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Blobs + grid pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 right-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute top-32 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative max-w-7xl mx-auto"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            <span className="w-8 h-px bg-cyan-600 dark:bg-cyan-400" />
            My Work
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-black mt-3 text-slate-900 dark:text-white">
            Projects that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 dark:from-cyan-400 via-blue-500 dark:via-blue-400 to-purple-600 dark:to-purple-500">
              ship
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-slate-600 dark:text-slate-400 mt-5 max-w-xl text-base sm:text-lg">
            A curated selection of what I've built — from full-stack web apps to a real production
            platform delivered during my internship.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/80 border border-slate-200 shadow-sm dark:bg-slate-900/70 dark:border-slate-800 rounded-2xl px-4 py-4 text-center backdrop-blur-sm hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-colors duration-300"
              >
                <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 dark:from-cyan-400 to-blue-500 dark:to-blue-400">
                  {s.value}
                </p>
                <p className="text-slate-500 text-[11px] sm:text-xs font-medium mt-1 uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Featured: Internship project ── */}
      <section className="relative pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/15 to-orange-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.9 6.26L21.5 9.27l-4.75 4.29L18.18 20 12 16.56 5.82 20l1.43-6.44L2.5 9.27l6.6-1.01L12 2z" />
              </svg>
              Featured — Internship Project
            </span>
            <span className="hidden sm:block flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="relative group"
          >
            {/* Glow behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-[28px] blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative bg-white border border-slate-200 shadow-xl shadow-slate-900/5 dark:bg-slate-900 dark:border-slate-700/80 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-5">
              {/* Screenshot */}
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative lg:col-span-3 block overflow-hidden bg-slate-100 min-h-[220px] sm:min-h-[320px]"
              >
                <img
                  src={featured.image}
                  alt={`${featured.title} — dashboard screenshot`}
                  className="w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/40 dark:lg:to-slate-900/40" />
                {/* Badges on image */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 bg-emerald-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Live in Production
                  </span>
                  <span className="bg-slate-950/80 border border-slate-600 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Built solo · from 0 → production
                  </span>
                </div>
                {/* Visit hint */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-slate-950/80 text-cyan-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-cyan-500/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  Open live site
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>

              {/* Content */}
              <div className="lg:col-span-2 p-6 sm:p-8 flex flex-col gap-5">
                <div>
                  <p className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1.5">
                    {featured.company} · {featured.role}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                    {featured.title}
                  </h2>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {featured.description}
                </p>

                {/* Highlights */}
                <ul className="grid grid-cols-1 gap-2">
                  {featured.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-600/20 dark:border-cyan-500/20 text-xs px-2.5 py-0.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Demo credentials */}
                <div className="bg-slate-50 border border-slate-200 dark:bg-slate-950/70 dark:border-slate-800 rounded-2xl p-4">
                  <p className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
                    <svg className="w-4 h-4 text-amber-500 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    Demo Login — try it yourself
                  </p>
                  <div className="space-y-2.5">
                    {featured.credentials.map((c) => (
                      <div key={c.role} className="flex flex-wrap items-center gap-2">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border uppercase tracking-wide ${c.badge}`}>
                          {c.role}
                        </span>
                        <CopyChip value={c.email} />
                        <CopyChip value={c.password} />
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-400 dark:text-slate-600 text-[11px] mt-3">Click any value to copy it.</p>
                </div>

                {/* CTA */}
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-sm font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
                >
                  Visit Live Site
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex items-center gap-3 mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">More Projects</h2>
            <span className="flex-1 h-px bg-gradient-to-r from-slate-300 dark:from-slate-700 to-transparent" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                className="group relative bg-white border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 dark:from-slate-950/80 via-transparent to-transparent" />
                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-100 dark:text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-600/20 dark:border-cyan-500/20 text-xs px-2.5 py-0.5 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  {project.video ? (
                    <button
                      onClick={() => setSelectedVideo(project.video)}
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-md shadow-cyan-500/20"
                    >
                      View Demo Video
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-md shadow-cyan-500/20"
                    >
                      View Project
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500 text-white rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-auto max-h-[85vh] rounded-2xl bg-white"
            />
          </div>
        </div>
      )}
      <ScrollToNext to="/contact" label="Contact Me" />
      <Footer />
    </div>
  )
}
