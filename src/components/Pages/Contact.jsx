"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import Footer from "../Footer"

const contactInfo = [
  {
    icon: faEnvelope,
    label: "Email",
    value: "m.mengrithysak24@cam-ed.com",
    href: "mailto:m.mengrithysak24@cam-ed.com",
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    border: "border-cyan-500/20",
  },
  {
    icon: faPhone,
    label: "Phone",
    value: "+855 964 221 831",
    href: "tel:+855964221831",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    border: "border-blue-500/20",
  },
  {
    icon: faMapMarkerAlt,
    label: "Location",
    value: "Cambodia 🇰🇭",
    href: null,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    border: "border-purple-500/20",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const inputClasses =
    "w-full px-4 py-3 bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-900 placeholder-slate-400 dark:bg-slate-800/60 dark:border-slate-700 dark:hover:border-slate-600 dark:text-white dark:placeholder-slate-600 focus:border-cyan-500 dark:focus:border-cyan-500 text-sm rounded-xl outline-none transition-all duration-200 focus:ring-2 focus:ring-cyan-500/20"

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* ── Header ── */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-32 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative max-w-6xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            <span className="w-8 h-px bg-cyan-600 dark:bg-cyan-400" />
            Get In Touch
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white mt-3">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 dark:from-cyan-400 via-blue-500 dark:via-blue-400 to-purple-600 dark:to-purple-500">Connect</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl text-base sm:text-lg">
            Have a project in mind? I'd love to hear about it. Let's make something great together.
          </p>
        </motion.div>
      </section>

      {/* ── Content ── */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── Left: info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact info cards */}
            {contactInfo.map((info) =>
              info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  className={`flex items-center gap-4 bg-white shadow-sm dark:bg-slate-900/60 border ${info.border} rounded-2xl p-5 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:-translate-y-0.5 transition-all duration-200 group`}
                >
                  <div className={`w-12 h-12 rounded-xl ${info.bg} border flex items-center justify-center ${info.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                    <FontAwesomeIcon icon={info.icon} className="text-lg" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-medium mb-0.5">{info.label}</p>
                    <p className="text-slate-900 dark:text-white text-sm font-semibold group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div
                  key={info.label}
                  className={`flex items-center gap-4 bg-white shadow-sm dark:bg-slate-900/60 border ${info.border} rounded-2xl p-5`}
                >
                  <div className={`w-12 h-12 rounded-xl ${info.bg} border flex items-center justify-center ${info.color} flex-shrink-0`}>
                    <FontAwesomeIcon icon={info.icon} className="text-lg" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-medium mb-0.5">{info.label}</p>
                    <p className="text-slate-900 dark:text-white text-sm font-semibold">{info.value}</p>
                  </div>
                </div>
              )
            )}

            {/* Social */}
            <div className="bg-white shadow-sm border border-slate-200 dark:bg-slate-900/60 dark:border-slate-800 rounded-2xl p-6">
              <h3 className="text-slate-900 dark:text-white font-semibold mb-2 text-sm">Follow Me</h3>
              <p className="text-slate-500 text-xs mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                I usually reply within 24 hours
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/share/1BY6erLjjv/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-600/20 hover:border-blue-500/40 text-blue-600 dark:text-blue-400 rounded-xl transition-all duration-200 text-sm font-medium"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                  Facebook
                </a>
                <a
                  href="https://t.me/rithysak_meng"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-cyan-600/10 hover:bg-cyan-600/20 border border-cyan-600/20 hover:border-cyan-500/40 text-cyan-600 dark:text-cyan-400 rounded-xl transition-all duration-200 text-sm font-medium"
                >
                  <FontAwesomeIcon icon={faTelegram} />
                  Telegram
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div className="relative bg-white shadow-sm border border-slate-200 dark:bg-slate-900/60 dark:border-slate-800 rounded-2xl p-8 sm:p-10 overflow-hidden">
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send a Message</h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400 text-3xl mb-4">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project inquiry, collaboration..."
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project..."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 text-sm"
                  >
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
