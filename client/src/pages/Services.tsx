import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Monitor, Users, Shield, BarChart3, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Monitor,
      title: t('services.web.title'),
      description: t('services.web.desc'),
      features: [
        'Sales Landing Pages - High-converting pages designed to turn visitors into customers',
        'Shopify Integration - Complete e-commerce solutions with automation',
        'Corporate Websites - Professional business presence in just one week',
        'Mobile Optimization - Perfect experience across all devices'
      ],
      gradient: 'bg-brand-green',
      mockup: 'website'
    },
    {
      icon: Users,
      title: t('services.ai.title'),
      description: t('services.ai.desc'),
      features: [
        '24/7 Customer Service - Intelligent chatbots that never sleep',
        'Content Generation - AI-powered writing and social media content',
        'Document Processing - Automated reading and analysis of documents',
        'Task Automation - Smart workflow automation and scheduling'
      ],
      gradient: 'bg-brand-blue',
      mockup: 'chatbot'
    },
    {
      icon: Shield,
      title: t('services.qa.title'),
      description: t('services.qa.desc'),
      features: [
        'Quality Audits - Comprehensive website and app analysis',
        'Automated Testing - Continuous testing for reliability',
        'Performance Testing - Speed and load optimization',
        'Accessibility Testing - Ensuring inclusivity for all users'
      ],
      gradient: 'bg-emerald-500',
      mockup: 'testing'
    },
    {
      icon: BarChart3,
      title: t('services.data.title'),
      description: t('services.data.desc'),
      features: [
        'Power BI Dashboards - Real-time business intelligence and analytics',
        'Task Automation - Scripts to automate repetitive processes',
        'Database Management - Cleaning and optimizing your data',
        'ETL Processes - Extract, transform, and load data flows'
      ],
      gradient: 'bg-sky-500',
      mockup: 'dashboard'
    }
  ];

  const renderMockup = (type: string) => {
    switch (type) {
      case 'website':
        return (
          <div className="bg-gradient-to-br from-brand-green to-brand-blue p-8 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-full"></div>
                <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-5/6"></div>
                <div className="h-8 bg-brand-green rounded w-1/3"></div>
              </div>
            </div>
          </div>
        );
      case 'chatbot':
        return (
          <div className="bg-gradient-to-br from-brand-blue to-purple-600 p-8 rounded-3xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center mr-3">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold">AI Assistant</span>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-sm">How can I help you today?</div>
                <div className="bg-brand-blue text-white rounded-lg p-3 text-sm ml-6">Generate a marketing email</div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-sm">I'll create that email for you right away!</div>
              </div>
            </div>
          </div>
        );
      case 'testing':
        return (
          <div className="bg-gradient-to-br from-emerald-500 to-brand-green p-8 rounded-3xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl">
              <h4 className="font-semibold mb-4">Test Results</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Performance</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-green-500">95%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Accessibility</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-green-500">88%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">SEO</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-green-500">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'dashboard':
        return (
          <div className="bg-gradient-to-br from-sky-500 to-brand-blue p-8 rounded-3xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">$24K</div>
                  <div className="text-xs text-muted-foreground">Revenue</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1.2K</div>
                  <div className="text-xs text-muted-foreground">Users</div>
                </div>
              </div>
              <div className="h-16 bg-gradient-to-r from-brand-green to-brand-blue rounded-lg opacity-20"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-20 pb-16 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Our Digital Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl opacity-90 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions designed to transform your business and accelerate growth through intelligent automation and modern web technologies.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-4 ${service.gradient}`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, featureIndex) => {
                      const [title, description] = feature.split(' - ');
                      return (
                        <Card key={featureIndex} className="p-4 bg-muted/50">
                          <CardContent className="p-0">
                            <h4 className="font-semibold mb-2">{title}</h4>
                            <p className="text-sm text-muted-foreground">{description}</p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  {renderMockup(service.mockup)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-8"
          >
            In less than a week, your business could have a new website, smart assistant, or dashboard that saves hours.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="gradient-bg text-white hover-lift">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
