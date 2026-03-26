// app/projects/nurikabe/page.tsx
import { ProjectPage } from '@/components/ProjectPage'

export default function NurikabePage() {
  return (
    <ProjectPage
      title="Nurikabe Maker"
      technologies={[
        { name: 'C++', href: 'https://isocpp.org/' },
        { name: 'Qt', href: 'https://www.qt.io/' },
      ]}
      description={`
This was a project I worked on for Computability and Logic, a course I took in Spring 2019. For the project, I created a GUI using C++ and Qt for solving and generating Nurikabe puzzles.

The generator was created from scratch by myself. It is not guaranteed to create puzzles with a single solution but can create puzzles for any row and column size.

The solver was created by expanding upon a solver hosted on Microsoft's GitHub page. I also had to adapt the solver to accept XML input as that was the file type used for storing logic puzzle information in my professor's lab group.
      `}
      links={[
        { href: 'https://github.com/Malorn44/nurikabe_solver', label: 'Github' },
      ]}
    />
  )
}