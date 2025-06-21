import { motion } from 'framer-motion';
import { Monitor, Users, Shield, BarChart3, Network, Brain, Database, Code, Cpu, Zap, Globe } from 'lucide-react';

const createFloatingVariants = (direction: 'up' | 'down', amplitude: number, duration: number, delay: number = 0) => ({
  animate: {
    y: direction === 'up' ? [0, -amplitude, 0] : [0, amplitude, 0],
    x: [0, Math.sin(delay) * 15, 0],
    rotate: [0, 360],
    scale: [1, 1.1, 1],
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
        duration: duration * 3,
        ease: "linear",
        repeat: Infinity,
        delay,
      },
      scale: {
        duration: duration * 0.8,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay + 0.5,
      }
    }
  }
});

export function FloatingIcons() {
  const icons = [
    // Distributed across the hero section
    {
      icon: Brain,
      className: "absolute top-20 left-20 w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center backdrop-blur-sm",
      iconClassName: "w-8 h-8 text-purple-400/80",
      variants: createFloatingVariants('up', 15, 8, 0)
    },
    {
      icon: Network,
      className: "absolute top-32 right-24 w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center backdrop-blur-sm",
      iconClassName: "w-7 h-7 text-cyan-400/80",
      variants: createFloatingVariants('down', 20, 7, 1)
    },
    {
      icon: Database,
      className: "absolute top-40 left-1/3 w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center backdrop-blur-sm",
      iconClassName: "w-6 h-6 text-emerald-400/80",
      variants: createFloatingVariants('up', 18, 6, 2)
    },
    {
      icon: Code,
      className: "absolute top-60 right-16 w-18 h-18 bg-orange-500/10 rounded-full flex items-center justify-center backdrop-blur-sm",
      iconClassName: "w-9 h-9 text-orange-400/80",
      variants: createFloatingVariants('down', 12, 9, 3)
    },
    {
      icon: Cpu,
      className: "absolute bottom-40 left-16 w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm",
      iconClassName: "w-7 h-7 text-blue-400/80",
      variants: createFloatingVariants('up', 22, 5, 4)
    },
    {
      icon: Monitor,
      className: "absolute bottom-32 right-1/3 w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center backdrop-blur-sm",
      iconClassName: "w-8 h-8 text-brand-green/90",
      variants: createFloatingVariants('up', 10, 10, 0.5)
    },
    {
      icon: Users,
      className: "absolute bottom-20 left-1/4 w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center backdrop-blur-sm",
      iconClassName: "w-6 h-6 text-brand-blue/90",
      variants: createFloatingVariants('down', 15, 8, 1.5)
    },
    {
      icon: Shield,
      className: "absolute top-80 left-1/2 w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center backdrop-blur-sm",
      iconClassName: "w-5 h-5 text-emerald-400/80",
      variants: createFloatingVariants('up', 12, 7, 2.5)
    },
    {
      icon: BarChart3,
      className: "absolute bottom-60 right-20 w-15 h-15 bg-sky-500/10 rounded-full flex items-center justify-center backdrop-blur-sm",
      iconClassName: "w-7 h-7 text-sky-400/80",
      variants: createFloatingVariants('down', 8, 9, 3.5)
    },
    {
      icon: Zap,
      className: "absolute top-24 right-1/3 w-13 h-13 bg-yellow-500/10 rounded-full flex items-center justify-center backdrop-blur-sm",
      iconClassName: "w-6 h-6 text-yellow-400/80",
      variants: createFloatingVariants('up', 14, 6, 4.5)
    },
    {
      icon: Globe,
      className: "absolute bottom-80 left-1/3 w-11 h-11 bg-indigo-500/10 rounded-full flex items-center justify-center backdrop-blur-sm",
      iconClassName: "w-5 h-5 text-indigo-400/80",
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
