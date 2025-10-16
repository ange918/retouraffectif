const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophie M.",
      image: "https://i.pravatar.cc/150?img=1",
      text: "Après 6 mois de séparation, mon ex est revenu en moins de 2 semaines grâce aux rituels de Dah Amayon. Je recommande vivement ses services !",
      rating: 5
    },
    {
      name: "Laurent D.",
      image: "https://i.pravatar.cc/150?img=12",
      text: "J'étais sceptique au début, mais les résultats sont là. Ma femme est revenue et notre relation est plus forte que jamais. Merci infiniment !",
      rating: 5
    },
    {
      name: "Marie-Claire K.",
      image: "https://i.pravatar.cc/150?img=5",
      text: "Un grand marabout très sérieux et professionnel. Mon problème a été résolu rapidement et en toute discrétion. Je suis reconnaissante.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-vert-clair animate-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-vert-profond mb-4 md:mb-0">
            Témoignages de nos clients
          </h2>
          <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center">
            <svg className="w-6 h-6 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-bold text-vert-profond">Avis clients Google ★★★★★</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-vert-profond">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
