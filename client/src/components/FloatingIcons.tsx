import { motion } from 'framer-motion';
import { Monitor, Users, Shield, BarChart3, Network, Brain, Database, Code, Cpu, Zap, Globe } from 'lucide-react';

const createFloatingVariants = (direction: 'up' | 'down', amplitude: number, duration: number, delay: number = 0) => ({
  animate: {
    y: direction === 'up' ? [0, -amplitude, 0] : [0, amplitude, 0],
    x: [0, Math.sin(delay) * 10, 0],
    rotate: [0, 360],
    transition: {
      y: {
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      },
      x: {
        duration: duration * 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay + 1,
      },
      rotate: {
        duration: duration * 2,
        ease: "linear",
        repeat: Infinity,
        delay,
      }
    }
  }
});

export function FloatingIcons() {
  const icons = [
    // Central cluster - more prominent
    {
      icon: Brain,
      className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-500/10 dark:bg-purple-500/20 rounded-full flex items-center justify-center",
      iconClassName: "w-10 h-10 text-purple-500/60 dark:text-purple-400/80",
      variants: createFloatingVariants('up', 15, 8, 0)
    },
    {
      icon: Network,
      className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-x-24 translate-y-8 w-16 h-16 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full flex items-center justify-center",
      iconClassName: "w-8 h-8 text-cyan-500/60 dark:text-cyan-400/80",
      variants: createFloatingVariants('down', 20, 7, 1)
    },
    {
      icon: Database,
      className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-x-24 -translate-y-8 w-18 h-18 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full flex items-center justify-center",
      iconClassName: "w-9 h-9 text-emerald-500/60 dark:text-emerald-400/80",
      variants: createFloatingVariants('up', 18, 6, 2)
    },
    {
      icon: Code,
      className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-x-16 -translate-y-20 w-14 h-14 bg-orange-500/10 dark:bg-orange-500/20 rounded-full flex items-center justify-center",
      iconClassName: "w-7 h-7 text-orange-500/60 dark:text-orange-400/80",
      variants: createFloatingVariants('down', 12, 9, 3)
    },
    {
      icon: Cpu,
      className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-x-16 translate-y-20 w-16 h-16 bg-blue-500/10 dark:bg-blue-500/20 rounded-full flex items-center justify-center",
      iconClassName: "w-8 h-8 text-blue-500/60 dark:text-blue-400/80",
      variants: createFloatingVariants('up', 22, 5, 4)
    },
    
    // Outer ring - more subtle
    {
      icon: Monitor,
      className: "absolute top-20 left-1/4 w-12 h-12 bg-brand-green/8 dark:bg-brand-green/15 rounded-full flex items-center justify-center",
      iconClassName: "w-6 h-6 text-brand-green/50 dark:text-brand-green/70",
      variants: createFloatingVariants('up', 10, 10, 0.5)
    },
    {
      icon: Users,
      className: "absolute top-32 right-1/4 w-14 h-14 bg-brand-blue/8 dark:bg-brand-blue/15 rounded-full flex items-center justify-center",
      iconClassName: "w-7 h-7 text-brand-blue/50 dark:text-brand-blue/70",
      variants: createFloatingVariants('down', 15, 8, 1.5)
    },
    {
      icon: Shield,
      className: "absolute bottom-32 left-1/4 w-13 h-13 bg-emerald-500/8 dark:bg-emerald-500/15 rounded-full flex items-center justify-center",
      iconClassName: "w-6 h-6 text-emerald-500/50 dark:text-emerald-500/70",
      variants: createFloatingVariants('up', 12, 7, 2.5)
    },
    {
      icon: BarChart3,
      className: "absolute bottom-20 right-1/4 w-15 h-15 bg-sky-500/8 dark:bg-sky-500/15 rounded-full flex items-center justify-center",
      iconClassName: "w-7 h-7 text-sky-500/50 dark:text-sky-500/70",
      variants: createFloatingVariants('down', 8, 9, 3.5)
    },
    {
      icon: Zap,
      className: "absolute top-40 left-16 w-10 h-10 bg-yellow-500/8 dark:bg-yellow-500/15 rounded-full flex items-center justify-center",
      iconClassName: "w-5 h-5 text-yellow-500/50 dark:text-yellow-500/70",
      variants: createFloatingVariants('up', 14, 6, 4.5)
    },
    {
      icon: Globe,
      className: "absolute bottom-40 right-16 w-12 h-12 bg-indigo-500/8 dark:bg-indigo-500/15 rounded-full flex items-center justify-center",
      iconClassName: "w-6 h-6 text-indigo-500/50 dark:text-indigo-500/70",
      variants: createFloatingVariants('down', 16, 11, 5)
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className={item.className}
            variants={item.variants}
            animate="animate"
          >
            <Icon className={item.iconClassName} />
          </motion.div>
        );
      })}
    </div>
  );
}
