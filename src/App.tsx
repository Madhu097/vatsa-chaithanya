import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/Expertise';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-luxury-navy parallax-bg">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </LazyMotion>
  );
}

export default App;
