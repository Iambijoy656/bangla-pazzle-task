import React from "react";
import mojib from "../../../assets/mojib.png";
import { FaArrowRight } from "react-icons/fa";

const IdeologySection = () => {
  return (
    <section className="bg-[#fff] md:mt-10">
      <div className="hero md:px-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={mojib}
            className=" lg:w-1/3 rounded-lg shadow-2xl bg-[#fff]"
            alt=""
          />
          <div className="px-10">
            <h1 className="text-3xl font-bold uppercase">The Ideology</h1>
            <p className="py-6 text-gray-500 text-justify">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <h2 className="text-xl font-bold text-gray-600">
              {" "}
              -Bangabandhu Sheikh mujibur rahaman
            </h2>

            <button
              type="button"
              className="px-8 py-3 mx-2 font-semibold  border rounded text-gray-500  border-gray-800 my-5 hover:text-white hover:bg-gray-500"
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

export default IdeologySection;
