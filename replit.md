# Site Web Marabout Dah Amayon - Retour Affectif

## Vue d'ensemble
Site web professionnel multipage pour Dah Amayon, marabout spécialisé en retour affectif et spiritualité traditionnelle, destiné à un public en France et en Afrique.

## Technologies utilisées
- **Framework**: React 19.1.1 avec Vite 7.1.10
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v3
- **Animations**: GSAP avec ScrollTrigger
- **Icons**: React Icons (Font Awesome)
- **Language**: JavaScript (ES Modules)
- **Package Manager**: npm

## Structure du projet
```
src/
├── pages/
│   ├── Home.jsx               # Page d'accueil
│   ├── AboutPage.jsx          # Page À propos
│   ├── BlogPage.jsx           # Page Blog
│   └── ContactPage.jsx        # Page Contact
├── components/
│   ├── Header.jsx             # Navigation avec React Router
│   ├── Hero.jsx               # Section héro avec badges
│   ├── WhyChoose.jsx          # Pourquoi choisir Dah Amayon
│   ├── ExpressSolutions.jsx   # Solutions express 24/7
│   ├── PersonalizedSolutions.jsx # Services avec images
│   ├── Testimonials.jsx       # Témoignages clients
│   ├── About.jsx              # À propos avec carrousel
│   ├── Blog.jsx               # Articles de blog
│   ├── CallToAction.jsx       # CTA final
│   ├── Footer.jsx             # Pied de page complet
│   └── FloatingWhatsApp.jsx   # Bouton WhatsApp flottant
├── App.jsx                    # Router et animations GSAP
├── index.css                  # Styles globaux Tailwind
└── main.jsx                   # Point d'entrée
```

## Fonctionnalités
- ✅ Application multipage avec React Router (4 pages)
- ✅ Design responsive mobile-first avec textes fins sur mobile
- ✅ Icônes WhatsApp (React Icons) au lieu de boutons textuels
- ✅ Bouton WhatsApp flottant fixe en bas à droite (toutes les pages)
- ✅ Badges certifications sous le bouton Hero
- ✅ Images dans les cartes de solutions personnalisées
- ✅ Animations fluides au scroll (GSAP) compatibles React Router
- ✅ Menu de navigation avec liens React Router
- ✅ Carrousel d'images automatique sur page À propos
- ✅ Design moderne avec palette verte personnalisée
- ✅ Polices Google Fonts (Poppins & Playfair Display)

## Pages
- **/** - Page d'accueil avec Hero, services, témoignages
- **/a-propos** - À propos de Dah Amayon avec carrousel
- **/blog** - Articles de blog spirituels
- **/contact** - Page de contact avec formulaire et infos

## Palette de couleurs
- **Vert clair**: #C8E6C9 (backgrounds)
- **Vert profond**: #14532D (textes principaux)
- **Doré**: #FFD700 (accents)
- **Blanc et gris**: pour contraste et lisibilité

## Contact
- **Téléphone**: +229 01 91 00 75 56
- **Email**: dahamayon8@gmail.com
- **WhatsApp**: https://wa.me/2290191007556
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
- GSAP ScrollTrigger se rafraîchit automatiquement lors des changements de route
- Deployment configuré en mode "autoscale"

## Responsive Design
- Textes adaptés pour mobile : text-sm, text-xs sur petits écrans
- Marges et paddings ajustés avec classes Tailwind (sm:, md:, lg:)
- Images et cartes redimensionnées pour tous les écrans
- Navigation mobile avec menu hamburger

## Assets
- Badges de certification dans `/public/` (Bénin, Secret, Garantie)
- Images hébergées via Unsplash pour les composants
- Icônes via React Icons (Font Awesome)

## Dernière mise à jour
16 octobre 2025 - Transformation complète en multipage avec React Router, design responsive, icônes WhatsApp, badges et images
