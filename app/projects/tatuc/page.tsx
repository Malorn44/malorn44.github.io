// app/projects/tatuc/page.tsx
import { ProjectPage } from '@/components/ProjectPage'

export default function TatucPage() {
  return (
    <ProjectPage
      title="Topical Analysis of Twitter User Clusters"
      technologies={[
        { name: 'Python', href: 'https://www.python.org/' },
        { name: 'scikit-learn', href: 'https://scikit-learn.org/' },
        { name: 'PyTorch', href: 'https://pytorch.org/' },
        { name: 'Hugging Face Transformers', href: 'https://huggingface.co/docs/transformers/index' },
        { name: 'Gephi', href: 'https://gephi.org/' },
        { name: 'Jupyter', href: 'https://jupyter.org/' },
        { name: 'seaborn', href: 'https://seaborn.pydata.org/' },
        { name: 'pandas', href: 'https://pandas.pydata.org/' },
        { name: 'Matplotlib', href: 'https://matplotlib.org/' },
        { name: 'NumPy', href: 'https://numpy.org/' },
        { name: 'SciPy', href: 'https://scipy.org/' },
        { name: 'NetworkX', href: 'https://networkx.org/' },
        { name: 'iGraph', href: 'https://igraph.org/' },
        { name: 'NLTK', href: 'https://www.nltk.org/' },
        { name: 'Ray', href: 'https://pypi.org/project/ray/' },
      ]}
      description={`
This project was the culmination of my Master's degree work, influenced by the RADII project (Reticular Analysis of Discourse for Influence Indicators) active in my lab.

It involved creating artificial dialogues from clusters of a 2017 French election Twitter dataset. Clusters were created using the Leiden clustering algorithm. Topical analysis was performed using the SCIL toolkit to identify meso-topics (the most prevalent topics in dialogues). Hashtag usage was also analyzed for further insight.

Retweets were used to build a directed graph of users, where edges represented retweet relationships and weights were the number of retweets. Many tweets were translated from French using the Helsinki-NLP opus-mt-fr-en model with Hugging Face transformers. The visualization (ForceAtlas2 in Gephi) highlighted the 10 largest clusters based on weighted degree >=50.

The project was presented at the Fall 2022 Master's Project poster session at Rensselaer Polytechnic Institute.
      `}
      links={[
        { href: 'files/Master Project Poster.pdf', label: 'Project Poster' },
      ]}
    />
  )
}