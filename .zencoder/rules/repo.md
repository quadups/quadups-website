---
description: Repository Information Overview
alwaysApply: true
---

# TechNovo Website Information

## Summary
TechNovo Website (branded as Quadups) is a modern, responsive website built with React and TypeScript. It serves as the official online presence for Quadups, a technology solutions provider offering various software services including custom software development, web development, mobile app development, AI & machine learning, UI/UX design, e-commerce solutions, Web3 development, and consulting services.

## Structure
- **src/**: Contains all source code for the React application
  - **Pages/**: Main page components (Home, About, Services, StartProject)
  - **components/**: Reusable UI components organized by feature
  - **hooks/**: Custom React hooks
  - **lib/**: Utility functions and shared code
  - **assets/**: Static assets like images and icons
- **public/**: Static files served directly (images, logos)
- **dist/**: Build output directory

## Language & Runtime
**Language**: TypeScript/JavaScript
**Version**: TypeScript ~5.6.2
**Build System**: Vite 6.0.5
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- React 18.3.1
- React Router DOM 7.1.1
- Tailwind CSS 3.4.17
- Radix UI components (dialog, toast, select, etc.)
- Framer Motion 11.15.0
- EmailJS 4.4.1
- React Hook Form 7.54.2
- Zod 3.24.1

**Development Dependencies**:
- TypeScript 5.6.2
- ESLint 9.17.0
- Vite 6.0.5
- PostCSS 8.4.49
- Autoprefixer 10.4.20

## Build & Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Configuration
The application uses environment variables for EmailJS integration:
- VITE_EMAILJS_SERVICE_ID
- VITE_EMAILJS_TEMPLATE_ID
- VITE_EMAILJS_PUBLIC_KEY

## Main Entry Points
- **src/main.tsx**: Application bootstrap
- **src/App.tsx**: Main component with routing configuration
- **index.html**: HTML entry point

## Routing
The application uses React Router with the following routes:
- `/`: Home page
- `/about`: About page
- `/services`: Services page
- `/startaproject`: Project inquiry page

## Styling
The project uses Tailwind CSS for styling with custom configuration in:
- **tailwind.config.js**: Theme customization
- **postcss.config.js**: PostCSS plugins
- **components.json**: Component configuration