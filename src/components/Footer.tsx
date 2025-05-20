
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-professional-navy py-10 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-semibold">Murlidhar Khatri</span>
            <p className="text-sm text-gray-300">SAP S/4HANA Solution Architect</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-300">
              &copy; {currentYear} - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
