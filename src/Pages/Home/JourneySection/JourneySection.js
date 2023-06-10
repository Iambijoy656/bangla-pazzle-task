import React from "react";
import { FaArrowRight } from "react-icons/fa";

const JourneySection = () => {
  return (
    <section className="">
      <div className="hero bg-[#115c8f]">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src="https://anjirliton.com/uploads/home/1675939333.jpg"
            className="max-w-xl "
            alt=""
          />

          <div className="p-10 text-white">
            <h1 className="text-4xl font-bold uppercase">
              MY JOURNEY WITH SHISHU ACADEMY
            </h1>
            <p className="py-6 text-justify ">
              One of the strengths to build a golden Bengal in the ideology of
              Father of the Nation Bangabandhu Sheikh Mujibur Rahman is our
              future generation, who are today's children. Bangladesh Shishu
              Academy is for children. Bangladesh Shishu Academy is working to
              develop latent talents including creative and gentle scholarship
              for the purpose of creating the spirit of great liberation war,
              love of country, moral education, discipline and sense of
              responsibility among the children. Under the leadership of Hon'ble
              Prime Minister Sheikh Hasina, a child friendly environment has
              been created in the country today. At present children's academy
              activities are being carried out in 64 districts and 6 upazilas
              (Keshabpur, Parshuram, Mithapukur, Kulaura, Srinagar and Babuganj
              upazilas) for the creative development and protection of
              children's rights. Under this program, various programs are being
              implemented in collaboration with the local administration for the
              participation of children across the country.
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

export default JourneySection;
