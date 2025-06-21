import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Zap, Globe, Brain, TrendingUp, Monitor, Users, Shield, BarChart3 } from 'lucide-react';
import { FloatingIcons } from '@/components/FloatingIcons';
import { ServiceCard } from '@/components/ServiceCard';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t('features.fast.title'),
      description: t('features.fast.desc'),
      gradient: 'bg-gradient-to-r from-brand-green to-brand-blue'
    },
    {
      icon: Globe,
      title: t('features.multilingual.title'),
      description: t('features.multilingual.desc'),
      gradient: 'bg-gradient-to-r from-brand-blue to-purple-600'
    },
    {
      icon: Brain,
      title: t('features.ai.title'),
      description: t('features.ai.desc'),
      gradient: 'bg-gradient-to-r from-emerald-500 to-brand-green'
    },
    {
      icon: TrendingUp,
      title: t('features.results.title'),
      description: t('features.results.desc'),
      gradient: 'bg-gradient-to-r from-sky-500 to-brand-blue'
    }
  ];

  const services = [
    {
      icon: Monitor,
      title: t('services.web.title'),
      description: t('services.web.desc'),
      features: ['• Sales landing pages', '• Shopify stores with automation', '• Corporate sites in 7 days'],
      gradient: 'bg-brand-green'
    },
    {
      icon: Users,
      title: t('services.ai.title'),
      description: t('services.ai.desc'),
      features: ['• 24/7 customer service bots', '• AI content generators', '• Document processing agents'],
      gradient: 'bg-brand-blue'
    },
    {
      icon: Shield,
      title: t('services.qa.title'),
      description: t('services.qa.desc'),
      features: ['• Full website quality audit', '• Automated software testing', '• Performance & accessibility testing'],
      gradient: 'bg-emerald-500'
    },
    {
      icon: BarChart3,
      title: t('services.data.title'),
      description: t('services.data.desc'),
      features: ['• Real-time Power BI dashboards', '• Automated task scripts', '• Database cleaning & ETL flows'],
      gradient: 'bg-sky-500'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-bg opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        
        {/* Floating Icons */}
        <FloatingIcons />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-6">
              <div className="w-2 h-2 bg-brand-green rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium">Modern Digital Solutions</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="block">{t('hero.title.1')}</span>
            <span className="block text-gradient bg-clip-text">{t('hero.title.2')}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button asChild size="lg" className="gradient-bg text-white hover-lift px-8 py-4 text-lg font-semibold rounded-2xl">
              <Link href="/services">
                {t('hero.cta.services')}
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="hover-lift modern-card px-8 py-4 text-lg font-semibold rounded-2xl">
              <Link href="/contact">
                {t('hero.cta.contact')}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold mb-4"
            >
              {t('features.title')}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              {t('features.subtitle')}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-8 hover-lift modern-card">
                  <CardContent className="p-0">
                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 ${feature.gradient} neon-glow`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gradient">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 section-contrast">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold mb-4"
            >
              {t('services.title')}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              {t('services.subtitle')}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                gradient={service.gradient}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="gradient-bg text-white hover-lift">
              <Link href="/services">
                {t('services.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
