import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    'SAP Certified Application Associate - Financial Accounting (FI)',
    'SAP Certified Application Associate - Management Accounting (CO)',
    'SAP S/4HANA Financial Accounting Certification',
    'SAP S/4HANA Management Accounting Certification',
    'SAP Certified Application Professional - Asset Accounting',
    'SAP Financial Consolidation Certification',
    'SAP Business Planning & Consolidation (BPC)',
    'SAP Analytics Cloud Financial Planning',
    'Prince2 Foundation - Project Management',
    'Agile Scrum Master Certification',
    'ITIL Foundation v4',
    'SAP FIORI Implementation',
    'SAP Migration Cockpit Specialist',
    'Data Protection & Compliance (GDPR)',
    'Advanced Excel & Financial Modeling',
  ];

  return (
    <section id="certifications" className="py-24 px-6 relative bg-luxury-charcoal">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-luxury-gold to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Award size={48} className="text-luxury-gold" />
          </div>
          <p className="text-luxury-gold font-montserrat text-sm tracking-[0.3em] uppercase mb-4">
            Professional Credentials
          </p>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-luxury-offwhite mb-6">
            Certifications & <span className="text-luxury-gold">Qualifications</span>
          </h2>
          <p className="text-luxury-pearl text-lg max-w-3xl mx-auto">
            Industry-recognized certifications demonstrating deep expertise and commitment to excellence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-12 rounded-2xl relative overflow-hidden"
        >
          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(197, 165, 114, 0.3) 10px, rgba(197, 165, 114, 0.3) 20px)',
              backgroundSize: '200% 200%',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100,
                }}
                className="flex items-start gap-3 group cursor-pointer p-3 rounded-lg hover:bg-luxury-navy/30 transition-colors"
                whileHover={{
                  x: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.08 + 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: 360,
                  }}
                  className="flex-shrink-0"
                >
                  <CheckCircle size={20} className="text-luxury-gold mt-1" />
                </motion.div>
                <motion.p 
                  className="text-luxury-pearl leading-relaxed"
                  whileHover={{ 
                    color: "#E4C59E",
                    x: 5,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {cert}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-luxury-champagne text-lg font-montserrat">
            Committed to <span className="text-luxury-gold font-semibold">continuous learning</span> and staying ahead of industry trends
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
