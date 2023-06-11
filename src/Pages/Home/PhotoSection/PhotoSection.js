import React from "react";

const PhotoSection = () => {
  const myStyles = {
    letterSpacing: "8px",
  };
  return (
    <div className="bg-white">
      <h1 style={myStyles} className="text-4xl font-bold  p-10 text-blue-700 ">
        Photo Gallery
      </h1>

      <section className="py-6 ">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
            <img
              className="object-cover w-full  aspect-square"
              src="https://anjirliton.com/uploads/gallery/1676722408.jpg"
              alt=""
            />
            <img
              className="object-cover w-full  aspect-square"
              src="https://anjirliton.com/uploads/gallery/1676722426.jpg"
              alt=""
            />
            <img
              className="object-cover w-full  aspect-square"
              src="https://anjirliton.com/uploads/gallery/1676722362.jpg"
              alt=""
            />
            <img
              className="object-cover w-full  aspect-square"
              src="https://anjirliton.com/uploads/gallery/1676722601.jpg"
              alt=""
            />
            <img
              className="object-cover w-full  aspect-square"
              src="https://anjirliton.com/uploads/gallery/1676722345.jpg"
              alt=""
            />

            <img
              className="object-cover w-full  aspect-square"
              src="https://anjirliton.com/uploads/gallery/1676791153.jpg"
              alt=""
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              type="button"
              className="px-8 py-3 mx-2 font-semibold text-black bg-gray-300   my-5 hover:text-gray-500 "
            >
              View more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoSection;
