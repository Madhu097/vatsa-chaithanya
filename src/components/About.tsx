import { motion } from 'framer-motion';
import { Target, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-luxury-gold opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-luxury-champagne opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-luxury-gold font-montserrat text-sm tracking-[0.3em] uppercase mb-4">
            About Me
          </p>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-luxury-offwhite mb-6">
            Transforming <span className="text-luxury-gold">Finance</span> Through Technology
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-12 rounded-2xl mb-12"
        >
          <p className="text-luxury-pearl text-lg leading-relaxed mb-6">
            As a seasoned <span className="text-luxury-gold font-semibold">SAP FICO Consultant</span>, I bridge the gap between financial accuracy and technological innovation. My expertise lies in designing and implementing robust SAP solutions that transform complex financial operations into strategic business advantages.
          </p>
          <p className="text-luxury-pearl text-lg leading-relaxed mb-6">
            With a unique blend of <span className="text-luxury-gold font-semibold">accounting precision</span> and <span className="text-luxury-gold font-semibold">marketing insight</span>, I help global enterprises optimize their financial processes, enhance decision-making capabilities, and drive sustainable growth through data-driven strategies.
          </p>
          <p className="text-luxury-pearl text-lg leading-relaxed">
            My approach combines technical excellence with business acumen, ensuring every SAP FICO implementation delivers measurable value and positions organizations for long-term success in an increasingly digital economy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-xl text-center hover-gold-glow"
          >
            <div className="text-luxury-gold mb-4 flex justify-center">
              <Target size={48} />
            </div>
            <h3 className="font-playfair text-2xl font-semibold text-luxury-offwhite mb-3">
              Strategic Vision
            </h3>
            <p className="text-luxury-pearl">
              Aligning SAP FICO solutions with long-term business objectives and market dynamics
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 rounded-xl text-center hover-gold-glow"
          >
            <div className="text-luxury-gold mb-4 flex justify-center">
              <Lightbulb size={48} />
            </div>
            <h3 className="font-playfair text-2xl font-semibold text-luxury-offwhite mb-3">
              Innovation Focus
            </h3>
            <p className="text-luxury-pearl">
              Leveraging cutting-edge SAP technologies to create competitive advantages
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-xl text-center hover-gold-glow"
          >
            <div className="text-luxury-gold mb-4 flex justify-center">
              <Zap size={48} />
            </div>
            <h3 className="font-playfair text-2xl font-semibold text-luxury-offwhite mb-3">
              Results-Driven
            </h3>
            <p className="text-luxury-pearl">
              Delivering measurable outcomes that impact bottom-line performance
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
