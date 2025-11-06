import { motion, useReducedMotion } from 'framer-motion';

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
      className="relative bg-luxury-charcoal border-t border-luxury-gold border-opacity-20 py-8 px-6 overflow-hidden"
    >
      {/* Animated gradient edge */}
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-50"
        animate={shouldReduceMotion ? undefined : {
          scaleX: [0.6, 1, 0.6],
        }}
        transformTemplate={({ scaleX }) => `translateZ(0) scaleX(${scaleX})`}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.div
            className="text-center md:text-left"
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          >
            <motion.p
              className="font-playfair text-xl text-luxury-offwhite mb-2"
              whileHover={shouldReduceMotion ? undefined : {
                scale: 1.02,
                textShadow: '0 0 20px rgba(197, 165, 114, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-luxury-offwhite">Chaithanya</span>
              <motion.span
                className="text-luxury-gold"
                animate={shouldReduceMotion ? undefined : {
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                {' '}Vatsa
              </motion.span>
            </motion.p>
            <p className="text-luxury-pearl text-sm">
              SAP FICO Consultant | Transforming Finance Through Technology
            </p>
          </motion.div>

          <motion.div
            className="text-center md:text-right"
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          >
            <p className="text-luxury-pearl text-sm">
              © {new Date().getFullYear()} Chaithanya Vatsa. All rights reserved.
            </p>
            <motion.p
              className="text-luxury-champagne text-xs mt-1"
              whileHover={shouldReduceMotion ? undefined : { x: 4 }}
              transition={{ duration: 0.25 }}
            >
              Designed for Excellence | Built with Precision
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
