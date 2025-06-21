import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, features, gradient, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="p-10 modern-card rounded-3xl hover-lift backdrop-blur-sm relative overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-green/5 pointer-events-none"></div>
      
      <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-8 ${gradient} neon-glow relative z-10`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold mb-6 text-gradient relative z-10">{title}</h3>
      
      <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">{description}</p>
      
      <ul className="space-y-3 text-sm text-muted-foreground relative z-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 mr-3 flex-shrink-0"></div>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
