import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-white py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Main Introduction with Card Style */}
        <div className="bg-blue-50 p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            BPR<span className="text-orange-500"> NextGen</span> Solutions
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-700">
            Think Forward. Build Smarter.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Empowering businesses with future-ready digital solutions to scale, adapt, and lead.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
            >
              🚀 Explore
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-100 transition"
            >
              📞 Contact Us
            </a>
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Who We Are */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Who We Are</h3>
            <p className="text-gray-700 text-sm mb-2">
              <strong>BPR NextGen Solutions</strong> is a future-focused tech company delivering smart, scalable, and innovative digital solutions.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              We help businesses streamline operations, embrace automation, and build smarter with cutting-edge technology.
            </p>
            <p className="text-gray-700 text-sm">
              Driven by expertise and vision, we empower organizations to <strong>Think Forward. Build Smarter.</strong>
            </p>
          </div>

          {/* Our Mission & Vision */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Our Mission & Vision</h3>
            <p className="text-gray-700 text-sm mb-2">
              To empower organizations with cutting-edge technology, scalable platforms, and expert consulting that drive sustainable growth, operational excellence, and digital resilience.
            </p>
            <p className="text-gray-700 text-sm">
              To be a global leader in delivering intelligent, future-ready digital solutions that transform how businesses operate, innovate, and grow.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-center text-xl font-semibold text-blue-700 mb-6">Why Choose BPR?</h3>
          <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-700">
            <span>🧠 Future-Ready Tech Stack</span>
            <span>⚡ Fast Execution</span>
            <span>🔐 Top Security</span>
            <span>🔍 Transparent Process</span>
            <span>🧑‍💻 Elite Talent</span>
            <span>📈 Real Business Results</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
