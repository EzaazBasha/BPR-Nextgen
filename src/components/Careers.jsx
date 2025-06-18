import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import quote from "../assets/images/life-at-bpr.jpg";

const Careers = () => {
  return (
    <main className="bg-white text-gray-800 font-[Poppins]">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-20 bg-blue-50 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
        >
          Think Forward. Build Smarter. Grow Together.
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
          Join BPR NextGen Solutions and be part of a team shaping the digital future.
        </p>
        <a href="#open-roles" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
          View Open Roles
        </a>
      </section>

      {/* Life at BPR */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">Why Work With Us?</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li>Collaborative, fast-paced environment</li>
              <li>Innovation-driven culture</li>
              <li>Flat hierarchy and ownership mindset</li>
              <li>Continuous learning and growth</li>
              <li>Hybrid/Flexible work options</li>
            </ul>
          </div>
          <div>
            <img
              src={quote}
              alt="Life at BPR"
              className="rounded-xl shadow-lg w-full max-w-md mx-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-roles" className="py-16 px-6 md:px-20 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 mb-10 text-center">Open Positions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold text-blue-700 mb-2">🔹 Full Stack Developer</h3>
              <p className="text-sm text-gray-600 mb-2">📍 Remote | 🕒 Full-time | ✍️ Apply by: 30th June 2025</p>
              <p className="text-gray-700 mb-4">We’re seeking a skilled developer to build scalable, high-performance solutions.</p>
              <div className="flex gap-4">
                <Link to="/contact" className="text-blue-600 hover:underline">View Details</Link>
                <Link to="/contact" className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                  Apply Now
                </Link>
              </div>
            </div>
            {/* Add more job cards here as needed */}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Kickstart Your Career With Us</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We offer internship programs for students and freshers with mentorship, certification support, and hands-on project experience.
          </p>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-16 px-6 md:px-20 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-10">Perks & Benefits</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-blue-900">
            <div>💻 Remote Work Flexibility</div>
            <div>📚 Learning Budget</div>
            <div>🏖️ Paid Time Off</div>
            <div>🏥 Health Coverage</div>
            <div>🚀 Startup Growth Opportunities</div>
            <div>🧠 Mentorship & Leadership Access</div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">What to Expect</h2>
          <ol className="list-decimal pl-6 space-y-4 text-gray-700">
            <li>Apply Online</li>
            <li>Intro Call</li>
            <li>Technical Round / Task</li>
            <li>Culture Fit Discussion</li>
            <li>Offer & Onboarding</li>
          </ol>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-6 md:px-20 bg-blue-600 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Don’t see a role that fits?</h2>
        <p className="mb-6">We’re always looking for passionate minds.</p>
        <Link to="/contact" className="inline-block px-6 py-3 bg-white text-blue-600 rounded-xl shadow hover:bg-gray-100 transition">
          Drop Your Resume
        </Link>
      </section>
    </main>
  );
};

export default Careers;
