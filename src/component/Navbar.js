import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "../asserts/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-[#F4F3ED] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-6 px-4 md:px-8 lg:px-16 mx-auto">
        <div className="font-bold text-2xl">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="font-medium">
            HOME
          </Link>
          <Link to="/about" className="font-medium">
            ABOUT
          </Link>
          <Link to="/services" className="font-medium">
            SERVICES
          </Link>
          <div className="relative group">
            <button className="flex items-center font-medium">
              PROJECTS <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md py-2 mt-1 rounded-md min-w-[150px]">
              <Link
                to="/projects/web"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Web Design
              </Link>
              <Link
                to="/projects/mobile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Mobile Apps
              </Link>
              <Link
                to="/projects/branding"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Branding
              </Link>
            </div>
          </div>
          <Link to="/blog" className="font-medium">
            BLOG
          </Link>
          <Link to="/contact" className="font-medium">
            CONTACT
          </Link>
        </div>

        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
