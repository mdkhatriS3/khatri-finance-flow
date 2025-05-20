
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  
  const categories = [
    { id: "all", name: "All" },
    { id: "implementation", name: "Implementation" },
    { id: "integration", name: "Integration" },
    { id: "rollout", name: "Rollout" },
    { id: "upgrade", name: "Upgrade" }
  ];
  
  const projects = [
    {
      id: 1,
      title: "Central Finance Implementation & MDM Integration",
      category: "implementation",
      description: "Implemented SAP Central Finance with Master Data Management integration for a global manufacturing client.",
      tags: ["S/4HANA", "MDM", "Central Finance"]
    },
    {
      id: 2,
      title: "Product Costing for Group Valuation",
      category: "implementation",
      description: "Designed and implemented product costing solution for group-level valuation across multiple legal entities.",
      tags: ["Product Costing", "Valuation", "Multi-Entity"]
    },
    {
      id: 3,
      title: "Treasury Cash Sweeps via Virtual Accounts",
      category: "integration",
      description: "Implemented virtual account structure for automated cash sweeps, improving treasury operations.",
      tags: ["Treasury", "Cash Management", "Banking"]
    },
    {
      id: 4,
      title: "SAP DRC e-Reporting for Egypt and Romania",
      category: "implementation",
      description: "Set up e-reporting functionality to meet local regulatory requirements in Egypt and Romania.",
      tags: ["Regulatory", "Reporting", "Localization"]
    },
    {
      id: 5,
      title: "Cloud-ECC Integration using Microservices",
      category: "integration",
      description: "Designed microservice architecture to integrate cloud solutions with on-premise SAP ECC systems.",
      tags: ["Cloud", "Microservices", "Integration"]
    },
    {
      id: 6,
      title: "Multi-System FSCM Rollout",
      category: "rollout",
      description: "Led global rollout of Financial Supply Chain Management across multiple regions and systems.",
      tags: ["FSCM", "Global Rollout", "Finance"]
    },
    {
      id: 7,
      title: "LATAM Simple Finance Implementation",
      category: "implementation",
      description: "Implemented SAP Simple Finance solutions for Latin American operations with local regulatory compliance.",
      tags: ["LATAM", "Simple Finance", "Regulatory"]
    },
    {
      id: 8,
      title: "India GST and Russia Rollout",
      category: "rollout",
      description: "Managed SAP rollout with localized tax compliance for India GST and Russian regulatory requirements.",
      tags: ["India", "Russia", "Tax Compliance"]
    },
    {
      id: 9,
      title: "Vertex O Series Upgrade & Architecture Design",
      category: "upgrade",
      description: "Led Vertex tax system upgrade project and redesigned integration architecture for improved performance.",
      tags: ["Vertex", "Tax", "Upgrade"]
    }
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Portfolio</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className="min-w-[120px]"
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <div className="font-medium text-gray-400">Project Image</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 bg-gray-50 border-t">
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
