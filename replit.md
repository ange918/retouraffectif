# Site Web Marabout Dah Amayon - Retour Affectif

## Vue d'ensemble
Site web professionnel pour Dah Amayon, marabout spécialisé en retour affectif et spiritualité traditionnelle, destiné à un public en France et en Afrique.

## Technologies utilisées
- **Framework**: React 19.1.1 avec Vite 7.1.10
- **Styling**: Tailwind CSS v3
- **Animations**: GSAP avec ScrollTrigger
- **Language**: JavaScript (ES Modules)
- **Package Manager**: npm

## Structure du projet
```
src/
├── components/
│   ├── Header.jsx          # Navigation et menu mobile
│   ├── Hero.jsx            # Section héro avec CTA
│   ├── WhyChoose.jsx       # Pourquoi choisir Dah Amayon (3 cards)
│   ├── ExpressSolutions.jsx # Solutions express 24/7
│   ├── PersonalizedSolutions.jsx # Services personnalisés
│   ├── Testimonials.jsx    # Témoignages clients
│   ├── About.jsx           # À propos avec carrousel
│   ├── Blog.jsx            # Articles de blog
│   ├── CallToAction.jsx    # CTA final
│   └── Footer.jsx          # Pied de page complet
├── App.jsx                 # Application principale
├── index.css              # Styles globaux Tailwind
└── main.jsx               # Point d'entrée
```

## Fonctionnalités
- ✅ Design responsive mobile-first
- ✅ Animations fluides au scroll (GSAP)
- ✅ Menu de navigation avec scroll vers sections
- ✅ Boutons WhatsApp et Email pour contact rapide
- ✅ Carrousel d'images automatique
- ✅ Design moderne avec palette verte personnalisée
- ✅ Polices Google Fonts (Poppins & Playfair Display)

## Palette de couleurs
- **Vert clair**: #C8E6C9 (backgrounds)
- **Vert profond**: #14532D (textes principaux)
- **Doré**: #FFD700 (accents)
- **Blanc et gris**: pour contraste et lisibilité

## Contact
- **Téléphone**: +229 01 91 00 75 56
- **Email**: dahamayon8@gmail.com
- **Adresses**: 
  - 60 Sq. de la Couronne, 30000 Nîmes, France
  - Cotonou, Bénin

## Développement
```bash
npm run dev      # Démarrer le serveur de développement (port 5000)
npm run build    # Compiler pour production
npm run preview  # Prévisualiser la version de production
```

## Configuration Replit
- Le serveur Vite est configuré pour écouter sur `0.0.0.0:5000`
- HMR WebSocket configuré pour l'environnement Replit
- Deployment configuré en mode "autoscale"

## Améliorations futures suggérées
1. Héberger les images localement au lieu d'utiliser Unsplash
2. Ajouter des animations GSAP plus riches pour les éléments individuels
3. Implémenter un système de blog dynamique avec CMS

## Dernière mise à jour
16 octobre 2025 - Implémentation complète du site avec toutes les sections demandées
