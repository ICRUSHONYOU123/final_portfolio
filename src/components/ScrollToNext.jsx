import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

// Extra scroll (px of wheel/touch delta) required at the bottom before navigating
const THRESHOLD = 450

/**
 * Shows a "keep scrolling" pill when the user reaches the bottom of the page.
 * Scrolling further past the bottom fills the progress bar and then navigates
 * to the next page automatically.
 */
export default function ScrollToNext({ to, label }) {
  const navigate = useNavigate()
  const [atBottom, setAtBottom] = useState(false)
  const [progress, setProgress] = useState(0)
  const acc = useRef(0)
  const fired = useRef(false)
  const touchY = useRef(null)

  useEffect(() => {
    const isAtBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24

    const reset = () => {
      acc.current = 0
      setProgress(0)
    }

    const bump = (delta) => {
      if (fired.current || !isAtBottom()) return
      acc.current = Math.min(acc.current + delta, THRESHOLD)
      setProgress(acc.current / THRESHOLD)
      if (acc.current >= THRESHOLD) {
        fired.current = true
        navigate(to)
      }
    }

    const onWheel = (e) => {
      if (e.deltaY > 0) bump(e.deltaY)
      else reset()
    }
    const onScroll = () => {
      const b = isAtBottom()
      setAtBottom(b)
      if (!b) reset()
    }
    const onTouchStart = (e) => {
      touchY.current = e.touches[0].clientY
    }
    const onTouchMove = (e) => {
      if (touchY.current == null) return
      const dy = touchY.current - e.touches[0].clientY
      touchY.current = e.touches[0].clientY
      if (dy > 0) bump(dy * 2)
    }

    window.addEventListener("wheel", onWheel, { passive: true })
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
    }
  }, [navigate, to])

  return (
    <AnimatePresence>
      {atBottom && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] pointer-events-none"
        >
          <div className="relative flex items-center gap-3 bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 rounded-full pl-5 pr-4 py-2.5 shadow-xl shadow-slate-900/10 dark:shadow-black/40 backdrop-blur-md overflow-hidden">
            {/* Progress fill */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 origin-left transition-transform duration-100"
              style={{ transform: `scaleX(${progress})` }}
            />
            <span className="relative text-xs font-semibold text-slate-600 dark:text-slate-300">
              Keep scrolling — next:{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">{label}</span>
            </span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/30"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
