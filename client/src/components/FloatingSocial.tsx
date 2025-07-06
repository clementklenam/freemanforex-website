import { useState } from "react";
import { MessageCircle, Instagram, Send, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function FloatingSocial() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const socialLinks = [
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/FREEMANFOREXCOMMUNITY",
      color: "bg-blue-500 hover:bg-blue-600",
      description: "Join our Telegram community"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/freemanforex_?igsh=YnFiM3NjY3F6Znhw&utm_source=qr",
      color: "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700",
      description: "Follow us on Instagram"
    },
    {
      name: "X (Twitter)",
      icon: X,
      url: "https://x.com/freemanforex?s=21",
      color: "bg-black hover:bg-gray-800",
      description: "Follow us on X"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@freemanforex?si=xQPKQbySbaeeVvLZ",
      color: "bg-red-600 hover:bg-red-700",
      description: "Subscribe to our YouTube"
    }
  ];

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {/* Social Media Links */}
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col space-y-3 mb-4">
          {socialLinks.map((social, index) => (
            <div
              key={social.name}
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-3 rounded-lg text-white transition-all duration-300 hover:scale-105 ${social.color}`}
                    title={social.description}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="text-sm font-medium hidden sm:block">{social.name}</span>
                    <span className="text-xs font-medium block sm:hidden">{social.name.charAt(0)}</span>
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <Button
        onClick={toggleMenu}
        size="lg"
        className={`rounded-full w-12 h-12 md:w-14 md:h-14 shadow-lg hover:shadow-xl transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-45' 
            : 'bg-trading-gold hover:bg-yellow-500 social-pulse'
        }`}
      >
        {isOpen ? (
          <X className="h-5 w-5 md:h-6 md:w-6 text-white" />
        ) : (
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-deep-navy" />
        )}
      </Button>

      {/* Floating hint */}
      {!isOpen && (
        <div className="absolute bottom-16 right-0 bg-deep-navy text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-deep-navy"></div>
        </div>
      )}
    </div>
  );
}