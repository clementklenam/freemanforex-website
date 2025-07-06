import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema } from "@shared/schema";
import { Phone, Mail, Globe, MapPin, Instagram, Send, X, Youtube } from "lucide-react";
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      {/* Contact Hero */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">Get In Touch</h1>
              <div className="w-24 h-1 bg-trading-gold mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Ready to start your trading journey? Contact us today
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-deep-navy mb-6">Contact Information</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-trading-gold rounded-full flex items-center justify-center">
                          <Phone className="text-deep-navy h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-deep-navy">Phone</p>
                          <p className="text-gray-600">+233 201217381</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-trading-gold rounded-full flex items-center justify-center">
                          <Mail className="text-deep-navy h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-deep-navy">Email</p>
                          <p className="text-gray-600">freemanforex01@gmail.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-trading-gold rounded-full flex items-center justify-center">
                          <Globe className="text-deep-navy h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-deep-navy">Website</p>
                          <p className="text-gray-600">www.freemanforex.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-trading-gold rounded-full flex items-center justify-center">
                          <MapPin className="text-deep-navy h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-deep-navy">Location</p>
                          <p className="text-gray-600">Accra, Ghana</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Social Media */}
                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-deep-navy mb-6">Follow Us</h2>
                    <div className="flex space-x-4">
                      <a href="https://www.instagram.com/freemanforex_?igsh=YnFiM3NjY3F6Znhw&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-trading-gold rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300" title="Instagram">
                        <Instagram className="text-deep-navy h-6 w-6" />
                      </a>
                      <a href="https://t.me/FREEMANFOREXCOMMUNITY" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-trading-gold rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300" title="Telegram">
                        <Send className="text-deep-navy h-6 w-6" />
                      </a>
                      <a href="https://x.com/freemanforex?s=21" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-trading-gold rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300" title="X (Twitter)">
                        <X className="text-deep-navy h-6 w-6" />
                      </a>
                      <a href="https://youtube.com/@freemanforex?si=xQPKQbySbaeeVvLZ" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-trading-gold rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300" title="YouTube">
                        <Youtube className="text-deep-navy h-6 w-6" />
                      </a>
                    </div>
                    <p className="text-gray-600 mt-4">@FREEMANFOREX 🦅🦅</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Form */}
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-deep-navy mb-6">Send Us a Message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-deep-navy font-semibold">Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-gray-300 focus:border-trading-gold"
                              />
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
                            <FormLabel className="text-deep-navy font-semibold">Email</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                type="email" 
                                className="border-gray-300 focus:border-trading-gold"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-deep-navy font-semibold">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                rows={5} 
                                className="border-gray-300 focus:border-trading-gold"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-trading-gold text-deep-navy hover:bg-yellow-500 text-lg py-6"
                        disabled={contactMutation.isPending}
                      >
                        {contactMutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-20 bg-deep-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait any longer. Join our community of successful traders and start your journey to financial freedom today.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6"
          >
            <a href="tel:+233201217381">Call Now: +233 201217381</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
