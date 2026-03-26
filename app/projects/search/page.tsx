// app/projects/search/page.tsx
import { ProjectPage } from '@/components/ProjectPage'

export default function SearchPage() {
  return (
    <ProjectPage
      title="Semantic Search Using Embeddings"
      technologies={[
        { name: 'Python', href: 'https://www.python.org/' },
        { name: 'Django', href: 'https://www.djangoproject.com/' },
        { name: 'PyTorch', href: 'https://pytorch.org/' },
        { name: 'Sentence Transformers', href: 'https://sbert.net/' },
        { name: 'NLTK', href: 'https://www.nltk.org/' },
        { name: 'LemmInflect', href: 'https://lemminflect.readthedocs.io/en/latest/' },
        { name: 'CSS', href: 'https://www.w3.org/TR/CSS/#css' },
        { name: 'HTML', href: 'https://html.spec.whatwg.org/' },
        { name: 'JavaScript', href: 'https://www.javascript.com/' },
        { name: 'Beautiful Soup', href: 'https://beautiful-soup-4.readthedocs.io/en/latest/' },
      ]}
      description={`
This is a web app I created with Django to search Wikipedia pages for Academy Award-winning films using both keyword and semantic search. The Semantic Search component generates sentence embeddings using a LLM and computes cosine similarity with query embeddings.

I used the Sentence Transformers library with the multi-qa-mpnet-base-dot-v1 model from sbert. The model generates embeddings for ~1300 articles in ~6 minutes. Each article is chunked into 512-word segments with 50-word overlap to preserve context, and mean pooling is applied to embeddings using PyTorch.

Semantic Search often provides more relevant results than Keyword Search. It can struggle with uncommon words or short queries. Hybrid Search, which combines keyword and semantic scores, can improve performance and may be implemented in future versions.
      `}
      links={[
        { href: 'https://github.com/Malorn44/semantic-search', label: 'Github Repository' },
      ]}
    />
  )
}