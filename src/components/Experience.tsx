
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

const Experience = () => {
  const { ref: titleRef, isInView: titleIsInView } = useAnimateOnScroll();

  const experiences = [
    {
      company: "S3 Infotech Pvt. Ltd",
      period: "From 2025",
      roles: ["Practice Lead SAP Services"],
      description: "End-to-end delivery of S/4HANA and ECC solutions with a focus on digital transformation. Manage cross-functional teams, and deliver innovative, scalable SAP solutions aligned with business goals.",
      technologies: ["S/4HANA", "Digital Transformation", "Solution Architecture", "Team Leadership"]
    },
    {
      company: "Philips India Ltd",
      period: "2011–2025",
      roles: ["Sr. Solution Architect", "Sr. Analyst", "Project Manager"],
      description: "Led multiple SAP S/4HANA Finance implementations and Central Finance projects. Managed cross-functional teams and delivered solutions for global business units.",
      technologies: ["S/4HANA", "Central Finance", "FSCM", "Universal Journal"]
    },
    {
      company: "IBM India Ltd",
      period: "2009–2011",
      roles: ["Sr. Package Solution Consultant"],
      description: "Provided consulting services for SAP Finance implementations and rollouts. Developed solution designs and conducted client workshops.",
      technologies: ["SAP ECC 6.0", "FI/CO", "FSCM", "Solution Manager"]
    },
    {
      company: "HCL Technologies",
      period: "2008–2009",
      roles: ["Associate Consultant"],
      description: "Delivered SAP Finance module implementations with focus on GL, AP/AR, and Asset Accounting. Supported international rollouts.",
      technologies: ["SAP ECC", "FI/CO", "Asset Accounting"]
    },
    {
      company: "CSC India Pvt Ltd",
      period: "2007–2008",
      roles: ["Sr. SAP Consultant"],
      description: "Implemented SAP Finance modules for various clients. Responsible for requirements gathering, configuration, and testing.",
      technologies: ["SAP R/3 4.7", "FI/CO", "New GL"]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
  <motion.h2 
    ref={titleRef}
    initial={{ opacity: 0, y: 20 }}
    animate={titleIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.8 }}
    className="text-3xl md:text-4xl font-bold text-center mb-16 text-white relative pb-6"
  >
    <span className="relative z-10">Professional Experience</span>
    <motion.div
      initial={{ scaleX: 0 }}
      animate={titleIsInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-gradient-to-r from-professional-blue to-professional-lightblue"
    ></motion.div>
  </motion.h2>

  <div className="max-w-5xl mx-auto">
    <div className="relative">
      {/* Timeline connector */}
      <div className="absolute top-0 left-6 md:left-1/2 w-0.5 h-full -ml-0.5 bg-gradient-to-b from-professional-blue/50 via-professional-lightblue/50 to-professional-blue/50"></div>
      
      {/* Experience items */}
      <motion.div 
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} className="relative" variants={itemVariants}>
            {/* Timeline dot */}
            <motion.div 
              className="absolute top-5 left-6 md:left-1/2 -ml-3.5 w-7 h-7 bg-slate-900 rounded-full border-2 border-professional-lightblue flex items-center justify-center z-10"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <Briefcase className="h-3.5 w-3.5 text-professional-lightblue" />
            </motion.div>

            {/* Experience Card Container */}
            <div
              className={`md:w-1/2 ml-16 md:ml-0 ${
                index % 2 === 0
                  ? 'md:pr-12 md:self-start'
                  : 'md:pl-12 md:ml-auto md:self-end'
              }`}
            >
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.2)" }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-slate-900/40 border-slate-700 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6 relative">
                    <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-professional-lightblue/50 to-transparent"></div>
                    
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-professional-lightblue">{exp.company}</h3>
                      <p className="text-sm text-gray-400">{exp.period}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-gray-300">Roles:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.roles.map((role, idx) => (
                          <span 
                            key={idx}
                            className="inline-block bg-professional-lightblue/10 text-professional-lightblue text-xs px-2 py-1 rounded-md border border-professional-lightblue/20"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 mb-4">{exp.description}</p>

                    <div>
                      <h4 className="font-medium mb-2 text-gray-300">Technologies:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="inline-block bg-slate-800 text-gray-300 text-xs px-2 py-0.5 rounded border border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
      </div>
    </section>
  );
};

export default Experience;
