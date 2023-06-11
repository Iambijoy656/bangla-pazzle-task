import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const MediaSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselItems = [
    {
      id: 1,
      title: "Shishu Academy new Director General Anjir Liton",
      description:
        "Childrens author and rhymester Anjir Liton has been appointed the new director general of Bangladesh Shishu Academy for the next three years. The Ministry of Public Administration issued a notification in this regard on Tuesday. Earlier on Monday, Bangladesh Shishu Academy Director General Md Shariful Islam was transferred to the Ministry of Social Welfare as additional secretary.",
      img: "https://anjirliton.com/uploads/news/1675928329.webp",
    },
    {
      id: 2,
      title: "10 get Bangla Academy Literary Award 2020",
      description:
        "Ten poets and writers have been adorned with the Bangla Academy Literary Award 2020. Bangla Academy Director General Habibullah Siraji came up with the declaration at a press conference at Shaheed Munir Chowdhury conference room of the academy 4:00pm on Monday.As per the declaration, a total of 10 persons in 10 departments will get the award.",
      img: "https://anjirliton.com/uploads/news/1676722156.jpg",
    },
    {
      id: 3,
      title: "Anjir Liton received Shishu Sahitya Award",
      description:
        "Agrani Bank- Bangladesh Shishu Academy Shishu Sahitya Puraskar from the Bangla calendar 1414-1417 was recently announced. The award-giving ceremony was held at the premises of the Bangladesh Shishu Academy in the city on October 4. Tariq-ul Islam, secretary of the ministry for women and children affairs was present as chief guest. Essayist-poet Professor Hayat Mamud and Obaidullah Al Masud, deputy managing director of Agrani Bank Ltd were present as special guests. Mohammad Nuruzzaman, director of Bangladesh Shishu Academy presided over the event.",
      img: "https://anjirliton.com/uploads/news/1676722175.jpg",
    },
    {
      id: 4,
      title: "Rupali Bank SureCash and Bangladesh Shishu Academy",
      description:
        "Bangladesh Shishu Academy has signed a tripartite agreement with Rupali Bank and SureCash to enable mobile banking services.On June 25, 2018, Bangladesh Shishu Academy will accept the admission fee for various types of cultural training through Rupali Bank SureCash according to the agreement that was held in the Bangladesh Shishu Academy conference room.",
      img: "https://anjirliton.com/uploads/news/1676724393.jpg",
    },
  ];

  const myStyles = {
    letterSpacing: "8px",
  };
  return (
    <div className="bg-[#115c8f] pb-16 px-5">
      <h1
        style={myStyles}
        className="text-4xl font-bold uppercase p-10 text-white"
      >
        Media Coverages
      </h1>

      <div
        className="md:mx-32"
        data-aos="zoom-out-right"
        data-aos-duration="1000"
      >
        <Carousel responsive={responsive}>
          {carouselItems.map((item) => (
            <div className="flex justify-center items-center px-2">
              <div className="card w-96 h-96 bg-base-100 shadow-xl rounded-none">
                <figure>
                  <img className="" src={item.img} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  {item.description.length > 100 ? (
                    <p>
                      {item.description.slice(0, 100) + "..."}{" "}
                      <Link className="text-blue-500">learn more</Link>
                    </p>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MediaSection;
