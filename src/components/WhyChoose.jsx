const WhyChoose = () => {
  const reasons = [
    {
      title: "Authenticité vérifiée",
      description: "Certifié par le Conseil des Sages Vodun du Bénin, je pratique des rituels traditionnels transmis de génération en génération. Chaque travail est effectué dans le respect des anciennes traditions.",
      icon: (
        <svg className="w-12 h-12 text-dore" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Résultats rapides",
      description: "Rituels exécutés en 24h avec des résultats visibles sous 72h dans la plupart des cas. Je m'engage à mettre tout en œuvre pour obtenir les meilleurs résultats dans les délais convenus.",
      icon: (
        <svg className="w-12 h-12 text-dore" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Confidentialité assurée",
      description: "Toutes nos consultations sont discrètes et confidentielles. Vos informations personnelles sont protégées et ne seront jamais divulguées à des tiers.",
      icon: (
        <svg className="w-12 h-12 text-dore" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 bg-white animate-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-vert-profond mb-16">
          Des rituels authentiques pour un retour affectif rapide
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-vert-clair to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-playfair font-bold text-vert-profond mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
