import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="text-xl sm:text-2xl font-playfair font-bold text-vert-profond">
          Dah Amayon
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className="text-sm lg:text-base text-vert-profond hover:text-dore transition">Accueil</Link>
          <Link to="/a-propos" className="text-sm lg:text-base text-vert-profond hover:text-dore transition">À propos</Link>
          <Link to="/blog" className="text-sm lg:text-base text-vert-profond hover:text-dore transition">Blog</Link>
          <Link to="/contact" className="text-sm lg:text-base text-vert-profond hover:text-dore transition">Contact</Link>
        </nav>

        <a 
          href="https://wa.me/2290191007556" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center bg-green-500 text-white px-3 lg:px-4 py-2 rounded-full hover:bg-green-600 transition text-sm lg:text-base"
        >
          <FaWhatsapp className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
          WhatsApp
        </a>

        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-vert-profond"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-sm text-vert-profond hover:text-dore transition">Accueil</Link>
            <Link to="/a-propos" onClick={() => setMenuOpen(false)} className="text-sm text-vert-profond hover:text-dore transition">À propos</Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)} className="text-sm text-vert-profond hover:text-dore transition">Blog</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-sm text-vert-profond hover:text-dore transition">Contact</Link>
            <a 
              href="https://wa.me/2290191007556" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition text-center text-sm flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
