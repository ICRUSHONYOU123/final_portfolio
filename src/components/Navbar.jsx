"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"))
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  const isActive = (path) => location.pathname === path

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg shadow-lg shadow-slate-900/5 dark:shadow-black/20 border-b border-slate-200 dark:border-slate-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-black text-base shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/45 group-hover:scale-105 transition-all duration-300">
              R
            </span>
            <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 dark:from-cyan-400 to-blue-500 dark:to-blue-400 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
              RITHISAK
            </span>
          </Link>

          {/* Right cluster */}
          <div className="flex items-center gap-1">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive(to)
                      ? "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-300 ${
                      isActive(to) ? "w-4/5" : "w-0 group-hover:w-1/2"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="ml-2 w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              {theme === "dark" ? (
                <i className="fa-solid fa-sun text-amber-400" />
              ) : (
                <i className="fa-solid fa-moon text-slate-600" />
              )}
            </button>

            <Link
              to="/contact"
              className="hidden md:inline-flex ml-3 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              Hire Me
            </Link>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden ml-1 flex flex-col justify-center items-center w-10 h-10 space-y-1.5 group"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-slate-700 dark:bg-slate-300 rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-slate-700 dark:bg-slate-300 rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-slate-700 dark:bg-slate-300 rounded-full transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800/60 px-4 py-4 space-y-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(to)
                  ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="block mt-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-lg text-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  )
}
