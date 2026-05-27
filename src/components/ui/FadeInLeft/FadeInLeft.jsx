import React from 'react';
import { motion } from 'framer-motion';

const FadeInLeft = ({ children, delay = 0, duration = 0.5, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInLeft;
