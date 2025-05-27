// FadeInSection.jsx
import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

export function FadeInSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: fadeInUp.hidden,
        visible: { ...fadeInUp.visible, transition: { duration: 0.5, delay } }
      }}
    >
      {children}
    </motion.div>
  );
}
