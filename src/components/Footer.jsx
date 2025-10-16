import { Link } from 'react-router-dom'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-vert-profond text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-3 sm:mb-4 text-dore">Dah Amayon</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Marabout France Dah Amayon offre des solutions puissantes pour le retour affectif et le bien-être spirituel en toute confidentialité.
            </p>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Spécialiste en rituels ancestraux, voyance et protection spirituelle, je vous accompagne vers une vie harmonieuse et épanouie.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-dore">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-dore transition text-xs sm:text-sm">Accueil</Link></li>
              <li><Link to="/a-propos" className="text-gray-300 hover:text-dore transition text-xs sm:text-sm">À propos</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-dore transition text-xs sm:text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-dore transition text-xs sm:text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-dore">Contact</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">60 Sq. de la Couronne</p>
                  <p className="text-gray-300 text-xs sm:text-sm">30000 Nîmes, France</p>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1">Cotonou, Bénin</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:dahamayon8@gmail.com" className="text-gray-300 hover:text-dore transition text-xs sm:text-sm break-all">
                  dahamayon8@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+2290191007556" className="text-gray-300 hover:text-dore transition text-xs sm:text-sm">
                  +229 01 91 00 75 56
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2025 Dah Amayon – Tous droits réservés
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a 
                href="https://wa.me/2290191007556" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="mailto:dahamayon8@gmail.com"
                className="text-gray-400 hover:text-dore transition"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
