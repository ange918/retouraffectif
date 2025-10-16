import { FaWhatsapp } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="accueil" className="bg-vert-clair pt-20 sm:pt-24 pb-12 sm:pb-16 animate-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-4 sm:space-y-6">
            <p className="text-vert-profond font-medium text-sm sm:text-base">Marabout France : Dah Amayon</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-vert-profond leading-tight">
              Retour Affectif Rapide et Efficace – Marabout Expert en France
            </h1>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              Vous souffrez d'une rupture douloureuse ou d'un éloignement de l'être aimé ? Le retour affectif est une solution spirituelle puissante pour reconquérir l'amour perdu, stopper une infidélité ou raviver la passion.
            </p>
            <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed">
              En tant que marabout spécialisé dans le retour affectif en France, je mets à votre disposition des rituels ancestraux, des prières puissantes et des travaux énergétiques pour agir rapidement sur les sentiments de votre partenaire.
            </p>
            
            <a 
              href="https://wa.me/2290191007556" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-green-600 transition shadow-lg"
            >
              <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Contactez-moi dès maintenant
            </a>

            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
              <img 
                src="/badge-benin.png" 
                alt="Certifié par République du Bénin" 
                className="h-16 sm:h-20 w-auto object-contain"
              />
              <img 
                src="/badge-secret.png" 
                alt="Top Secret - Confidentialité garantie" 
                className="h-16 sm:h-20 w-auto object-contain"
              />
              <img 
                src="/badge-garantie.png" 
                alt="100% Satisfaction Garantie" 
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop" 
                alt="Dah Amayon" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-dore text-vert-profond p-3 sm:p-4 rounded-lg shadow-xl">
                <p className="font-bold text-xl sm:text-2xl">15+</p>
                <p className="text-xs sm:text-sm">Années d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
