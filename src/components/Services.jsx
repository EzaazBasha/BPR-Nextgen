import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code2,
  Smartphone,
  Cloud,
  Paintbrush2,
  BarChart3,
  RefreshCcw,
  BriefcaseBusiness,
  Banknote,
  GraduationCap,
  Truck,
  HeartPulse,
  ShoppingCart,
} from "lucide-react";

const coreServices = [
  {
    name: "Custom Software Development",
    description: "Build secure, scalable applications tailored to your business needs.",
    icon: Code2,
  },
  {
    name: "Web & Mobile App Development",
    description: "User-focused and high-performance platforms across devices.",
    icon: Smartphone,
  },
  {
    name: "Cloud & DevOps Services",
    description: "Seamless deployment, integration, and performance optimization on the cloud.",
    icon: Cloud,
  },
  {
    name: "UI/UX Design",
    description: "Interactive and intuitive experiences with modern design trends.",
    icon: Paintbrush2,
  },
  {
    name: "Digital Transformation Consulting",
    description: "Strategies to upgrade your business for the digital era.",
    icon: RefreshCcw,
  },
  {
    name: "Data Analytics & BI",
    description: "Turning raw data into smart decisions with dashboards and insights.",
    icon: BarChart3,
  },
];

const industries = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education", icon: GraduationCap },
  { name: "Retail & E-commerce", icon: ShoppingCart },
  { name: "Finance & Banking", icon: Banknote },
  { name: "Logistics", icon: Truck },
  { name: "Manufacturing", icon: BriefcaseBusiness },
];

const Services = () => {
  return (
    <main className="bg-white text-gray-800 font-[Genos]">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-20 bg-blue-900 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Empowering Businesses with Future-Ready Digital Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto mb-6"
        >
          Explore our cutting-edge services built to scale, adapt, and lead.
        </motion.p>
        <div className="relative inline-block group">
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-white text-blue-900 rounded-xl font-semibold shadow hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 text-sm text-white bg-gray-800 rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none text-center">
            Reach out via contact form — we’ll respond shortly.
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 px-6 md:px-20 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-blue-800 mb-12">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <service.icon className="w-10 h-10 text-blue-700 mb-4" />
                <h3 className="text-xl font-bold text-blue-800 mb-2">{service.name}</h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-blue-800 mb-10">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <industry.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-blue-800">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s build your next big idea — smarter and faster.
        </h2>
        <p className="mb-6">
          Schedule a free consultation and explore the possibilities with BPR NextGen Solutions.
        </p>
        <div className="relative inline-block group">
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-white text-blue-900 rounded-xl font-semibold shadow hover:bg-gray-100 transition"
          >
            Schedule Now
          </Link>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 text-sm text-white bg-gray-800 rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none text-center">
            We’ll help you get started. Contact us now!
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
