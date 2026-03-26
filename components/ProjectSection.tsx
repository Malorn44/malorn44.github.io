import ProjectCard from './ProjectCard'

type Project = {
  title: string
  description: string
  href?: string
  tags?: string[]
  image?: string
}

const PROJECTS: Project[] = [
  {
    title: 'Semantic Search Using Embeddings',
    description: 'Semantic search implementation using embedding models.',
    href: '/projects/search',
    image: '/images/search.png',
  },
  {
    title: 'Topical Analysis of Twitter User Clusters',
    description: 'Topical analysis and clustering of Twitter users.',
    href: '/projects/tatuc',
    image: '/images/graph.png',
  },
  {
    title: 'SCIL (Socio-Cultural Context in Language)',
    description: 'SCIL project overview.',
    href: '/projects/scil',
    image: '/images/scil.png',
  },
  {
    title: 'GATOR',
    description: 'GATOR project.',
    href: '/projects/gator',
    image: '/images/GATOR.png',
  },
  {
    title: 'YACS (Yet Another Course Scheduler)',
    description: 'YACS project.',
    href: '/projects/yacs',
    image: '/images/yacs.png',
  },
  {
    title: 'BelEx Annotator',
    description: 'BelEx annotator tool.',
    href: '/projects/belex',
    image: '/images/belex.png',
  },
  {
    title: 'Stellaris Save Game Visualizer',
    description: 'Visualizer for Stellaris save games.',
    href: '/projects/stellaris',
    image: '/images/stellaris.png',
  },
  {
    title: 'Nurikabe Maker',
    description: 'Puzzle maker for Nurikabe.',
    href: '/projects/nurikabe',
    image: '/images/nurikabe.png',
  },
  {
    title: 'P2P File Sharing & Directory Service Assignment',
    description: 'Assignments and examples from a programming languages course.',
    href: '/projects/proglang',
    image: '/images/proglang.png',
  },
]

export default function ProjectSection({ projects = PROJECTS }: { projects?: Project[] }) {
  return (
    <section id="projects" className="py-20 bg-background -scroll-mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-4xl font-bold text-center text-(--primary) mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} href={p.href} image={p.image} />
          ))}
        </div>
      </div>
    </section>
  )
}
