import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { useToast } from "@/hooks/use-toast";
import { insertContactSchema } from "@shared/schema";
import { 
  Handshake, Medal, Users, TrendingUp, Shield, Brain, Trophy, Quote, 
  BarChart3, Briefcase, GraduationCap, Check, Award, 
  Phone, Mail, Globe, MapPin, Instagram, Send, X, Youtube, 
  Star, Target, Zap, ChevronDown, Play, Video, Eye
} from "lucide-react";
import { Footer } from "@/components/Footer";
import heroImage from "@assets/hero-image.jpeg";
import aboutImage from "@assets/about-image.jpeg";
import mentorshipImage from "@assets/mentorship-image.jpeg";
// Videos are now served from public/videos/ directory
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSchema>;

export default function Home() {
  const { toast } = useToast();
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // Create email content
    const subject = "New Contact Form Submission - FreemanForex";
    const body = `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}

---
Sent from FreemanForex website
    `.trim();
    
    // Create mailto link
    const mailtoLink = `mailto:freemanforex01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    // Show success message
    toast({
      title: "Email client opened!",
      description: "Please send the email to complete your message. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    form.reset();
  };

  const handleVideoPlay = (index: number, videoElement: HTMLVideoElement) => {
    console.log('Video play triggered for index:', index);
    
    // Stop all other videos first
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach((video, i) => {
      if (i !== index) {
        video.pause();
        setPlayingVideos(prev => {
          const newSet = new Set(prev);
          newSet.delete(i);
          return newSet;
        });
      }
    });
    
    // Update state for current video
    setPlayingVideos(prev => new Set([index]));
    
    // Play the clicked video
    videoElement.play().catch(error => {
      console.error('Error playing video:', error);
    });
  };

  const handleVideoPause = (index: number, videoElement?: HTMLVideoElement) => {
    console.log('Video pause triggered for index:', index);
    
    // Update state
    setPlayingVideos(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
    
    // Actually pause the video if element is provided
    if (videoElement) {
      videoElement.pause();
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen with Background Image */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-20 sm:pt-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy/80 via-black/70 to-deep-navy/80"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight px-2">
              Mastering the Markets,
              <span className="text-trading-gold block mt-2">Empowering Traders</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto px-4">
              Learn, trade, and grow with Ghana's trusted forex and gold trading expert. 
              Join 500+ successful traders who achieved financial freedom.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-12 px-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-trading-gold">5</div>
                <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-trading-gold">500+</div>
                <div className="text-xs sm:text-sm text-gray-300">Successful Traders</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-trading-gold">95%</div>
                <div className="text-xs sm:text-sm text-gray-300">Success Rate</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 sm:mt-12 px-4">
              <Button 
                onClick={() => scrollToSection('services')}
                size="lg" 
                className="bg-trading-gold text-deep-navy hover:bg-yellow-500 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-semibold w-full sm:w-auto"
              >
                Get Started Today
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 border-2 border-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-semibold w-full sm:w-auto"
              >
                Book Free Consultation
              </Button>
            </div>
            
            {/* Partner Badge */}
            <div className="flex justify-center mt-6 sm:mt-12 px-4">
              <a 
                href="https://one.exnesstrack.org/a/f5hxzhcxkr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer transition-transform duration-300 hover:scale-105 w-full max-w-sm"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <CardContent className="flex items-center space-x-3 p-3 sm:p-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center p-1">
                      <img 
                        src="https://d33vw3iu5hs0zi.cloudfront.net/media/logo_big_new_f7ebab0194.svg" 
                        alt="Exness Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-300">Official Partner</p>
                      <p className="text-sm sm:text-base font-semibold text-trading-gold">Exness Broker</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-6 sm:mt-8 animate-bounce">
              <button onClick={() => scrollToSection('about')} className="text-trading-gold">
                <ChevronDown className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deep-navy mb-4 sm:mb-6">About FreemanForex</h2>
              <div className="w-24 h-1 bg-trading-gold mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
                A professional trading brand dedicated to building a community of confident, skilled traders in Africa and beyond.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* About Content */}
              <div className="space-y-6 sm:space-y-8">
                {/* Mission Statement */}
                <Card className="bg-gradient-to-r from-trading-gold to-yellow-400 text-deep-navy">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h3>
                    <p className="text-base sm:text-lg leading-relaxed">
                      "To build a community of confident, skilled traders in Africa and beyond, empowering individuals with the knowledge and skills needed to achieve financial freedom through disciplined trading practices."
                    </p>
                  </CardContent>
                </Card>
                
                {/* Key Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-trading-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Medal className="text-deep-navy h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-deep-navy">5 Years Experience</h4>
                        <p className="text-sm sm:text-base text-gray-600">Proven track record in 5 years of forex and gold trading</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-trading-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="text-deep-navy h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-deep-navy">Official Exness Partner</h4>
                        <p className="text-sm sm:text-base text-gray-600">Recognized partnership with leading broker</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-trading-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="text-deep-navy h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-deep-navy">Expert Mentorship</h4>
                        <p className="text-sm sm:text-base text-gray-600">Comprehensive training for all levels</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-trading-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="text-deep-navy h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-deep-navy">Proven Results</h4>
                        <p className="text-sm sm:text-base text-gray-600">95% success rate with our students</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* About Image */}
              <div className="space-y-6">
                <img 
                  src={aboutImage} 
                  alt="Professional mentor teaching trading strategies" 
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
                
                {/* Value Proposition */}
                <div className="grid grid-cols-3 gap-4">
                  <Card className="bg-deep-navy text-white">
                    <CardContent className="p-6 text-center">
                      <Star className="h-8 w-8 text-trading-gold mx-auto mb-2" />
                      <p className="text-lg font-bold text-trading-gold">Excellence</p>
                      <p className="text-sm">Quality Education</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-trading-gold text-deep-navy">
                    <CardContent className="p-6 text-center">
                      <Target className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-lg font-bold">Integrity</p>
                      <p className="text-sm">Transparent Trading</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-deep-navy text-white">
                    <CardContent className="p-6 text-center">
                      <Zap className="h-8 w-8 text-trading-gold mx-auto mb-2" />
                      <p className="text-lg font-bold text-trading-gold">Success</p>
                      <p className="text-sm">Measurable Results</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deep-navy mb-4 sm:mb-6">Our Services</h2>
              <div className="w-24 h-1 bg-trading-gold mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
                Comprehensive trading solutions designed to elevate your financial success
              </p>
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
              {/* Service 1: Forex & Gold Trading */}
              <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-trading-gold rounded-full flex items-center justify-center mr-4">
                      <BarChart3 className="text-deep-navy h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-deep-navy">Forex & Gold (XAUUSD) Trading</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Master the art of trading major forex pairs and gold with our proven strategies. Learn technical analysis, fundamental analysis, and risk management techniques.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      Live trading sessions with real-time analysis
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      Professional market analysis tools
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      24/7 support and community access
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      Risk management strategies
                    </li>
                  </ul>
                  <Button 
                    asChild
                    className="w-full bg-trading-gold text-deep-navy hover:bg-yellow-500 font-semibold"
                  >
                    <a href="https://t.me/FREEMANFOREXCOMMUNITY" target="_blank" rel="noopener noreferrer">
                      Join Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Service 2: Funded Account Management */}
              <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-trading-gold rounded-full flex items-center justify-center mr-4">
                      <Briefcase className="text-deep-navy h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-deep-navy">Funded Account Management</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Get access to funded trading accounts and let our expert team manage your trades. Benefit from professional money management and consistent returns.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      Professional portfolio management
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      Weekly performance reports
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      Transparent profit sharing model
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      Risk-controlled trading strategies
                    </li>
                  </ul>
                  <Button 
                    asChild
                    className="w-full bg-trading-gold text-deep-navy hover:bg-yellow-500 font-semibold"
                  >
                    <a href="https://t.me/FREEMANFOREXCOMMUNITY" target="_blank" rel="noopener noreferrer">
                      Join Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Service 3: Advanced Trading Mentorship */}
              <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-trading-gold rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="text-deep-navy h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-deep-navy">Advanced Trading Mentorship</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    One-on-one mentoring sessions with experienced traders. Develop your skills, refine your strategy, and accelerate your trading journey.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      Personal trading coach assigned
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      Customized learning path
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      Weekly progress reviews
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      Trading psychology coaching
                    </li>
                  </ul>
                  <Button 
                    asChild
                    className="w-full bg-trading-gold text-deep-navy hover:bg-yellow-500 font-semibold"
                  >
                    <a href="https://t.me/FREEMANFOREXCOMMUNITY" target="_blank" rel="noopener noreferrer">
                      Join Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Service 4: Market Analysis & Forecasts */}
              <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-trading-gold rounded-full flex items-center justify-center mr-4">
                      <TrendingUp className="text-deep-navy h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-deep-navy">Market Analysis & Forecasts</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Receive detailed market analysis and forecasts for forex and gold markets. Stay ahead of market trends with our expert insights.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      Daily market updates and insights
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      Comprehensive technical analysis
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      High-probability trading opportunities
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-5 w-5 mr-3" />
                      Economic calendar and news impact
                    </li>
                  </ul>
                  <Button 
                    asChild
                    className="w-full bg-trading-gold text-deep-navy hover:bg-yellow-500 font-semibold"
                  >
                    <a href="https://t.me/FREEMANFOREXCOMMUNITY" target="_blank" rel="noopener noreferrer">
                      Join Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section id="mentorship" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">Trading Mentorship Program</h2>
              <div className="w-24 h-1 bg-trading-gold mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Transform your trading skills with our comprehensive mentorship program. Learn from experienced professionals and join our community of successful traders.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Mentorship Content */}
              <div className="space-y-8">
                <Card className="bg-gradient-to-r from-trading-gold to-yellow-400 text-deep-navy">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold mb-4">Your Trading Journey Roadmap</h3>
                    <p className="text-lg">A structured 6-phase path to trading success</p>
                  </CardContent>
                </Card>
                
                {/* Infographic Roadmap Preview */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Phase 1 */}
                  <Card className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold mb-1">
                            PHASE 1
                          </div>
                          <h4 className="text-base font-bold text-deep-navy">Foundation</h4>
                        </div>
                      </div>
                      <p className="text-blue-600 text-sm font-medium">Market structure, price action, risk management</p>
                    </CardContent>
                  </Card>

                  {/* Phase 2 */}
                  <Card className="bg-gradient-to-br from-green-50 via-white to-green-50 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div>
                          <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold mb-1">
                            PHASE 2
                          </div>
                          <h4 className="text-base font-bold text-deep-navy">Strategy</h4>
                        </div>
                      </div>
                      <p className="text-green-600 text-sm font-medium">Advanced strategies, entry/exit timing</p>
                    </CardContent>
                  </Card>

                  {/* Phase 3 */}
                  <Card className="bg-gradient-to-br from-purple-50 via-white to-purple-50 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div>
                          <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold mb-1">
                            PHASE 3
                          </div>
                          <h4 className="text-base font-bold text-deep-navy">Psychology</h4>
                        </div>
                      </div>
                      <p className="text-purple-600 text-sm font-medium">Mental discipline, emotional control</p>
                    </CardContent>
                  </Card>

                  {/* Phase 4 */}
                  <Card className="bg-gradient-to-br from-orange-50 via-white to-orange-50 border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold mb-1">
                            PHASE 4
                          </div>
                          <h4 className="text-base font-bold text-deep-navy">Advanced</h4>
                        </div>
                      </div>
                      <p className="text-orange-600 text-sm font-medium">Multi-timeframe, advanced patterns</p>
                    </CardContent>
                  </Card>

                  {/* Phase 5 */}
                  <Card className="bg-gradient-to-br from-red-50 via-white to-red-50 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                        <div>
                          <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold mb-1">
                            PHASE 5
                          </div>
                          <h4 className="text-base font-bold text-deep-navy">Challenge</h4>
                        </div>
                      </div>
                      <p className="text-red-600 text-sm font-medium">Funded challenge preparation</p>
                    </CardContent>
                  </Card>

                  {/* Phase 6 */}
                  <Card className="bg-gradient-to-br from-trading-gold/20 via-white to-trading-gold/20 border-2 border-trading-gold hover:border-trading-gold/60 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-trading-gold to-yellow-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                          <svg className="w-6 h-6 text-deep-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                        <div>
                          <div className="bg-trading-gold text-deep-navy px-2 py-1 rounded-full text-xs font-bold mb-1">
                            PHASE 6
                          </div>
                          <h4 className="text-base font-bold text-deep-navy">Professional</h4>
                        </div>
                      </div>
                      <p className="text-trading-gold text-sm font-medium">Live trading, continuous support</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Mentorship Visual */}
              <div className="space-y-6">
                <img 
                  src={mentorshipImage} 
                  alt="Trading mentor explaining concepts to student" 
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
                
                {/* Success Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-trading-gold text-deep-navy">
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl font-bold">90%</p>
                      <p className="text-sm font-semibold">Challenge Pass Rate</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-deep-navy text-white">
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl font-bold text-trading-gold">300+</p>
                      <p className="text-sm">Students Mentored</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Student Success Stories */}
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-deep-navy mb-4">Success Stories</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-trading-gold rounded-full flex items-center justify-center">
                          <Quote className="text-deep-navy h-4 w-4" />
                        </div>
                        <p className="text-gray-600 italic">"Freeman's mentorship completely transformed my trading. I'm now consistently profitable and passed my first funded challenge!"</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-trading-gold rounded-full flex items-center justify-center">
                          <Quote className="text-deep-navy h-4 w-4" />
                        </div>
                        <p className="text-gray-600 italic">"The risk management strategies saved my account. I went from losing trader to profitable in just 3 months!"</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Enroll CTA */}
                <Card className="bg-deep-navy text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Trading?</h3>
                    <p className="text-gray-300 mb-6">Join our exclusive mentorship program and start your journey to trading success</p>
                    <Button 
                      onClick={() => scrollToSection('contact')}
                      size="lg" 
                      className="bg-trading-gold text-deep-navy hover:bg-yellow-500 text-lg px-8 py-6 font-semibold"
                    >
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Vlogs Section */}
      <section id="vlogs" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deep-navy mb-4 sm:mb-6">Trading Vlogs</h2>
              <div className="w-24 h-1 bg-trading-gold mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
                Watch exclusive trading insights, market analysis, and live trading sessions. Learn from real trading experiences and strategies.
              </p>
            </div>
            
            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
              {[
                { video: "/videos/video1.mp4", title: "Live Market Analysis", description: "Real-time market analysis and trading insights" },
                { video: "/videos/video2.mp4", title: "Fundamental Analysis 1", description: "Understanding market fundamentals and economic indicators" },
                { video: "/videos/video3.mp4", title: "Fundamental Analysis Part 2", description: "Advanced fundamental analysis techniques and strategies" },
                { video: "/videos/video6.mp4", title: "Fundamental Analysis Part 3", description: "Advanced market analysis and trading strategies" },
                { video: "/videos/video5.1.mp4", title: "Gold Live Trades", description: "Live gold trading sessions and real-time analysis" },
                { video: "/videos/video6.1.mp4", title: "Live Gold Analysis", description: "Real-time gold market analysis and insights" }
              ].map((videoData, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <video 
                        controls
                        className="w-full h-48 sm:h-52 md:h-48 lg:h-52 object-cover rounded-t-lg"
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23001a2e'/%3E%3Ctext x='200' y='140' font-family='Arial' font-size='18' fill='%23ffd700' text-anchor='middle'%3EFreemanForex%3C/text%3E%3Ctext x='200' y='165' font-family='Arial' font-size='14' fill='%23ffffff' text-anchor='middle'%3ETrading Video%3C/text%3E%3C/svg%3E"
                        preload="metadata"
                        src={videoData.video}
                        crossOrigin="anonymous"
                        playsInline
                        muted={false}
                        onPlay={(e) => {
                          console.log('Play event fired for video', index);
                          handleVideoPlay(index, e.currentTarget);
                        }}
                        onPause={(e) => {
                          console.log('Pause event fired for video', index);
                          handleVideoPause(index, e.currentTarget);
                        }}
                        onEnded={(e) => {
                          console.log('Ended event fired for video', index);
                          handleVideoPause(index, e.currentTarget);
                        }}
                        onError={(e) => {
                          console.error('Video loading error:', e);
                          const target = e.target as HTMLVideoElement;
                          target.style.display = 'none';
                          const errorDiv = target.parentElement?.querySelector('.video-error');
                          if (errorDiv) {
                            (errorDiv as HTMLElement).style.display = 'flex';
                          }
                        }}
                        onLoadStart={() => {
                          console.log('Video loading started:', videoData.video);
                        }}
                        onCanPlay={() => {
                          console.log('Video can play:', videoData.video);
                        }}
                      >
                        <source src={videoData.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="video-error absolute inset-0 bg-gray-800 flex items-center justify-center rounded-t-lg" style={{ display: 'none' }}>
                        <div className="text-center text-white p-4">
                          <Video className="h-8 w-8 mx-auto mb-2 text-trading-gold" />
                          <p className="text-sm">Video temporarily unavailable</p>
                        </div>
                      </div>
                      {playingVideos.has(index) && (
                        <div className="absolute top-2 right-2 bg-trading-gold text-deep-navy px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                          <div className="w-2 h-2 bg-deep-navy rounded-full animate-pulse"></div>
                          <span>LIVE</span>
                        </div>
                      )}
                      {/* Removed custom play overlay to avoid conflicts with native controls */}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-deep-navy mb-2 line-clamp-2">{videoData.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{videoData.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Eye className="h-4 w-4" />
                          <span className="text-sm">Watch Now</span>
                        </div>
                        <div className="flex items-center space-x-1 text-trading-gold">
                          <Video className="h-4 w-4" />
                          <span className="text-sm font-medium">Trading Vlog</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Video Call-to-Action */}
            <div className="text-center">
              <div className="bg-black text-white shadow-2xl rounded-lg p-12 border-0">
                <h3 className="text-4xl font-bold mb-6 text-white">Want More Exclusive Content?</h3>
                <p className="text-xl text-white font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
                  Join our premium mentorship program for access to live trading sessions, exclusive video content, and personal coaching.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-10 py-6 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <a href="https://t.me/FREEMANFOREXCOMMUNITY" target="_blank" rel="noopener noreferrer">
                      Join Mentorship Program
                    </a>
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black text-lg px-10 py-6 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deep-navy mb-4 sm:mb-6">Get In Touch</h2>
              <div className="w-24 h-1 bg-trading-gold mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
                Ready to start your trading journey? Contact us today and take the first step towards financial freedom.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-deep-navy mb-6">Contact Information</h3>
                    
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
                    <h3 className="text-2xl font-bold text-deep-navy mb-6">Follow Us</h3>
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
                    <p className="text-gray-600 mt-4 font-semibold">@FREEMANFOREX 🦅🦅</p>
                    <p className="text-sm text-gray-500 mt-2">Follow us on all platforms for daily trading insights and market updates</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Form */}
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-deep-navy mb-6">Send Us a Message</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-deep-navy font-semibold">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-gray-300 focus:border-trading-gold"
                                placeholder="Enter your full name"
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
                            <FormLabel className="text-deep-navy font-semibold">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                type="email" 
                                className="border-gray-300 focus:border-trading-gold"
                                placeholder="Enter your email address"
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
                                placeholder="Tell us about your trading goals and how we can help you..."
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-trading-gold text-deep-navy hover:bg-yellow-500 text-lg py-6 font-semibold"
                      >
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-deep-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Trading Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait any longer. Join our community of successful traders and start your journey to financial freedom today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg" 
              className="bg-trading-gold text-deep-navy hover:bg-yellow-500 text-lg px-8 py-6 font-semibold"
            >
              Get Started Now
            </Button>
            <Button 
              asChild
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 border-2 border-white text-lg px-8 py-6 font-semibold"
            >
              <a href="tel:+233201217381">Call Now: +233 201217381</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
