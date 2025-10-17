import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { articlesData } from '../data/articlesData'
import Article1Content from '../components/articles/Article1Content'
import Article2Content from '../components/articles/Article2Content'
import Article3Content from '../components/articles/Article3Content'
import Article4Content from '../components/articles/Article4Content'
import Article5Content from '../components/articles/Article5Content'
import Article6Content from '../components/articles/Article6Content'
import Article7Content from '../components/articles/Article7Content'

const Article = () => {
  const { slug } = useParams()
  const article = articlesData.find(a => a.slug === slug)

  const contentComponents = {
    'retour-affection-rapide-24h': Article1Content,
    'retour-affectif-amoureux-efficace': Article2Content,
    'rituel-retour-affectif-puissant-serieux': Article3Content,
    'retour-affectif-serieux-distinguer-vrai-rituel': Article4Content,
    'retour-affection-72h-etapes-conseils': Article5Content,
    'retour-affectif-efficace-astuces-rituels': Article6Content,
    'retour-affectif-puissant-rituels-confirmes': Article7Content,
  }

  useEffect(() => {
    if (article) {
      document.title = article.metaTitle
      
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', article.metaDescription)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'description'
        meta.content = article.metaDescription
        document.head.appendChild(meta)
      }
      
      const metaKeywords = document.querySelector('meta[name="keywords"]')
      if (metaKeywords) {
        metaKeywords.setAttribute('content', article.keywords)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'keywords'
        meta.content = article.keywords
        document.head.appendChild(meta)
      }
    }
  }, [article])

  if (!article) {
    return <Navigate to="/blog" replace />
  }

  const ContentComponent = contentComponents[slug]

  if (!ContentComponent) {
    return <Navigate to="/blog" replace />
  }

  return (
    <div className="pt-20">
      <article className="bg-white">
        <div 
          className="relative h-[40vh] md:h-[50vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${article.heroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-playfair font-bold text-white text-center px-4 max-w-4xl">
              {article.title}
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <ContentComponent article={article} />
          </div>
        </div>
      </article>
    </div>
  )
}

export default Article
