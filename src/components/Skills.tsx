
import React from "react";
import { Code, Users, Briefcase } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical SAP Expertise",
      icon: <Code className="h-6 w-6" />,
      skills: [
        "S/4HANA Finance",
        "Central Finance",
        "FSCM",
        "GL, AR/AP",
        "Asset Accounting",
        "Universal Journal",
        "Cash & Liquidity Management",
        "Multi-Currency Valuation",
        "CDS Views",
        "FIORI Apps",
        "SAP Integration",
      ],
    },
    {
      title: "Core Competencies",
      icon: <Briefcase className="h-6 w-6" />,
      skills: [
        "Project & Team Management",
        "Process Optimization",
        "GenAI/RPA in Finance",
        "Requirement Analysis",
        "Solution Architecture",
        "Gap Analysis",
        "Test Strategy & Automation",
      ],
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: [
        "Leadership",
        "Stakeholder Engagement",
        "Documentation",
        "Strategic Planning",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
