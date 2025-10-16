import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  const images = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=400&fit=crop"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section id="apropos" className="py-12 sm:py-16 lg:py-20 bg-white animate-section">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-vert-profond">
              À Propos de Dah Amayon
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Marabout voyant médium reconnu en France, je suis issu d'une prestigieuse lignée de guérisseurs et de sages spirituels du Bénin. Initié dès mon plus jeune âge aux secrets ancestraux du vodun et aux pratiques ésotériques africaines, j'ai consacré ma vie à aider les personnes en souffrance amoureuse à retrouver le bonheur.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Spécialisé dans le <strong>retour affectif rapide</strong> et les <strong>rituels de retour d'affection</strong>, j'ai développé au fil de mes 20 années d'expérience des méthodes puissantes et éprouvées. Grâce à mon expertise en <strong>retour affectif sérieux</strong> et <strong>retour affectif puissant</strong>, j'ai aidé des milliers de personnes à travers la France à reconquérir l'amour perdu, récupérer leur ex, et raviver la flamme dans leur couple.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Mes <strong>rituels pour retour affectif</strong> combinent les savoirs ancestraux africains avec une approche personnalisée adaptée à chaque situation. Que vous recherchiez un <strong>retour d'affection rapide en 24h</strong>, un <strong>retour d'affection en 72h</strong>, ou un <strong>retour affectif efficace</strong> sur le long terme, je mets tout mon savoir-faire à votre service pour vous aider à retrouver l'être aimé.
            </p>
            <div className="bg-vert-clair p-4 sm:p-6 rounded-xl">
              <h3 className="font-bold text-lg sm:text-xl text-vert-profond mb-2 sm:mb-3">Mon expertise et mes compétences</h3>
              <ul className="text-gray-700 text-xs sm:text-sm lg:text-base space-y-2">
                <li>✨ Retour affectif amoureux rapide et efficace</li>
                <li>✨ Rituels puissants de retour d'affection personnalisés</li>
                <li>✨ Protection spirituelle des couples et relations</li>
                <li>✨ Désenvoutement et purification énergétique</li>
                <li>✨ Travaux occultes sérieux pour l'amour durable</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-vert-profond to-dore p-4 sm:p-6 rounded-xl text-white">
              <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Comment je vous aide</h3>
              <p className="text-xs sm:text-sm lg:text-base">
                Je vous accompagne avec bienveillance et confidentialité à chaque étape de votre retour affectif. Après une consultation personnalisée pour comprendre votre situation, je réalise des rituels ancestraux adaptés à vos besoins. Mon objectif : vous aider à retrouver rapidement l'amour et l'harmonie dans votre vie sentimentale grâce à des méthodes spirituelles authentiques et puissantes.
              </p>
            </div>
            <Link 
              to="/contact"
              className="inline-block bg-vert-profond text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-opacity-90 transition"
            >
              En savoir plus
            </Link>
          </div>

          <div className="relative">
            <div className="relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Dah Amayon ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index === currentImage ? 'bg-vert-profond w-6 sm:w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Voir image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
