
import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-50 relative">
      {/* Site-wide background gradient effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
