import React from "react";
import { ArrowUpRight } from "lucide-react";

const Service = () => {
  const services = [
    {
      id: "02",
      title: "FULL STACK DEVELOPMENT",
      description: "End-to-end web development, both frontend and backend using modern technologies."
    },
    {
      id: "01",
      title: "MERN ECOMMERCE STORE",
      description: "Custom eCommerce solutions built with MongoDB, Express, React, and Node.js for seamless shopping experiences."
    },
    {
      id: "03",
      title: "FRONT-END DEVELOPMENT",
      description: "Designing and building responsive, user-friendly interfaces using the latest frontend frameworks."
    },
    {
      id: "04",
      title: "WEBSITE ON REACT",
      description: "Creating dynamic and high-performance websites using React to deliver a smooth user experience."
    }
  ];  
  
  return (
    <div className="bg-[#F4F3ED] min-h-screen w-full py-12 px-4 md:px-8 lg:px-24">
      <h1 className="text-6xl md:text-7xl font-bold mb-16 md:mb-20">
        SERVICES
      </h1>
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/*  First card (wider) */}
          <div className="bg-[#F7F7F7] p-8 relative md:w-3/5 h-64 rounded-lg border border-transparent hover:border-black transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className="border border-gray-300 rounded-md px-2 py-1 text-lg mb-6">
                {services[1].id}
              </div>
              <ArrowUpRight className="text-gray-700" />
            </div>

            <h2 className="text-3xl font-bold mb-4">{services[1].title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {services[1].description}
            </p>
          </div>

          {/* Second card (narrower) */}
          <div className="bg-[#F7F7F7] p-8 relative md:w-2/5 h-64 rounded-lg border border-transparent hover:border-black transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className="border border-gray-300 rounded-md px-2 py-1 text-lg mb-6">
                {services[0].id}
              </div>
              <ArrowUpRight className="text-gray-700" />
            </div>

            <h2 className="text-3xl font-bold mb-4">{services[0].title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {services[0].description}
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Third card (narrower) */}
          <div className="bg-[#F7F7F7] p-8 relative md:w-2/5 h-64 rounded-lg border border-transparent hover:border-black transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className="border border-gray-300 rounded-md px-2 py-1 text-lg mb-6">
                {services[2].id}
              </div>
              <ArrowUpRight className="text-gray-700" />
            </div>

            <h2 className="text-3xl font-bold mb-4">{services[2].title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {services[2].description}
            </p>
          </div>

          {/* Fourth card (wider) */}
          <div className="bg-[#F7F7F7] p-8 relative md:w-3/5 h-64 rounded-lg border border-transparent hover:border-black transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className="border border-gray-300 rounded-md px-2 py-1 text-lg mb-6">
                {services[3].id}
              </div>
              <ArrowUpRight className="text-gray-700" />
            </div>

            <h2 className="text-3xl font-bold mb-4">{services[3].title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {services[3].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
