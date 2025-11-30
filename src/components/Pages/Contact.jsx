"use client"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form submitted! (This is a demo - no actual submission)")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact me for work</h1>
        <p className="text-xl text-slate-300 mb-12">Have a project in mind? Let's work together!</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-slate-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder-slate-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder-slate-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none placeholder-slate-400"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-slate-300">m.mengrithysak24@cam-ed.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-slate-300">+855 964221831</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-slate-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/share/1BY6erLjjv/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-700 hover:bg-cyan-500 hover:text-white rounded-lg flex items-center justify-center transition-colors text-xl"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://t.me/rithysak_meng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-700 hover:bg-cyan-500 hover:text-white rounded-lg flex items-center justify-center transition-colors text-xl"
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
