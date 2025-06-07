
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header 
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        "bg-white/90 shadow-sm" 
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-semibold text-gray-900 transition-transform duration-300 hover:scale-105"
          >
            MK
          </Link>
          
          {isMobile ? (
            <>
             <button
              onClick={toggleMenu}
              className="fixed top-5 right-5 z-[999] text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

              {isOpen && (
  <div className="fixed inset-0 bg-white z-50 p-5 h-screen overflow-y-auto">
    <ul className="flex flex-col gap-6 h-full justify-center">
      {navLinks.map((link, index) => (
        <li key={link.name} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in">
          <a
            href={link.href}
            onClick={closeMenu}
            className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors block"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}



              
            </>
          ) : (
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-professional-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
