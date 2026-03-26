// app/projects/gator/page.tsx
import { ProjectPage } from '@/components/ProjectPage'

export default function GatorPage() {
  return (
    <ProjectPage
      title="GATOR"
      technologies={[
        { name: 'Python', href: 'https://www.python.org/' },
        { name: 'seaborn', href: 'https://seaborn.pydata.org/' },
        { name: 'pandas', href: 'https://pandas.pydata.org/' },
        { name: 'Matplotlib', href: 'https://matplotlib.org/' },
        { name: 'NumPy', href: 'https://numpy.org/' },
      ]}
      description={`
GATOR is a 2.5-year IBM funded research project to prototype a new type of task-oriented human-machine dialogue system that uses deep learning technologies (such as transformers) to learn how to conduct a dialogue to achieve the maximum success in the agent’s given objective while also maintaining the highest possible level of user satisfaction.

I worked on this project from September 2022 to February 2023. I joined on the tail-end of the project so much of my focus was on conducting human evaluations. Specifically, we were comparing self-play and bot-bot evaluations to human evaluations. A paper I co-authored, "Towards a Proper Evaluation of Automated Conversational Systems", was published in the AHFE International 2023 conference in July 2023.
      `}
      links={[
        { href: 'https://doi.org/10.54941/ahfe1003276', label: 'AHFE 2023 Paper' },
        { href: 'https://lacailab.cogsci.rpi.edu/index.php/gator/', label: 'Project Page' },
        { href: 'https://lacailab.cogsci.rpi.edu/wp-content/uploads/2022/09/NAACL2022_GATOR_Poster.pdf', label: 'Poster' },
        { href: 'https://arxiv.org/pdf/2205.03692.pdf', label: 'ArXiv Paper' },
      ]}
    />
  )
}