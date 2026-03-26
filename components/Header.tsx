'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (typeof window === 'undefined') return

    // Close menu
    setMenuOpen(false)

    if (pathname === '/' || pathname === '') {
      // On home page: smooth scroll
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      // On another page: temporarily disable smooth scroll
      const html = document.documentElement
      const prev = html.style.scrollBehavior
      html.style.scrollBehavior = 'auto'   // disable smooth scroll
      window.location.href = `/#${id}`
      html.style.scrollBehavior = prev      // restore for future scrolls
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm ring-1 ring-(--border)/80 h-16">
      <nav className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between text-lg">
        {/* Logo / title */}
        <div className="flex items-center">
          <a
            href="#top"
            onClick={(e) => handleScroll('top', e)}
            className="text-(--primary) text-xl font-bold hover:text-(--accent) transition-colors duration-150"
          >
            Mara Schwartz
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="#top"
            onClick={(e) => handleScroll('top', e)}
            className="text-(--primary) hover:text-(--accent) transition-colors duration-150"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll('projects', e)}
            className="text-(--primary) hover:text-(--accent) transition-colors duration-150"
          >
            Projects
          </a>
          <a
            href="/Mara_Schwartz_Resume.pdf"
            className="text-(--primary) hover:text-(--accent) transition-colors duration-150"
          >
            Resume
          </a>
        </div>

        {/* Hamburger button */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1 focus:outline-none group"
          >
            <span
              className={`block w-8 h-1 rounded transition-transform duration-300 ease-in-out
                ${menuOpen ? '-rotate-45 translate-y-2' : ''}
                bg-(--primary) group-hover:bg-(--accent)`}
            />
            <span
              className={`block w-8 h-1 rounded transition-opacity duration-300 ease-in-out
                ${menuOpen ? 'opacity-0' : ''}
                bg-(--primary) group-hover:bg-(--accent)`}
            />
            <span
              className={`block w-8 h-1 rounded transition-transform duration-300 ease-in-out
                ${menuOpen ? 'rotate-45 -translate-y-2' : ''}
                bg-(--primary) group-hover:bg-(--accent)`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu with slide animation */}
      <div
        className={`sm:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out
          ${menuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}
        `}
      >
        <div className="flex flex-col items-center">
          <a
            href="#top"
            onClick={(e) => handleScroll('top', e)}
            className="w-full text-center py-2 text-(--primary) hover:text-(--accent) text-lg"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll('projects', e)}
            className="w-full text-center py-2 text-(--primary) hover:text-(--accent) text-lg"
          >
            Projects
          </a>
          <a
            href="/Mara_Schwartz_Resume.pdf"
            className="w-full text-center py-2 text-(--primary) hover:text-(--accent) text-lg"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}