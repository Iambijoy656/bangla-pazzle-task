import React from "react";

const VedioSection = () => {
  const myStyles = {
    letterSpacing: "8px",
  };
  return (
    <div className=" bg-[#115c8f]">
      <h1 style={myStyles} className="text-4xl font-bold text-white p-10 ">
        Vedio Gallery
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
          <iframe
            src="https://www.youtube.com/embed/sE64kscT1pA"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            width="100%"
            height="200px"
          />

          <iframe
            src="https://www.youtube.com/embed/Cn-q-gXmrBA"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            width="100%"
            height="200px"
          />
          <iframe
            src="https://www.youtube.com/embed/YrpRgqawOBo"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            width="100%"
            height="200px"
          />
          <iframe
            src="https://www.youtube.com/embed/k0FC8biMK6A"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            width="100%"
            height="200px"
          />

          <iframe
            src="https://www.youtube.com/embed/o3rR5_O0hss"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            width="100%"
            height="200px"
          />

          <iframe
            src="https://www.youtube.com/embed/k0FC8biMK6A"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            width="100%"
            height="200px"
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          type="button"
          className="px-8 py-3 mx-2 font-semibold text-black bg-white   my-5 hover:text-gray-500 "
        >
          View more
        </button>
      </div>
    </div>
  );
};

export default VedioSection;
