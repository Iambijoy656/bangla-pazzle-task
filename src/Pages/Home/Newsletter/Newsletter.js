import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-white py-4 ">
      <div className="p-6 py-12 bg-[#0080d7] mx-44 rounded-lg  ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-white ">
              <h2 className="text-center text-3xl font-bold uppercase">
                Newsletter Subscribe
              </h2>
              <p className="tracking-wide pt-2">
                Sign up with your email address to updates
              </p>
            </div>
            <div className="text-center py-2 lg:py-0">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className=" text-center py-2 lg:py-0">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <button
              type="button"
              className="px-8 py-3 mx-2   border rounded text-white font-bold  border-gray-100 my-5 hover:text-gray-500 hover:bg-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
