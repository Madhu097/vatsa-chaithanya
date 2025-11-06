import { motion } from 'framer-motion';
import { Award, Briefcase, Users, TrendingUp } from 'lucide-react';

const Metrics = () => {
  const metrics = [
    {
      icon: <Briefcase size={40} />,
      value: '10+',
      label: 'Years Experience',
      description: 'Delivering SAP FICO excellence',
    },
    {
      icon: <Award size={40} />,
      value: '15+',
      label: 'Certifications',
      description: 'Industry-recognized credentials',
    },
    {
      icon: <Users size={40} />,
      value: '50+',
      label: 'Projects Delivered',
      description: 'Across global enterprises',
    },
    {
      icon: <TrendingUp size={40} />,
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Consistent excellence',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotateY: -90,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section className="py-24 px-6 relative bg-luxury-charcoal overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-luxury-gold to-transparent"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-luxury-gold opacity-10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-64 h-64 bg-luxury-champagne opacity-10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p 
            className="text-luxury-gold font-montserrat text-sm tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Impact Metrics
          </motion.p>
          <motion.h2 
            className="font-playfair text-5xl md:text-6xl font-bold text-luxury-offwhite"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Proven <motion.span 
              className="text-luxury-gold inline-block"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Excellence
            </motion.span>
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card p-8 rounded-xl text-center group cursor-pointer relative overflow-hidden"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 40px rgba(197, 165, 114, 0.6)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-luxury-gold to-transparent opacity-0"
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="text-luxury-gold mb-4 flex justify-center relative z-10"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.3,
                }}
                transition={{ duration: 0.6 }}
              >
                {metric.icon}
              </motion.div>
              
              <motion.h3 
                className="font-playfair text-5xl font-bold text-luxury-offwhite mb-2 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1,
                    delay: index * 0.2 + 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {metric.value}
                </motion.span>
              </motion.h3>
              
              <motion.p 
                className="text-luxury-gold font-montserrat font-semibold text-lg mb-2 tracking-wide relative z-10"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {metric.label}
              </motion.p>
              
              <motion.p 
                className="text-luxury-pearl text-sm relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {metric.description}
              </motion.p>

              {/* Pulse effect on hover */}
              <motion.div
                className="absolute inset-0 border-2 border-luxury-gold rounded-xl opacity-0"
                whileHover={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;
