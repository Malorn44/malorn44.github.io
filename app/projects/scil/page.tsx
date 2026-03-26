// app/projects/scil/page.tsx
import { ProjectPage } from '@/components/ProjectPage'

export default function ScilPage() {
  return (
    <ProjectPage
      title="Socio-Cultural Content in Language (SCIL)"
      technologies={[
        { name: 'Python', href: 'https://www.python.org/' },
        { name: 'Stanford CoreNLP', href: 'https://stanfordnlp.github.io/CoreNLP/' },
        { name: 'NLTK', href: 'https://www.nltk.org/' },
        { name: 'NumPy', href: 'https://numpy.org/' },
        { name: 'Hugging Face Transformers', href: 'https://huggingface.co/docs/transformers/index' },
        { name: 'scikit-learn', href: 'https://scikit-learn.org/' },
        { name: 'PyTorch', href: 'https://pytorch.org/' },
        { name: 'pandas', href: 'https://pandas.pydata.org/' },
        { name: 'Jupyter', href: 'https://jupyter.org/' },
        { name: 'Keras', href: 'https://keras.io/' },
      ]}
      description={`
SCIL was the first major project I worked on as part of the LACAI Lab. The goal of SCIL was to identify social roles of individuals within dialogues (such as Leader, Influencer) by analyzing language usage (word frequency, contribution to topics, etc.). SCIL was initially an IARPA project in the late 2000s–early 2010s and was originally implemented in Java. My task was to re-implement SCIL in Python for modularity, speed, and usability.

I created a Python package to provide results comparable to the original implementation, adding new metrics and vastly improving performance. I also collaborated on an auto-tagger model for identifying metaTags in dialogue turns. While ground-truth training data was limited, the model achieved moderate success and was sufficient to produce useful results when used with SCIL.
      `}
      links={[
        { href: 'https://pypi.org/project/pySCIL/', label: 'pySCIL Python Package' },
        { href: 'https://pypi.org/project/pySCILTagger/', label: 'pySCILTagger Python Package' },
        { href: 'https://github.com/Malorn44/pySCIL', label: 'Github: pySCIL' },
        { href: 'https://github.com/Malorn44/pySCIL-web', label: 'Github: pySCIL Web Interface' },
        { href: 'https://github.com/Malorn44/pySCIL-tagger', label: 'Github: pySCIL Tagger' },
        { href: 'https://github.com/Malorn44/pySCIL-MetaTaggerTest', label: 'Github: pySCIL Tagger Test' },
        { href: 'https://www.iarpa.gov/research-programs/scil', label: 'IARPA Project Page' },
      ]}
    />
  )
}