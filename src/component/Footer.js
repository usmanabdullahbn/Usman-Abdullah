import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  bg-[#F4F3ED] font-poppins py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Main Content */}
          <div className="flex flex-col items-center justify-center space-y-8 mb-24">
            <p className="text-lg md:text-xl text-gray-600">
              Have a project in mind?
            </p>
            <h2 className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter">
              LETS WORK
            </h2>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>Template by Creative Personal®</p>
            <p>© Copyright 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
