import { Link } from 'react-router-dom'
import { articlesData } from '../data/articlesData'

const Blog = () => {
  const articles = articlesData.map(article => ({
    image: article.heroImage,
    title: article.title,
    excerpt: article.excerpt,
    link: `/blog/${article.slug}`
  }))

  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-vert-clair animate-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-center text-vert-profond mb-10 sm:mb-12 lg:mb-16">
          Derniers articles
        </h2>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {articles.map((article, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-playfair font-bold text-vert-profond mb-2 sm:mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <Link 
                  to={article.link}
                  className="text-vert-profond text-sm sm:text-base font-semibold hover:text-dore transition inline-flex items-center"
                >
                  Lire la suite
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/blog"
            className="inline-block bg-vert-profond text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-opacity-90 transition"
          >
            Découvrir tous nos articles
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog
