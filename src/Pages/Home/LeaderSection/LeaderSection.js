import React from "react";
import { FaArrowRight } from "react-icons/fa";

const LeaderSection = () => {
  return (
    <section
      className="md:-mt-4"
      data-aos="fade-left"
      data-aos-direction="right"
      data-aos-duration="1000"
    >
      <div className="hero bg-[#115c8f]">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src="https://anjirliton.com/uploads/home/1675939078.jpg"
            className="max-w-xl "
            alt=""
          />

          <div className="p-10 text-white">
            <h1 className="text-4xl font-bold uppercase">
              My leader and inspirations
            </h1>
            <p className="py-6 text-xl font-bold tracking-wider">
              - Honarable Prime minister Sheikh Hasina
            </p>
            <button
              type="button"
              className="px-8 py-3 mx-2 font-semibold  border rounded text-white  border-gray-100 my-5 hover:text-gray-500 hover:bg-white"
            >
              <li className="flex justify-center items-center">
                <span className="px-2">Learn More</span>{" "}
                <span>
                  <FaArrowRight></FaArrowRight>
                </span>
              </li>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderSection;
