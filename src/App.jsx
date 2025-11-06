import { lazy, Suspense } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components for better performance
const About = lazy(() => import('./components/Expertise'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-12 h-12 border-4 border-luxury-gold border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-luxury-navy parallax-bg">
        <Navbar />
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </LazyMotion>
  );
}

export default App;
