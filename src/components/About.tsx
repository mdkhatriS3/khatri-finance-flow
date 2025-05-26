
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const educationItems = [
    {
      degree: "Chartered Accountant",
      institution: "Institute of Chartered Accountants of India",
      year: "1997",
      icon: <Award className="h-5 w-5" />,
    },
    {
      degree: "B.Com – First Rank Holder",
      institution: "M.L. Sukhadia University",
      year: "1993",
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ];

  const certifications = [
    "SAP Certified Associate – Central Finance S/4HANA 2020",
    "SAP Certified Application Professional – Financials in S/4HANA",
    "SAP Certified – Financial Accounting (4.7), Solution Manager 7.1",
    "Vertex Indirect Tax Certifications",
    "The Open Group Certified IT Specialist",
  ];

  return (

<section id="about" className="pt-12 pb-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold text-center mb-16"
    >
      About Me
    </motion.h2>

    <div className="max-w-3xl mx-auto mb-16">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-gray-700 mb-6"
      >
        With over 19 years of experience in SAP, I've specialized in Central Finance, providing expert project leadership and solution design. My career has been focused on delivering successful SAP implementations and business transformations for top-tier clients like Philips and IBM.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-700"
      >
        I'm passionate about leveraging the latest SAP technologies and intelligent automation to solve complex financial challenges and drive digital transformation initiatives.
      </motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold mb-6">Education</h3>
        <div className="space-y-4">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="mt-1 text-primary">{item.icon}</div>
                    <div>
                      <h4 className="font-medium">{item.degree}</h4>
                      <p className="text-sm text-gray-600">
                        {item.institution}, {item.year}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold mb-6">Certifications</h3>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <span className="text-gray-700">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
</section>

  );
};

export default About;
