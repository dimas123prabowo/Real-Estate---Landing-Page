import React from "react";
import Footer1 from "../assets/Footer1.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 md:gap-16 py-10 md:py-20 px-5 md:px-16">
      {/* Bagian Menu */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-16 w-full">
        {/* Kolom 1 */}
        <div className="flex flex-row md:flex-col gap-4 md:gap-4 items-center md:items-start">
          <ul className="flex flex-row gap-4 md:flex-col">
            <li className="text-[12px] md:text-[14px] text-neutral-600 hover:text-neutral-100">
              About
            </li>
            <li className="text-[12px] md:text-[14px] text-neutral-600 hover:text-neutral-100">
              Highlight
            </li>
            <li className="text-[12px] md:text-[14px] text-neutral-600 hover:text-neutral-100">
              Gallery
            </li>
            <li className="text-[12px] md:text-[14px] text-neutral-600 hover:text-neutral-100">
              FAQ
            </li>
          </ul>
        </div>
        {/* Kolom 2 */}
        <div className="flex flex-row md:flex-col gap-4 md:gap-4 items-center md:items-start">
          <ul className="flex flex-row gap-4 md:flex-col">
            <li className="text-[12px] md:text-[14px] text-neutral-600 hover:text-neutral-100">
              Privacy
            </li>
            <li className="text-[12px] md:text-[14px] text-neutral-600 hover:text-neutral-100">
              Sitemap
            </li>
          </ul>
        </div>
        {/* Kolom 3 */}
        <div className="flex flex-row md:flex-col gap-4 md:gap-4 items-center md:items-start">
          <ul className="flex flex-row gap-4 md:flex-col">
            <li className="text-[12px] md:text-[14px] text-neutral-600 hover:text-neutral-100">
              © 2024 Dimas Indra.
            </li>
            <li className="text-[12px] md:text-[14px] text-neutral-600 hover:text-neutral-100">
              All rights reserved.
            </li>
          </ul>
        </div>
      </div>
      {/* Bagian Gambar */}
      <div>
        <img
          src={Footer1}
          alt="Footer"
          className="w-full md:w-[1063px] h-auto md:h-[164px] object-contain"
        />
      </div>
    </div>
  );
};

export default Footer;
