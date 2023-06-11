import React from "react";

const Initiatives = () => {
  return (
    <section className=" bg-white mb-[400px]">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div
            className="grid grid-cols-2 md:grid-cols-2 gap-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="card lg:card-side bg-base-200 rounded-none border">
              <figure>
                <img
                  className="w-28 h-full p-4 bg-white "
                  src="https://seeklogo.com/images/1/333-service-in-bangladesh-logo-095B45E3E2-seeklogo.com.png"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-blue-900 text-bold ">333</h2>
              </div>
            </div>

            <div className="card lg:card-side bg-base-200 rounded-none border">
              <figure>
                <img
                  className="w-28 h-full p-4 bg-white "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXDvsD6-r_QmRLg6Nwey2LfPdbfqhJucnW6yAJY0Bwyxg7-PdyQ7IAOn9FxAVbWHnEWQ&usqp=CAU"
                  alt="Album"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title text-blue-900 text-bold ">999</h2>
              </div>
            </div>

            <div className="card lg:card-side bg-base-200 rounded-none border">
              <figure>
                <img
                  className="w-28 h-full p-4 bg-white "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXDvsD6-r_QmRLg6Nwey2LfPdbfqhJucnW6yAJY0Bwyxg7-PdyQ7IAOn9FxAVbWHnEWQ&usqp=CAU"
                  alt="Album"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title text-blue-900 text-bold ">
                  STARTUP BANGLADESH
                </h2>
              </div>
            </div>

            <div className="card lg:card-side bg-base-200 rounded-none border">
              <figure>
                <img
                  className="w-28 h-full p-4 bg-white "
                  src="https://seeklogo.com/images/P/porichoy-logo-4CACB5C432-seeklogo.com.png"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-blue-900 text-bold ">
                  PORICHOY
                </h2>
              </div>
            </div>

            <div className="card lg:card-side bg-base-200 rounded-none border">
              <figure>
                <img
                  className="w-28 h-full p-4 bg-white "
                  src="https://www.bd-directory.com/Food-for-Nation-Bangladesh.JPG"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-blue-900 text-bold ">
                  FOOD FOR NATIONS
                </h2>
              </div>
            </div>

            <div className="card lg:card-side bg-base-200 rounded-none border">
              <figure>
                <img
                  className="w-28 h-full p-4 bg-white "
                  src="https://play-lh.googleusercontent.com/T4lbDfq91wNFLbTB_YaCafqJN1ucdBocu0BeEKSU1Gbn9Kkq9B-4AwMDiZRIMOOuawI"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-blue-900 text-bold ">
                  SUROKKHA
                </h2>
              </div>
            </div>
          </div>

          <div
            className="p-10 md:w-1/2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="text-4xl font-bold uppercase text-blue-800">
              INITIATIVES
            </h1>
            <p className="py-6 text-justify  text-gray-700">
              ICT Division has taken initiatives to build Digital Bangladesh.
              Our software and service industry is a billion-dollar market and
              is expected to grow our export to USD 5 Billion by 2025. We are
              serving clients in the array of domains –Financial Services,
              Telecom companies, Healthcare. Various Startup projects, High-Tech
              parks, Sheikh Kamal IT Training and Incubation Centers etc
              projects are underway across the country.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
