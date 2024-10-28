import React, { useEffect, useState } from "react";
import logo from "./assets/LineLogo.png";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);

    // Handle resize event
    const handleResize = () => {
      if (window.innerWidth >= 768) {
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="bg-[#1e1b4b] border-2 border-[#1E2A5E] w-[100%] h-[93px] flex shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center z-50">
          <div className="flex items-center space-x-2">
            <Link className="flex"  to={"/"}>
            <img src={logo} alt="SkatLab Logo" className="h-24 w-24 z-50" />
            
            </Link>
          </div>
          <div className="md:hidden flex z-50 items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {!isOpen ? (
                <FiAlignJustify className="text-purple-100 text-4xl" />
              ) : (
                <IoIosCloseCircleOutline className="text-purple-100 text-4xl"/>
              )}
            </button>
          </div>

          <div className="hidden md:flex flex-row space-x-6">
            <Link
              to="/"
              className="text-[#e0e7ff] text-[16px] md:text-[18px] font-bold border-b-2 border-transparent hover:border-white leading-none transition-all duration-300 ease-in-out"
            >
              HOME
            </Link>
            <Link
              to="/contact-us"
              className="text-[#e0e7ff] text-[16px] md:text-[18px] font-bold border-b-2 border-transparent hover:border-white leading-none transition-all duration-300 ease-in-out"
            >
              CONTACT US
            </Link>
            <Link
              to="about"
              className="text-[#e0e7ff] text-[16px] md:text-[18px] font-bold border-b-2 border-transparent hover:border-white leading-none transition-all duration-300 ease-in-out"
            >
              ABOUT US
            </Link>
            <Link
              to="privacy"
              className="text-[#e0e7ff] text-[16px] md:text-[18px] font-bold border-b-2 border-transparent hover:border-white leading-none transition-all duration-300 ease-in-out"
            >
              PRIVACY POLICY
            </Link>
          </div>
        </div>
      </div>

      {/* Dropdown-style Mobile Menu */}
      <div
        className={`absolute top-[93px] left-0 z-10 w-full bg-[#1e1b4b] border-b-2 border-x-2 border-[#1E2A5E] shadow-lg md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col">
          <Link
            to="/"
            className="text-[#e0e7ff] px-4 py-3 text-[16px] border-b-2 border-[#1E2A5E] font-bold hover:text-[#1E2A5E]"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/contact-us"
            className="text-[#e0e7ff] px-4 py-3 text-[16px] font-bold hover:text-[#1E2A5E] border-b-2 border-[#1E2A5E]"
            onClick={() => setIsOpen(false)}
          >
            CONTACT US
          </Link>
          <Link
            to="about"
            className="text-[#e0e7ff] px-4 py-3 text-[16px] font-bold hover:text-[#1E2A5E] border-b-2 border-[#1E2A5E]"
            onClick={() => setIsOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            to="privacy"
            className="text-[#e0e7ff] px-4 py-3 text-[16px] font-bold hover:text-[#1E2A5E] border-b-2 border-[#1E2A5E]"
            onClick={() => setIsOpen(false)}
          >
            PRIVACY POLICY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
