
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center pt-10 md:pt-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-professional-navy mb-4">
              Murlidhar Khatri
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-professional-blue mb-6">
              SAP S/4HANA Solution Architect | Finance Domain Expert
            </h2>
            <p className="text-lg text-professional-gray max-w-2xl mb-8">
              Empowering digital finance transformation through SAP S/4HANA and intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button className="px-8 bg-professional-blue hover:bg-professional-navy" asChild>
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button variant="outline" className="px-8 group border-professional-blue text-professional-blue hover:bg-professional-lightgray" asChild>
                <a href="#contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <div className="w-full h-full bg-professional-lightgray flex items-center justify-center">
                <span className="text-professional-gray">Professional Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
