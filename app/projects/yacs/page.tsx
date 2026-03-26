// app/projects/yacs/page.tsx
import { ProjectPage } from '@/components/ProjectPage'

export default function YacsPage() {
  return (
    <ProjectPage
      title="Yet Another Course Scheduler (YACS)"
      technologies={[
        { name: 'Python', href: 'https://www.python.org/' },
        { name: 'Django', href: 'https://www.djangoproject.com/' },
        { name: 'HTML', href: 'https://html.spec.whatwg.org/' },
        { name: 'CSS', href: 'https://www.w3.org/TR/CSS/#css' },
        { name: 'Javascript', href: 'https://www.javascript.com/' },
        { name: 'SQLite', href: 'https://www.sqlite.org/' },
      ]}
      description={`
YACS (Yet Another Course Scheduler) is a web application I developed to help students plan and visualize their academic schedules.
The app allows users to input courses, view conflicts, and explore possible scheduling options through an interactive interface.

The project was implemented using Django for the backend, with HTML, CSS, and Javascript for the frontend.
SQLite was used as the database to store course information and user schedules. The app emphasizes usability and clarity, providing visual feedback on schedule conflicts and course selection.
      `}
      links={[
        { href: 'https://github.com/Malorn44/yacs', label: 'Github' },
      ]}
    />
  )
}