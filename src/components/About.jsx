import React from "react";
import tech from '../assets/images/tech-team.jpeg';
import unk from '../assets/images/unknown.jpeg';
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "B Prudhvi Raju",
    role: "Founder & CEO",
    bio: "A digital innovator focused on building scalable tech platforms.",
    image: unk,
  },
  {
    name: "Sai Sharath Kumar D",
    role: "Co Founder & CTO",
    bio: "A tech strategist driving innovation through scalable and secure engineering solutions.",
    image: unk,
  },
  {
    name: "B Rupesh Raju",
    role: "Business Development Manager & CFO",
    bio: "A financial architect focused on sustainable growth and smart capital strategy",
    image: unk,
  },
];

const About = () => {
  return (
    <main className="bg-white text-gray-800 font-[Poppins]">
      {/* Hero Banner */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto bg-blue-50 p-10 rounded-xl shadow text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
          >
            About BPR<span className="text-orange-500"> NextGen</span> Solutions
          </motion.h1>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-700">
            Think Forward. Build Smarter.
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Empowering businesses with future-ready digital solutions to scale, adapt, and lead.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-blue-50 p-8 rounded-xl shadow">
          <div>
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">Who We Are</h2>
            <p className="mb-4 text-gray-700">
              BPR NextGen Solutions is a next-generation technology company helping businesses thrive in a digitally evolving world.
            </p>
            <p className="mb-4 text-gray-700">
              We design intelligent, scalable solutions that drive transformation, boost efficiency, and fuel growth.
            </p>
            <p className="text-gray-700">
              With a team of passionate innovators, we bring deep industry insight, technical expertise, and a relentless drive to deliver impact.
            </p>
          </div>
          <motion.img
            src={tech}
            alt="Tech Team"
            className="rounded-xl shadow-lg w-full h-80 object-cover object-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">🌍 Vision</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                To be a catalyst of digital evolution, enabling enterprises to lead in an intelligent, automated, and sustainable future.
              </li>
              <li>
                To shape the next generation of smart businesses through innovation, data intelligence, and emerging technologies.
              </li>
              <li>
                To empower global enterprises with future-proof digital ecosystems that drive lasting impact and transformation.
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">🚀 Mission</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                To deliver agile, scalable, and intelligent solutions that help businesses adapt and thrive in a constantly changing digital landscape.
              </li>
              <li>
                To bridge the gap between traditional systems and tomorrow’s technology, ensuring our clients are always a step ahead.
              </li>
              <li>
                To co-create value with our clients by combining innovation, strategy, and cutting-edge technology in every solution.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-12 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">Our Journey</h2>
          <div className="border-l-2 border-blue-700 pl-6 space-y-6">
            <div>
              <h4 className="font-semibold text-blue-600">2024</h4>
              <p className="text-gray-700">Founded with a vision to transform the digital consulting landscape by delivering intelligent, scalable, and future-ready solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600">2025</h4>
              <p className="text-gray-700">Launched our flagship enterprise automation suite, helping businesses streamline operations and accelerate digital transformation.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600">Future</h4>
              <p className="text-gray-700"> Cloud migration platform and a global delivery center — strengthening our footprint as an emerging multinational leader in next-gen technology services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Team */}
      <section className="py-12 px-6 md:px-20 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-10">Leadership</h2>
          <div className="grid md:grid-cols-3 gap-10 justify-center">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow"
                />
                <h4 className="font-semibold text-blue-700">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="text-xs text-gray-500 mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 md:px-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-10">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-blue-800 p-6 rounded-xl shadow">Future-ready digital platforms</div>
            <div className="bg-blue-800 p-6 rounded-xl shadow">Agile and scalable development</div>
            <div className="bg-blue-800 p-6 rounded-xl shadow">Industry-specific insights</div>
            <div className="bg-blue-800 p-6 rounded-xl shadow">Transparent partnership model</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 md:px-20 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Want to build smarter?</h2>
          <p className="mb-6 text-gray-700">Let’s shape the future together.</p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Contact Us →
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
