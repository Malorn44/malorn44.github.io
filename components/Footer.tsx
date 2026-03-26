import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:maraschwartz44@gmail.com"
            aria-label="Email"
            className="text-(--muted) hover:text-(--accent) transition-colors duration-150"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://github.com/Malorn44"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-(--muted) hover:text-(--accent) transition-colors duration-150"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/mara-e-schwartz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-(--muted) hover:text-(--accent) transition-colors duration-150"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
