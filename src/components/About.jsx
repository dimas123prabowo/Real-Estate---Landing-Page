import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-end items-end w-full py-[32px] px-[16px] scroll-smooth animate-fade-left animate-duration-[800ms]"
    >
      <h1 className="text-[16px] md:text-[32px] leading-[20px] md:leading-[38px] text-white max-w-[800px] text-center sm:text-left sm:text-[32px] sm:leading-[38px] md:text-[28px] md:leading-[34px]">
        A modern house with elegant design, land area 150m², length 100m. Has 6
        bedrooms, 3 bathrooms, and a luxurious swimming pool.
      </h1>
    </div>
  );
};

export default About;
