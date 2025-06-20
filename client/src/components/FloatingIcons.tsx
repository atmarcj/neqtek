import { motion } from 'framer-motion';
import { Monitor, Users, Shield, BarChart3 } from 'lucide-react';

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }
};

const floatingDelayedVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      delay: 2,
    }
  }
};

const floatingSlowVariants = {
  animate: {
    y: [0, -25, 0],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }
};

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Tech Icon */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-brand-green/20 dark:bg-brand-green/30 rounded-full flex items-center justify-center"
        variants={floatingVariants}
        animate="animate"
      >
        <Monitor className="w-8 h-8 text-brand-green" />
      </motion.div>

      {/* Users Icon */}
      <motion.div
        className="absolute top-32 right-20 w-20 h-20 bg-brand-blue/20 dark:bg-brand-blue/30 rounded-full flex items-center justify-center"
        variants={floatingDelayedVariants}
        animate="animate"
      >
        <Users className="w-10 h-10 text-brand-blue" />
      </motion.div>

      {/* Shield Icon */}
      <motion.div
        className="absolute bottom-32 left-20 w-14 h-14 bg-emerald-500/20 dark:bg-emerald-500/30 rounded-full flex items-center justify-center"
        variants={floatingSlowVariants}
        animate="animate"
      >
        <Shield className="w-7 h-7 text-emerald-500" />
      </motion.div>

      {/* Chart Icon */}
      <motion.div
        className="absolute bottom-20 right-10 w-18 h-18 bg-sky-500/20 dark:bg-sky-500/30 rounded-full flex items-center justify-center"
        variants={floatingVariants}
        animate="animate"
      >
        <BarChart3 className="w-9 h-9 text-sky-500" />
      </motion.div>
    </div>
  );
}
