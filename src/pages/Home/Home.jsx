import React, { Suspense, useEffect, useState } from "react";
import Banner from "./Banner";
import MarathonsSections from "./MarathonsSections";
import { useLoaderData } from "react-router";
import UpcomingMarathons from "../UpcomingEvents/UpcomingMarathons";
import Reviews from "./Reviews";
import CountUpSection from "./CountUpSection";
import RunningBenefits from "./RunningBenefits";
import UpcomingMarathon from "./UpcomingMarathon";

const Home = () => {
  const upcomingApi = fetch("upcoming.json").then((res) => res.json());
  // console.log("upcoming", upcomingApi);

  const data = useLoaderData();
  const [marathonsData, setMarathonsData] = useState(data?.data || []);
  const [textimonials, setTextimonials] = useState([]);

  useEffect(() => {
    fetch("revew.json")
      .then((res) => res.json())
      .then((data) => {
        setTextimonials(data);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <MarathonsSections marathonsData={marathonsData}></MarathonsSections>
      {/* <Suspense fallback={<h1>data is loading.........</h1>}>
        <UpcomingMarathons
          key={upcomingApi.id}
          upcomingApi={upcomingApi}
        ></UpcomingMarathons>
      </Suspense> */}
      <UpcomingMarathon></UpcomingMarathon>
      <RunningBenefits></RunningBenefits>
      <Reviews textimonials={textimonials}></Reviews>
      <CountUpSection></CountUpSection>
    </div>
  );
};

export default Home;
