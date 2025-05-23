
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const { ref: heroRef, isInView: heroIsInView } = useAnimateOnScroll();
  const { ref: imageRef, isInView: imageIsInView } = useAnimateOnScroll({ threshold: 0.3 });
  const { ref: scrollIndicatorRef, isInView: scrollIndicatorIsInView } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center pt-10 md:pt-0 overflow-hidden">
      {/* Modern background effect */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div 
            ref={heroRef} 
            initial={{ y: 50, opacity: 0 }}
            animate={heroIsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left text-white"
          >
            <motion.span 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={heroIsInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block px-4 py-2 rounded-full bg-professional-lightgray/20 text-professional-lightblue font-medium mb-6 text-sm"
            >
              SAP Certified Professional
            </motion.span>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={heroIsInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4"
            >
              Murlidhar <span className="text-professional-lightblue">Khatri</span>
            </motion.h1>
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={heroIsInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl font-medium text-professional-lightblue mb-6"
            >
              SAP S/4HANA Solution Architect | Finance Domain Expert
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={heroIsInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="h-1 w-20 bg-gradient-to-r from-professional-blue to-professional-lightblue rounded-full mb-6 mx-auto md:mx-0"
            ></motion.div>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={heroIsInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-lg text-gray-300 max-w-2xl mb-8"
            >
              Empowering digital finance transformation through SAP S/4HANA and intelligent automation.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={heroIsInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            >
              <Button 
                className="px-8 bg-professional-blue hover:bg-professional-navy transition-all duration-300 hover:scale-105 shadow-lg" 
                asChild
              >
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button 
                variant="outline" 
                className="px-8 group border-professional-blue text-professional-lightblue hover:bg-professional-lightgray/10 transition-all duration-300 hover:scale-105" 
                asChild
              >
                <a href="#contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            ref={imageRef}
            initial={{ x: 100, opacity: 0 }}
            animate={imageIsInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Image container with professional photo */}
              <motion.div 
                initial={{ rotate: -5 }}
                animate={{ rotate: 5 }}
                transition={{ repeat: Infinity, duration: 6, repeatType: "reverse" }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white/10 shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src="https://ik.imagekit.io/wfsl3d5fv/Photo%20Murlidhar.jpg?updatedAt=1747757486815" 
                    alt="Murlidhar Khatri" 
                    className="object-cover w-full h-full"
                  />
                </Avatar>
              </motion.div>
              {/* Decorative circles */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-4 border-white/10 bg-professional-lightblue/20"
              ></motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full border-4 border-white/10 bg-professional-blue/20"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        ref={scrollIndicatorRef}
        initial={{ opacity: 0 }}
        animate={scrollIndicatorIsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/70"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
        <span className="text-sm text-white/50">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
