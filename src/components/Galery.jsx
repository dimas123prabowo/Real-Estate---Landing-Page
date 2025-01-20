import React from "react";
import Galery01 from "../assets/Galery01.png";
import Galery02 from "../assets/Galery02.png";
import Galery03 from "../assets/Galery03.png";

const Galery = () => {
  return (
    <div
      id="gallery"
      className="flex flex-col justify-start items-start gap-11 py-[64px] px-[20px] md:px-[64px] box-border"
    >
      <h1 className="font-sora text-[40px] text-white leading-11">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full box-border">
        {/* Galery Item */}
        {[
          {
            img: Galery01,
            title: "Swimming Pool",
            desc: "The spacious 16m x 6m land is equipped with a swimming pool, perfect for relaxing and enjoying quiet moments every day.",
          },
          {
            img: Galery02,
            title: "Kitchen Space",
            desc: "The spacious 16m x 6m land is equipped with a swimming pool, perfect for relaxing and enjoying quiet moments every day.",
          },
          {
            img: Galery03,
            title: "Bedroom",
            desc: "The spacious 16m x 6m land is equipped with a swimming pool, perfect for relaxing and enjoying quiet moments every day.",
          },
        ].map(({ img, title, desc }, index) => (
          <div
            key={index}
            className="relative group flex flex-col gap-5 w-full box-border"
          >
            {/* Image */}
            <div className="overflow-hidden w-full box-border">
              <img
                src={img}
                alt={title}
                className="w-full h-[263px] object-cover transition-all duration-300 ease-in-out group-hover:h-[433px] box-border"
              />
            </div>
            {/* Title */}
            <h4 className="font-sora text-[28px] text-white leading-[32px] box-border">
              {title}
            </h4>
            {/* Description */}
            <p className="font-poppins text-[16px] text-neutral-500 w-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 box-border">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galery;
