import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyChoose from './components/WhyChoose'
import ExpressSolutions from './components/ExpressSolutions'
import PersonalizedSolutions from './components/PersonalizedSolutions'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Blog from './components/Blog'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    gsap.utils.toArray('.animate-section').forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })
    })
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChoose />
      <ExpressSolutions />
      <PersonalizedSolutions />
      <Testimonials />
      <About />
      <Blog />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
