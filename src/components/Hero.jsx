import { useMemo, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 120]
  );

  const orbRotate = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 60]
  );

  const orbRotateReverse = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -60]
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 30px rgba(197, 165, 114, 0.6)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  // Floating particles
  const particles = useMemo(
    () =>
      Array.from({ length: shouldReduceMotion ? 8 : 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 3 + 2,
      })),
    [shouldReduceMotion]
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-luxury-gold rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Background Elements */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y: parallaxY }}>
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-luxury-gold opacity-5 rounded-full blur-3xl"
          style={{ rotate: orbRotate }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-luxury-champagne opacity-5 rounded-full blur-3xl"
          style={{ rotate: orbRotateReverse }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              animate={shouldReduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={16} className="text-luxury-gold" />
            </motion.div>
            <p className="text-luxury-gold font-montserrat text-sm tracking-[0.3em] uppercase">
              SAP FICO Consultant
            </p>
            <motion.div
              animate={shouldReduceMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={16} className="text-luxury-gold" />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-playfair text-6xl md:text-8xl font-bold text-luxury-offwhite mb-6"
          >
            Chaithanya{' '}
            <motion.span
              className="gold-shimmer inline-block"
              animate={shouldReduceMotion ? undefined : {
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Vatsa
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-lato text-xl md:text-2xl text-luxury-pearl max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Bridging{' '}
            <motion.span
              className="text-luxury-gold font-semibold inline-block"
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.1, color: "#E4C59E" }}
            >
              Finance
            </motion.span>
            ,{' '}
            <motion.span
              className="text-luxury-gold font-semibold inline-block"
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.1, color: "#E4C59E" }}
            >
              Technology
            </motion.span>{' '}
            &{' '}
            <motion.span
              className="text-luxury-gold font-semibold inline-block"
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.1, color: "#E4C59E" }}
            >
              Strategy
            </motion.span>{' '}
            through SAP FICO
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gold-gradient text-luxury-navy font-montserrat font-semibold rounded-lg tracking-wider uppercase text-sm relative overflow-hidden group"
              variants={buttonVariants}
              whileHover={shouldReduceMotion ? undefined : "hover"}
              whileTap={shouldReduceMotion ? undefined : "tap"}
            >
              <motion.span
                className="absolute inset-0 bg-luxury-champagne"
                initial={{ x: '-100%' }}
                whileHover={shouldReduceMotion ? undefined : { x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Get In Touch</span>
            </motion.a>
            <motion.a
              href="#about"
              className="px-8 py-4 glass-card text-luxury-gold font-montserrat font-semibold rounded-lg tracking-wider uppercase text-sm"
              variants={buttonVariants}
              whileHover={shouldReduceMotion ? undefined : "hover"}
              whileTap={shouldReduceMotion ? undefined : "tap"}
            >
              About Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: shouldReduceMotion ? 1 : 1.2 }}
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} className="text-luxury-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
