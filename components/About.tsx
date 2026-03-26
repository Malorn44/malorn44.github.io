import Image from 'next/image'
import { FileText, BookOpen, ChevronsDown } from 'lucide-react'

export default function About() {
  return (
    <section id="top" className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative">
      <div className="flex flex-col items-center text-center px-4">
        <div className="w-64 h-64 sm:w-80 sm:h-80 relative mb-6">
          <Image
            src="/images/profile.png"
            alt="Profile"
            fill
            className="rounded-full object-cover shadow-lg"
            priority
          />
        </div>

        <p className="mt-3 max-w-lg text-base text-muted">
          I am a Software Engineer with a passion for building impactful applications.
          I have a M.S. in Computer Science with a focus in Natural Language Processing
          from Rensselaer Polytechnic Institute.
        </p>

        <div className="mt-4 flex items-center gap-4 text-base">
          <a
            href="/Mara_Schwartz_Resume.pdf"
            className="inline-flex items-center gap-2 hover:underline underline-offset-4 hover:text-(--accent) transition-colors duration-150"
          >
            <FileText size={16} />
            Resume
          </a>

          <a
            href="https://doi.org/10.54941/ahfe1003276"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:underline underline-offset-4 hover:text-(--accent) transition-colors duration-150"
          >
            <BookOpen size={16} />
            Publication
          </a>
        </div>
      </div>
      {/* Arrow to Projects */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <a href="#projects" aria-label="Go to projects" className="text-muted hover:text-accent">
          <ChevronsDown className="w-7 h-7 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
