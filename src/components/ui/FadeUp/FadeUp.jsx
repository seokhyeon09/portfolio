import React from 'react';
import { motion } from 'framer-motion';

const FadeUp = ({ children, delay = 0, duration = 0.6, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
