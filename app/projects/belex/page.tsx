// app/projects/belex/page.tsx
import { ProjectPage } from '@/components/ProjectPage'

export default function BelExPage() {
  return (
    <ProjectPage
      title="Belief Extractions (BelEx) Annotator"
      technologies={[
        { name: 'CSS', href: 'https://www.w3.org/TR/CSS/#css' },
        { name: 'HTML', href: 'https://html.spec.whatwg.org/' },
        { name: 'Bootstrap', href: 'https://getbootstrap.com/' },
        { name: 'Javascript', href: 'https://www.javascript.com/' },
        { name: 'Python', href: 'https://www.python.org/' },
        { name: 'Django', href: 'https://www.djangoproject.com/' },
      ]}
      description={`
        This was the first project I worked on when I joined the
        [Language and Cognition Artificial Intelligence (LACAI)](https://lacailab.cogsci.rpi.edu/) lab at RPI.

        I created this annotation tool using Python and Django.
      `}
      links={[
        { href: 'https://github.com/Malorn44/BelEx-Annotator', label: 'GitHub' },
      ]}
    />
  )
}