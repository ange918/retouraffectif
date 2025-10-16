const PersonalizedSolutions = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white animate-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-center text-vert-profond mb-10 sm:mb-12 lg:mb-16">
          Solutions Spirituelles Personnalisées
        </h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="md:col-span-2 bg-vert-profond text-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold mb-4 sm:mb-6">
              Retour Affectif et Réconciliation Amoureuse
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
              Spécialisé dans les rituels de retour affectif, je vous aide à reconquérir l'amour perdu, à raviver la passion dans votre couple, ou à faire revenir l'être aimé. Mes travaux spirituels agissent sur les énergies et les sentiments pour créer une harmonie durable.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white bg-opacity-10 p-4 sm:p-6 rounded-xl hover:bg-opacity-20 transition-all group">
                <div className="mb-3 sm:mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop" 
                    alt="Rituel de retour rapide" 
                    className="w-full h-32 sm:h-40 object-cover rounded-lg mb-3 sm:mb-4 group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-dore">Rituel de Retour Rapide</h4>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Pour les situations urgentes nécessitant une intervention immédiate. Résultats visibles en 72h.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 sm:p-6 rounded-xl hover:bg-opacity-20 transition-all group">
                <div className="mb-3 sm:mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop" 
                    alt="Protection du couple" 
                    className="w-full h-32 sm:h-40 object-cover rounded-lg mb-3 sm:mb-4 group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-dore">Protection du Couple</h4>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Protégez votre relation contre les influences négatives, la jalousie et les tentatives de séparation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-vert-clair to-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-dore mb-3 sm:mb-4">
              <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-playfair font-bold text-vert-profond mb-3 sm:mb-4">
              Désenvoutement & Purification
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed">
              Libérez-vous des énergies négatives, malédictions et mauvais sorts qui bloquent votre vie amoureuse et professionnelle.
            </p>
          </div>

          <div className="bg-gradient-to-br from-vert-clair to-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-dore mb-3 sm:mb-4">
              <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-playfair font-bold text-vert-profond mb-3 sm:mb-4">
              Voyance & Guidance Spirituelle
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed">
              Consultations de voyance pour éclairer votre chemin, prendre les bonnes décisions et comprendre votre avenir amoureux.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalizedSolutions
