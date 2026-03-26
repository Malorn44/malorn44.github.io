import { ThemeToggle } from '@/components/ThemeToggle'
import About from '@/components/About'
import ProjectSection from '@/components/ProjectSection'

export default function Home() {
  return (
    <main className="relative">
      {/* Theme toggle positioned inside the about area */}
      <div className="fixed bottom-4 right-4 z-40">
        <ThemeToggle />
      </div>

      <About />
      <ProjectSection />
    </main>
  )
}