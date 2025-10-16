# Retour Affectif

## Overview
A React + Vite application providing a minimal setup for React development with HMR (Hot Module Replacement) and ESLint rules.

## Project Information
- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.10
- **Language**: JavaScript (ES Modules)
- **Package Manager**: npm

## Project Structure
- `src/` - Source code
  - `App.jsx` - Main application component
  - `main.jsx` - Application entry point
  - `assets/` - Static assets (images, etc.)
- `public/` - Public static files
- `index.html` - HTML entry point

## Development
The development server runs on port 5000 with HMR enabled. The Vite configuration has been optimized for the Replit environment:
- Server binds to `0.0.0.0:5000` for proper proxy routing
- HMR WebSocket configured for Replit's secure connection
- Preview mode also configured for port 5000

## Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment
The project is configured for autoscale deployment with:
- Build command: `npm run build`
- Run command: `npx vite preview --host 0.0.0.0 --port`

## Last Updated
October 16, 2025 - Initial Replit environment setup
