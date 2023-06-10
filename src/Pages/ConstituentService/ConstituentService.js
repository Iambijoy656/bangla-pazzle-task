import React from "react";
import email from "../../assets/emil.png";
import callPic from "../../assets/call.png";
import news from "../../assets/news-removebg-preview.png";
import browse from "../../assets/browse-removebg-preview.png";
const ConstituentService = () => {
  return (
    <section className="bg-[#115c8f] py-10">
      <div className="text-center text-5xl text-white pb-5">
        <h1 className="text-bold">Constituent services</h1>
      </div>
      <div className="container flex flex-col justify-center items-center p-4 ">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-2 xl:ml-28 lg:ml-0  md:pr-5">
          <div className="mx-auto w-64 h-64 md:w-60 md:h-60 bg-[#2299ea] rounded-full flex flex-col p-5 justify-center items-center">
            <img className="w-16" src={email} alt="" />
            <h2 className="text-white text-xl font-bold mt-5">Email Me</h2>
          </div>

          <div className="mx-auto w-64 h-64 md:w-60 md:h-60 bg-[#2299ea] rounded-full flex flex-col justify-center p-5 items-center">
            <img className="w-16 " src={callPic} alt="" />
            <h2 className="text-white text-xl font-bold mt-5">Call me</h2>
          </div>
          <div className="mx-auto w-64 h-64 md:w-60 md:h-60 bg-[#2299ea] p-5 rounded-full flex flex-col justify-center items-center">
            <img className="w-16 " src={news} alt="" />
            <h2 className="text-white text-xl font-bold mt-5">News</h2>
          </div>
          <div className="mx-auto w-64 h-64 md:w-60 md:h-60 bg-[#2299ea] p-5 rounded-full flex flex-col justify-center items-center">
            <img className="w-16" src={browse} alt="" />
            <h2 className="text-white text-xl font-bold mt-5">Visit Us</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstituentService;
