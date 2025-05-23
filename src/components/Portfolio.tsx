
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
      tags: ["S/4HANA", "MDM", "Central Finance"],
      image: "https://images.pexels.com/photos/7078504/pexels-photo-7078504.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Product Costing for Group Valuation",
      category: "implementation",
      description: "Designed and implemented product costing solution for group-level valuation across multiple legal entities.",
      tags: ["Product Costing", "Valuation", "Multi-Entity"],
      image: "https://img.freepik.com/premium-photo/project-planning-software-modish-business-project-management_31965-52754.jpg?semt=ais_hybrid&w=740"
    },
    {
      id: 3,
      title: "Treasury Cash Sweeps via Virtual Accounts",
      category: "integration",
      description: "Implemented virtual account structure for automated cash sweeps, improving treasury operations.",
      tags: ["Treasury", "Cash Management", "Banking"],
      image: "https://img.freepik.com/premium-photo/businessman-working-office-using-calculator-calculate-budget-money_34152-1555.jpg?ga=GA1.1.223010116.1747982806&semt=ais_hybrid&w=740"
    },
    {
      id: 4,
      title: "SAP DRC e-Reporting for Egypt and Romania",
      category: "implementation",
      description: "Set up e-reporting functionality to meet local regulatory requirements in Egypt and Romania.",
      tags: ["Regulatory", "Reporting", "Localization"],
      image: "https://cdn.pixabay.com/photo/2015/05/10/21/28/accounting-761599_1280.jpg"
    },
    {
      id: 5,
      title: "Cloud-ECC Integration using Microservices",
      category: "integration",
      description: "Designed microservice architecture to integrate cloud solutions with on-premise SAP ECC systems.",
      tags: ["Cloud", "Microservices", "Integration"],
      image: "https://www.freepik.com/free-vector/file-transfer-process-processing-big-data-server-room-data-center_2910190.htm#fromView=keyword&page=1&position=5&uuid=cf710a32-c8e4-420e-9da3-631721dc47d7&query=Microservices+Architecture"
    },
    {
      id: 6,
      title: "Multi-System FSCM Rollout",
      category: "rollout",
      description: "Led global rollout of Financial Supply Chain Management across multiple regions and systems.",
      tags: ["FSCM", "Global Rollout", "Finance"],
      image: "https://www.freepik.com/free-vector/hand-drawn-international-trade-with-ship_20059364.htm#fromView=search&page=1&position=0&uuid=344c987a-e6c3-4c59-8523-092d2b3da11c&query=financial+Supply+Chain+Management"
    },
    {
      id: 7,
      title: "LATAM Simple Finance Implementation",
      category: "implementation",
      description: "Implemented SAP Simple Finance solutions for Latin American operations with local regulatory compliance.",
      tags: ["LATAM", "Simple Finance", "Regulatory"],
      image: "https://images.pexels.com/photos/1666945/pexels-photo-1666945.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 8,
      title: "India GST and Russia Rollout",
      category: "rollout",
      description: "Managed SAP rollout with localized tax compliance for India GST and Russian regulatory requirements.",
      tags: ["India", "Russia", "Tax Compliance"],
      image: "https://www.freepik.com/free-photo/closeup-economist-using-calculator-while-going-through-bills-taxes-office_25751795.htm#fromView=keyword&page=1&position=10&uuid=657191f6-9847-41dd-92a9-df800ee2b479&query=Gst"
    },
    {
      id: 9,
      title: "Vertex O Series Upgrade & Architecture Design",
      category: "upgrade",
      description: "Led Vertex tax system upgrade project and redesigned integration architecture for improved performance.",
      tags: ["Vertex", "Tax", "Upgrade"],
      image: "https://www.freepik.com/free-ai-image/man-architect-working-project-with-vr-glasses-new-technologies-3d_132856264.htm#fromView=keyword&page=1&position=7&uuid=e6e28f5c-4ebc-4b56-8dc9-c0ba2615b8a7&query=Software+Architecture"
    }
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
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
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
