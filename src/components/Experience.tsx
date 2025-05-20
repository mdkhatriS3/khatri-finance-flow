
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
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

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute top-0 left-6 md:left-1/2 w-0.5 h-full -ml-0.5 bg-gray-200"></div>
            
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute top-5 left-6 md:left-1/2 -ml-3.5 w-7 h-7 bg-white rounded-full border-2 border-primary flex items-center justify-center z-10">
                    <Briefcase className="h-3.5 w-3.5 text-primary" />
                  </div>
                  
                  <div className={`md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-1/2'}`}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold">{exp.company}</h3>
                          <p className="text-sm text-gray-500">{exp.period}</p>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Roles:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.roles.map((role, idx) => (
                              <span 
                                key={idx}
                                className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-md"
                              >
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-4">{exp.description}</p>
                        
                        <div>
                          <h4 className="font-medium mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech, idx) => (
                              <span 
                                key={idx}
                                className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
