import React from "react";
import Banner from "../Banner/Banner";
import ConstituentService from "../../ConstituentService/ConstituentService";
import IdeologySection from "../IdeologySection/IdeologySection";
import LeaderSection from "../LeaderSection/LeaderSection";
import UpcomingEvent from "../Banner/UpcomingEvent/UpcomingEvent";
import JourneySection from "../JourneySection/JourneySection";
import Initiatives from "../Iniatives/Initiatives";
import VedioSection from "../VedioSection/VedioSection";
import PhotoSection from "../PhotoSection/PhotoSection";
import MediaSection from "../MediaSection/MediaSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ConstituentService></ConstituentService>
      <IdeologySection></IdeologySection>
      <LeaderSection></LeaderSection>
      <UpcomingEvent></UpcomingEvent>
      <JourneySection></JourneySection>
      <Initiatives></Initiatives>
      <VedioSection></VedioSection>
      <PhotoSection></PhotoSection>
    <MediaSection></MediaSection>
    </div>
  );
};

export default Home;
