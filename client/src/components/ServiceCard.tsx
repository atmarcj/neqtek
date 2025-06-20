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
      className="p-8 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl hover-lift backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${gradient}`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <ul className="space-y-2 text-sm text-muted-foreground">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </motion.div>
  );
}
