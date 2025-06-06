import React, { Suspense, useState } from "react";
import Banner from "./Banner";
import MarathonsSections from "./MarathonsSections";
import { useLoaderData } from "react-router";
import UpcomingMarathons from "../UpcomingEvents/UpcomingMarathons";
// import UpcomingMarathons from "../UpcomingEvents/UpcomingMarathons";

const Home = () => {
  const upcomingApi = fetch("upcoming.json").then((res) => res.json());

  const data = useLoaderData();
  const [marathonsData, setMarathonsData] = useState(data?.data || []);
  // console.log(marathonsData);
  return (
    <div>
      <Banner></Banner>
      <MarathonsSections marathonsData={marathonsData}></MarathonsSections>
      <Suspense fallback={<h1>data is loading.........</h1>}>
        <UpcomingMarathons
          key={upcomingApi.id}
          upcomingApi={upcomingApi}
        ></UpcomingMarathons>
      </Suspense>
    </div>
  );
};

export default Home;
