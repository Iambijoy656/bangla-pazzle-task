import React from "react";
import Banner from "../Banner/Banner";
import ConstituentService from "../../ConstituentService/ConstituentService";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ConstituentService></ConstituentService>
    </div>
  );
};

export default Home;
