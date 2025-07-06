import { Card, CardContent } from "@/components/ui/card";
import { Medal, Award, Users, TrendingUp } from "lucide-react";
import aboutImage from "@assets/about-image.jpeg";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* About Hero */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">About FreemanForex</h1>
              <div className="w-24 h-1 bg-trading-gold mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                A professional trading brand dedicated to excellence in the financial markets
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {/* Mission Statement */}
                <Card className="bg-gray-50">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-deep-navy mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      "To build a community of confident, skilled traders in Africa and beyond."
                    </p>
                  </CardContent>
                </Card>
                
                {/* Key Points */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trading-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Medal className="text-deep-navy h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-deep-navy mb-2">10+ Years Experience</h3>
                      <p className="text-gray-600">Proven track record in forex and gold trading with consistent results</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trading-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="text-deep-navy h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-deep-navy mb-2">Official Exness Partner</h3>
                      <p className="text-gray-600">Recognized partnership with leading global forex broker</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trading-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="text-deep-navy h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-deep-navy mb-2">Expert Mentorship</h3>
                      <p className="text-gray-600">Comprehensive training programs for traders at all levels</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trading-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="text-deep-navy h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-deep-navy mb-2">Proven Results</h3>
                      <p className="text-gray-600">Consistent profitability and successful student outcomes</p>
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
                
                {/* Trading Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-deep-navy text-white">
                    <CardContent className="p-6 text-center">
                      <p className="text-2xl font-bold text-trading-gold">95%</p>
                      <p className="text-sm">Success Rate</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-trading-gold text-deep-navy">
                    <CardContent className="p-6 text-center">
                      <p className="text-2xl font-bold">24/7</p>
                      <p className="text-sm">Support</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-deep-navy mb-8">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              To become the leading trading education platform in Africa, empowering individuals 
              with the knowledge and skills needed to achieve financial freedom through disciplined 
              trading practices.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-trading-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-deep-navy">E</span>
                  </div>
                  <h3 className="text-xl font-semibold text-deep-navy mb-2">Excellence</h3>
                  <p className="text-gray-600">Committed to delivering the highest quality trading education</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-trading-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-deep-navy">I</span>
                  </div>
                  <h3 className="text-xl font-semibold text-deep-navy mb-2">Integrity</h3>
                  <p className="text-gray-600">Transparent and honest approach to all our trading activities</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-trading-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-deep-navy">S</span>
                  </div>
                  <h3 className="text-xl font-semibold text-deep-navy mb-2">Success</h3>
                  <p className="text-gray-600">Focused on achieving measurable results for our students</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
