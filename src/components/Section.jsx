import { motion } from 'framer-motion';

export function Section({ children, className = '' }) {
  return (
    <motion.section
      className={`py-24 lg:py-32 bg-secondary ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px 0px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </motion.section>
  );
}
