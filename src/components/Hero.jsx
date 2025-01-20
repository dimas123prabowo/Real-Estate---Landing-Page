import React, { useState } from "react";
import bgHero from "../assets/bg-hero.png";
import bgHero2 from "../assets/Hero2New.png";
import bgHero3 from "../assets/Hero3New.png";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Daftar gambar untuk slider
  const images = [bgHero, bgHero2, bgHero3];

  // Konten slider
  const content = {
    title: "Elevate Home",
    description:
      "Dream House. Land area 150m², length 100m, and price Rp 2.1M. Comfortable, elegant, and perfect for modern family.",
  };

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="flex flex-col md:flex-row items-end justify-end md:justify-between gap-8 w-full py-16 px-8 sm:px-16 lg:px-24 h-[740px] bg-cover bg-center animate-fade-left animate-once"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className="flex flex-col max-w-[556px] items-start gap-6 w-full">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-normal leading-tight sm:leading-[64px] lg:leading-[84px]">
          {content.title}
        </h1>
        <div className="flex gap-4 mt-4 sm:mt-6">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              className={`w-12 h-12 sm:w-16 sm:h-16 rounded-md cursor-pointer transition-all ${
                currentIndex === index
                  ? "ring-4 ring-white"
                  : "opacity-70 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col max-w-[482px] items-start gap-6 w-full">
        <p className="text-[#E0E0E0] text-base sm:text-lg lg:text-base font-normal leading-6 sm:leading-7 lg:leading-6">
          {content.description}
        </p>
        <button className="py-2 px-8 text-white border border-white rounded-full hover:bg-white hover:text-black transition self-end md:self-end">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Hero;
