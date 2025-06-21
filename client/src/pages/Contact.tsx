import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Clock, Globe, Users, CheckCircle, Loader2 } from 'lucide-react';
import { z } from 'zod';
import { useLanguage } from '@/hooks/use-language';
import { apiRequest } from '@/lib/queryClient';
import { insertContactSubmissionSchema } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = insertContactSubmissionSchema.extend({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      message: '',
      language: language,
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message sent!",
        description: t('contact.form.success'),
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate({ ...data, language });
  };

  const languages = [
    { code: '🇺🇸', name: 'English' },
    { code: '🇫🇷', name: 'Français' },
    { code: '🇪🇸', name: 'Español' },
    { code: '🇭🇹', name: 'Kreyòl' },
  ];

  const clientTypes = [
    'Entrepreneurs launching new businesses',
    'SMEs seeking digital transformation',
    'Startups that need to move fast',
    'Teams looking to automate work',
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-20 pb-16 section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            {t('contact.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 section-contrast">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              
              {isSubmitted ? (
                <Card className="p-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                  <CardContent className="p-0">
                    <div className="flex items-center text-green-700 dark:text-green-300">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <p>{t('contact.form.success')}</p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.name')} *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.email')} *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.service')}</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value || undefined}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="web">{t('services.web.title')}</SelectItem>
                              <SelectItem value="ai">{t('services.ai.title')}</SelectItem>
                              <SelectItem value="qa">{t('services.qa.title')}</SelectItem>
                              <SelectItem value="data">{t('services.data.title')}</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.message')} *</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              rows={6} 
                              placeholder="Tell us about your project..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full gradient-bg text-white hover-lift"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        t('contact.form.submit')
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:pl-8"
            >
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-8">
                {/* Languages */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Globe className="w-5 h-5 text-brand-green mr-2" />
                    We Speak
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {languages.map((lang, index) => (
                      <Card key={index} className="p-3 light-card">
                        <CardContent className="p-0">
                          <div className="flex items-center">
                            <span className="text-2xl mr-2">{lang.code}</span>
                            <span>{lang.name}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Response Time */}
                <Card className="p-6 bg-gradient-to-br from-brand-green/10 to-brand-blue/10">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Clock className="w-5 h-5 text-brand-blue mr-2" />
                      Quick Response
                    </h3>
                    <p className="text-muted-foreground">
                      {t('contact.response')}
                    </p>
                  </CardContent>
                </Card>

                {/* Ideal Clients */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Users className="w-5 h-5 text-emerald-500 mr-2" />
                    Who We Serve
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {clientTypes.map((type, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-brand-green mr-2 flex-shrink-0" />
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
