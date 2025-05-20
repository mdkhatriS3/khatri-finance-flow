
import React from "react";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref, isInView } = useAnimateOnScroll();

  return (
    <footer className="bg-professional-navy py-10 text-white">
      <div 
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 transform ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 hover:scale-105 transition-transform duration-300">
            <span className="text-lg font-semibold">Murlidhar Khatri</span>
            <p className="text-sm text-gray-300">SAP S/4HANA Solution Architect</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
              &copy; {currentYear} - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
