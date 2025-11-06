import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Mail, MapPin, Trophy } from 'lucide-react';

const profileImage = 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=720&q=80';

const infoHighlights = [
  {
    icon: <Briefcase size={24} />,
    label: 'Role',
    value: 'SAP FICO Transformation Leader',
  },
  {
    icon: <MapPin size={24} />,
    label: 'Base',
    value: 'Bengaluru · Global Delivery',
  },
  {
    icon: <Mail size={24} />,
    label: 'Reach',
    value: 'hello@chaithanyavatsa.com',
  },
];

const education = [
  {
    degree: 'MBA · Finance & Strategy',
    institution: 'Indian School of Business',
    year: '2018',
  },
  {
    degree: 'B.Com (Hons) · Accounting & Analytics',
    institution: 'Osmania University',
    year: '2014',
  },
];

const achievements = [
  {
    title: 'Finance Transformation',
    description:
      'Led multi-country SAP S/4HANA FICO programs delivering faster close cycles and enhanced governance.',
  },
  {
    title: 'Strategic Partner',
    description:
      'Translate CFO priorities into scalable processes blending finance rigor with technology innovation.',
  },
];

const Expertise = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-luxury-gold opacity-5 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-8 w-72 h-72 bg-luxury-champagne opacity-5 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.p>
          <motion.h2
            className="font-playfair text-5xl md:text-6xl font-bold text-luxury-offwhite mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Meet <span className="text-luxury-gold">Chaithanya Vatsa</span>
          </motion.h2>
          <motion.p
            className="text-luxury-pearl text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Finance transformation specialist blending SAP FICO mastery with strategic storytelling to turn data into decisive outcomes.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 rounded-2xl text-center flex flex-col items-center"
          >
            <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-luxury-gold shadow-xl">
              <img
                src={profileImage}
                alt="Chaithanya Vatsa portrait"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="font-playfair text-3xl text-luxury-offwhite mt-6">Chaithanya Vatsa</h3>
            <p className="text-luxury-gold font-montserrat tracking-[0.2em] uppercase text-xs mt-2">
              SAP FICO · Finance Storyteller
            </p>
            <div className="mt-8 w-full space-y-5">
              {infoHighlights.map((item) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4 glass-card bg-luxury-navy/40 border border-luxury-gold/20 px-5 py-4 rounded-xl"
                  whileHover={{ scale: 1.03, x: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-luxury-gold">{item.icon}</span>
                  <div className="text-left">
                    <p className="text-luxury-pearl text-xs uppercase tracking-[0.2em]">
                      {item.label}
                    </p>
                    <p className="text-luxury-offwhite font-montserrat text-sm mt-1">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="glass-card p-10 rounded-2xl"
            >
              <p className="text-luxury-pearl text-lg leading-relaxed mb-6">
                I translate complex finance landscapes into streamlined, insight-led narratives for leadership. From blueprint
                design to go-live, I champion experiences that respect the nuance of local markets while delivering consistent,
                compliant control worldwide.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.title}
                    className="border border-luxury-gold/30 rounded-xl p-6 bg-luxury-navy/40"
                    whileHover={{ translateY: -6, boxShadow: '0 20px 40px rgba(197, 165, 114, 0.15)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-playfair text-xl text-luxury-offwhite mb-2 flex items-center gap-2">
                      <Trophy size={24} className="text-luxury-gold" />
                      {achievement.title}
                    </h4>
                    <p className="text-luxury-pearl text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="glass-card p-10 rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <GraduationCap size={28} className="text-luxury-gold" />
                <h3 className="font-playfair text-3xl text-luxury-offwhite">Education & Qualifications</h3>
              </div>
              <div className="mt-6 space-y-6">
                {education.map((item) => (
                  <motion.div
                    key={item.degree}
                    className="border border-luxury-gold/20 rounded-xl p-6 bg-luxury-navy/30"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-luxury-gold font-montserrat text-xs tracking-[0.3em] uppercase">
                      {item.year}
                    </p>
                    <h4 className="font-playfair text-xl text-luxury-offwhite mt-2">{item.degree}</h4>
                    <p className="text-luxury-pearl text-sm mt-1">{item.institution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
