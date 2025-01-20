import React from "react";
import Room1 from "../assets/Room1.png";
import Room2 from "../assets/Room2.png";

const Hilight = () => {
  return (
    <div
      id="highlight"
      className="flex flex-col items-start gap-8 self-stretch py-[64px] px-[20px] md:px-[64px] "
    >
      <h1 className="text-white font-sora text-[32px] md:text-[40px] font-semibold leading-[44px]">
        Hilight Rooms
      </h1>
      <div className="flex md:h-[619px] items-end gap-16 self-stretch flex-col lg:flex-row">
        <img
          src={Room1}
          alt="Room1"
          className="w-full lg:w-[679px] md:h-[619px] object-cover"
        />
        <div className="flex flex-col justify-between items-end flex-1 self-stretch">
          <p className="text-white text-[20px] font-inter text-base font-light leading-6">
            The living room has an open space concept with a luxury theme,
            measuring 8m x 6m. Designed to create a spacious, elegant and
            comfortable atmosphere.
          </p>
          <div className="flex flex-col lg:flex-row justify-end items-end gap-4 lg:gap-8">
            <p className="text-[20px] text-white font-inter text-sm font-light leading-5 w-full lg:w-[250px]">
              Minimalist open space and elegant design.
            </p>
            <img
              src={Room2}
              alt="Room2"
              className="w-full lg:w-[301px] lg:h-[406px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hilight;
