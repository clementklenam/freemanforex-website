import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { TrendingUp, Shield, Brain, Trophy, Quote } from "lucide-react";
import mentorshipImage from "@assets/mentorship-image.jpeg";

export default function Mentorship() {
  return (
    <div className="min-h-screen">
      {/* Mentorship Hero */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">Trading Mentorship Program</h1>
              <div className="w-24 h-1 bg-trading-gold mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Transform your trading skills with our comprehensive mentorship program
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Mentorship Content */}
              <div className="space-y-8">
                <Card className="bg-gradient-to-r from-trading-gold to-yellow-400 text-deep-navy">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">Your Trading Journey Roadmap</h2>
                    <p className="text-lg">A structured path from beginner to professional trader</p>
                  </CardContent>
                </Card>
                
                {/* Infographic Roadmap */}
                <div className="space-y-8">
                  {/* Phase 1: Foundation */}
                  <Card className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        {/* Icon Section */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                              PHASE 1
                            </div>
                            <h3 className="text-2xl font-bold text-deep-navy">Foundation Phase</h3>
                          </div>
                          <p className="text-blue-600 font-semibold mb-4 text-lg">Building Your Trading Foundation (Weeks 1-4)</p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Market structure basics</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Price action fundamentals</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Chart reading skills</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Risk management intro</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Phase 2: Strategy Development */}
                  <Card className="bg-gradient-to-br from-green-50 via-white to-green-50 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        {/* Icon Section */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                              PHASE 2
                            </div>
                            <h3 className="text-2xl font-bold text-deep-navy">Strategy Development</h3>
                          </div>
                          <p className="text-green-600 font-semibold mb-4 text-lg">Crafting Your Trading Edge (Weeks 5-8)</p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Advanced price action</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Entry/exit timing</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Position sizing</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Risk-reward optimization</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Phase 3: Psychology & Discipline */}
                  <Card className="bg-gradient-to-br from-purple-50 via-white to-purple-50 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        {/* Icon Section */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                              PHASE 3
                            </div>
                            <h3 className="text-2xl font-bold text-deep-navy">Psychology & Discipline</h3>
                          </div>
                          <p className="text-purple-600 font-semibold mb-4 text-lg">Mastering Your Mind (Weeks 9-12)</p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Emotional control</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Mental discipline</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Overcoming fear & greed</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Winning mindset</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Phase 4: Advanced Techniques */}
                  <Card className="bg-gradient-to-br from-orange-50 via-white to-orange-50 border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        {/* Icon Section */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                              PHASE 4
                            </div>
                            <h3 className="text-2xl font-bold text-deep-navy">Advanced Techniques</h3>
                          </div>
                          <p className="text-orange-600 font-semibold mb-4 text-lg">Professional Trading Skills (Weeks 13-16)</p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Multi-timeframe analysis</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Advanced patterns</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Market correlations</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">High-probability setups</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Phase 5: Funded Challenge Preparation */}
                  <Card className="bg-gradient-to-br from-red-50 via-white to-red-50 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        {/* Icon Section */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                              PHASE 5
                            </div>
                            <h3 className="text-2xl font-bold text-deep-navy">Funded Challenge Prep</h3>
                          </div>
                          <p className="text-red-600 font-semibold mb-4 text-lg">Securing Your Trading Capital (Weeks 17-20)</p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Challenge strategies</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Strict protocols</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Consistency training</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">Live simulation</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Phase 6: Professional Trading */}
                  <Card className="bg-gradient-to-br from-trading-gold/20 via-white to-trading-gold/20 border-2 border-trading-gold hover:border-trading-gold/60 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        {/* Icon Section */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-gradient-to-br from-trading-gold to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                            <svg className="w-10 h-10 text-deep-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <div className="bg-trading-gold text-deep-navy px-3 py-1 rounded-full text-sm font-bold mr-4">
                              PHASE 6
                            </div>
                            <h3 className="text-2xl font-bold text-deep-navy">Professional Trading</h3>
                          </div>
                          <p className="text-trading-gold font-semibold mb-4 text-lg">Your Trading Success Journey (Ongoing)</p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-trading-gold rounded-full"></div>
                              <span className="text-gray-700 font-medium">Live trading</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-trading-gold rounded-full"></div>
                              <span className="text-gray-700 font-medium">Continuous support</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-trading-gold rounded-full"></div>
                              <span className="text-gray-700 font-medium">Performance tracking</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-3 h-3 bg-trading-gold rounded-full"></div>
                              <span className="text-gray-700 font-medium">Community access</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Enroll CTA */}
                <Card className="bg-deep-navy text-white">
                  <CardContent className="p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Trading?</h2>
                    <p className="text-gray-300 mb-6">Join our exclusive mentorship program and start your journey to trading success</p>
                    <Button 
                      asChild 
                      size="lg" 
                      className="bg-trading-gold text-deep-navy hover:bg-yellow-500 text-lg px-8 py-6"
                    >
                      <Link href="/contact">Enroll Now</Link>
                    </Button>
                  </CardContent>
                </Card>
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
                      <p className="text-sm">Pass Rate</p>
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
                    <h3 className="text-lg font-semibold text-deep-navy mb-4">What Our Students Say</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-trading-gold rounded-full flex items-center justify-center">
                          <Quote className="text-deep-navy h-4 w-4" />
                        </div>
                        <p className="text-gray-600 italic">"Freeman's mentorship completely changed my trading approach. I'm now consistently profitable!"</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-trading-gold rounded-full flex items-center justify-center">
                          <Quote className="text-deep-navy h-4 w-4" />
                        </div>
                        <p className="text-gray-600 italic">"Passed my funded account challenge on the first try using Freeman's strategies."</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-deep-navy mb-12">Program Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-trading-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-deep-navy">1:1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-deep-navy mb-4">Personal Coaching</h3>
                  <p className="text-gray-600">Individual attention and customized learning path based on your trading goals</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-trading-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-deep-navy">24/7</span>
                  </div>
                  <h3 className="text-xl font-semibold text-deep-navy mb-4">Support Access</h3>
                  <p className="text-gray-600">Round-the-clock support and guidance whenever you need help</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-trading-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-deep-navy">∞</span>
                  </div>
                  <h3 className="text-xl font-semibold text-deep-navy mb-4">Lifetime Access</h3>
                  <p className="text-gray-600">Continued access to resources and community even after completion</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-trading-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-deep-navy">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-deep-navy mb-4">Goal-Oriented</h3>
                  <p className="text-gray-600">Focused training to help you achieve specific trading objectives</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
