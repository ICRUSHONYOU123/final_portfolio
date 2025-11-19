"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-slate-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
            RITHISAK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`hover:text-cyan-400 transition-colors font-medium ${isActive("/") ? "text-cyan-400" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-cyan-400 transition-colors font-medium ${isActive("/about") ? "text-cyan-400" : ""}`}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className={`hover:text-cyan-400 transition-colors font-medium ${isActive("/portfolio") ? "text-cyan-400" : ""}`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`hover:text-cyan-400 transition-colors font-medium ${isActive("/contact") ? "text-cyan-400" : ""}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64" : "max-h-0"}`}>
          <div className="py-4 space-y-3">
            <Link
              to="/"
              onClick={closeMenu}
              className={`block py-2 px-4 hover:bg-slate-800 rounded transition-colors ${isActive("/") ? "bg-slate-800 text-cyan-400" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className={`block py-2 px-4 hover:bg-slate-800 rounded transition-colors ${isActive("/about") ? "bg-slate-800 text-cyan-400" : ""}`}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              onClick={closeMenu}
              className={`block py-2 px-4 hover:bg-slate-800 rounded transition-colors ${isActive("/portfolio") ? "bg-slate-800 text-cyan-400" : ""}`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={`block py-2 px-4 hover:bg-slate-800 rounded transition-colors ${isActive("/contact") ? "bg-slate-800 text-cyan-400" : ""}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
