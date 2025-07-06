import { Link } from "wouter";
import { TrendingUp, Instagram, Send, X, Youtube } from "lucide-react";
import logoImage from "@assets/logo-medium.jpeg";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-deep-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-trading-gold">
                <img 
                  src={logoImage} 
                  alt="FreemanForex Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold">FreemanForex</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Mastering the Markets, Empowering Traders. Your trusted partner in forex and gold trading success.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/freemanforex_?igsh=YnFiM3NjY3F6Znhw&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-trading-gold hover:text-yellow-400 transition-colors duration-300" title="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://t.me/FREEMANFOREXCOMMUNITY" target="_blank" rel="noopener noreferrer" className="text-trading-gold hover:text-yellow-400 transition-colors duration-300" title="Telegram">
                <Send className="h-5 w-5" />
              </a>
              <a href="https://x.com/freemanforex?s=21" target="_blank" rel="noopener noreferrer" className="text-trading-gold hover:text-yellow-400 transition-colors duration-300" title="X (Twitter)">
                <X className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@freemanforex?si=xQPKQbySbaeeVvLZ" target="_blank" rel="noopener noreferrer" className="text-trading-gold hover:text-yellow-400 transition-colors duration-300" title="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-trading-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover-gold transition-colors duration-300">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover-gold transition-colors duration-300">About</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover-gold transition-colors duration-300">Services</button></li>
              <li><button onClick={() => scrollToSection('mentorship')} className="text-gray-300 hover-gold transition-colors duration-300">Mentorship</button></li>
              <li><button onClick={() => scrollToSection('vlogs')} className="text-gray-300 hover-gold transition-colors duration-300">Trading Vlogs</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover-gold transition-colors duration-300">Contact</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-trading-gold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li><a href="tel:+233201217381" className="text-gray-300 hover-gold transition-colors duration-300">+233 201217381</a></li>
              <li><a href="mailto:freemanforex01@gmail.com" className="text-gray-300 hover-gold transition-colors duration-300">freemanforex01@gmail.com</a></li>
              <li><span className="text-gray-300">@FREEMANFOREX 🦅🦅</span></li>
              <li><span className="text-gray-300">Accra, Ghana</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 mb-2">© 2025 FreemanForex. All Rights Reserved.</p>
                          <p className="text-gray-400 text-sm">Powered by FT technologies</p>
        </div>
      </div>
    </footer>
  );
}
