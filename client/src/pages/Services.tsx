import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { BarChart3, Briefcase, GraduationCap, TrendingUp, Check } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Services Hero */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">Our Services</h1>
              <div className="w-24 h-1 bg-trading-gold mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Comprehensive trading solutions designed to elevate your financial success
              </p>
            </div>
            
            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
              {/* Service 1: Forex & Gold Trading */}
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-trading-gold rounded-full flex items-center justify-center mr-4">
                      <BarChart3 className="text-deep-navy h-8 w-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-deep-navy">Forex & Gold (XAUUSD) Trading</h2>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Master the art of trading major forex pairs and gold with our proven strategies. Learn technical analysis, fundamental analysis, and risk management techniques used by professional traders.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-4 w-4 mr-3" />
                      Live trading sessions
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-4 w-4 mr-3" />
                      Market analysis tools
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-4 w-4 mr-3" />
                      24/7 support
                    </li>
                  </ul>
                  <Button 
                    asChild 
                    className="w-full bg-trading-gold text-deep-navy hover:bg-yellow-500"
                  >
                    <Link href="/contact">Join Now</Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Service 2: Funded Account Management */}
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-trading-gold rounded-full flex items-center justify-center mr-4">
                      <Briefcase className="text-deep-navy h-8 w-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-deep-navy">Funded Account Management</h2>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Get access to funded trading accounts and let our expert team manage your trades. Benefit from professional money management and consistent returns.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-4 w-4 mr-3" />
                      Professional management
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-4 w-4 mr-3" />
                      Regular performance reports
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-4 w-4 mr-3" />
                      Profit sharing model
                    </li>
                  </ul>
                  <Button 
                    asChild 
                    className="w-full bg-trading-gold text-deep-navy hover:bg-yellow-500"
                  >
                    <Link href="/contact">View Pricing</Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Service 3: Advanced Trading Mentorship */}
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-trading-gold rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="text-deep-navy h-8 w-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-deep-navy">Advanced Trading Mentorship</h2>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    One-on-one mentoring sessions with experienced traders. Develop your skills, refine your strategy, and accelerate your trading journey.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-4 w-4 mr-3" />
                      Personal trading coach
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-4 w-4 mr-3" />
                      Customized learning path
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-4 w-4 mr-3" />
                      Weekly progress reviews
                    </li>
                  </ul>
                  <Button 
                    asChild 
                    className="w-full bg-trading-gold text-deep-navy hover:bg-yellow-500"
                  >
                    <Link href="/mentorship">Join Now</Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Service 4: Market Analysis & Forecasts */}
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-trading-gold rounded-full flex items-center justify-center mr-4">
                      <TrendingUp className="text-deep-navy h-8 w-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-deep-navy">Market Analysis & Forecasts</h2>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Receive detailed market analysis and forecasts for forex and gold markets. Stay ahead of market trends with our expert insights and predictions.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-4 w-4 mr-3" />
                      Daily market updates
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-4 w-4 mr-3" />
                      Technical analysis reports
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-trading-gold h-4 w-4 mr-3" />
                      Trading opportunities
                    </li>
                  </ul>
                  <Button 
                    asChild 
                    className="w-full bg-trading-gold text-deep-navy hover:bg-yellow-500"
                  >
                    <Link href="/contact">View Pricing</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* CTA Section */}
            <div className="text-center">
              <Card className="bg-deep-navy text-white">
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold mb-4">Ready to Start Your Trading Journey?</h2>
                  <p className="text-xl text-gray-300 mb-8">Join thousands of successful traders who trust FreemanForex</p>
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-trading-gold text-deep-navy hover:bg-yellow-500 text-lg px-8 py-6"
                  >
                    <Link href="/contact">Get Started Today</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
