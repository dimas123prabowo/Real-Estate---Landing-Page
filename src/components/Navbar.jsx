import React, { useState } from "react";
import logo from "../assets/logo.png";
import iconClose from "../assets/iconClose.png";
import iconOpen from "../assets/iconOpen.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!nav);
  };

  const handleCloseMenu = () => {
    setNav(false);
  };

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between py-4 px-8 bg-black text-white">
      {/* Logo */}
      <img src={logo} alt="logo" className="h-8 w-36" />

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex flex-row w-full gap-8">
        <ul className="w-full flex justify-center items-center gap-6">
          <li>
            <a
              href="#about"
              className="p-2 text-[14px] cursor-pointer hover:text-gray-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#highlight"
              className="p-2 text-[14px] cursor-pointer hover:text-gray-400"
            >
              Highlight
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="p-2 text-[14px] cursor-pointer hover:text-gray-400"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="p-2 text-[14px] cursor-pointer hover:text-gray-400"
            >
              FAQ
            </a>
          </li>
        </ul>
        <button className="py-2 px-8 text-white border border-white rounded-full hover:bg-white hover:text-black transition">
          Contact
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="block md:hidden">
        <div onClick={handleToggle} className="cursor-pointer">
          <img
            src={nav ? iconClose : iconOpen}
            alt={nav ? "Close menu" : "Open menu"}
            className="h-6 w-6"
          />
        </div>

        {/* Mobile Menu (Dropdown) */}
        {nav && (
          <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-4 shadow-lg">
            <ul className="flex flex-col gap-4 items-center">
              <li>
                <a
                  href="#about"
                  className="p-2 text-[14px] cursor-pointer hover:text-gray-400"
                  onClick={handleCloseMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#highlight"
                  className="p-2 text-[14px] cursor-pointer hover:text-gray-400"
                  onClick={handleCloseMenu}
                >
                  Highlight
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="p-2 text-[14px] cursor-pointer hover:text-gray-400"
                  onClick={handleCloseMenu}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="p-2 text-[14px] cursor-pointer hover:text-gray-400"
                  onClick={handleCloseMenu}
                >
                  FAQ
                </a>
              </li>
            </ul>
            <button className="py-3 px-8 text-white border border-white rounded-full hover:bg-white hover:text-black transition">
              Contact
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
