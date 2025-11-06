import { motion } from 'framer-motion';
import { Building2, Globe, TrendingUp, LineChart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <Building2 size={40} />,
      title: 'Global Finance Transformation',
      client: 'Fortune 500 Manufacturing',
      description: 'Led SAP S/4HANA FICO implementation across 15 countries, streamlining financial reporting and reducing month-end close time by 40%.',
      technologies: ['SAP S/4HANA', 'FIORI', 'BPC'],
    },
    {
      icon: <Globe size={40} />,
      title: 'Multi-Currency Consolidation',
      client: 'International Retail Chain',
      description: 'Designed complex multi-currency GL structure with automated consolidation, enabling real-time financial insights across 25 locations.',
      technologies: ['SAP ECC', 'EC-CS', 'Profitability Analysis'],
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Cost Center Optimization',
      client: 'Energy Sector Leader',
      description: 'Implemented advanced cost center accounting with predictive analytics, improving budget accuracy by 35% and cost allocation efficiency.',
      technologies: ['CO-OM', 'CO-PA', 'SAP Analytics Cloud'],
    },
    {
      icon: <LineChart size={40} />,
      title: 'Asset Accounting Modernization',
      client: 'Infrastructure Company',
      description: 'Migrated legacy asset data to SAP with custom depreciation logic, ensuring compliance and improving asset visibility.',
      technologies: ['Asset Accounting', 'FI-AA', 'Data Migration'],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-luxury-gold font-montserrat text-sm tracking-[0.3em] uppercase mb-4">
            Featured Work
          </p>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-luxury-offwhite mb-6">
            Project <span className="text-luxury-gold">Highlights</span>
          </h2>
          <p className="text-luxury-pearl text-lg max-w-3xl mx-auto">
            Transformative SAP FICO implementations delivering measurable business value
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: 20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.6, 0.05, 0.01, 0.9],
              }}
              className="glass-card p-8 rounded-xl group cursor-pointer relative overflow-hidden"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 40px rgba(197, 165, 114, 0.6)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-luxury-gold via-transparent to-luxury-champagne opacity-0"
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.4 }}
              />
              
              <motion.div 
                className="text-luxury-gold mb-4 relative z-10"
                whileHover={{ 
                  rotate: [0, -5, 5, -5, 0],
                  scale: 1.2,
                }}
                transition={{ duration: 0.5 }}
              >
                {project.icon}
              </motion.div>
              
              <motion.h3 
                className="font-playfair text-2xl font-semibold text-luxury-offwhite mb-2 relative z-10"
                whileHover={{ x: 10, color: "#E4C59E" }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
              
              <motion.p 
                className="text-luxury-champagne text-sm font-montserrat mb-4 tracking-wide relative z-10"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                {project.client}
              </motion.p>
              
              <motion.p 
                className="text-luxury-pearl leading-relaxed mb-4 relative z-10"
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {project.description}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-2 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-luxury-navy border border-luxury-gold text-luxury-gold text-xs font-montserrat rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.5 + idx * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(197, 165, 114, 0.2)",
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ 
                  x: '100%',
                  opacity: [0, 0.3, 0],
                }}
                transition={{ duration: 0.8 }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(197, 165, 114, 0.5), transparent)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
