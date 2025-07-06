import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, TrendingUp } from "lucide-react";
import logoImage from "@assets/logo-small.jpeg";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "mentorship", label: "Mentorship" },
    { id: "vlogs", label: "Trading Vlogs" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm text-amber-600 shadow-lg' 
        : 'bg-transparent text-amber-400'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2"
          >
            <div className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-colors duration-300 ${
              isScrolled ? 'border-black' : 'border-yellow-400'
            }`}>
              <img 
                src={logoImage} 
                alt="FreemanForex Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-amber-600' : 'text-amber-400'
            }`}>FreemanForex</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 cursor-pointer ${
                  isScrolled 
                    ? 'hover:text-amber-700' 
                    : 'hover:text-amber-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden relative w-10 h-10 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-trading-gold hover:bg-trading-gold/10' 
                : 'text-trading-gold hover:bg-white/10'
            } ${isMenuOpen ? 'bg-trading-gold/10 text-trading-gold' : ''}`}
            onClick={toggleMenu}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300 transform origin-center ${
                isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}></span>
              <span className={`absolute top-2 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 scale-x-0' : ''
              }`}></span>
              <span className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 transform origin-center ${
                isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}></span>
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={toggleMenu}
          ></div>
          
          {/* Menu */}
          <div className={`absolute top-0 left-0 right-0 bg-trading-gold shadow-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}>
            <div className="container mx-auto px-4 py-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
                <h3 className="text-xl font-bold text-white">Menu</h3>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Menu Items */}
              <div className="space-y-2 mb-6">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-4 px-4 rounded-lg transition-all duration-300 font-semibold text-white hover:bg-white/10 hover:text-yellow-100 border border-transparent hover:border-white/30"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg">{item.label}</span>
                      <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Mobile Menu Footer */}
              <div className="pt-4 border-t border-white/20">
                <div className="flex items-center justify-center">
                  <a 
                    href="https://t.me/FREEMANFOREXCOMMUNITY" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-white text-trading-gold px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.14-.04-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                    <span className="text-sm font-bold">Join Community</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
