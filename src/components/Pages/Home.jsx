import { Link } from "react-router-dom"
import Footer from "../Footer"
import ScrollToNext from "../ScrollToNext"
import profilePhoto from "../../assets/profile.png"
import { motion } from "framer-motion"

const techStack = [
  { name: "React", icon: <i className="fa-brands fa-react text-[#61DAFB]"></i> },
  { name: "JavaScript", icon: <i className="fa-brands fa-js text-[#F7DF1E]"></i> },
  { name: "Bootstrap", icon: <i className="fa-brands fa-bootstrap text-[#7952B3]"></i> },
  { name: "Vue.js", icon: <i className="fa-brands fa-vuejs text-[#4FC08D]"></i> },
  { name: "Tailwind CSS", icon: <i className="fa-solid fa-wind text-[#06B6D4]"></i> },
  { name: "GitHub", icon: <i className="fa-brands fa-github text-slate-900 dark:text-white"></i> },
  { name: "PHP", icon: <i className="fa-brands fa-php text-[#777BB4]"></i> },
  { name: "Laravel", icon: <i className="fa-brands fa-laravel text-[#FF2D20]"></i> },
  { name: "PostgreSQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-[1em] h-[1em] mx-auto" /> },
  { name: "MySQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="w-[1em] h-[1em] mx-auto" /> },
  { name: "Git", icon: <i className="fa-brands fa-git-alt text-[#F05032]"></i> },
  { name: "Hosting", icon: <i className="fa-solid fa-server text-slate-600 dark:text-slate-300"></i> },
]

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
]
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/40 dark:bg-slate-800/20 rounded-full blur-3xl"
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                Available for full time work
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 dark:from-cyan-400 via-blue-500 dark:via-blue-400 to-purple-600 dark:to-purple-500">
                  RITHISAK
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-4 max-w-2xl lg:mx-0 mx-auto font-light">
                Full Stack Developer &amp; Designer
              </p>
              <p className="text-base sm:text-lg text-slate-500 mb-12 max-w-xl lg:mx-0 mx-auto">
                Crafting beautiful digital experiences with clean code and modern design that leaves a lasting impression.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 text-base"
                >
                  View My Work
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 border border-slate-300 hover:border-cyan-500/50 text-slate-800 shadow-sm dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:border-slate-700 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-base"
                >
                  Contact Me
                </Link>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start">
                <span className="text-slate-500 dark:text-slate-600 text-xs font-semibold uppercase tracking-widest">Find me on</span>
                <span className="w-10 h-px bg-slate-300 dark:bg-slate-800" />
                <div className="flex gap-2.5">
                  <a
                    href="https://www.facebook.com/share/1BY6erLjjv/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a
                    href="https://t.me/rithysak_meng"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <i className="fa-brands fa-telegram" />
                  </a>
                  <a
                    href="mailto:m.mengrithysak24@cam-ed.com"
                    aria-label="Email"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <i className="fa-solid fa-envelope" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 flex justify-center lg:justify-end relative"
            >
              {/* Decorative glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />

              <div className="relative">
                {/* Rotating gradient ring */}
                <div className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,#06b6d4,#3b82f6,#a855f7,#06b6d4)] animate-[spin_6s_linear_infinite] opacity-80 blur-[1.5px]" />

                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-slate-50 dark:ring-slate-950 shadow-2xl shadow-cyan-500/20">
                  <img
                    src={profilePhoto}
                    alt="Meng Rithisak"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Floating tech chips */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-4 sm:-left-8 top-10 flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 border border-cyan-500/30 rounded-full px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-xl shadow-slate-900/10 dark:shadow-black/40 backdrop-blur-sm"
                >
                  <i className="fa-brands fa-react text-[#61DAFB] text-base" /> React
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="absolute -right-2 sm:-right-6 bottom-16 flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 border border-red-500/30 rounded-full px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-xl shadow-slate-900/10 dark:shadow-black/40 backdrop-blur-sm"
                >
                  <i className="fa-brands fa-laravel text-[#FF2D20] text-base" /> Laravel
                </motion.div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  className="absolute left-2 -bottom-3 flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 border border-emerald-500/30 rounded-full px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-xl shadow-slate-900/10 dark:shadow-black/40 backdrop-blur-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Full Stack Dev
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600 animate-bounce"
          >
            <span className="text-xs">Scroll down</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest">What I Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">Services I Offer</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <i className="fa-solid fa-palette text-pink-500 dark:text-pink-400"></i>,
                title: "UI/UX Design",
                desc: "Creating beautiful and intuitive user interfaces with modern design principles and pixel-perfect attention to detail.",
                color: "from-pink-500/10 to-rose-500/5 border-pink-500/20",
                glow: "group-hover:shadow-pink-500/10",
              },
              {
                icon: <i className="fa-solid fa-laptop-code text-cyan-500 dark:text-cyan-400"></i>,
                title: "Development",
                desc: "Building responsive and performant web applications with cutting-edge technologies like React, Laravel, and more.",
                color: "from-cyan-500/10 to-blue-500/5 border-cyan-500/20",
                glow: "group-hover:shadow-cyan-500/10",
              },
              {
                icon: <i className="fa-solid fa-rocket text-purple-500 dark:text-purple-400"></i>,
                title: "Optimization",
                desc: "Ensuring lightning-fast load times, SEO best practices, and smooth user experiences across all devices.",
                color: "from-purple-500/10 to-violet-500/5 border-purple-500/20",
                glow: "group-hover:shadow-purple-500/10",
              },
            ].map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`group relative bg-gradient-to-br ${s.color} border rounded-2xl p-8 hover:shadow-xl ${s.glow} transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
              >
                {/* Hover accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Corner glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-900/[0.02] dark:bg-white/[0.03] rounded-full blur-2xl group-hover:bg-slate-900/[0.04] dark:group-hover:bg-white/[0.06] transition-colors duration-300" />

                <div className="w-16 h-16 rounded-2xl bg-white/80 border border-slate-200 dark:bg-slate-950/60 dark:border-slate-700/60 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{s.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
        <div className="absolute inset-0 border-y border-slate-200 dark:border-slate-800/60" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 dark:from-cyan-400 to-blue-500 dark:to-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {s.value}
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest">My Toolkit</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">Technologies I Work With</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm">
              Leveraging modern tools and frameworks to build scalable, maintainable applications
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, idx)=>(
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white hover:bg-slate-50 border border-slate-200 shadow-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-800 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 p-5 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5 cursor-default"
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white text-xs font-semibold transition-colors duration-200">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Glow behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/25 via-blue-500/15 to-purple-500/25 rounded-[28px] blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative bg-gradient-to-br from-white to-slate-100 border border-slate-200 dark:from-slate-900 dark:to-slate-800 dark:border-slate-700/60 rounded-3xl p-10 sm:p-12 text-center overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-4 py-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for full time work
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">
                  Ready to work{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 dark:from-cyan-400 to-blue-500 dark:to-blue-400">together?</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                  Let's collaborate and bring your ideas to life with clean code and beautiful design.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 text-base"
                  >
                    Start a Conversation →
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 shadow-sm dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:border-slate-700 dark:text-white hover:border-cyan-500/50 font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-base"
                  >
                    See My Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <ScrollToNext to="/about" label="About Me" />
      <Footer />
    </div>
  )
}
