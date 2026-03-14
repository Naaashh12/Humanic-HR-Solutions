'use client';

import { motion } from 'framer-motion';

export const EquipmentSection = () => {
  const equipment = [
    { name: 'Excavators', emoji: '🏗️' },
    { name: 'Cranes', emoji: '🏗️' },
    { name: 'Forklifts', emoji: '🚜' },
    { name: 'Bobcat Loaders', emoji: '🚜' },
    { name: 'Dump Trucks', emoji: '🚛' },
    { name: 'Construction Equipment', emoji: '🏗️' },
  ];

  return (
    <section className="py-20 bg-sand relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-bg mb-4">
            Equipment <span className="text-gold">Rental</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium quality equipment available for your project needs
          </p>
        </motion.div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-all border border-gold/20 hover:border-gold/50 cursor-pointer group"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                className="text-6xl mb-4"
              >
                {item.emoji}
              </motion.div>
              <h3 className="text-xl font-bold text-dark-bg mb-3 group-hover:text-gold transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-4">Professional grade equipment</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-sm"
              >
                Request Quote
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg"
          >
            View All Equipment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
