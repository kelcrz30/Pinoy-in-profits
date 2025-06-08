import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, fadeInDown } from './FadeInSlide';

export function FadeInNewSection({ children, delay = 0, direction = 'left' }) {
  const getVariant = () => {
    switch(direction) {
      case 'right': return fadeInRight(delay);
      case 'up': return fadeInUp(delay);
      case 'down': return fadeInDown(delay);
      default: return fadeInLeft(delay);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount: 0.1,
        margin: "-20px 0px -20px 0px"
      }}
      variants={getVariant()}
    >
      {children}
    </motion.div>
  );
}

// More reliable version with additional safeguards
export function FadeInSection({ children, delay = 0, direction = 'left' }) {
  const getVariant = () => {
    switch(direction) {
      case 'right': return fadeInRight(delay);
      case 'up': return fadeInUp(delay);
      case 'down': return fadeInDown(delay);
      default: return fadeInLeft(delay);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount: 0.05, // Lower threshold for better detection
        margin: "-50px 0px -50px 0px" // Trigger earlier
      }}
      variants={getVariant()}
      // Add fallback animation after delay
      animate="visible"
      transition={{ delay: delay + 0.1 }}
    >
      {children}
    </motion.div>
  );
}

// Individual components for cleaner usage
export function FadeInLeft({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-20px" }}
      variants={fadeInLeft(delay)}
    >
      {children}
    </motion.div>
  );
}

export function FadeInRight({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-20px" }}
      variants={fadeInRight(delay)}
    >
      {children}
    </motion.div>
  );
}

export function FadeInUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-20px" }}
      variants={fadeInUp(delay)}
    >
      {children}
    </motion.div>
  );
}

export function FadeInDown({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-20px" }}
      variants={fadeInDown(delay)}
    >
      {children}
    </motion.div>
  );
}