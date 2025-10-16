import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/2290191007556"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110 animate-pulse"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <FaWhatsapp className="text-3xl sm:text-4xl" />
    </a>
  )
}

export default FloatingWhatsApp
