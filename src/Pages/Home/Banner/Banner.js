import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={4000}
      className="h-[85vh]"
    >
      <div data-src="https://anjirliton.com/uploads/banner/1676722927.jpg">
        <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
        <div className="absolute left-20 right-0 bottom-50 hidden md:block">
          <h1 className="text-3xl md:text-2xl text-white ">
            Rupali Bank SureCash And Bangladesh Shisu Academy
          </h1>
          <h1 className="text-3xl md:text-2xl text-white">
            Made and agreement
          </h1>
          <button
            type="button"
            className="px-8 py-3 mx-2 font-semibold rounded text-gray-100 bg-[#115c8f] md:ml-52 md:mt-5"
          >
            Read More
          </button>
        </div>
      </div>
      <div data-src="https://anjirliton.com/uploads/banner/1676789309.jpg">
        <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
        <div className="absolute left-20 right-0 bottom-50 hidden md:block">
          <h1 className="text-4xl md:text-3xl text-white">Tungi para Visit</h1>
          <button
            type="button"
            className="px-8 py-3 mx-2 font-semibold rounded text-gray-100 bg-[#115c8f] md:ml-52 md:mt-5"
          >
            Read More
          </button>
        </div>
      </div>
      <div data-src="https://anjirliton.com/uploads/banner/1676722944.jpg">
        <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
        <div className="absolute left-20 right-0 bottom-50 hidden md:block">
          <h1 className="text-4xl md:text-3xl text-white">
            DG Sir Visit Tungi Para
          </h1>
          <button
            type="button"
            className="px-8 py-3 mx-2 font-semibold rounded text-gray-100 bg-[#115c8f] md:ml-52 md:mt-5"
          >
            Read More
          </button>
        </div>
      </div>
    </AutoplaySlider>
  );
};

export default Banner;
