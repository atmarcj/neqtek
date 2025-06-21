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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        
        {/* Floating Icons */}
        <FloatingIcons />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span>{t('hero.title.1')}</span><br />
            <span className="text-gradient">{t('hero.title.2')}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="gradient-bg text-white hover-lift">
              <Link href="/services">
                {t('hero.cta.services')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="hover-lift">
              <Link href="/contact">
                {t('hero.cta.contact')}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
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
                <Card className="text-center p-6 hover-lift light-card">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${feature.gradient}`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20">
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
