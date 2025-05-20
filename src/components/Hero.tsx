
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

const Hero = () => {
  const { ref: heroRef, isInView: heroIsInView } = useAnimateOnScroll();
  const { ref: imageRef, isInView: imageIsInView } = useAnimateOnScroll({ threshold: 0.3 });
  const { ref: scrollIndicatorRef, isInView: scrollIndicatorIsInView } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center pt-10 md:pt-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-professional-lightgray opacity-60 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-professional-blue opacity-5"></div>
      <div className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-professional-lightblue opacity-5"></div>
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div 
            ref={heroRef} 
            className={`flex-1 text-center md:text-left transition-all duration-1000 transform ${
              heroIsInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-professional-lightgray text-professional-blue font-medium mb-6 text-sm">
              SAP Certified Professional
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-professional-navy mb-4">
              Murlidhar <span className="text-professional-blue">Khatri</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-professional-blue mb-6">
              SAP S/4HANA Solution Architect | Finance Domain Expert
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-professional-blue to-professional-lightblue rounded-full mb-6 mx-auto md:mx-0"></div>
            <p className="text-lg text-professional-gray max-w-2xl mb-8">
              Empowering digital finance transformation through SAP S/4HANA and intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button 
                className="px-8 bg-professional-blue hover:bg-professional-navy transition-all duration-300 hover:scale-105 shadow-lg" 
                asChild
              >
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button 
                variant="outline" 
                className="px-8 group border-professional-blue text-professional-blue hover:bg-professional-lightgray transition-all duration-300 hover:scale-105" 
                asChild
              >
                <a href="#contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>
          </div>
          <div 
            ref={imageRef}
            className={`flex-1 flex justify-center md:justify-end transition-all duration-1000 transform ${
              imageIsInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            } delay-300`}
          >
            <div className="relative">
              {/* Image container with modern design */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-professional-lightgray to-white flex items-center justify-center">
                  <span className="text-professional-gray">Professional Photo</span>
                </div>
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-4 border-white bg-professional-lightblue opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full border-4 border-white bg-professional-blue opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        ref={scrollIndicatorRef}
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center transition-all duration-1000 ${
          scrollIndicatorIsInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-professional-blue opacity-70" />
        </div>
        <span className="text-sm text-professional-gray opacity-70">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
