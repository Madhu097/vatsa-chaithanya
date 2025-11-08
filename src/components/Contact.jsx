import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'chaithanyavatsa@gmail.com',
      href: 'mailto:chaithanyavatsa@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 8328398152',
      href: 'tel:+918328398152',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/chaithanyavatsa',
      href: ' https://www.linkedin.com/in/chaithanya-vatsa-549a4a360',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luxury-gold opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-luxury-gold font-montserrat text-sm tracking-[0.3em] uppercase mb-4">
            Let's Connect
          </p>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-luxury-offwhite mb-6">
            Get In <span className="text-luxury-gold">Touch</span>
          </h2>
          <p className="text-luxury-pearl text-lg max-w-3xl mx-auto">
            FINANCE IS MY FOUNDATION. SAP IS MY TOOL. GROWTH IS MY CONSTANT GOAL.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
            >
              {info.href ? (
                <motion.a
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card p-6 rounded-xl flex items-center gap-4 group block relative overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(197, 165, 114, 0.5)",
                    borderColor: "rgba(197, 165, 114, 0.8)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 to-transparent opacity-0"
                    whileHover={{ opacity: 1, x: ['-100%', '100%'] }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div 
                    className="text-luxury-gold relative z-10"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.3,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {info.icon}
                  </motion.div>
                  <div className="relative z-10">
                    <motion.p 
                      className="text-luxury-champagne text-sm font-montserrat mb-1"
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      {info.label}
                    </motion.p>
                    <motion.p 
                      className="text-luxury-offwhite font-semibold"
                      whileHover={{ color: "#E4C59E", x: 5 }}
                    >
                      {info.value}
                    </motion.p>
                  </div>
                </motion.a>
              ) : (
                <motion.div 
                  className="glass-card p-6 rounded-xl flex items-center gap-4 relative overflow-hidden"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 20px rgba(197, 165, 114, 0.3)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div 
                    className="text-luxury-gold relative z-10"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    {info.icon}
                  </motion.div>
                  <div className="relative z-10">
                    <p className="text-luxury-champagne text-sm font-montserrat mb-1">
                      {info.label}
                    </p>
                    <p className="text-luxury-offwhite font-semibold">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card p-12 rounded-2xl text-center"
        >
          <h3 className="font-playfair text-3xl font-semibold text-luxury-offwhite mb-4">
            Available for Consulting & Full-Time Opportunities
          </h3>
          <p className="text-luxury-pearl text-lg mb-8">
            Open to <span className="text-luxury-gold font-semibold">enterprise SAP FICO projects</span>, 
            <span className="text-luxury-gold font-semibold"> strategic advisory roles</span>, and 
            <span className="text-luxury-gold font-semibold"> full-time positions</span> with innovative organizations
          </p>
          <a
            href="mailto:chaithanya.vatsa@email.com"
            className="inline-block px-10 py-4 bg-gold-gradient text-luxury-navy font-montserrat font-semibold rounded-lg hover-gold-glow tracking-wider uppercase text-sm"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
