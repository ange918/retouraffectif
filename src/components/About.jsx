import { useState, useEffect } from 'react'

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
    <section id="apropos" className="py-20 bg-white animate-section">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-vert-profond">
              À Propos de Dah Amayon
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Marabout voyant médium de renom, je suis issu d'une longue lignée de guérisseurs et de sages spirituels du Bénin. Initié dès mon plus jeune âge aux secrets ancestraux du vodun, j'ai consacré ma vie à aider les personnes en souffrance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Avec plus de 15 années d'expérience, j'ai aidé des milliers de personnes à travers la France et l'Afrique à résoudre leurs problèmes amoureux, familiaux, professionnels et spirituels. Ma mission est de rétablir l'harmonie et la paix dans votre vie grâce à des rituels puissants et authentiques.
            </p>
            <div className="bg-vert-clair p-6 rounded-xl">
              <h3 className="font-bold text-xl text-vert-profond mb-3">Ma philosophie</h3>
              <p className="text-gray-700">
                Je crois en la puissance des énergies positives et en la force de la tradition. Chaque personne mérite l'amour, le bonheur et la réussite. Mon rôle est de vous guider sur le chemin de la lumière.
              </p>
            </div>
            <a 
              href="#contact"
              className="inline-block bg-vert-profond text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              En savoir plus
            </a>
          </div>

          {/* Right Carousel */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
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
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImage ? 'bg-vert-profond w-8' : 'bg-gray-300'
                  }`}
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
