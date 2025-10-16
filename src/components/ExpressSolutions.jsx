import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'

const ExpressSolutions = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-vert-clair animate-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-vert-profond mb-4 sm:mb-6">
            Solutions express pour urgences
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-8 leading-relaxed">
            Intervention rapide 24h/24
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            Pour les cas critiques, nous assurons une disponibilité permanente pour des résultats immédiats.
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 gap-3 sm:gap-4">
              <FaPhone className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-500" />
              <a 
                href="tel:+2290191007556"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-vert-profond hover:text-dore transition"
              >
                +229 01 91 00 75 56
              </a>
            </div>
            
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
              Partout en Afrique et en France<br/>
              <span className="font-semibold text-vert-profond">(Paris, Lyon, Marseille, Bordeaux, etc.)</span>
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a 
                href="https://wa.me/2290191007556" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-green-600 transition"
              >
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                WhatsApp
              </a>
              <a 
                href="mailto:dahamayon8@gmail.com"
                className="inline-flex items-center justify-center bg-vert-profond text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-opacity-90 transition"
              >
                <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpressSolutions
