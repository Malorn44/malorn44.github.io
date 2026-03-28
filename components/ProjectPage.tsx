'use client' // only if needed for interactivity

import { FaGithub } from 'react-icons/fa'
import { Link2, FileText } from 'lucide-react'

interface Technology {
  name: string
  href?: string
}

interface ProjectPageProps {
  title: string
  technologies: Technology[]
  description: string
  links?: { href: string; label: string; icon?: React.ElementType }[]
}

export function ProjectPage({
  title,
  technologies,
  description,
  links = [],
}: ProjectPageProps) {
  return (
    <section className="flex flex-col gap-6 p-8 max-w-4xl mx-auto">

      {/* Title */}
      <h1 className="text-3xl font-bold text-(--primary)">{title}</h1>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) =>
          tech.href ? (
            <a
              key={tech.name}
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 rounded-full text-sm font-medium bg-(--secondary)/20 text-(--secondary) cursor-pointer hover:bg-(--secondary)/40 transition"
            >
              {tech.name}
            </a>
          ) : (
            <span
              key={tech.name}
              className="px-2 py-1 rounded-full text-sm font-medium bg-(--secondary)/20 text-(--secondary)"
            >
              {tech.name}
            </span>
          )
        )}
      </div>

      {/* Description */}
      <p className="text-foreground text-base leading-relaxed">{description}</p>

      {/* Links */}
      {links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {links.map((link) => {
            // Determine which icon to use
            let Icon: React.ElementType = Link2 // default Lucide link
            if (link.icon) Icon = link.icon
            else if (link.href.includes('github.com')) Icon = FaGithub
            else if (link.href.endsWith('.pdf')) Icon = FileText

            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1
                           text-(--primary)
                           hover:text-(--accent)
                           active:text-(--accent)
                           transition text-sm wrap-break-words"
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span>{link.label}</span>
              </a>
            )
          })}
        </div>
      )}
    </section>
  )
}