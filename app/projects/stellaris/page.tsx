// app/projects/stellaris/page.tsx
import { ProjectPage } from '@/components/ProjectPage'

export default function StellarisPage() {
  return (
    <ProjectPage
      title="Stellaris Save Game Visualizer"
      technologies={[
        { name: 'Python', href: 'https://www.python.org/' },
        { name: 'Tkinter', href: 'https://docs.python.org/3/library/tkinter.html' },
        { name: 'Matplotlib', href: 'https://matplotlib.org/' },
      ]}
      description={`
This project was created for the Interactive Visualization course in Spring 2020.

Stellaris is a real-time strategy space game. I built a tool to visualize the galaxy as a heatmap, where each star system is colored based on its desirability. Desirability is calculated from five resources: Minerals, Energy, Physics, Society, and Engineering. Users can adjust which resources are most important to them.

The project was implemented in Python using Tkinter for visualization. Save files were deserialized using an open-source package (pypdx-clausewitz), converted into JSON, and then processed into Python dictionaries.
      `}
      links={[
        { href: 'https://github.com/Malorn44/stellaris_sgv', label: 'Github Repository' },
      ]}
    />
  )
}