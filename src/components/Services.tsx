
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileCode, Settings, BarChart, PenTool, 
  CreditCard, FileText, Briefcase, CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "SAP S/4HANA Implementation, Rollout & Upgrade",
      icon: <CheckCircle className="h-6 w-6" />,
      description: "End-to-end S/4HANA implementations, system upgrades and global rollouts tailored to your organization's needs."
    },
    {
      title: "Financial Process Automation with RPA & GenAI",
      icon: <Settings className="h-6 w-6" />,
      description: "Leverage the latest in automation and AI to streamline your financial processes and reduce manual effort."
    },
    {
      title: "Central Finance Integration & Replication",
      icon: <FileCode className="h-6 w-6" />,
      description: "Seamlessly integrate and replicate financial data across multiple SAP and non-SAP systems."
    },
    {
      title: "Solution Design & Architecture Consulting",
      icon: <PenTool className="h-6 w-6" />,
      description: "Expert advice on optimal SAP architecture design for your specific business requirements."
    },
    {
      title: "Treasury & Cash Management Optimization",
      icon: <CreditCard className="h-6 w-6" />,
      description: "Optimize your treasury operations and cash management processes for improved financial visibility."
    },
    {
      title: "Tax Integration Projects (e.g., Vertex)",
      icon: <BarChart className="h-6 w-6" />,
      description: "Specialized integration of tax solutions with your SAP landscape for compliance and efficiency."
    },
    {
      title: "Training & Documentation for Finance Teams",
      icon: <FileText className="h-6 w-6" />,
      description: "Comprehensive training and documentation for finance teams to maximize SAP utilization."
    },
    {
      title: "Process Optimization & Business Transformation",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Transform your finance function through process optimization and best practices implementation."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-5 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
