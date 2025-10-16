import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-vert-clair to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-center text-vert-profond mb-6 sm:mb-8">
            Contactez-moi
          </h1>
          <p className="text-base sm:text-lg text-center text-gray-700 mb-8 sm:mb-12 px-4">
            N'hésitez pas à me contacter pour toute question ou consultation. Je suis à votre écoute.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* WhatsApp Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full mb-4 sm:mb-6 mx-auto">
                <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-vert-profond mb-3 sm:mb-4 text-center">WhatsApp</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center">
                Contactez-moi directement via WhatsApp pour une réponse rapide
              </p>
              <a
                href="https://wa.me/2290191007556"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-green-600 transition"
              >
                <FaWhatsapp className="mr-2" />
                Envoyer un message
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-vert-profond rounded-full mb-4 sm:mb-6 mx-auto">
                <FaEnvelope className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-vert-profond mb-3 sm:mb-4 text-center">Email</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center">
                Envoyez-moi un email pour toute demande d'information
              </p>
              <a
                href="mailto:contact@dahamayon.fr"
                className="flex items-center justify-center bg-vert-profond text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-opacity-90 transition"
              >
                <FaEnvelope className="mr-2" />
                Envoyer un email
              </a>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-vert-profond mb-6 sm:mb-8 text-center">
              Informations de Contact
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-vert-clair rounded-full flex items-center justify-center">
                  <FaPhone className="text-vert-profond text-base sm:text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-vert-profond mb-1 text-sm sm:text-base">Téléphone</h4>
                  <p className="text-gray-700 text-sm sm:text-base">+229 01 91 00 75 56</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-vert-clair rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-vert-profond text-base sm:text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-vert-profond mb-1 text-sm sm:text-base">Localisation</h4>
                  <p className="text-gray-700 text-sm sm:text-base">Consultant en France et à l'international</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-vert-clair rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-vert-profond text-base sm:text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-vert-profond mb-1 text-sm sm:text-base">Disponibilité</h4>
                  <p className="text-gray-700 text-sm sm:text-base">7j/7 pour vos urgences spirituelles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
