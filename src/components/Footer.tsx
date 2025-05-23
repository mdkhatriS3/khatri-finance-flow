
import React from "react";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 pt-16 pb-8 text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Murlidhar Khatri</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              SAP S/4HANA Solution Architect with extensive experience in finance transformation projects.
            </p>
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <a 
                href="https://www.linkedin.com/in/murlidhar-k-a546858?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-professional-lightblue hover:text-white transition-colors duration-300"
              >
                <Linkedin size={20} />
                <span>Connect on LinkedIn</span>
              </a>
            </motion.div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#services" className="hover:text-professional-lightblue transition-colors duration-300">
                  SAP S/4HANA Implementation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-professional-lightblue transition-colors duration-300">
                  Finance Transformation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-professional-lightblue transition-colors duration-300">
                  Process Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-professional-lightblue transition-colors duration-300">
                  Digital Finance Strategy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-professional-lightblue transition-colors duration-300">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-professional-lightblue transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-professional-lightblue transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-professional-lightblue transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Murlidhar Khatri. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/murlidhar-k-a546858?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-professional-lightblue transition-colors duration-300"
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin size={18} />
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
