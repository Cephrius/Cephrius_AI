//LoadingSpinner.js

import React from 'react';
import { motion } from 'framer-motion';

const spinnerVariants = {
  animate: {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 1,
    },
  },
};

const LoadingSpinner = () => (
  <motion.div
    variants={spinnerVariants}
    animate="animate"
    style={{ width: 50, height: 50, border: '5px solid #ccc', borderTop: '5px solid #333', borderRadius: '50%' }}
  />
);

export default LoadingSpinner;