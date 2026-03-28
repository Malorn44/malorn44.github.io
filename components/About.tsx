import Image from 'next/image'
import { FileText, BookOpen, ChevronsDown } from 'lucide-react'

export default function About() {
  return (
    <section id="top" className="min-h-[calc(100dvh-4rem)] flex items-center justify-center relative">
      <div className="flex flex-col items-center text-center px-4">
        <div className="w-64 h-64 sm:w-80 sm:h-80 relative mb-6">
          <Image
            src="/images/profile-social.png"
            alt="Profile"
            fill
            className="rounded-full object-cover shadow-lg"
            priority
          />
        </div>

        <p className="max-w-xl text-2xl font-bold text-foreground">
          Hi, I'm Mara! I build reliable, meaningful software.
        </p>

        <p className="mt-4 max-w-xl text-base text-muted leading-relaxed">
          With a background in NLP and full-stack development, I enjoy solving complex problems
          and turning them into practical solutions.
        </p>

        <div className="mt-4 flex items-center gap-4 text-base">
          <a
            href="/Mara_Schwartz_Resume.pdf"
            className="inline-flex items-center gap-2
                       underline sm:no-underline sm:hover:underline
                       underline-offset-4
                       hover:text-(--accent)
                       transition-colors duration-150"
          >
            <FileText size={16} />
            Resume
          </a>

          <a
            href="https://doi.org/10.54941/ahfe1003276"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2
                       underline sm:no-underline sm:hover:underline
                       underline-offset-4
                       hover:text-(--accent)
                       transition-colors duration-150"
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
