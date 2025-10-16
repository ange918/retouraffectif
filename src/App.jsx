import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import Article1 from './pages/Article1'
import Article2 from './pages/Article2'
import Article3 from './pages/Article3'
import Article4 from './pages/Article4'
import Article5 from './pages/Article5'
import Article6 from './pages/Article6'
import Article7 from './pages/Article7'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    
    setTimeout(() => {
      ScrollTrigger.refresh()
      
      gsap.utils.toArray('.animate-section').forEach((section) => {
        gsap.fromTo(section, 
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })
    }, 100)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/retour-affection-rapide-24h" element={<Article1 />} />
          <Route path="/blog/retour-affectif-amoureux-efficace" element={<Article2 />} />
          <Route path="/blog/rituel-retour-affectif-puissant-serieux" element={<Article3 />} />
          <Route path="/blog/retour-affectif-serieux-distinguer-vrai-rituel" element={<Article4 />} />
          <Route path="/blog/retour-affection-72h-etapes-conseils" element={<Article5 />} />
          <Route path="/blog/retour-affectif-efficace-astuces-rituels" element={<Article6 />} />
          <Route path="/blog/retour-affectif-puissant-rituels-confirmes" element={<Article7 />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  )
}

export default App
