import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const CallToAction = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-vert-profond text-white animate-section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 sm:mb-6">
          Besoin d'aide spirituelle ?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          Contactez Dah Amayon dès aujourd'hui pour une consultation personnalisée et découvrez comment retrouver l'harmonie dans votre vie.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <a 
            href="https://wa.me/2290191007556" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-green-600 transition shadow-lg"
          >
            <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            Contactez-moi sur WhatsApp
          </a>

          <a 
            href="mailto:dahamayon8@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-vert-profond px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            Envoyez-moi un email
          </a>
        </div>

        <div className="mt-8 sm:mt-12 grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block bg-white bg-opacity-20 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-dore" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Disponible 24/7</h3>
            <p className="text-xs sm:text-sm text-gray-300">Réponse rapide à vos urgences</p>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-white bg-opacity-20 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-dore" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">100% Confidentiel</h3>
            <p className="text-xs sm:text-sm text-gray-300">Vos informations sont protégées</p>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-white bg-opacity-20 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-dore" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Résultats Garantis</h3>
            <p className="text-xs sm:text-sm text-gray-300">Satisfaction ou remboursement</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
